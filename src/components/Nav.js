import React from "react";
import { Toolbar, Typography } from "@mui/material";
import { Link } from "react-router-dom";



function Nav(props) {
    const {title, sections} = props;
    return(
        <React.Fragment>
            <Toolbar sx={{borderBottom: 1, borderColor: 'divider'}}>
                <Typography
                components="h2"
                variant="h5"
                color="inherit"
                align="center"
                noWrap
                sx={{ flex: 1 }}>
                   <Link to="/" data-testid="navTitle">{title}</Link> 
                </Typography>
            </Toolbar>
            <Toolbar
            component="nav"
            varient="dense"
            sx={{justifyContent: 'space-between', overflowX:'auto'}}>
                {sections.map((section) => (
                    <Link to={section.url}>
                        {section.title}
                    </Link>
                ))}
            </Toolbar>
        </React.Fragment>
    );
}



export default Nav;