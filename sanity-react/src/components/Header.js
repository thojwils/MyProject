import * as React from "react";

// importing material UI components
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";

import { css } from "@emotion/react";
import { Link } from "react-router-dom";

const style = css`
  size="large" edge="start" color="inherit" aria-label="menu" sx= {
     {
      mr: 2;
    }
  }
`;

export default function Header() {
  return (
    <div css={style}>
      <Container maxWidth='lg' />
      <AppBar position='fixed'>
        <Toolbar>
          {/*Inside the IconButton, we 
           can render various icons*/}
          <IconButton>
            <MenuIcon />
          </IconButton>
          {/* The Typography component applies 
           default font weights and sizes */}
          <Typography
            variant='h6'
            component='div'
            sx={{ flexGrow: 1, paddingLeft: 3 }}>
            <Link to={{ pathname: "https://twilson.io/" }} target='_blank'>
              twilson.io
            </Link>
          </Typography>
        </Toolbar>
      </AppBar>
    </div>
  );
}
