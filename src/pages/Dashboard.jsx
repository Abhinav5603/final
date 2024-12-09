import React from 'react';
import { 
  Container, Grid, Paper, Typography, Button, Box, useTheme, IconButton, Divider 
} from '@mui/material';
import { 
  Face, Group, PeopleAlt, Speed, Security, CloudUpload, Analytics, Psychology, 
  Fingerprint, Camera, DataUsage, AccessTime, CheckCircle, Build, Code 
} from '@mui/icons-material';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';

const Dashboard = () => {
  const navigate = useNavigate();
  const theme = useTheme();

  // Data for features, stats, tech, and process steps
  const features = [
    {
      icon: <Face sx={{ fontSize: 80 }} />,
      title: 'Individual Authentication',
      description: 'Secure individual authentication using advanced facial recognition',
      path: '/individual-auth',
      color: '#00bcd4',
    },
    {
      icon: <Group sx={{ fontSize: 80 }} />,
      title: 'Group Authentication',
      description: 'Authenticate multiple people simultaneously in a single image',
      path: '/group-auth',
      color: '#ff4081',
    },
    {
      icon: <PeopleAlt sx={{ fontSize: 80 }} />,
      title: 'Crowd Counting',
      description: 'Advanced crowd analytics and face counting for large gatherings',
      path: '/crowd-count',
      color: '#7c4dff',
    },
  ];

  const stats = [
    { icon: <Speed />, value: '99.9%', label: 'Accuracy Rate', color: '#00bcd4' },
    { icon: <AccessTime />, value: '<0.5s', label: 'Processing Time', color: '#ff4081' },
    { icon: <CheckCircle />, value: '1M+', label: 'Successful Scans', color: '#7c4dff' },
    { icon: <DataUsage />, value: '24/7', label: 'System Uptime', color: '#4caf50' },
  ];

  const techFeatures = [
    {
      icon: <Security />,
      title: 'Advanced Security',
      description: 'Multi-layer security with encryption and secure data handling',
      color: '#2196f3',
    },
    {
      icon: <Psychology />,
      title: 'Deep Learning',
      description: 'State-of-the-art neural networks for accurate face detection',
      color: '#e91e63',
    },
    {
      icon: <Analytics />,
      title: 'Real-time Analytics',
      description: 'Instant processing and analysis of facial data',
      color: '#9c27b0',
    },
    {
      icon: <CloudUpload />,
      title: 'Cloud Integration',
      description: 'Seamless cloud storage and processing capabilities',
      color: '#00bcd4',
    },
  ];

  const processSteps = [
    { icon: <Camera />, title: 'Image Capture', description: 'Capture high-quality images in various formats' },
    { icon: <Fingerprint />, title: 'Feature Extraction', description: 'Extract unique facial features with advanced algorithms' },
    { icon: <Build />, title: 'Processing', description: 'Fast, accurate processing using deep learning models' },
    { icon: <Code />, title: 'Analysis', description: 'Match and analyze against the existing database' },
  ];

  // Motion variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 0.5, staggerChildren: 0.1 } },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { duration: 0.5 } },
  };

  const gradientText = {
    background: `linear-gradient(45deg, ${theme.palette.primary.main}, #ff4081)`,
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
  };

  // Component JSX
  return (
    <Container maxWidth="lg">
      {/* Hero Section */}
      <Box sx={{ minHeight: '90vh', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
        <motion.div initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
          <Typography 
            variant="h1" 
            align="center" 
            sx={{ fontSize: { xs: '2.5rem', md: '4rem' }, fontWeight: 'bold', mb: 4, ...gradientText }}
          >
            Face Recognition Dashboard
          </Typography>
        </motion.div>
        
        <motion.div variants={containerVariants} initial="hidden" animate="visible">
          <Grid container spacing={4} sx={{ mt: 2 }}>
            {features.map((feature, index) => (
              <Grid item xs={12} md={4} key={index}>
                <motion.div variants={itemVariants}>
                  <Paper
                    elevation={0}
                    className="glass-effect card-hover"
                    sx={{
                      p: 4,
                      height: '100%',
                      textAlign: 'center',
                      background: 'rgba(17, 34, 64, 0.6)',
                      border: '1px solid rgba(255, 255, 255, 0.1)',
                      position: 'relative',
                      overflow: 'hidden',
                      cursor: 'pointer',
                      '&:hover::before': { background: `linear-gradient(90deg, ${feature.color}, transparent)` },
                    }}
                    onClick={() => navigate(feature.path)}
                  >
                    <Box sx={{ color: feature.color, mb: 3 }}>{feature.icon}</Box>
                    <Typography 
                      variant="h4" 
                      sx={{ mb: 2, ...gradientText }}
                    >
                      {feature.title}
                    </Typography>
                    <Typography color="textSecondary">{feature.description}</Typography>
                  </Paper>
                </motion.div>
              </Grid>
            ))}
          </Grid>
        </motion.div>
      </Box>

      {/* Add more sections (Stats, Tech, Process, Call-to-action) */}
    </Container>
  );
};

export default Dashboard;
``