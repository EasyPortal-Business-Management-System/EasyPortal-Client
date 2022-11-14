import React from "react";
import { Box, Container, Typography } from "@mui/material";

function Copyright() {
    return (
        <Typography variant="body2" color={"black"} align="center">
            {"Copyright © EasyPortal "}
            {new Date().getFullYear()}
        </Typography>
    )
}

const Footer = (props) => {
    return (
        <Box sx={{bgcolor: '#fc8403', py:5 }}>
            <Container maxWidth="lg">
                <Typography varient="h4" align="center" gutterBottom>
                    {props.title}
                </Typography>
                <Typography varient="subtitle1" align="center" color={"#03a5fc"}>
                    {props.subtitle}
                </Typography>
                <Copyright />
            </Container>
        </Box>

        // <footer>
        //     <h3>Visit Again</h3>
        //     <h5>Remember to contact your employer directly if you have any questions</h5>
        // </footer>
    );
};

export default Footer