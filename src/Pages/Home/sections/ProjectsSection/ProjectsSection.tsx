import { Box, Container, Grid, Typography, styled } from "@mui/material";
import ProjectCard from "../../../../components/ProjectCard/ProjectCard";
import type { ProjectCardProps } from "../../../../components/ProjectCard/ProjectCard";
import AnimationComponent from "../../../../components/AnimationComponent/AnimationComponent";


const ProjectsSection: React.FC = () => {

    const StyledExperience = styled("div")(({ theme }) => ({
        backgroundColor: theme.palette.primary.main,

    }));

    const projects = [
        {
            title: "HopeLink",
            subtitle: "Jun 2025",
            srcImg: "/src/assets/images/hopelink.gif",
            description: "EcoONG é uma aplicação web desenvolvida em React durante o curso de qualificação do programa Joinville Mais TEC, oferecido pelo LAB 365 (SENAI). Criada como projeto de conclusão do Módulo 1 – Desenvolvedor Web Front-End, a plataforma conecta usuários a ONGs ambientais, promovendo conscientização ecológica e simulando doações para causas sustentáveis.",
            technologies: "Technologies: React, JavaScript, HTML, CSS, TypeScript",
            websiteURL: "https://hope-link-one.vercel.app/",
            codeURL: "https://github.com/IgorKoehler15/HopeLink",
        },
        {
            title: "Snake Game",
            subtitle: "Ago 2025",
            srcImg: "/src/assets/images/snake.png",
            description: "Este projeto é um jogo da cobrinha criado com HTML, CSS e JavaScript. O objetivo é guiar a cobra para coletar comidas e marcar pontos. Existem dois tipos de alimentos: a vermelha, que vale 10 pontos, e a especial amarela, que rende 30 pontos e aparece por tempo limitado. O jogo possui botões de start, pause e restart, além de um sistema de pontuação com recorde local. É uma versão moderna e responsiva do clássico.",
            technologies: "Technologies: JavaScript, HTML, CSS",
            websiteURL: "https://snake-game-black-three.vercel.app/",
            codeURL: "https://github.com/IgorKoehler15/snakeGame",
        },
    ]

    return (
        <StyledExperience>
            <Container maxWidth="lg">
                <Box id="projects" pt={5} pb={3}>
                    <Typography variant="h2" textAlign="center" color="primary.contrastText">Projects</Typography>
                </Box>
                <Grid container spacing={5} pb={3}>
                    {projects.map((project: ProjectCardProps, index: number) => (
                        <Grid item md={6} key={index}>
                            <AnimationComponent moveDirection={index % 2 == 0 ? "right" : "left"}>
                                <ProjectCard
                                    title={project.title}
                                    subtitle={project.subtitle}
                                    srcImg={project.srcImg}
                                    description={project.description}
                                    technologies={project.technologies}
                                    websiteURL={project.websiteURL}
                                    codeURL={project.codeURL}
                                />
                            </AnimationComponent>
                        </Grid>
                    ))}
                </Grid>
            </Container>
        </StyledExperience>
    )
}

export default ProjectsSection