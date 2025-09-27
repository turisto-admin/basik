import {
  Body,
  Container,
  Head,
  Html,
  Img,
  Link,
  Preview,
  Section,
  Text,
} from "@react-email/components";

interface ContactEmailReceivedProps {
  fullName: string;
  email: string;
}

export const ContactEmailReceivedTemplate = ({
  fullName,
  email,
}: ContactEmailReceivedProps) => (
  <Html>
    <Head />
    <Preview>Gracias por contactarnos, {fullName}.</Preview>
    <Body style={main}>
      <Container style={container}>
        {/* Encabezado */}
        <Section style={header}>
          <Text style={title}>Basik</Text>
        </Section>

        {/* Contenido principal */}
        <Section style={content}>
          <Text style={greeting}>Hola {fullName},</Text>

          <Text style={paragraph}>
            Gracias por contactarnos. Hemos recibido su solicitud y uno de
            nuestros agentes se pondrá en contacto con usted en breve.
          </Text>

          <Text style={paragraph}>
            Mientras tanto, si tiene alguna pregunta adicional, no dude en
            responder a este correo.
          </Text>

          <Text style={paragraph}>¡Que tenga un excelente día!</Text>

          <Text style={contactInfo}>Su dirección de contacto: {email}</Text>
        </Section>

        {/* Pie de página */}
        <Section style={footer}>
          <Text style={footerText}>
            Basik.pro · Caracas, Venezuela
            <br />
            <Link href="https://basik.pro" style={footerLink}>
              www.basik.pro
            </Link>
          </Text>
        </Section>
      </Container>
    </Body>
  </Html>
);

// Estilos
const main = {
  backgroundColor: "#edeceb",
  fontFamily:
    '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif',
  padding: "40px 0",
};

const title = {
  color: "#ff2a00",
  fontSize: "24px",
  fontWeight: "800",
};

const container = {
  maxWidth: "600px",
  margin: "0 auto",
  backgroundColor: "#ffffff",
  borderRadius: "4px",
  boxShadow: "0 2px 8px rgba(0, 0, 0, 0.1)",
};

const header = {
  padding: "20px 30px",
  borderBottom: "2px solid #ff2a00",
};

const content = {
  padding: "30px",
};

const greeting = {
  fontSize: "18px",
  fontWeight: "600",
  color: "#333333",
  marginBottom: "20px",
};

const paragraph = {
  fontSize: "16px",
  lineHeight: "1.5",
  color: "#333333",
  margin: "0 0 15px 0",
};

const contactInfo = {
  fontSize: "14px",
  color: "#666666",
  backgroundColor: "#f9f9f9",
  padding: "12px",
  borderRadius: "4px",
  marginTop: "20px",
};

const footer = {
  padding: "20px 30px",
  borderTop: "1px solid #eeeeee",
  backgroundColor: "#f7f7f7",
};

const footerText = {
  fontSize: "12px",
  color: "#666666",
  textAlign: "center" as const,
  lineHeight: "1.5",
};

const footerLink = {
  color: "#ff2a00",
  textDecoration: "none",
};

ContactEmailReceivedTemplate.PreviewProps = {
  fullName: "Alan Turing",
  email: "alan@turing.com",
} as ContactEmailReceivedProps;

export default ContactEmailReceivedTemplate;
