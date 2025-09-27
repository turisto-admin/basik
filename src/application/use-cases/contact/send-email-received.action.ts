'use server';
import {Resend} from 'resend'
import ContactEmailReceivedTemplate from '@/presentations/components/emails/contact/email-received.template';

interface EmailContact {
    fullName: string;
    email: string;
}

export const SendEmailReceivedContact = async(contact: EmailContact) => {
    const resend = new Resend(process.env.API_KEY_RESEND)
    
    try {
        const {data, error} = await resend.emails.send({
            from: process.env.EMAIL_FROM!,
            to: [contact.email], 
            subject: `Solicitud recibida: ${contact.email}`,
            react: ContactEmailReceivedTemplate({
                fullName: contact.fullName,
                email: contact.email,
            })
        })

       if (error) {
            console.error('Error al enviar email:', error);
            throw new Error('Failed to send email');
        }
        return {
            success: true,
            data: data.id
        }
    } catch (error) {
        console.error('Error en SendEmailContact:', error);
        throw error;
    }
}