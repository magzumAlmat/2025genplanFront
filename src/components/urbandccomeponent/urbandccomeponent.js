// components/UrbanDesignCodeComponent.js
'use client';

import React, { useState } from 'react';
import { YMaps, Map, Placemark, Polyline, Polygon } from '@pbe/react-yandex-maps';
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
  Paper,
  IconButton,
  Fade,
  TextField,
} from '@mui/material';
import { styled } from '@mui/material/styles';
import { PlayArrow, Stop, Delete } from '@mui/icons-material';

const designCode = {
  bench: { color: '#4CAF50', size: 'medium', material: 'wood', icon: 'https://img.icons8.com/ios-filled/50/bench.png' },
  sidewalk: { color: '#B0BEC5', width: 2, material: 'concrete' },
  trashcan: { color: '#F44336', size: 'small', icon: 'https://img.icons8.com/ios-filled/50/trash.png' },
  road: { color: '#212121', width: 5, material: 'asphalt' },
  district: { color: '#2196F3', fillOpacity: 0.3, strokeWidth: 2 }, // Новый тип для района
};

const urbanTypes = [
  { id: 1, name: 'bench', label: 'Скамейка' },
  { id: 2, name: 'sidewalk', label: 'Тротуар' },
  { id: 3, name: 'trashcan', label: 'Урна' },
  { id: 4, name: 'road', label: 'Дорога' },
  { id: 5, name: 'district', label: 'Район' }, // Добавляем район
];

const center = [43.238566, 76.899828]; // Центр карты (Алматы)

// Стилизованные компоненты
const ToolPaper = styled(Paper)(({ theme }) => ({
  padding: theme.spacing(2),
  borderRadius: '16px',
  boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)',
  background: 'linear-gradient(135deg, #ffffff, #f5f7fa)',
}));

const ActionButton = styled(IconButton)(({ theme, active }) => ({
  backgroundColor: active ? theme.palette.primary.main : theme.palette.grey[200],
  color: active ? '#fff' : theme.palette.grey[800],
  transition: 'all 0.3s ease',
  '&:hover': {
    backgroundColor: active ? theme.palette.primary.dark : theme.palette.grey[300],
    transform: 'scale(1.1)',
  },
}));

const calculateDistance = (coord1, coord2) => {
  const R = 6371e3;
  const lat1 = (coord1[0] * Math.PI) / 180;
  const lat2 = (coord2[0] * Math.PI) / 180;
  const deltaLat = ((coord2[0] - coord1[0]) * Math.PI) / 180;
  const deltaLon = ((coord2[1] - coord1[1]) * Math.PI) / 180;

  const a =
    Math.sin(deltaLat / 2) * Math.sin(deltaLat / 2) +
    Math.cos(lat1) * Math.cos(lat2) * Math.sin(deltaLon / 2) * Math.sin(deltaLon / 2);
  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
  return R * c;
};

const calculateLineLength = (coordinates) => {
  let totalLength = 0;
  for (let i = 0; i < coordinates.length - 1; i++) {
    totalLength += calculateDistance(coordinates[i], coordinates[i + 1]);
  }
  return totalLength.toFixed(2);
};

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

const calculatePolygonCentroid = (coordinates) => {
  let xSum = 0;
  let ySum = 0;
  coordinates.forEach((coord) => {
    xSum += coord[0];
    ySum += coord[1];
  });
  return [xSum / coordinates.length, ySum / coordinates.length];
};

export default function UrbanDesignCodeComponent() {
  const [urbanElements, setUrbanElements] = useState([]);
  const [selectedUrbanType, setSelectedUrbanType] = useState('');
  const [isDrawing, setIsDrawing] = useState(false);
  const [tempCoords, setTempCoords] = useState([]);
  const [mapInstance, setMapInstance] = useState(null);
  const [isActionStarted, setIsActionStarted] = useState(false);
  const [districtName, setDistrictName] = useState(''); // Название района

  const handleMapClick = (e) => {
    const coords = e.get('coords');
    if (selectedUrbanType && isDrawing) {
      if (selectedUrbanType === 'road' || selectedUrbanType === 'sidewalk') {
        setTempCoords((prev) => [...prev, coords]);
      } else if (selectedUrbanType === 'district') {
        setTempCoords((prev) => [...prev, coords]);
      }
    } else if (selectedUrbanType && !isDrawing && selectedUrbanType !== 'road' && selectedUrbanType !== 'sidewalk' && selectedUrbanType !== 'district') {
      addUrbanElement(coords);
      setIsActionStarted(false);
    }
  };

  const addUrbanElement = (coordinates) => {
    const newElement = {
      id: Date.now(),
      type: selectedUrbanType,
      coordinates,
      designCode: designCode[selectedUrbanType],
    };
    setUrbanElements((prev) => [...prev, newElement]);
  };

  const handleStartDrawing = () => {
    if (selectedUrbanType === 'road' || selectedUrbanType === 'sidewalk' || selectedUrbanType === 'district') {
      setIsDrawing(true);
      setTempCoords([]);
      setIsActionStarted(true);
    }
  };

  const handleEndDrawing = () => {
    if (isDrawing && tempCoords.length >= 2) {
      const newElement = {
        id: Date.now(),
        type: selectedUrbanType,
        coordinates: tempCoords,
        designCode: designCode[selectedUrbanType],
        ...(selectedUrbanType === 'district' ? { name: districtName || 'Без названия' } : { length: calculateLineLength(tempCoords) }),
      };
      setUrbanElements((prev) => [...prev, newElement]);
      setDistrictName(''); // Очищаем поле после завершения
    }
    setIsDrawing(false);
    setTempCoords([]);
    setIsActionStarted(false);
  };

  const handleCancelDrawing = () => {
    setIsDrawing(false);
    setTempCoords([]);
    setIsActionStarted(false);
    setDistrictName('');
  };

  const handleSave = () => {
    const data = JSON.stringify(urbanElements, null, 2);
    console.log('Сохраненные данные:', data);
    setIsActionStarted(false);
  };

  const handleUrbanTypeChange = (e) => {
    setSelectedUrbanType(e.target.value);
    setIsDrawing(false);
    setTempCoords([]);
    setIsActionStarted(true);
    setDistrictName('');
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
              } else if (element.type === 'district') {
                const centroid = calculatePolygonCentroid(element.coordinates);
                return (
                  <React.Fragment key={element.id}>
                    <Polygon
                      geometry={[element.coordinates]} // Первый уровень массива — внешний контур
                      options={{
                        fillColor: designCode[element.type].color,
                        fillOpacity: designCode[element.type].fillOpacity,
                        strokeColor: designCode[element.type].color,
                        strokeWidth: designCode[element.type].strokeWidth,
                        strokeOpacity: 0.8,
                      }}
                    />
                    <Placemark
                      geometry={centroid}
                      properties={{
                        iconContent: element.name,
                      }}
                      options={{
                        preset: 'islands#blueStretchyIcon',
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
            {isDrawing && tempCoords.length > 1 && selectedUrbanType !== 'district' && (
              <Polyline
                geometry={tempCoords}
                options={{
                  strokeColor: designCode[selectedUrbanType].color,
                  strokeWidth: designCode[selectedUrbanType].width,
                  strokeOpacity: 0.5,
                }}
              />
            )}
            {isDrawing && tempCoords.length > 2 && selectedUrbanType === 'district' && (
              <Polygon
                geometry={[tempCoords]}
                options={{
                  fillColor: designCode[selectedUrbanType].color,
                  fillOpacity: designCode[selectedUrbanType].fillOpacity,
                  strokeColor: designCode[selectedUrbanType].color,
                  strokeWidth: designCode[selectedUrbanType].strokeWidth,
                  strokeOpacity: 0.5,
                }}
              />
            )}
          </Map>
        </YMaps>
      </Box>

      {/* Панель управления */}
      <Box flex={1} display="flex" flexDirection="column" gap={2}>
        <ToolPaper elevation={3}>
          <Typography variant="h6" gutterBottom sx={{ fontWeight: 600, color: '#333' }}>
            Создание городской среды
          </Typography>

          <FormControl fullWidth sx={{ mb: 2 }}>
            <InputLabel sx={{ fontWeight: 500 }}>Выберите элемент</InputLabel>
            <Select
              value={selectedUrbanType}
              onChange={handleUrbanTypeChange}
              label="Выберите элемент"
              sx={{ borderRadius: '12px' }}
              disabled={isActionStarted}
            >
              <MenuItem value="">Выберите тип</MenuItem>
              {urbanTypes.map((type) => (
                <MenuItem key={type.id} value={type.name}>
                  {type.label}
                </MenuItem>
              ))}
            </Select>
          </FormControl>

          {selectedUrbanType && (
            <Fade in={true}>
              <Typography variant="body2" sx={{ color: '#666', mb: 2 }}>
                {selectedUrbanType === 'road' || selectedUrbanType === 'sidewalk'
                  ? 'Нажмите "Старт" и кликайте по карте, затем "Стоп" для завершения линии'
                  : selectedUrbanType === 'district'
                  ? 'Нажмите "Старт" и кликайте по карте для области, затем "Стоп" для завершения'
                  : 'Кликните на карте, чтобы разместить элемент'}
              </Typography>
            </Fade>
          )}

          {(selectedUrbanType === 'road' || selectedUrbanType === 'sidewalk' || selectedUrbanType === 'district') && (
            <Box display="flex" gap={2} justifyContent="center" mb={2}>
              <ActionButton
                active={isDrawing}
                onClick={handleStartDrawing}
                disabled={isDrawing}
                title="Начать рисование"
              >
                <PlayArrow />
              </ActionButton>
              <ActionButton
                active={!isDrawing && tempCoords.length >= (selectedUrbanType === 'district' ? 3 : 2)}
                onClick={handleEndDrawing}
                disabled={!isDrawing || tempCoords.length < (selectedUrbanType === 'district' ? 3 : 2)}
                title="Завершить"
              >
                <Stop />
              </ActionButton>
              <ActionButton
                onClick={handleCancelDrawing}
                disabled={!isDrawing}
                title="Отменить"
              >
                <Delete />
              </ActionButton>
            </Box>
          )}

          {selectedUrbanType === 'district' && (
            <TextField
              label="Название района"
              value={districtName}
              onChange={(e) => setDistrictName(e.target.value)}
              fullWidth
              sx={{ mb: 2, borderRadius: '12px' }}
              disabled={!isDrawing}
            />
          )}
        </ToolPaper>

        {urbanElements.length > 0 && (
          <ToolPaper elevation={3}>
            <Typography variant="h6" gutterBottom sx={{ fontWeight: 600, color: '#333' }}>
              Добавленные элементы
            </Typography>
            <List sx={{ maxHeight: '300px', overflowY: 'auto' }}>
              {urbanElements.map((el) => (
                <ListItem key={el.id} sx={{ borderBottom: '1px solid #eee' }}>
                  <ListItemText
                    primary={
                      <Typography sx={{ fontWeight: 500 }}>
                        {urbanTypes.find((t) => t.name === el.type)?.label}
                        {el.name ? `: ${el.name}` : ''}
                      </Typography>
                    }
                    secondary={
                      <Typography variant="body2" color="textSecondary">
                        {Array.isArray(el.coordinates[0])
                          ? `Фигура: ${el.coordinates.length} точек${el.length ? ` | ${el.length} м` : ''}`
                          : `Точка: [${el.coordinates[0].toFixed(4)}, ${el.coordinates[1].toFixed(4)}]`}
                      </Typography>
                    }
                  />
                </ListItem>
              ))}
            </List>
          </ToolPaper>
        )}

        <Button
          variant="contained"
          color="primary"
          onClick={handleSave}
          sx={{ borderRadius: '12px', padding: '10px 20px', fontWeight: 600 }}
        >
          Сохранить проект
        </Button>
      </Box>
    </Box>
  );
}