import { NextResponse } from 'next/server'
import Mailjet from 'node-mailjet'

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
    body: `secret=6LcVbb8qAAAAAFzWOtoOfnzHq7lLV6aOHc-TJSd5&response=${token}`,
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
      return NextResponse.json(
        { error: 'Validation reCAPTCHA échouée' },
        { status: 400 }
      )
    }
    
    // Email à l'administrateur
    const adminEmail = await mailjet.post('send', { version: 'v3.1' }).request({
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
    const userEmail = await mailjet.post('send', { version: 'v3.1' }).request({
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
  } catch (error) {
    console.error('Erreur lors de l\'envoi du message:', error)
    return NextResponse.json(
      { error: 'Erreur lors de l\'envoi du message' },
      { status: 500 }
    )
  }
}