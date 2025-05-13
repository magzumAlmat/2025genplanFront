'use client'
import React from 'react';
import dynamic from 'next/dynamic'; // 1. Импортируйте dynamic
import { Container, Typography } from '@mui/material';

// 2. Динамически импортируйте ваш компонент карты с отключением SSR
const UrbanDesignCodeComponentWithNoSSR = dynamic(
  () => import('../../components/urban2/index'), // Убедитесь, что это правильный путь к вашему компоненту YandexMapInteractiveFurniture
  {
    ssr: false, // Отключаем серверный рендеринг для этого компонента
    loading: () => <p>Загрузка карты...</p> // Можете добавить индикатор загрузки
  }
);

export default function UrbanDesignCode() {
  return (
    <Container maxWidth="lg" style={{ padding: '20px' }}>
      <Typography variant="h4" gutterBottom>
        Управление элементами DesignCode
      </Typography>
      {/* 3. Используйте динамически импортированный компонент */}
      <UrbanDesignCodeComponentWithNoSSR apiKey={'b83b032d-0418-41de-bbaa-b028ca3fdb9b'} />
    </Container>
  );
}