import {
  Body,
  Container,
  Head,
  Html,
  Link,
  Preview,
  Section,
  Text,
  Row,
  Column,
  Img,
} from "@react-email/components";

interface ContactEmailFormProps {
  fullName: string;
  email: string;
  phone: string;
  revenue: string;
  description: string;
}

export const ContactEmailTemplate = ({
  fullName,
  email,
  phone,
  revenue,
  description,
}: ContactEmailFormProps) => (
  <Html>
    <Head />
    <Body style={main}>
      <Preview>
        El cliente: {fullName} ({email}), Necesitas soluciones para su negocio!
      </Preview>
      <Container style={container}>
        {/* Logo - Asegúrate de usar una URL absoluta */}
        <Text style={title}>
          <strong>Logo</strong>
        </Text>
        <Img
          src={"https://www.basik.pro/logos/B ONDEANDO NARANJA.svg"}
          width="150"
          height="auto"
          alt="Basik Logo"
          style={logo}
        />

        <Text style={title}>
          <strong>{fullName}</strong> necesita soluciones para su negocio
        </Text>

        <Section style={section}>
          <Row>
            <Column>
              <Text style={heading}>Información del cliente:</Text>

              <Text style={label}>Nombre completo:</Text>
              <Text style={value}>{fullName}</Text>

              <Text style={label}>Correo electrónico:</Text>
              <Text style={value}>{email}</Text>

              <Text style={label}>Teléfono:</Text>
              <Text style={value}>{phone}</Text>

              <Text style={label}>Ingresos del negocio:</Text>
              <Text style={value}>{revenue}</Text>
            </Column>
          </Row>

          <Row style={rowSpacing}>
            <Column>
              <Text style={heading}>Descripción del proyecto:</Text>
              <Text style={descriptionText}>{description}</Text>
            </Column>
          </Row>
        </Section>

        <Text style={footer}>
          Basik.pro · Caracas, Venezuela
          <br />
          <Link href="https://basik.pro" style={footerLink}>
            www.basik.pro
          </Link>
        </Text>
      </Container>
    </Body>
  </Html>
);

const main = {
  backgroundColor: "#f9f9f9",
  color: "#333333",
  fontFamily:
    '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif',
  padding: "20px 0",
};

const container = {
  maxWidth: "600px",
  margin: "0 auto",
  padding: "20px",
  backgroundColor: "#ffffff",
  borderRadius: "8px",
  boxShadow: "0 2px 10px rgba(0,0,0,0.1)",
};

const title = {
  fontSize: "22px",
  fontWeight: "bold",
  color: "#333333",
  textAlign: "center" as const,
  marginBottom: "30px",
  lineHeight: 1.4,
};

const section = {
  padding: "25px",
  border: "1px solid #eaeaea",
  borderRadius: "5px",
  backgroundColor: "#fdfdfd",
};

const heading = {
  fontSize: "16px",
  fontWeight: "bold",
  color: "#333333",
  marginBottom: "15px",
  borderBottom: "1px solid #eeeeee",
  paddingBottom: "8px",
};

const label = {
  fontSize: "14px",
  color: "#666666",
  margin: "8px 0 4px 0",
};

const value = {
  fontSize: "15px",
  color: "#333333",
  margin: "0 0 12px 0",
  paddingLeft: "10px",
};

const descriptionText = {
  fontSize: "14px",
  color: "#444444",
  lineHeight: 1.5,
  backgroundColor: "#f8f8f8",
  padding: "12px",
  borderRadius: "4px",
  margin: "8px 0",
};

const rowSpacing = {
  margin: "20px 0",
};

const footer = {
  fontSize: "12px",
  color: "#999999",
  textAlign: "center" as const,
  marginTop: "30px",
  lineHeight: 1.5,
};

const logo = {
  width: "150px",
  height: "150px",
};

const footerLink = {
  color: "#999999",
  textDecoration: "none",
};

ContactEmailTemplate.PreviewProps = {
  fullName: "Alan Turing",
  email: "alan@turing.com",
  phone: "584121234567",
  revenue: "Entre $1,000 y $10,000 mensuales",
  description:
    "Estoy buscando desarrollar un sistema innovador para procesamiento de datos que revolucione el campo de la computación.",
} as ContactEmailFormProps;

export default ContactEmailTemplate;
