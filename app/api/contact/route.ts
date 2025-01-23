import { NextResponse } from 'next/server'
import Mailjet from 'node-mailjet'

// Vérification des variables d'environnement
if (!process.env.MAILJET_API_KEY || !process.env.MAILJET_API_SECRET || !process.env.NEXT_PUBLIC_CONTACT_EMAIL || !process.env.RECAPTCHA_SECRET_KEY) {
  console.error('Configuration error: Missing environment variables', {
    MAILJET_API_KEY: !!process.env.MAILJET_API_KEY,
    MAILJET_API_SECRET: !!process.env.MAILJET_API_SECRET,
    NEXT_PUBLIC_CONTACT_EMAIL: !!process.env.NEXT_PUBLIC_CONTACT_EMAIL,
    RECAPTCHA_SECRET_KEY: !!process.env.RECAPTCHA_SECRET_KEY
  })
}

// Create Mailjet client
const mailjet = new Mailjet({
  apiKey: process.env.MAILJET_API_KEY || '',
  apiSecret: process.env.MAILJET_API_SECRET || ''
})

async function verifyRecaptcha(token: string) {
  const response = await fetch('https://www.google.com/recaptcha/api/siteverify', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
    },
    body: `secret=${process.env.RECAPTCHA_SECRET_KEY}&response=${token}`,
  })

  const data = await response.json()
  return data.success
}

export async function POST(request: Request) {
  try {
    const body = await request.json()
    const { firstName, lastName, email, phone, company, message, recaptchaToken } = body

    // Vérification du reCAPTCHA
    const isRecaptchaValid = await verifyRecaptcha(recaptchaToken)
    if (!isRecaptchaValid) {
      console.error('reCAPTCHA validation failed')
      return NextResponse.json(
        { error: 'Validation reCAPTCHA échouée' },
        { status: 400 }
      )
    }

    // Validation des champs requis
    if (!firstName || !lastName || !email || !message) {
      console.error('Validation error: Missing required fields', { firstName, lastName, email, message })
      return NextResponse.json(
        { error: 'Tous les champs requis doivent être remplis' },
        { status: 400 }
      )
    }

    // Validation de l'email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(email)) {
      console.error('Validation error: Invalid email format', { email })
      return NextResponse.json(
        { error: 'Format d\'email invalide' },
        { status: 400 }
      )
    }
    
    try {
      // Email à l'administrateur
      await mailjet
        .post('send', { version: 'v3.1' })
        .request({
          Messages: [
            {
              From: {
                Email: process.env.NEXT_PUBLIC_CONTACT_EMAIL,
                Name: "BlinkSaaS Contact"
              },
              To: [
                {
                  Email: process.env.NEXT_PUBLIC_CONTACT_EMAIL,
                  Name: "BlinkSaaS Admin"
                }
              ],
              Subject: `[Contact BlinkSaaS] Nouveau message de ${firstName} ${lastName}`,
              TextPart: `
Nouveau message de contact :

Nom: ${firstName} ${lastName}
Email: ${email}
Téléphone: ${phone || 'Non renseigné'}
Entreprise: ${company || 'Non renseignée'}

Message:
${message}
              `,
              HTMLPart: `
<h3>Nouveau message de contact</h3>
<p><strong>Nom:</strong> ${firstName} ${lastName}</p>
<p><strong>Email:</strong> ${email}</p>
<p><strong>Téléphone:</strong> ${phone || 'Non renseigné'}</p>
<p><strong>Entreprise:</strong> ${company || 'Non renseignée'}</p>
<p><strong>Message:</strong></p>
<p>${message}</p>
              `
            }
          ]
        })

      // Email de confirmation à l'utilisateur
      await mailjet
        .post('send', { version: 'v3.1' })
        .request({
          Messages: [
            {
              From: {
                Email: process.env.NEXT_PUBLIC_CONTACT_EMAIL,
                Name: "BlinkSaaS"
              },
              To: [
                {
                  Email: email,
                  Name: `${firstName} ${lastName}`
                }
              ],
              Subject: "Confirmation de votre message - BlinkSaaS",
              TextPart: `
Bonjour ${firstName},

Nous avons bien reçu votre message et nous vous en remercions.
Notre équipe reviendra vers vous dans les plus brefs délais.

Cordialement,
L'équipe BlinkSaaS
              `,
              HTMLPart: `
<h3>Bonjour ${firstName},</h3>
<p>Nous avons bien reçu votre message et nous vous en remercions.</p>
<p>Notre équipe reviendra vers vous dans les plus brefs délais.</p>
<br>
<p>Cordialement,</p>
<p>L'équipe BlinkSaaS</p>
              `
            }
          ]
        })

      return NextResponse.json({ success: true })
    } catch (mailjetError) {
      console.error('Mailjet error:', mailjetError)
      return NextResponse.json(
        { error: 'Erreur lors de l\'envoi des emails' },
        { status: 500 }
      )
    }
  } catch (error) {
    console.error('General error:', error)
    return NextResponse.json(
      { error: 'Erreur lors du traitement de la requête' },
      { status: 500 }
    )
  }
}