'use server'

import { sendEmail } from '@/actions/notifications/email/send-email-message'

interface Props {
  userEmail: string
  userName: string
  userMessage?: string
}

export const receiveContactMessage = async ({ userEmail, userName, userMessage }: Props) => {

  const rta = await sendEmail({
    email: 'david.hilera@hotmail.com',
    subject: `Mensaje de contacto - ${userName}.`,
    message: `
  <div style="font-family: Arial, sans-serif; background-color: #1a1a1a; color: #f0f0f0; padding: 20px; border-radius: 8px;">
    <h2 style="color: #ffffff;">📬 ¡Nuevo mensaje desde el formulario de contacto!</h2>
    <p><strong style="color: #ffffff;">Información del usuario:</strong></p>
    <ul style="list-style-type: none; padding: 0;">
      <li style="color: #cccccc;"><strong>Nombre:</strong> ${userName}</li>
      <li style="color: #cccccc;"><strong>Email:</strong> ${userEmail}</li>
      <li style="color: #cccccc;"><strong>Mensaje:</strong> ${userMessage || 'No se proporcionó un mensaje'}</li>
    </ul>
    <hr style="border: 1px solid #333;" />
    <p style="color: #888888; font-size: 12px; text-align: center;">
      Este mensaje fue enviado automáticamente desde el formulario de contacto del sitio web.  
      Revisa los datos y responde directamente si es necesario.
    </p>
  </div>
`
  })

  console.log('Respuesta de recibir mensaje', rta)

  return {
    ok: true,
    message: 'Mensaje enviado'
  }
}
