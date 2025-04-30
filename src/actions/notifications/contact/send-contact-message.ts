'use server'

import { sendEmail } from '@/actions/notifications/email/send-email-message'

interface Props {
  userEmail: string
  userName: string
}

export const sendContactMessage = async ({ userEmail, userName }: Props) => {
  const rta = await sendEmail({
    email: userEmail,
    subject: 'Mensaje recibido',
    message: `<div style="font-family: Arial, sans-serif; background-color: #1a1a1a; color: #f0f0f0; padding: 20px; border-radius: 8px;">
    <h2 style="color: #ffffff;">¡Mensaje recibido!</h2>
    <p style="color: #cccccc; font-size: 16px;">
      Hemos recibido tu mensaje, <strong>${userName}</strong>. Pronto nos pondremos en contacto contigo.
    </p>
    <p style="color: #cccccc; font-size: 14px;">
      Si tienes alguna duda adicional, no dudes en escribirnos.
    </p>
    <footer style="margin-top: 20px; font-size: 8px; color: #888888; text-align:center">
       &copy; 2024 David Hilera. Este mensaje fue enviado desde el formulario de contacto de nuestro sitio web.
    </footer>
  </div>`
  })

  console.log('Respuesta de enviar mensaje', rta)


  return {
    ok: true,
    message: 'Mensaje enviado'
  }
}
