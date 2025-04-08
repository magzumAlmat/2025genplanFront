// components/UrbanDesignCodeComponent.js
'use client';

import React, { useState } from 'react';
import { YMaps, Map, Placemark, Polyline } from '@pbe/react-yandex-maps';
import {
  Button,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Typography,
  List,
  ListItem,
  ListItemText,
  Box,
} from '@mui/material';

const designCode = {
  bench: { color: '#4CAF50', size: 'medium', material: 'wood', icon: 'https://img.icons8.com/ios-filled/50/bench.png' },
  sidewalk: { color: '#B0BEC5', width: 2, material: 'concrete' },
  trashcan: { color: '#F44336', size: 'small', icon: 'https://img.icons8.com/ios-filled/50/trash.png' },
  road: { color: '#212121', width: 5, material: 'asphalt' },
};

const urbanTypes = [
  { id: 1, name: 'bench', label: 'Скамейка' },
  { id: 2, name: 'sidewalk', label: 'Тротуар' },
  { id: 3, name: 'trashcan', label: 'Урна' },
  { id: 4, name: 'road', label: 'Дорога' },
];

const center = [43.238566, 76.899828]; // Центр карты (Алматы)

// Функция для вычисления расстояния между двумя точками по формуле Хаверсина (в метрах)
const calculateDistance = (coord1, coord2) => {
  const R = 6371e3; // Радиус Земли в метрах
  const lat1 = (coord1[0] * Math.PI) / 180;
  const lat2 = (coord2[0] * Math.PI) / 180;
  const deltaLat = ((coord2[0] - coord1[0]) * Math.PI) / 180;
  const deltaLon = ((coord2[1] - coord1[1]) * Math.PI) / 180;

  const a =
    Math.sin(deltaLat / 2) * Math.sin(deltaLat / 2) +
    Math.cos(lat1) * Math.cos(lat2) * Math.sin(deltaLon / 2) * Math.sin(deltaLon / 2);
  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
  const distance = R * c; // Расстояние в метрах

  return distance;
};

// Функция для вычисления общей протяженности линии
const calculateLineLength = (coordinates) => {
  let totalLength = 0;
  for (let i = 0; i < coordinates.length - 1; i++) {
    totalLength += calculateDistance(coordinates[i], coordinates[i + 1]);
  }
  return totalLength.toFixed(2); // Округляем до 2 знаков после запятой
};

// Функция для вычисления средней точки линии
const calculateMidPoint = (coordinates) => {
  const totalPoints = coordinates.length;
  const midIndex = Math.floor(totalPoints / 2);
  if (totalPoints % 2 === 0) {
    const mid1 = coordinates[midIndex - 1];
    const mid2 = coordinates[midIndex];
    return [(mid1[0] + mid2[0]) / 2, (mid1[1] + mid2[1]) / 2];
  }
  return coordinates[midIndex];
};

export default function UrbanDesignCodeComponent() {
  const [urbanElements, setUrbanElements] = useState([]); // Список добавленных элементов
  const [selectedUrbanType, setSelectedUrbanType] = useState(''); // Выбранный тип объекта
  const [isDrawing, setIsDrawing] = useState(false); // Режим рисования линий
  const [tempCoords, setTempCoords] = useState([]); // Временные координаты для линий
  const [mapInstance, setMapInstance] = useState(null);

  // Обработчик клика по карте
  const handleMapClick = (e) => {
    const coords = e.get('coords');
    if (selectedUrbanType) {
      if (selectedUrbanType === 'road' || selectedUrbanType === 'sidewalk') {
        if (isDrawing) {
          setTempCoords((prev) => [...prev, coords]);
        }
      } else {
        addUrbanElement(coords);
      }
    }
  };

  // Добавление точечного элемента (скамейка, урна)
  const addUrbanElement = (coordinates) => {
    const newElement = {
      id: Date.now(),
      type: selectedUrbanType,
      coordinates,
      designCode: designCode[selectedUrbanType],
    };
    setUrbanElements((prev) => [...prev, newElement]);
  };

  // Начало рисования линии
  const handleStartDrawing = () => {
    if (selectedUrbanType === 'road' || selectedUrbanType === 'sidewalk') {
      setIsDrawing(true);
      setTempCoords([]);
    }
  };

  // Завершение рисования линии
  const handleEndDrawing = () => {
    if (isDrawing && tempCoords.length >= 2) {
      const newElement = {
        id: Date.now(),
        type: selectedUrbanType,
        coordinates: tempCoords,
        designCode: designCode[selectedUrbanType],
        length: calculateLineLength(tempCoords), // Добавляем протяженность
      };
      setUrbanElements((prev) => [...prev, newElement]);
    }
    setIsDrawing(false);
    setTempCoords([]);
  };

  // Сохранение данных
  const handleSave = () => {
    const data = JSON.stringify(urbanElements, null, 2);
    console.log('Сохраненные данные:', data);
  };

  // Обработчик изменения типа объекта
  const handleUrbanTypeChange = (e) => {
    setSelectedUrbanType(e.target.value);
    setIsDrawing(false);
    setTempCoords([]);
  };

  return (
    <Box display="flex" flexDirection="row" gap={2}>
      {/* Карта */}
      <Box flex={2}>
        <YMaps query={{ load: 'package.full' }}>
          <Map
            state={{ center, zoom: 14 }}
            width="100%"
            height="600px"
            instanceRef={(ref) => setMapInstance(ref)}
            onClick={handleMapClick}
          >
            {urbanElements.map((element) => {
              if (element.type === 'road' || element.type === 'sidewalk') {
                const midPoint = calculateMidPoint(element.coordinates);
                return (
                  <React.Fragment key={element.id}>
                    <Polyline
                      geometry={element.coordinates}
                      options={{
                        strokeColor: designCode[element.type].color,
                        strokeWidth: designCode[element.type].width,
                        strokeOpacity: 0.8,
                      }}
                    />
                    <Placemark
                      geometry={midPoint}
                      properties={{
                        iconContent: `${element.length} м`,
                      }}
                      options={{
                        preset: 'islands#blackStretchyIcon',
                      }}
                    />
                  </React.Fragment>
                );
              } else {
                return (
                  <Placemark
                    key={element.id}
                    geometry={element.coordinates}
                    properties={{
                      iconContent: element.type,
                    }}
                    options={{
                      iconLayout: 'default#image',
                      iconImageHref: designCode[element.type].icon,
                      iconImageSize: [30, 30],
                      iconImageOffset: [-15, -15],
                    }}
                  />
                );
              }
            })}
            {/* Временные точки и линия при рисовании */}
            {isDrawing &&
              tempCoords.map((coord, index) => (
                <Placemark
                  key={`temp-${index}`}
                  geometry={coord}
                  options={{
                    preset: 'islands#grayDotIcon',
                  }}
                />
              ))}
            {isDrawing && tempCoords.length > 1 && (
              <Polyline
                geometry={tempCoords}
                options={{
                  strokeColor: designCode[selectedUrbanType].color,
                  strokeWidth: designCode[selectedUrbanType].width,
                  strokeOpacity: 0.5,
                }}
              />
            )}
          </Map>
        </YMaps>
      </Box>

      {/* Панель управления */}
      <Box flex={1} display="flex" flexDirection="column" gap={2}>
        <Typography variant="h6">Добавление элементов</Typography>

        <FormControl fullWidth>
          <InputLabel>Тип объекта</InputLabel>
          <Select value={selectedUrbanType} onChange={handleUrbanTypeChange} label="Тип объекта">
            <MenuItem value="">Выберите тип</MenuItem>
            {urbanTypes.map((type) => (
              <MenuItem key={type.id} value={type.name}>
                {type.label}
              </MenuItem>
            ))}
          </Select>
        </FormControl>

        {selectedUrbanType && (
          <Typography variant="body2">
            {selectedUrbanType === 'road' || selectedUrbanType === 'sidewalk'
              ? 'Используйте кнопки "Начало отрезка" и "Конец отрезка" для рисования'
              : 'Кликните на карте, чтобы добавить объект'}
          </Typography>
        )}

        {(selectedUrbanType === 'road' || selectedUrbanType === 'sidewalk') && (
          <Box display="flex" gap={2}>
            <Button
              variant="outlined"
              color="primary"
              onClick={handleStartDrawing}
              disabled={isDrawing}
            >
              Начало отрезка
            </Button>
            <Button
              variant="outlined"
              color="secondary"
              onClick={handleEndDrawing}
              disabled={!isDrawing || tempCoords.length < 2}
            >
              Конец отрезка
            </Button>
          </Box>
        )}

        {/* Список добавленных элементов с протяженностью */}
        {urbanElements.length > 0 && (
          <Box>
            <Typography variant="h6">Добавленные элементы:</Typography>
            <List>
              {urbanElements.map((el) => (
                <ListItem key={el.id}>
                  <ListItemText
                    primary={urbanTypes.find((t) => t.name === el.type)?.label}
                    secondary={
                      Array.isArray(el.coordinates[0])
                        ? `Линия: ${el.coordinates.map((c) => `[${c[0]}, ${c[1]}]`).join(' -> ')} | Протяженность: ${el.length} м`
                        : `Точка: [${el.coordinates[0]}, ${el.coordinates[1]}]`
                    }
                  />
                </ListItem>
              ))}
            </List>
          </Box>
        )}

        <Button variant="contained" color="primary" onClick={handleSave}>
          Сохранить
        </Button>
      </Box>
    </Box>
  );
}