import React from "react";
import { Toolbar, Typography, Link } from "@mui/material";


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
                    {title}
                </Typography>
            </Toolbar>
            <Toolbar
            component="nav"
            varient="dense"
            sx={{justifyContent: 'space-between', overflowX:'auto'}}>
                {sections.map((section) => (
                    <Link key={section.title} to={section.url}>
                        {section.title}
                    </Link>
                ))}
            </Toolbar>
        </React.Fragment>
    );
}



export default Nav;