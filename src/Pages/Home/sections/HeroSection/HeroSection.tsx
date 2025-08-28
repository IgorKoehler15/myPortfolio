import { Box, Container, Grid, Typography, styled } from "@mui/material"
import { AnimatedBackground } from "../../../../components/AnimatedBackground/AnimatedBackground"
import Typewriter from "../../../../components/Typewriter/Typewriter"
import Avatar from "../../../../assets/images/avatar.jpg"
import DownloadIcon from '@mui/icons-material/Download';
import EmailIcon from '@mui/icons-material/Email';
import GitHubIcon from '@mui/icons-material/GitHub'; 
import StyledButton from "../../../../components/StyledButton/StyledButton";
import CV from "../../../../assets/pdfs/curriculo_igorkoehler.pdf"

const HeroSection: React.FC = () => {

    const StyledImg = styled("img")(({ theme }) => ({
        width: "80%",
        border: `1px solid ${theme.palette.primary.contrastText}`,
        borderRadius: "50%",
        position: "relative"
    }));

    const StyledHero = styled("div")(({ theme }) => ({
        backgroundColor: theme.palette.primary.main,
        width: "100%",
        [theme.breakpoints.up('xs')]: {
            display: "block",
            padding: "20px",
            paddingTop: "100px",
            paddingBottom: "40px",
        },
        [theme.breakpoints.up('md')]: {
            display: "flex",
            alignItems: "center",
            paddingTop: "100px",
            height: "100vh"
        },
    }));

    const handleDownload = () => {
        const link = document.createElement('a');
        link.href = CV;
        link.download = 'IgorKoehler-CV.pdf';
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    };

    const handleEmail = () => {
        const emailAddress = 'igorkoehler15@gmail.com';
        const subject = 'Contato através do Portfólio';
        const body = 'Olá Igor, acabei de visitar seu portfólio e gostaria de conversar com você!';
        const mailtoLink = `mailto:${emailAddress}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
        window.open(mailtoLink);
    };

    const handleGithub = () => {
        window.open("https://github.com/IgorKoehler15", "_blank"); 
    };

    return (
        <StyledHero>
            <Container maxWidth="lg">
                <Grid container spacing={2}>
                    <Grid item xs={12} md={5}>
                        <Box position="relative" pb={3}>
                            <Box width={"150%"} position="absolute" top={-100} right={0}>
                                <AnimatedBackground />
                            </Box>
                            <Box textAlign="center">
                                <StyledImg src={Avatar} />
                            </Box>
                        </Box>
                    </Grid>
                    <Grid item xs={12} md={7}>
                        <Typography color="primary.contrastText" variant="h1" pb={2} textAlign="center">
                            Igor Koehler
                        </Typography>
                        <Typewriter text="Information Systems Student" delay={120} variant="h2" color="primary.contrastText" />
                        <Box mt={3}>
                            <Grid container spacing={3} display="flex" justifyContent="center">
                                <Grid item xs={10} md={5}>
                                    <StyledButton onClick={handleDownload}>
                                        <DownloadIcon />
                                        <Typography>
                                            Download CV
                                        </Typography>
                                    </StyledButton>
                                </Grid>
                                <Grid item xs={10} md={5}>
                                    <StyledButton onClick={handleEmail}>
                                        <EmailIcon />
                                        <Typography>
                                            Contact me
                                        </Typography>
                                    </StyledButton>
                                </Grid>
                                <Grid item xs={10} md={5}>
                                    <StyledButton onClick={handleGithub}>
                                        <GitHubIcon /> 
                                        <Typography>
                                            GitHub
                                        </Typography>
                                    </StyledButton>
                                </Grid>
                            </Grid>
                        </Box>
                    </Grid>
                </Grid>
            </Container>
        </StyledHero>
    )
}

export default HeroSection
