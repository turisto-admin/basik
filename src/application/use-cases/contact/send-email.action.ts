'use server';
import {Resend} from 'resend'
import ContactEmailTemplate from '@/presentations/components/emails/contact/email-contact.template'


interface EmailContact {
    fullName: string;
    email: string;
    phone: string;
    revenue: string;
    description: string;
    
}

export const SendEmailContact = async(contact: EmailContact) => {
    const resend = new Resend(process.env.API_KEY_RESEND)
    
    try {
        const {data, error} = await resend.emails.send({
            from: process.env.EMAIL_FROM!,
            to: [process.env.EMAIL_TO!], 
            subject: `Solicitud de infomación - Cliente: ${contact.email}`,
            react: ContactEmailTemplate({
                fullName: contact.fullName,
                email: contact.email,
                phone: contact.phone,
                revenue: contact.revenue,
                description: contact.description
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