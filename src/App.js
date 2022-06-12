import React, { useState } from 'react';
import './style.css';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';
import Container from '@mui/material/Container';
import GlobalStyles from '@mui/material/GlobalStyles';

function HeaderBar() {
  return (
    <React.Fragment>
      <GlobalStyles
        styles={{ ul: { margin: 0, padding: 0, listStyle: 'none' } }}
      />
      <Toolbar sx={{ flexWrap: 'wrap' }}>
        <Typography variant="h6" color="inherit" noWrap sx={{ flexGrow: 1 }}>
          STOCK STOCK
        </Typography>
        <nav>
          <Link
            variant="button"
            color="text.primary"
            href="#"
            sx={{ my: 1, mx: 1.5 }}
          >
            Description
          </Link>
          <Link
            variant="button"
            color="text.primary"
            href="#"
            sx={{ my: 1, mx: 1.5 }}
          >
            Support
          </Link>
        </nav>
      </Toolbar>
    </React.Fragment>
  );
}

function Contents() {
  return <div>main</div>;
}

export default function App() {
  return (
    <>
      <Container>
        <HeaderBar></HeaderBar>
        <Contents />
      </Container>
    </>
  );
}
