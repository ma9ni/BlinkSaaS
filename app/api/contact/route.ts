"use client"

import { NextResponse } from 'next/server'
import emailjs from '@emailjs/browser'

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
      const templateParams = {
        from_name: `${firstName} ${lastName}`,
        from_email: email,
        phone: phone || 'Non renseigné',
        company: company || 'Non renseignée',
        message: message,
        recaptcha_token: recaptchaToken
      }

      await emailjs.send(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!,
        templateParams,
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY
      )

      return NextResponse.json({ success: true })
    } catch (emailError) {
      console.error('EmailJS error:', emailError)
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