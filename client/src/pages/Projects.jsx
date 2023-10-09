import { Box, Paper, IconButton, Typography } from "@mui/material";
import { PageStyle } from "../style/PageStyles";
import LinkIcon from '@mui/icons-material/Link';
import RefryImage from '../assets/refry.png';
import MosaicImage from '../assets/mosaic.jpg';
import VacBaseImage from '../assets/vacbase.png';
import AironImage from '../assets/airon.png';
import RacketImage from '../assets/racket.png';

const styles = {
    root: {
      fontFamily: 'Montserrat',
      fontWeight: 'light',
      display: 'flex',
      flexDirection: 'column',
      padding: '10px',
      width: '275px',
      color: 'white',
      backgroundColor: 'black',
      borderRadius: '10px',
      transition: 'background-color 0.25s ease-in-out, color 0.25s ease-in-out',
      '&:hover': {
          color: 'black',
          backgroundColor: 'lightGray',
      },
    },
    thumbnail: {
      width: '200px',
      height: '200px',
      borderRadius: '50%',
      border: '2px solid',
      borderColor: 'black',
      marginBottom: '10px',
    },
    title: {
        fontWeight: 'inherit',
        fontFamily: 'inherit',
    },
    name: {
      marginBottom: '10px',
    },
    iconContainer: {
      display: 'flex',
      justifyContent: 'flex-start',
      width: '100%',
      marginLeft: '-7px',
      color: 'inherit',
    },
    iconButton: {
      color: 'inherit',
    },
    icon: {
      color: 'inherit',
      fontSize: 20,
    },
};

export default function Projects() {
    const softwareProjects = [
        {
          title: 'AIRON Fitness',
          description: 'AI-powered personal trainer.',
          link: 'https://github.com/d-x-s/airon-fitness',
          projectImage: AironImage,
          techStack: 'React.js, Node.js, Express.js'
        },
        {
          title: 'x86 Compiler',
          description: 'Fun functional programming.',
          link: 'https://github.com/d-x-s/x86-compiler',
          projectImage: RacketImage,
          techStack: 'Racket, x86'
        },
        {
          title: 'MOSAIC',
          description: 'Recursive image generator.',
          link: 'https://github.com/d-x-s/photo-mosaic-generator/tree/main',
          projectImage: MosaicImage,
          techStack: 'C++'
        },
        {
            title: 'VACBASE',
            description: 'COVID management database.',
            link: 'https://github.com/d-x-s/vacbase',
            projectImage: VacBaseImage,
            techStack: 'SQL, Java'
        },
        {
            title: 'REFRY',
            description: 'Food delivery alternative.',
            link: 'https://github.com/d-x-s/REFRY',
            projectImage: RefryImage,
            techStack: 'React.js'
        },
      ];

      function ProjectCard({
        title, description, link, liveDemo, projectImage, techStack,
      }) {
        return (
          <Paper sx={styles.root}>
            <Box style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <img 
                src={projectImage} 
                alt={title} 
                style={styles.thumbnail} 
              />
            </Box>
      
            <Typography variant="h6" style={styles.title}>
              {title}
            </Typography>
      
            <Typography variant="h7" style={styles.description}>
              {description}
            </Typography>
      
            <Typography variant="h7" style={styles.techStack}>
              {techStack}
            </Typography>
      
            <div style={styles.iconContainer}>
              <IconButton
                color="primary"
                component="a"
                href={link}
                target="_blank"
                rel="noopener noreferrer"
                style={styles.iconButton}
              >
                <LinkIcon style={styles.icon} />
              </IconButton>
            </div>
          </Paper>
        );
      }
    
    return (
        <Box sx ={PageStyle}>
          <Box sx={{
            width: '90vw', 
            flexWrap: 'wrap', 
            paddingTop: '45px', 
            paddingRight: '5%', 
            paddingLeft: '5%', 
            paddingBottom: '5%', 
            display: 'flex', 
            gap: '2vw', 
            justifyContent: 'center',
            maxHeight: '2000px',
            backgroundColor: 'black',
          }}
        >
            {
                softwareProjects.map((project) => (
                <ProjectCard
                    key={project.title}
                    title={project.title}
                    description={project.description}
                    link={project.link}
                    liveDemo={project.liveDemo}
                    projectImage={project.projectImage}
                    techStack={project.techStack}
                />
                ))
            }
            </Box>
        </Box>
    )
}