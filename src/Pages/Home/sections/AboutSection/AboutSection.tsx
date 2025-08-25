import { Box, Card, Container, Grid, Typography, styled } from "@mui/material"
import WorkspacePremiumIcon from '@mui/icons-material/WorkspacePremium';
import SchoolIcon from '@mui/icons-material/School';
import AnimationComponent from "../../../../components/AnimationComponent/AnimationComponent.tsx";

const AboutSection: React.FC = () => {

    const StyledCard = styled(Card)(({ theme }) => ({
        padding: "10px 10px",
        textAlign: "center",
        marginBottom: "10px",
        '&:hover': {
            backgroundColor: theme.palette.secondary.light
        }
    }));

    const skillsSet = [
    "HTML",
    "JavaScript",
    "CSS",
    "Typescript",
    "React",
    "Git",
    "GitHub",
    "PostgreSQL",
    "Vite",
    "Java"
];

    return (
        <>
            <Container maxWidth="lg">
                <Box id="about" pt={5} mb={3}>
                    <Typography variant="h2" textAlign="center" >Sobre mim...</Typography>
                </Box>
                <Grid container spacing={2} display="flex" justifyContent="center" pb={3}>
                    <Grid item xs={9} md={2.5}>
                        <AnimationComponent moveDirection="right">
                            <StyledCard variant="outlined">
                                <WorkspacePremiumIcon />
                                <Typography textAlign="center" fontWeight={600}>Experiência</Typography>
                                <Typography textAlign="center">1+ ano</Typography>
                                <Typography textAlign="center">Projetista Elétrico</Typography>
                            </StyledCard>
                        </AnimationComponent>
                    </Grid>
                    <Grid item xs={9} md={2.5}>
                        <AnimationComponent moveDirection="left">
                            <StyledCard variant="outlined">
                                <SchoolIcon />
                                <Typography textAlign="center" fontWeight={600}>Educação</Typography>
                                <Typography textAlign="center">Bacharel em andamento</Typography>
                                <Typography textAlign="center">Sistemas da Informação</Typography>
                            </StyledCard>
                        </AnimationComponent>

                    </Grid>
                </Grid>
                <Box pb={1}>
                    <Typography>
                        Sou apaixonado por tecnologia e por transformar ideias em soluções práticas. Iniciei minha trajetória acadêmica em Engenharia Elétrica, área que me proporcionou uma base sólida de raciocínio lógico, disciplina e capacidade de resolver problemas de forma estruturada. No entanto, ao longo do caminho, descobri que minha verdadeira vocação estava na tecnologia da informação. Por isso, decidi migrar para o curso de Sistemas da Informação, onde venho aprofundando meus conhecimentos em desenvolvimento web, programação e criação de soluções digitais. Meu objetivo é unir essa bagagem analítica da engenharia com as ferramentas e linguagens da computação para desenvolver projetos criativos, funcionais e que façam a diferença.
                    </Typography>
                </Box>
                <hr />
                <Box id="skills" pt={1} mb={3}>
                    <Typography variant="h3" textAlign="center" fontWeight={300}>Skills</Typography>
                </Box>
                <Box mb={5}>
                    <Grid container spacing={3} justifyContent="center">
                        {skillsSet.map((skill, index) => (
                            <Grid item key={index} xs={5} sm={4} md={2} lg={2}>
                                <StyledCard variant="outlined">
                                    {skill}
                                </StyledCard>
                            </Grid>
                        ))}
                    </Grid>
                </Box>
            </Container>
        </>
    )
}

export default AboutSection