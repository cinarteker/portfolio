import { Box, Typography, IconButton, } from "@mui/material"
import { PageStyle } from "../style/PageStyles"
import TypewriterComponent from "typewriter-effect"
import GitHubIcon from '@mui/icons-material/GitHub'
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import EmailIcon from '@mui/icons-material/Email';

export default function About() {
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
                    fontSize: '1.5rem',
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
                            paddingRight: '0.4rem',
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
                                    ' photographer.',
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
                            paddingTop: '10px',
                            fontSize: '0.5rem',
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
                    }}>
                    <IconButton sx={{paddingLeft: 0}}>
                        <GitHubIcon
                            sx={{
                                fontSize: '50px',
                                color: 'white',
                            }} 
                        />
                    </IconButton>
                    <IconButton>
                        <EmailIcon
                            sx={{
                                fontSize: '50px',
                                color: 'white',
                            }} 
                        />
                    </IconButton>
                    <IconButton>
                        <LinkedInIcon
                            sx={{
                                fontSize: '50px',
                                color: 'white',
                            }} 
                        />
                    </IconButton>
                </Box>
            </Box>
        </Box>
    )
}