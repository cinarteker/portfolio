import { Link, Box, Typography } from "@mui/material";
import React, { useState, useEffect } from "react";
import blogEntries from "../data/blog/blogEntries";

const ContainerStyle = {
  backgroundColor: "black",
  paddingBottom: "50px",
  fontFamily: "Montserrat",
  display: "flex",
  flexDirection: "column",
  gap: "20px",
};

const entryStyle = {
  fontFamily: "Montserrat",
  marginLeft: "auto",
  marginRight: "auto",
  width: "40%",
  color: "white",
  display: "flex",
  flexDirection: "column",
  gap: "10px",
  padding: "10px",
  "@media (max-width: 600px)": {
    width: "80%",
  },
  "& img": {
    marginLeft: "auto",
    marginRight: "auto",
    maxWidth: "100%",
    maxHeight: "100%",
  },
};

function NewlineText({ text }) {
  return text.split("\n").map((str, index) => (
    // eslint-disable-next-line react/no-array-index-key
    <span key={index}>
      {str}
      {index !== text.split("\n").length - 1 && <br />}
    </span>
  ));
}

function BlogEntry({ entry }) {
  return (
    <Box sx={entryStyle}>
      <Typography
        fontFamily="Montserrat"
        fontWeight="Light"
        variant="h5"
        gutterBottom
      >
        {entry.title}
      </Typography>
      <img src={entry.image} alt={entry.title} />
      <Typography
        fontFamily="Montserrat"
        fontWeight="Light"
        variant="subtitle1"
        gutterBottom
      >
        {entry.description}
      </Typography>
      <Typography fontFamily="Montserrat" fontWeight="Light" variant="body1">
        <NewlineText text={entry.content} />
      </Typography>
      <Box
        sx={{
          display: "flex",
          gap: "20px",
        }}
      >
        {entry.links &&
          entry.links.map((link) => (
            <Link
              key={link.id}
              sx={{
                color: "white",
              }}
              target="_blank"
              href={link.url}
            >
              {link.displayText}
            </Link>
          ))}
      </Box>
    </Box>
  );
}

export default function Blog() {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    setLoaded(true);
  }, []);

  return (
    <Box
      sx={{
        opacity: loaded ? 1 : 0,
        transition: "opacity 0.5s ease-in-out",
        height: "100%",
      }}
    >
      <Box>
        <Box sx={ContainerStyle}>
          {blogEntries.map((entry) => (
            <BlogEntry key={entry.id} entry={entry} />
          ))}
        </Box>
      </Box>
    </Box>
  );
}
