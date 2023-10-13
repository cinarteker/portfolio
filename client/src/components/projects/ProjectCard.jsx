import LinkIcon from "@mui/icons-material/Link";
import { Box, Paper, IconButton, Typography } from "@mui/material";

function ProjectCard({ title, description, link, projectImage, techStack }) {
  return (
    <Paper
      sx={{
        fontFamily: "Montserrat",
        fontWeight: "light",
        display: "flex",
        flexDirection: "column",
        padding: "10px",
        width: "275px",
        color: "white",
        backgroundColor: "black",
        borderRadius: "10px",
        transition:
          "background-color 0.25s ease-in-out, color 0.25s ease-in-out",
        "&:hover": {
          color: "black",
          backgroundColor: "lightGray",
        },
      }}
    >
      <Box
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <img
          src={projectImage}
          alt={title}
          style={{
            width: "200px",
            height: "200px",
            borderRadius: "50%",
            border: "2px solid",
            borderColor: "black",
            marginBottom: "10px",
          }}
        />
      </Box>

      <Typography
        variant="h6"
        style={{
          fontWeight: "inherit",
          fontFamily: "inherit",
        }}
      >
        {title}
      </Typography>

      <Typography
        variant="h7"
        style={{
          marginBottom: "10px",
        }}
      >
        {description}
      </Typography>

      <Typography variant="h7">{techStack}</Typography>

      <div
        style={{
          display: "flex",
          justifyContent: "flex-start",
          width: "100%",
          marginLeft: "-7px",
          color: "inherit",
        }}
      >
        <IconButton
          color="primary"
          component="a"
          href={link}
          target="_blank"
          rel="noopener noreferrer"
          style={{
            color: "inherit",
          }}
        >
          <LinkIcon
            style={{
              color: "inherit",
              fontSize: 20,
            }}
          />
        </IconButton>
      </div>
    </Paper>
  );
}

export default ProjectCard;
