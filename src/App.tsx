import React from 'react';
import {Container, Stack, Box, Typography, Button} from '@mui/material';
import { RippleBadge } from './app/MaterialTheme/styled';


function App() {
  return <Container sx={{ background: "orange"}}>
    <Stack flexDirection={"column"}>
      <Box sx={{my: 4}}>
        <Typography variant="h4" component={"h4"}>
          Hammaga salomlar
        </Typography>
      </Box>
     <Box>
        <RippleBadge badgeContent={5}>
           <Button variant="contained">Contained</Button>
        </RippleBadge>
     </Box>
    </Stack>
  </Container> 
}

export default App;
