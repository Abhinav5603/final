import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { ThemeProvider } from '@mui/material';
import { AppBar, Toolbar, Typography, Button, Container } from '@mui/material';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import theme from './theme';

// Components
import Navbar from './components/Navbar';
import Login from './pages/Login';
import RegisterMain from './pages/Register'; // Renamed Register to RegisterMain to avoid conflicts
import AboutUs from './pages/AboutUs';
import Dashboard from './pages/Dashboard';
import GroupAuth from './pages/GroupAuth';
import CrowdCount from './pages/CrowdCount';
import CnnApp from './CNNcomponents/CnnApp';
import RegisterSecondary from './ps2components/components/Register';
import Recognize from './ps2components/components/Recognize';
import Ps2App3 from './ps2components/components/Ps2App3';
import App2 from './P3/components/App2';  // Importing the CrowdCounting component

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Router>
        <AppBar position="static">
          <Toolbar>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              Face Recognition App
            </Typography>
            <Button color="inherit" component={Link} to="/register-main">
              Main Register
            </Button>
            <Button color="inherit" component={Link} to="/register-secondary">
              Secondary Register
            </Button>
            <Button color="inherit" component={Link} to="/recognize">
              Recognize
            </Button>
          </Toolbar>
        </AppBar>

        <Container sx={{ mt: 4 }}>
          <Routes>
            <Route path="/register-main" element={<RegisterMain />} />
            <Route path="/register-secondary" element={<RegisterSecondary />} />
            <Route path="/recognize" element={<Recognize />} />
            <Route path="/" element={<Dashboard />} />
            <Route path="/login" element={<Login />} />
            <Route path="/about" element={<AboutUs />} />
            <Route path="/individual-auth" element={<CnnApp />} />
            <Route path="/group-auth/*" element={<Ps2App3 />} />
            <Route path="/crowd-count" element={<App2 />} />  {/* CrowdCount route */}
          </Routes>
        </Container>

        <Navbar />
        <ToastContainer
          position="bottom-right"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="dark"
        />
      </Router>
    </ThemeProvider>
  );
}

export default App;
