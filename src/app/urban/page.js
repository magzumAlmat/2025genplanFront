// pages/UrbanDesignCode.js
'use client'
import React from 'react';
import UrbanDesignCodeComponent from '../../components/urbandccomeponent/urbandccomeponent'
import { Container, Typography } from '@mui/material';

export default function UrbanDesignCode() {
  return (
    <Container maxWidth="lg" style={{ padding: '20px' }}>
      <Typography variant="h4" gutterBottom>
        Управление элементами DesignCode
      </Typography>
      <UrbanDesignCodeComponent />
    </Container>
  );
}