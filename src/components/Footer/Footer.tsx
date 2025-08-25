import { Box, Container, IconButton, Typography } from "@mui/material"
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import EmailIcon from '@mui/icons-material/Email';

const Footer: React.FC = () => {

    return (
        <>
            <Box pt={2} pb={2}>
  <Container maxWidth="sm">
    <Box display="flex" alignItems="center" justifyContent="space-around" pb={1}>
      <IconButton onClick={() => window.open("https://github.com/IgorKoehler15")}>
        <GitHubIcon />
      </IconButton>
      <IconButton onClick={() => window.open("https://www.linkedin.com/in/igor-henrique-koehler-88b1a4266/")}>
        <LinkedInIcon />
      </IconButton>
      <IconButton
        onClick={() => {
          const emailAddress = "igorkoehler15@gmail.com";
          const subject = "Contato através do Portfólio";
          const body = "Olá Igor, acabei de visitar seu portfólio e gostaria de conversar com você!";

          const mailtoLink = `mailto:${emailAddress}?subject=${encodeURIComponent(
            subject
          )}&body=${encodeURIComponent(body)}`;
          window.open(mailtoLink);
        }}
      >
        <EmailIcon />
      </IconButton>
    </Box>
    <Typography textAlign="center">
      © 2025 Igor Koehler - All rights reserved
    </Typography>
  </Container>
</Box>

        </>
    )
}

export default Footer