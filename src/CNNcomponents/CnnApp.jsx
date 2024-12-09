import React from 'react';
import { Container, Box } from '@mui/material';
import CapturePhoto from './CapturePhoto';
import FaceRecognition from './FaceRecognition';

const CnnApp = () => {
  return (
    <Container>
      <Box sx={{ my: 4 }}>
        <>
          <CapturePhoto />
          <FaceRecognition />
        </>
      </Box>
    </Container>
  );
};

export default CnnApp;
