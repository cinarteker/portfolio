import { Box, Paper, IconButton, Typography } from "@mui/material";
import LinkIcon from "@mui/icons-material/Link";
import React, { useState, useEffect } from "react";
import PageStyle from "../style/PageStyles";
import softwareProjects from "../data/projects/projects";

const styles = {
  root: {
    fontFamily: "Montserrat",
    fontWeight: "light",
    display: "flex",
    flexDirection: "column",
    padding: "10px",
    width: "275px",
    color: "white",
    backgroundColor: "black",
    borderRadius: "10px",
    transition: "background-color 0.25s ease-in-out, color 0.25s ease-in-out",
    "&:hover": {
      color: "black",
      backgroundColor: "lightGray",
    },
  },
  thumbnail: {
    width: "200px",
    height: "200px",
    borderRadius: "50%",
    border: "2px solid",
    borderColor: "black",
    marginBottom: "10px",
  },
  title: {
    fontWeight: "inherit",
    fontFamily: "inherit",
  },
  name: {
    marginBottom: "10px",
  },
  iconContainer: {
    display: "flex",
    justifyContent: "flex-start",
    width: "100%",
    marginLeft: "-7px",
    color: "inherit",
  },
  iconButton: {
    color: "inherit",
  },
  icon: {
    color: "inherit",
    fontSize: 20,
  },
};

function ProjectCard({ title, description, link, projectImage, techStack }) {
  return (
    <Paper sx={styles.root}>
      <Box
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <img src={projectImage} alt={title} style={styles.thumbnail} />
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

export default function Projects() {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    setLoaded(true);
  }, []);

  return (
    <Box
      sx={{
        height: "100%",
        opacity: loaded ? 1 : 0,
        transition: "opacity 0.5s ease-in-out",
      }}
    >
      <Box sx={PageStyle}>
        <Box
          sx={{
            width: "90vw",
            flexWrap: "wrap",
            paddingTop: "45px",
            paddingRight: "5%",
            paddingLeft: "5%",
            paddingBottom: "5%",
            display: "flex",
            gap: "2vw",
            justifyContent: "center",
            maxHeight: "2000px",
            backgroundColor: "black",
          }}
        >
          {softwareProjects.map((project) => (
            <ProjectCard
              key={project.title}
              title={project.title}
              description={project.description}
              link={project.link}
              liveDemo={project.liveDemo}
              projectImage={project.projectImage}
              techStack={project.techStack}
            />
          ))}
        </Box>
      </Box>
    </Box>
  );
}
