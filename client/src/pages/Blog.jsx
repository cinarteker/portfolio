import { Link, Box, Typography } from "@mui/material";
import React, { useState, useEffect } from "react";
import PageStyle from "../style/PageStyles";
import blogEntries from "../data/blog/blogEntries";

const ContainerStyle = {
  backgroundColor: "black",
  paddingTop: "5",
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
        <Link
          sx={{
            color: "white",
          }}
          target="_blank"
          href="https://drive.google.com/file/d/1NtzO9vq_J-gW_s0an9hCtSbERftMsEV9/view?usp=sharing"
        >
          English Translation
        </Link>
        <Link
          sx={{
            color: "white",
          }}
          target="_blank"
          href="https://asia.ubc.ca/news/2022-japanese-language-program-writing-contest/"
        >
          Journal Article
        </Link>
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
      <Box sx={PageStyle}>
        <Box sx={ContainerStyle}>
          {blogEntries.map((entry) => (
            <BlogEntry key={entry.id} entry={entry} />
          ))}
        </Box>
      </Box>
    </Box>
  );
}
