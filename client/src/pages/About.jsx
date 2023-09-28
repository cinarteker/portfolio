import { Box, Typography, IconButton, } from "@mui/material"
import { PageStyle } from "../style/PageStyles"
import TypewriterComponent from "typewriter-effect"
import GitHubIcon from '@mui/icons-material/GitHub'
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import CheckIcon from '@mui/icons-material/Check';
import EmailIcon from '@mui/icons-material/Email';
import React, { useState } from 'react';

export default function About() {
    const [isCopied, setIsCopied] = useState(false);
    const [fadeIn, setFadeIn] = useState(false);

    const copyEmailToClipboard = () => {
        const el = document.createElement('textarea');
        el.value = 'davissong01@gmail.com';  // replace with your email
        document.body.appendChild(el);
        el.select();
        document.execCommand('copy');
        document.body.removeChild(el);
    
        setIsCopied(true);
        setFadeIn(true);
    
        setTimeout(() => {
          setIsCopied(false);
          setFadeIn(false);
        }, 3000);  // Reset after 2 seconds
    };

    return (
        <Box sx={PageStyle}>
            {/* Hero Section */}
            <Box sx={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'flex-start',
                padding: '100px',
                color: 'white',

                fontSize: '5rem',
                fontWeight: '300',
                fontFamily: 'Montserrat',

                '@media (max-width: 600px)': {
                    fontSize: '2rem',
                    padding: '50px',
                },
            }}
            >
                <Typography
                    sx={{
                        fontSize: 'inherit',
                        fontWeight: 'inherit',
                        fontFamily: 'inherit',
                    }}>
                    Hi, I'm Davis.
                </Typography>
                <Box sx={{
                    display: 'flex',
                    fontSize: 'inherit',
                }}
                >
                    <Typography sx={{
                        fontSize: 'inherit',
                        fontWeight: 'inherit',
                        fontFamily: 'inherit',
                        paddingRight: '1.3rem',
                        '@media (max-width: 600px)': {
                            paddingRight: '0.5rem',
                        },
                    }}>
                        I'm a
                    </Typography>
                    
                    <Typography
                        style={{
                            fontSize: 'inherit',
                            fontWeight: 'inherit',
                            fontFamily: 'inherit',
                        }}>
                        <TypewriterComponent
                                options={{
                                    strings: [
                                    ' developer.',
                                    ' designer.',
                                    ],
                                    autoStart: true,
                                    loop: true,
                                    delay: 100,
                                    deleteSpeed: 50,
                                }}
                            />
                    </Typography>
                </Box>

                {/* Description Section */}
                <Box
                    sx={{
                        fontSize: '1rem',
                        fontWeight: 'inherit',
                        fontFamily: 'inherit',
                        width: '80vw',
                        paddingTop: '20px',
                        '@media (max-width: 600px)': {
                            paddingTop: '20px',
                            width: '70vw',
                            fontSize: '0.75rem',
                        },
                    }}
                >
                    <Typography
                        sx={{
                            fontSize: 'inherit',
                            fontWeight: 'inherit',
                            fontFamily: 'inherit',
                        }}
                    >
                        Currently, I work at Tegus developing software used by equity research analysts to build bespoke financial models.
                    </Typography>
                    <br />
                    <Typography
                        sx={{
                            fontSize: 'inherit',
                            fontWeight: 'inherit',
                            fontFamily: 'inherit',
                        }}
                    >
                        I'm also a 4th year Computer Science Student at The University of British Columbia.
                    </Typography>
                </Box>

                {/* {Links Selection} */}
                <Box
                    sx={{
                        display: 'flex',
                        paddingTop: '20px',
                        '@media (max-width: 600px)': {
                            paddingTop: '20px',
                        },
                        
                    }}>
                    
                    <IconButton 
                        sx={{paddingLeft: 0}}
                        href='https://github.com/d-x-s'
                        target="_blank"
                        rel="noopener noreferrer"    
                    >
                        <GitHubIcon
                            sx={{
                                fontSize: '50px',
                                color: 'white',
                                '&:hover': {
                                    color: '#C3B1E1',
                                    transition: 'background-color 2.0s ease-in-out',
                                  },
                                '@media (max-width: 600px)': {
                                    fontSize: '25px',
                                },
                            }} 
                        />
                    </IconButton>
                    { isCopied ? (
                        <IconButton>
                        <CheckIcon 
                            sx={{
                                opacity: fadeIn ? 1 : 0,
                                transition: 'opacity 0.5s',
                                fontSize: '50px',
                                color: 'green',
                                '@media (max-width: 600px)': {
                                    fontSize: '25px',
                                },
                            }} 
                        />
                    </IconButton>
                    ) : (
                        <IconButton onClick={copyEmailToClipboard}>
                            <EmailIcon
                                sx={{
                                    opacity: fadeIn ? 0 : 1,
                                    transition: 'opacity 0.5s',
                                    fontSize: '50px',
                                    color: 'white',
                                    '&:hover': {
                                        color: '#FF6961',
                                        transition: 'background-color 2.0s ease-in-out',
                                    },
                                    '@media (max-width: 600px)': {
                                        fontSize: '25px',
                                    },
                                }} 
                            />
                        </IconButton>
                    )}

                    <IconButton
                            href='https://www.linkedin.com/in/davissong/'
                            target="_blank"
                            rel="noopener noreferrer"    
                    >
                        <LinkedInIcon
                            sx={{
                                fontSize: '50px',
                                color: 'white',
                                '&:hover': {
                                    color: '#A7C7E7',
                                    transition: 'background-color 2.0s ease-in-out',
                                  },
                                '@media (max-width: 600px)': {
                                    fontSize: '25px',
                                },
                            }} 
                        />
                    </IconButton>
                </Box>
            </Box>
        </Box>
    )
}