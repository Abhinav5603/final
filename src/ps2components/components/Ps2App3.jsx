import { Routes, Route, Link } from 'react-router-dom';
import { AppBar, Toolbar, Typography, Button, Container } from '@mui/material';
import Register from './Register';
import Recognize from './Recognize';

function Ps2App3() {
  return (
    <>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Face Recognition App
          </Typography>
          <Button color="inherit" component={Link} to="/register-secondary">
            Register
          </Button>
          <Button color="inherit" component={Link} to="/recognize">
            Recognize
          </Button>
        </Toolbar>
      </AppBar>

      <Container sx={{ mt: 4 }}>
        <Routes>
          <Route path="/register-secondary" element={<Register />} />
          <Route path="/recognize" element={<Recognize />} />
          <Route path="/" element={<Register />} />
        </Routes>
      </Container>
    </>
  );
}

export default Ps2App3;
