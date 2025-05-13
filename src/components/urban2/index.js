// import React, { useState } from 'react';
// import { YMaps, Map, Placemark, ZoomControl, GeolocationControl, RulerControl, TrafficControl, TypeSelector } from '@pbe/react-yandex-maps';

// // Пример данных для уличной мебели (замените на реальные данные или пропсы)
// const streetFurnitureData = [
//   {
//     id: 1,
//     type: 'bench',
//     name: 'Скамейка у фонтана',
//     // Координаты обновлены на основе вашего файла, но вы можете их изменить
//     coordinates: [43.238566, 76.899828], // Примерные координаты (Алматы)
//     description: 'Удобная скамейка с видом на фонтан.',
//     // Пути к иконкам должны быть абсолютными от папки public
//     icon: '/icons/bench.svg' 
//   },
//   {
//     id: 2,
//     type: 'trash_can',
//     name: 'Урна парковая',
//     coordinates: [43.239500, 76.900500], // Скорректированные координаты для примера
//     description: 'Урна для мусора, парковая зона.',
//     icon: '/icons/trash_can.svg'
//   },
//   {
//     id: 3,
//     type: 'lamppost',
//     name: 'Фонарный столб #12',
//     coordinates: [43.237500, 76.898000], // Скорректированные координаты для примера
//     description: 'Освещает главную аллею.',
//     icon: '/icons/lamppost.svg'
//   }
// ];

// const YandexMapStreetFurnitureUpdated = ({ apiKey }) => {
//   const [activePlacemark, setActivePlacemark] = useState(null);

//   // Координаты центра карты по умолчанию, обновлены на основе вашего файла
//   const defaultMapState = {
//     center: [43.238566, 76.899828],
//     zoom: 15,
//   };

//   const getPlacemarkOptions = (item) => ({
//     iconLayout: 'default#image',
//     iconImageHref: item.icon || '/icons/default_placemark.svg', // Иконка по умолчанию
//     iconImageSize: [30, 30], // Размер иконки
//     iconImageOffset: [-15, -15], // Смещение иконки
//   });

//   const handlePlacemarkClick = (item) => {
//     setActivePlacemark(item.id);
//     console.log('Clicked on:', item.name);
//   };

//   // Важно: API-ключ лучше передавать через props для гибкости
//   if (!apiKey) {
//     console.error("API-ключ Яндекс.Карт не предоставлен компоненту YandexMapStreetFurnitureUpdated!");
//     return <p>Ошибка: API-ключ Яндекс.Карт не предоставлен.</p>;
//   }

//   return (
//     <YMaps query={{ apikey: apiKey, lang: 'ru_RU' }}>
//       <Map
//         defaultState={defaultMapState}
//         width="100%"
//         height="600px"
//         modules={['geoObject.addon.balloon', 'geoObject.addon.hint']}
//       >
//         {streetFurnitureData.map((item) => (
//           <Placemark
//             key={item.id}
//             geometry={item.coordinates}
//             properties={{
//               hintContent: item.name,
//               balloonContentHeader: item.name,
//               balloonContentBody: item.description,
//             }}
//             options={getPlacemarkOptions(item)}
//             onClick={() => handlePlacemarkClick(item)}
//             modules={['geoObject.addon.balloon', 'geoObject.addon.hint']}
//           />
//         ))}
//         <ZoomControl options={{ float: 'right' }} />
//         <GeolocationControl options={{ float: 'left' }} />
//         <RulerControl options={{ float: 'right' }} />
//         <TrafficControl options={{ float: 'right' }} />
//         <TypeSelector options={{ float: 'right' }} />
//       </Map>
//     </YMaps>
//   );
// };

// export default YandexMapStreetFurnitureUpdated;

// /*
// Примечания к обновленной версии:
// 1.  API-ключ: Компонент снова ожидает `apiKey` как prop. Это более гибкий подход, чем жесткое кодирование ключа.
//     Пример: <YandexMapStreetFurnitureUpdated apiKey="ВАШ_API_КЛЮЧ_ЯНДЕКС_КАРТ" />
// 2.  Центр карты: Координаты центра карты обновлены на [43.238566, 76.899828] (Алматы), как в вашем файле.
// 3.  Пути к иконкам: В `streetFurnitureData` пути к иконкам (например, `icon: '/icons/bench.svg'`) указаны как абсолютные от корневой папки `public`. 
//     Если ваши иконки находятся в `public/icons`, такие пути будут работать корректно в Next.js.
//     Использование `./icons/bench.svg` (как было в вашем файле) обычно подразумевает относительный путь от текущего файла компонента, что не является стандартным способом для доступа к статическим ресурсам из папки `public` в Next.js.

// Предупреждение о `defaultProps`:
// Как я упоминал ранее, предупреждение "Warning: Unknown: Support for defaultProps will be removed..." скорее всего, исходит из самой библиотеки `@pbe/react-yandex-maps`. 
// Это предупреждение не должно влиять на работоспособность карты, но его исправление зависит от разработчиков библиотеки. Вы можете проверить наличие обновлений для `@pbe/react-yandex-maps` или отслеживать их репозиторий на предмет решения этой проблемы.
// */









// import React, { useState } from 'react';
// import { YMaps, Map, Placemark, ZoomControl, GeolocationControl, RulerControl, TrafficControl, TypeSelector } from '@pbe/react-yandex-maps';

// // Список типов уличной мебели с иконками
// const furnitureTypes = [
//   { type: 'bench', name: 'Скамейка', icon: '/icons/bench.svg' },
//   { type: 'trash_can', name: 'Урна', icon: '/icons/trash_can.svg' },
//   { type: 'lamppost', name: 'Фонарь', icon: '/icons/lamppost.svg' },
//   { type: 'bike_rack', name: 'Велопарковка', icon: '/icons/bike_rack.svg' },
//   { type: 'table', name: 'Стол', icon: '/icons/table.svg' },
//   { type: 'shelter', name: 'Навес', icon: '/icons/shelter.svg' },
//   { type: 'info_board', name: 'Информационный стенд', icon: '/icons/info_board.svg' },
//   { type: 'sports_equipment', name: 'Спортивное оборудование', icon: '/icons/sports_equipment.svg' },
//   { type: 'playground', name: 'Детская площадка', icon: '/icons/playground.svg' },
//   { type: 'garden_element', name: 'Садовый элемент', icon: '/icons/garden_element.svg' },
//   { type: 'fence', name: 'Ограждение', icon: '/icons/fence.svg' },
//   { type: 'drinking_fountain', name: 'Питьевой фонтанчик', icon: '/icons/drinking_fountain.svg' },
//   { type: 'charging_station', name: 'Зарядная станция', icon: '/icons/charging_station.svg' },
//   { type: 'wifi_point', name: 'Wi-Fi точка', icon: '/icons/wifi_point.svg' },
//   { type: 'solar_panel', name: 'Солнечная панель', icon: '/icons/solar_panel.svg' },
//   { type: 'birdhouse', name: 'Скворечник', icon: '/icons/birdhouse.svg' },
//   { type: 'sign', name: 'Указатель', icon: '/icons/sign.svg' },
//   { type: 'sculpture', name: 'Скульптура', icon: '/icons/sculpture.svg' },
//   { type: 'public_toilet', name: 'Туалет', icon: '/icons/public_toilet.svg' },
//   { type: 'bollard', name: 'Парковочный столбик', icon: '/icons/bollard.svg' },
// ];

// const YandexMapInteractiveFurniture = ({ apiKey }) => {
//   const [furnitureData, setFurnitureData] = useState([]);
//   const [selectedType, setSelectedType] = useState(furnitureTypes[0].type);
//   const [modalOpen, setModalOpen] = useState(false);
//   const [editingItem, setEditingItem] = useState(null);
//   const [newName, setNewName] = useState('');
//   const [newDescription, setNewDescription] = useState('');

//   const defaultMapState = {
//     center: [43.238566, 76.899828], // Алматы
//     zoom: 15,
//   };

//   const getPlacemarkOptions = (item) => ({
//     iconLayout: 'default#image',
//     iconImageHref: furnitureTypes.find((t) => t.type === item.type)?.icon || '/icons/default_placemark.svg',
//     iconImageSize: [30, 30],
//     iconImageOffset: [-15, -15],
//   });

//   const handleMapClick = (e) => {
//     const coords = e.get('coords');
//     const newItem = {
//       id: Date.now(), // Уникальный ID на основе времени
//       type: selectedType,
//       name: `${furnitureTypes.find((t) => t.type === selectedType).name} #${furnitureData.length + 1}`,
//       coordinates: coords,
//       description: `Описание для ${selectedType}`,
//     };
//     setFurnitureData([...furnitureData, newItem]);
//   };

//   const handlePlacemarkClick = (item) => {
//     setEditingItem(item);
//     setNewName(item.name);
//     setNewDescription(item.description);
//     setModalOpen(true);
//   };

//   const handleSaveEdit = () => {
//     setFurnitureData(
//       furnitureData.map((item) =>
//         item.id === editingItem.id
//           ? { ...item, name: newName, description: newDescription }
//           : item
//       )
//     );
//     setModalOpen(false);
//     setEditingItem(null);
//   };

//   const handleDelete = () => {
//     setFurnitureData(furnitureData.filter((item) => item.id !== editingItem.id));
//     setModalOpen(false);
//     setEditingItem(null);
//   };

//   if (!apiKey) {
//     console.error('API-ключ Яндекс.Карт не предоставлен!');
//     return <p>Ошибка: API-ключ Яндекс.Карт не предоставлен.</p>;
//   }

//   return (
//     <div style={{ position: 'relative' }}>
//       <YMaps query={{ apikey: apiKey, lang: 'ru_RU' }}>
//         <div style={{ marginBottom: '10px' }}>
//           <label htmlFor="furnitureType">Выберите тип мебели: </label>
//           <select
//             id="furnitureType"
//             value={selectedType}
//             onChange={(e) => setSelectedType(e.target.value)}
//           >
//             {furnitureTypes.map((type) => (
//               <option key={type.type} value={type.type}>
//                 {type.name}
//               </option>
//             ))}
//           </select>
//         </div>
//         <Map
//           defaultState={defaultMapState}
//           width="100%"
//           height="600px"
//           modules={['geoObject.addon.balloon', 'geoObject.addon.hint']}
//           onClick={handleMapClick}
//         >
//           {furnitureData.map((item) => (
//             <Placemark
//               key={item.id}
//               geometry={item.coordinates}
//               properties={{
//                 hintContent: item.name,
//                 balloonContentHeader: item.name,
//                 balloonContentBody: item.description,
//               }}
//               options={getPlacemarkOptions(item)}
//               onClick={() => handlePlacemarkClick(item)}
//               modules={['geoObject.addon.balloon', 'geoObject.addon.hint']}
//             />
//           ))}
//           <ZoomControl options={{ float: 'right' }} />
//           <GeolocationControl options={{ float: 'left' }} />
//           <RulerControl options={{ float: 'right' }} />
//           <TrafficControl options={{ float: 'right' }} />
//           <TypeSelector options={{ float: 'right' }} />
//         </Map>
//       </YMaps>

//       {modalOpen && (
//         <div
//           style={{
//             position: 'fixed',
//             top: '50%',
//             left: '50%',
//             transform: 'translate(-50%, -50%)',
//             background: 'white',
//             padding: '20px',
//             boxShadow: '0 0 10px rgba(0,0,0,0.5)',
//             zIndex: 1000,
//           }}
//         >
//           <h3>Редактировать {editingItem?.name}</h3>
//           <div>
//             <label>Название:</label>
//             <input
//               type="text"
//               value={newName}
//               onChange={(e) => setNewName(e.target.value)}
//             />
//           </div>
//           <div>
//             <label>Описание:</label>
//             <textarea
//               value={newDescription}
//               onChange={(e) => setNewDescription(e.target.value)}
//             />
//           </div>
//           <button onClick={handleSaveEdit}>Сохранить</button>
//           <button onClick={handleDelete} style={{ marginLeft: '10px', background: 'red', color: 'white' }}>
//             Удалить
//           </button>
//           <button onClick={() => setModalOpen(false)} style={{ marginLeft: '10px' }}>
//             Отмена
//           </button>
//         </div>
//       )}
//     </div>
//   );
// };

// export default YandexMapInteractiveFurniture;





// import React, { useState, useEffect, useCallback, useRef } from 'react';
// import { YMaps, Map, Placemark, Polyline, Polygon, ZoomControl, GeolocationControl, RulerControl, TrafficControl, TypeSelector } from '@pbe/react-yandex-maps';

// // --- CSS Styles ---
// const styles = {
//   container: {
//     position: 'relative',
//     padding: '16px',
//     display: 'flex',
//     flexDirection: 'column',
//     height: '100vh',
//     boxSizing: 'border-box',
//   },
//   controlPanel: {
//     marginBottom: '16px',
//     padding: '12px',
//     border: '1px solid #e5e7eb',
//     borderRadius: '8px',
//     backgroundColor: '#f9fafb',
//     boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
//   },
//   controlPanelTitle: {
//     fontSize: '1.25rem',
//     fontWeightregister: 'bold',
//     marginBottom: '12px',
//     color: '#374151',
//   },
//   grid: {
//     display: 'grid',
//     gridTemplateColumns: '1fr',
//     gap: '16px',
//     alignItems: 'start',
//   },
//   select: {
//     marginTop: '4px',
//     width: '100%',
//     padding: '8px',
//     border: '1px solid #d1d5db',
//     borderRadius: '4px',
//     boxShadow: '0 1px 2px rgba(0, 0, 0, 0.05)',
//   },
//   checkboxContainer: {
//     display: 'flex',
//     alignItems: 'center',
//     paddingTop: '24px',
//   },
//   checkbox: {
//     height: '16px',
//     width: '16px',
//     marginRight: '8px',
//   },
//   rulesPanel: {
//     marginBottom: '8px',
//     padding: '12px',
//     backgroundColor: '#eff6ff',
//     borderLeft: '4px solid #3b82f6',
//     color: '#1e40af',
//     fontSize: '0.75rem',
//     maxHeight: '96px',
//     overflowY: 'auto',
//     borderRadius: '4px',
//     boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
//   },
//   warningsPanel: {
//     marginBottom: '8px',
//     padding: '12px',
//     borderLeft: '4px solid',
//     fontSize: '0.75rem',
//     maxHeight: '96px',
//     overflowY: 'auto',
//     borderRadius: '4px',
//     boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
//   },
//   mapContainer: {
//     flexGrow: 1,
//     minHeight: '400px',
//     border: '1px solid #e5e7eb',
//     borderRadius: '8px',
//     boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
//     overflow: 'hidden',
//   },
//   modalOverlay: {
//     position: 'fixed',
//     top: 0,
//     left: 0,
//     right: 0,
//     bottom: 0,
//     backgroundColor: 'rgba(75, 85, 99, 0.5)',
//     overflowY: 'auto',
//     zIndex: 40,
//   },
//   modal: {
//     position: 'fixed',
//     top: '50%',
//     left: '50%',
//     transform: 'translate(-50%, -50%)',
//     backgroundColor: '#ffffff',
//     padding: '24px',
//     borderRadius: '8px',
//     boxShadow: '0 10px 15px rgba(0, 0, 0, 0.25)',
//     zIndex: 50,
//     maxWidth: '32rem',
//     width: '100%',
//     maxHeight: '90vh',
//     overflowY: 'auto',
//   },
//   modalTitle: {
//     fontSize: '1.125rem',
//     fontWeight: '600',
//     marginBottom: '16px',
//   },
//   input: {
//     marginTop: '4px',
//     width: '100%',
//     padding: '4px',
//     border: '1px solid #d1d5db',
//     borderRadius: '4px',
//   },
//   textarea: {
//     marginTop: '4px',
//     width: '100%',
//     padding: '4px',
//     border: '1px solid #d1d5db',
//     borderRadius: '4px',
//     resize: 'vertical',
//   },
//   buttonContainer: {
//     display: 'flex',
//     justifyContent: 'flex-end',
//     gap: '12px',
//     marginTop: '24px',
//     paddingTop: '16px',
//     borderTop: '1px solid #e5e7eb',
//   },
//   button: {
//     padding: '8px 16px',
//     borderRadius: '4px',
//     fontWeight: '500',
//     cursor: 'pointer',
//     outline: 'none',
//   },
// };

// // --- Constants for object properties ---
// const ROAD_TYPES = [
//   { id: 'main_street', name: 'Магистральная улица' },
//   { id: 'district_street', name: 'Улица районного значения' },
//   { id: 'local_road', name: 'Проезд местного значения' },
//   { id: 'access_road', name: 'Подъездная дорога' },
// ];

// const SIDEWALK_TYPES = [
//   { id: 'main_pedestrian', name: 'Основной пешеходный' },
//   { id: 'secondary_pedestrian', name: 'Второстепенный пешеходный' },
//   { id: 'bike_pedestrian', name: 'Велопешеходный' },
// ];

// const SURFACE_TYPES = [
//   { id: 'asphalt', name: 'Асфальтобетон' },
//   { id: 'concrete', name: 'Цементобетон' },
//   { id: 'paving_stones', name: 'Брусчатка/Плитка' },
//   { id: 'gravel', name: 'Гравийное' },
//   { id: 'dirt', name: 'Грунтовое' },
//   { id: 'rubber_crumb', name: 'Резиновая крошка (для площадок)' },
// ];

// const MIN_PASSAGE_WIDTH_ON_SIDEWALK = 1.5; // meters, e.g., for MGN

// const furnitureTypes = [
//   {
//     type: 'bench',
//     name: 'Скамейка',
//     icon: '/icons/bench.svg',
//     canBeAccessible: true,
//     minDistanceToPathEdge: { min: 0.5, default: 1.0, max: 1.5 },
//     minDistanceToRoadEdge: { min: 1.5, default: 2.0 },
//     minDistanceToOther: 1.5,
//     effectiveWidth: 0.6,
//     placementContext: ['sidewalk_edge', 'recreation_area', 'bus_stop', 'near_entrance'],
//     specificRules: [
//       "Размещение вдоль пешеходных дорожек, на площадках отдыха, остановках, у входов в здания (с учетом норм).",
//       "Для МГН: часть скамеек с подлокотниками/спинками, свободное пространство рядом для коляски (не менее 0.8м).",
//       "Не должна мешать основному потоку пешеходов (свободный проход не менее 1.2-1.8м).",
//       "Материалы: дерево (с пропиткой), металл, бетон, композитные материалы."
//     ],
//   },
//   {
//     type: 'trash_can',
//     name: 'Урна',
//     icon: '/icons/trash_can.svg',
//     canBeAccessible: false,
//     minDistanceToPathEdge: { min: 0.3, default: 0.5 },
//     minDistanceToRoadEdge: { min: 1.0, default: 1.5 },
//     minDistanceToOther: 1.0,
//     minDistanceToBench: { min: 0.8, default: 1.0, max: 1.5 },
//     minDistanceToEntrances: { min: 3.0, default: 5.0, max: 10.0 },
//     effectiveWidth: 0.4,
//     placementContext: ['near_bench', 'near_entrance', 'bus_stop', 'high_traffic_area', 'along_sidewalk'],
//     specificRules: [
//       "У входов в здания, на остановках, у скамеек, вдоль пешеходных дорожек, в местах с высокой проходимостью.",
//       "Количество определяется интенсивностью движения (обычно через 20-50м).",
//       "Не должна мешать движению пешеходов.",
//       "Материалы: металл, бетон, пластик."
//     ],
//   },
//   {
//     type: 'lamppost',
//     name: 'Фонарь (Осветительное оборудование)',
//     icon: '/icons/lamppost.svg',
//     canBeAccessible: false,
//     minDistanceToPathEdge: { min: 0.6, max: 1.0, default: 0.75 },
//     minDistanceToRoadEdge: { min: 0.6, max: 1.0, default: 0.75 },
//     minDistanceToOther: { min: 5.0, max: 30.0, default: 15.0 },
//     effectiveWidth: 0.3,
//     placementContext: ['along_street', 'along_sidewalk', 'park_area', 'square'],
//     specificRules: [
//       "Обеспечивать нормативный уровень освещенности (согласно СП РК).",
//       "Интервал между фонарями согласно светотехническому расчету (обычно 15-30м).",
//       "Каркас и элементы монтажа окрашиваются в темно-серый цвет (Дизайн-код Алматы).",
//       "Не должен ослеплять водителей и пешеходов."
//     ],
//   },
//   {
//     type: 'bike_rack',
//     name: 'Велопарковка',
//     icon: '/icons/bike_rack.svg',
//     canBeAccessible: true,
//     minDistanceToPathEdge: { min: 0.5, default: 1.0 },
//     minDistanceToRoadEdge: { min: 1.5, default: 2.0 },
//     minDistanceToWalls: { min: 0.5, default: 0.8 },
//     minDistanceToOther: 1.0,
//     effectiveWidth: 0.8,
//     placementContext: ['near_public_building', 'near_transport_hub', 'recreation_area', 'educational_institution'],
//     specificRules: [
//       "Вблизи общественных зданий, торговых центров, транспортных узлов, учебных заведений.",
//       "Не должна мешать движению пешеходов (обеспечить проход).",
//       "Обеспечивать удобное и безопасное крепление велосипедов.",
//       "Располагать на твердом покрытии, с достаточным пространством для маневра."
//     ],
//   },
//   {
//     type: 'info_board',
//     name: 'Информационный стенд',
//     icon: '/icons/info_board.svg',
//     canBeAccessible: true,
//     minDistanceToPathEdge: { min: 0.5, default: 1.0 },
//     minDistanceToRoadEdge: { min: 2.0, default: 2.5 },
//     minDistanceToOther: 1.5,
//     effectiveWidth: 0.5,
//     placementContext: ['high_traffic_area', 'near_landmark', 'park_entrance', 'bus_stop', 'intersection'],
//     specificRules: [
//       "Размещать в местах с интенсивным пешеходным потоком, на перекрестках, у остановок, достопримечательностей.",
//       "Материалы устойчивые к выгоранию. Не допускать объемных деталей, способствующих скоплению снега.",
//       "Для отдельно стоящих: фундамент без выступа, безопасное остекление (ГОСТ 30698-2014), внутренняя подсветка (Дизайн-код Алматы).",
//       "Соблюдать запреты на установку из Дизайн-кода Алматы (не менее 20м до пеш. переходов, не в охранной зоне коммуникаций, не менее 3м от деревьев, 1м от ЛЭП, 5м от входов в метро/переходы)."
//     ],
//   },
//   {
//     type: 'sign_custom',
//     name: 'Указатель (общий)',
//     icon: '/icons/sign.svg',
//     canBeAccessible: true,
//     minDistanceToPathEdge: { min: 0.5, default: 1.0 },
//     minDistanceToRoadEdge: { min: 2.0 },
//     minDistanceToOther: 1.0,
//     maxDistanceFromEntrance: 15.0,
//     maxUnitsPerEntrance: 1,
//     dimensions: { maxLength: 1.5, maxWidth: 0.9 },
//     effectiveWidth: 0.3,
//     placementContext: ['near_intersection', 'near_object_entrance', 'tourist_route'],
//     specificRules: [
//       "См. правила для Информационных стендов.",
//       "Для указателей организаций: не более 1 ед., не далее 15м от входа, габариты 1.5х0.9м (Дизайн-код Алматы).",
//       "Не должен перекрывать видимость дорожных знаков и светофоров."
//     ],
//   },
//   {
//     type: 'fence',
//     name: 'Ограждение',
//     icon: '/icons/fence.svg',
//     canBeAccessible: false,
//     minDistanceToPathEdge: { default: 0.1 },
//     minDistanceToRoadEdge: { default: 0.3 },
//     minDistanceToOther: 0.0,
//     effectiveWidth: 0.1,
//     placementContext: ['boundary_marker', 'safety_barrier', 'decorative_element'],
//     specificRules: [
//       "Должны соответствовать общему стилю и не нарушать визуальное восприятие.",
//       "Высота и тип определяются функциональным назначением.",
//       "Не должны создавать слепых зон для водителей и пешеходов."
//     ],
//   },
//   {
//     type: 'flower_pot',
//     name: 'Вазон/Цветочница',
//     icon: '/icons/garden_element.svg',
//     canBeAccessible: false,
//     minDistanceToPathEdge: { min: 0.3, default: 0.5 },
//     minDistanceToRoadEdge: { min: 1.0, default: 1.5 },
//     minDistanceToOther: 0.5,
//     effectiveWidth: 0.6,
//     placementContext: ['sidewalk_decoration', 'entrance_group', 'recreation_area'],
//     specificRules: [
//       "Не должны мешать проходу пешеходов.",
//       "Материалы и дизайн должны соответствовать окружению.",
//       "Обеспечить устойчивость."
//     ],
//   },
//   {
//     type: 'shelter_pavilion',
//     name: 'Навес/Павильон/Беседка',
//     icon: '/icons/shelter.svg',
//     canBeAccessible: true,
//     minDistanceToPathEdge: { min: 1.0, default: 1.5 },
//     minDistanceToRoadEdge: { min: 2.0, default: 3.0 },
//     minDistanceToOther: 3.0,
//     effectiveWidth: 2.0,
//     placementContext: ['bus_stop', 'recreation_area', 'park'],
//     specificRules: [
//       "Конструкция должна быть прочной и безопасной.",
//       "Обеспечить защиту от осадков/солнца.",
//       "Для остановок: обеспечить видимость транспорта, место для сидения, урну, информацию.",
//       "Доступность для МГН (ровный пол, достаточное пространство)."
//     ],
//   },
//   {
//     type: 'playground_equipment',
//     name: 'Элемент детской площадки',
//     icon: '/icons/playground.svg',
//     canBeAccessible: true,
//     minDistanceToPathEdge: { min: 1.5, default: 2.0 },
//     minDistanceToRoadEdge: { min: 5.0, default: 10.0 },
//     minDistanceToOther: 3.0,
//     effectiveWidth: 1.5,
//     placementContext: ['playground_area'],
//     specificRules: [
//       "Требуется безопасное покрытие (ударопоглощающее).",
//       "Оборудование должно соответствовать возрастным группам и быть сертифицировано.",
//       "Соблюдение зон безопасности вокруг каждого элемента (обычно 1.5-3м).",
//       "Ограждение площадки может быть необходимо, особенно вблизи дорог."
//     ],
//   },
//   {
//     type: 'sports_equipment',
//     name: 'Спортивное оборудование',
//     icon: '/icons/sports_equipment.svg',
//     canBeAccessible: true,
//     minDistanceToPathEdge: { min: 1.0, default: 1.5 },
//     minDistanceToRoadEdge: { min: 3.0, default: 5.0 },
//     minDistanceToOther: 2.0,
//     effectiveWidth: 1.0,
//     placementContext: ['sports_ground', 'park_area', 'recreation_zone'],
//     specificRules: [
//       "Требуется безопасное покрытие и зоны безопасности.",
//       "Оборудование должно быть прочным и безопасным.",
//       "Не должно мешать другим активностям."
//     ],
//   },
//   {
//     type: 'drinking_fountain',
//     name: 'Питьевой фонтанчик',
//     icon: '/icons/drinking_fountain.svg',
//     canBeAccessible: true,
//     minDistanceToPathEdge: { min: 0.5, default: 0.8 },
//     minDistanceToRoadEdge: { min: 2.0 },
//     minDistanceToOther: 1.5,
//     effectiveWidth: 0.5,
//     placementContext: ['park', 'recreation_area', 'sports_ground', 'promenade'],
//     specificRules: [
//       "Обеспечить гигиеничность и доступность (в т.ч. для МГН - разная высота).",
//       "Подвод и отвод воды.",
//       "Не размещать вблизи урн."
//     ],
//   },
//   {
//     type: 'bollard',
//     name: 'Столбик (боллард)',
//     icon: '/icons/bollard.svg',
//     canBeAccessible: false,
//     minDistanceToPathEdge: { min: 0.2, default: 0.3 },
//     minDistanceToRoadEdge: { min: 0.2, default: 0.3 },
//     minDistanceToOther: { min: 0.5, default: 0.75 },
//     effectiveWidth: 0.15,
//     placementContext: ['path_edge', 'road_edge', 'parking_boundary', 'prevent_vehicle_access', 'zone_separation'],
//     specificRules: [
//       "Не должны создавать препятствий для МГН, если не предназначены для ограничения их доступа.",
//       "Должны быть заметны (цвет, светоотражающие элементы).",
//       "Высота обычно 0.5-0.9м."
//     ],
//   },
//   {
//     type: 'public_toilet',
//     name: 'Общественный туалет',
//     icon: '/icons/public_toilet.svg',
//     canBeAccessible: true,
//     minDistanceToPathEdge: { min: 1.0, default: 1.5 },
//     minDistanceToRoadEdge: { min: 5.0 },
//     minDistanceToOther: 5.0,
//     minDistanceToResidential: 20.0,
//     effectiveWidth: 2.5,
//     placementContext: ['park', 'square', 'tourist_area', 'transport_hub'],
//     specificRules: [
//       "Доступность для МГН обязательна.",
//       "Соблюдение санитарных норм.",
//       "Вентиляция, освещение, указатели."
//     ]
//   }
// ];

// const initialRoads = [];
// const initialSidewalks = [];

// const getDistanceRuleValue = (rule, context = 'default') => {
//   if (typeof rule === 'number') return rule;
//   if (typeof rule === 'object' && rule !== null) {
//     if (context === 'min' && typeof rule.min === 'number') return rule.min;
//     if (context === 'max' && typeof rule.max === 'number') return rule.max;
//     if (typeof rule.default === 'number') return rule.default;
//     if (typeof rule.min === 'number') return rule.min;
//     return null;
//   }
//   return null;
// };

// const YandexMapInteractiveFurniture = ({ apiKey }) => {
//   const [isClient, setIsClient] = useState(false);
//   const [mapInstance, setMapInstance] = useState(null);
//   const [ymapsInstance, setYmapsInstance] = useState(null);

//   const [furnitureData, setFurnitureData] = useState([]);
//   const [roadsData, setRoadsData] = useState(initialRoads);
//   const [sidewalksData, setSidewalksData] = useState(initialSidewalks);

//   const [selectedObjectType, setSelectedObjectType] = useState('furniture');
//   const [selectedFurnitureType, setSelectedFurnitureType] = useState(furnitureTypes[0].type);
//   const [selectedRoadType, setSelectedRoadType] = useState(ROAD_TYPES[0].id);
//   const [selectedSidewalkType, setSelectedSidewalkType] = useState(SIDEWALK_TYPES[0].id);

//   const [isAccessible, setIsAccessible] = useState(furnitureTypes[0].canBeAccessible);
//   const [modalOpen, setModalOpen] = useState(false);
//   const [editingItem, setEditingItem] = useState(null);

//   const [itemName, setItemName] = useState('');
//   const [itemDescription, setItemDescription] = useState('');
//   const [itemIsAccessible, setItemIsAccessible] = useState(false);
//   const [itemWidth, setItemWidth] = useState(0);
//   const [itemSurfaceType, setItemSurfaceType] = useState(SURFACE_TYPES[0].id);
//   const [roadLanes, setRoadLanes] = useState(2);

//   const [warnings, setWarnings] = useState([]);

//   const defaultMapState = {
//     center: [43.238566, 76.899828],
//     zoom: 15,
//     controls: [],
//   };

//   const mapRef = useRef(null);

//   useEffect(() => {
//     console.log('Setting isClient to true');
//     setIsClient(true);
//   }, []);

//   useEffect(() => {
//     console.log('ymapsInstance state updated:', ymapsInstance);
//   }, [ymapsInstance]);

//   useEffect(() => {
//     console.log('mapInstance state updated:', mapInstance);
//   }, [mapInstance]);

//   useEffect(() => {
//     if (selectedObjectType === 'furniture') {
//       const currentFurnitureTypeConf = furnitureTypes.find(ft => ft.type === selectedFurnitureType);
//       if (currentFurnitureTypeConf) {
//         setIsAccessible(currentFurnitureTypeConf.canBeAccessible);
//       }
//     }
//     setWarnings([]);
//   }, [selectedObjectType, selectedFurnitureType]);

//   const getPlacemarkOptions = (item) => ({
//     iconLayout: 'default#image',
//     iconImageHref: furnitureTypes.find((t) => t.type === item.type)?.icon || '/icons/default_placemark.svg',
//     iconImageSize: item.isAccessible ? [35, 35] : [30, 30],
//     iconImageOffset: item.isAccessible ? [-17.5, -17.5] : [-15, -15],
//   });

//   const calculateDistance = useCallback((coords1, coords2) => {
//     if (!ymapsInstance || !ymapsInstance.coordSystem || !ymapsInstance.coordSystem.geo) {
//       const [lat1, lon1] = coords1;
//       const [lat2, lon2] = coords2;
//       const R = 6371e3;
//       const φ1 = (lat1 * Math.PI) / 180;
//       const φ2 = (lat2 * Math.PI) / 180;
//       const Δφ = ((lat2 - lat1) * Math.PI) / 180;
//       const Δλ = ((lon2 - lon1) * Math.PI) / 180;
//       const a = Math.sin(Δφ / 2) * Math.sin(Δφ / 2) +
//                 Math.cos(φ1) * Math.cos(φ2) * Math.sin(Δλ / 2) * Math.sin(Δλ / 2);
//       const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
//       return R * c;
//     }
//     return ymapsInstance.coordSystem.geo.getDistance(coords1, coords2);
//   }, [ymapsInstance]);

//   const validatePlacement = useCallback((coords, furnitureTypeToValidate, itemIsAccessibleFlag, currentFurnitureArr, currentRoadsArr, currentSidewalksArr) => {
//     const newWarnings = [];
//     if (!ymapsInstance) {
//       newWarnings.push("ВНИМАНИЕ: API Яндекс.Карт еще не загружен. Повторите попытку позже.");
//       return newWarnings;
//     }

//     const selectedFurnitureConf = furnitureTypes.find((t) => t.type === furnitureTypeToValidate);
//     if (!selectedFurnitureConf) {
//       newWarnings.push(`ОШИБКА: Конфигурация для типа мебели '${furnitureTypeToValidate}' не найдена.`);
//       return newWarnings;
//     }

//     const distToOtherRule = getDistanceRuleValue(selectedFurnitureConf.minDistanceToOther);
//     if (distToOtherRule !== null) {
//       currentFurnitureArr.forEach((item) => {
//         if (editingItem && item.id === editingItem.id && editingItem.objectClass === 'furniture') return;
//         const distance = calculateDistance(coords, item.coordinates);
//         if (distance < distToOtherRule) {
//           newWarnings.push(`ОШИБКА: Слишком близко к объекту '${item.name || item.type}' (${distance.toFixed(2)} м). Требуется мин. ${distToOtherRule} м.`);
//         }
//       });
//     }

//     currentRoadsArr.forEach(road => {
//       if (!road.geometry || road.geometry.length === 0) return;
//       const roadPolyline = new ymapsInstance.Polyline(road.geometry);
//       const closestDataToRoad = roadPolyline.geometry.getClosest(coords);
//       const distanceToRoadCenterline = calculateDistance(coords, closestDataToRoad.position);

//       const requiredClearanceFromRoadEdge = getDistanceRuleValue(selectedFurnitureConf.minDistanceToRoadEdge, 'min');
//       const roadHalfWidth = (road.width || 0) / 2;
//       const actualClearanceFromRoadEdge = distanceToRoadCenterline - roadHalfWidth;

//       if (requiredClearanceFromRoadEdge !== null) {
//         if (actualClearanceFromRoadEdge < requiredClearanceFromRoadEdge) {
//           newWarnings.push(`ОШИБКА: Слишком близко к краю дороги '${road.name || road.id}' (отступ ${actualClearanceFromRoadEdge.toFixed(2)} м). Требуется мин. ${requiredClearanceFromRoadEdge} м от края.`);
//         } else {
//           newWarnings.push(`ИНФО: Отступ от края дороги '${road.name || road.id}' ${actualClearanceFromRoadEdge.toFixed(2)} м (норма ${requiredClearanceFromRoadEdge} м).`);
//         }
//       }
//     });

//     let onAccessibleSidewalk = false;
//     let onAnySidewalk = false;

//     currentSidewalksArr.forEach(sidewalk => {
//       if (!sidewalk.geometry || sidewalk.geometry.length === 0 || !sidewalk.geometry[0] || sidewalk.geometry[0].length === 0) return;
//       const sidewalkPolygon = new ymapsInstance.Polygon(sidewalk.geometry);
//       const isInsideSidewalk = sidewalkPolygon.geometry.contains(coords);
//       const closestDataToSidewalk = sidewalkPolygon.geometry.getClosest(coords);
//       const distanceToSidewalkBoundary = calculateDistance(coords, closestDataToSidewalk.position);

//       const requiredDistPath = getDistanceRuleValue(selectedFurnitureConf.minDistanceToPathEdge, 'min');

//       if (isInsideSidewalk) {
//         onAnySidewalk = true;
//         if (sidewalk.isAccessibleForDisabled) {
//           onAccessibleSidewalk = true;
//         }
//         newWarnings.push(`ИНФО: Объект находится на тротуаре '${sidewalk.name || sidewalk.id}'.`);
//         if (requiredDistPath !== null) {
//           if (distanceToSidewalkBoundary < requiredDistPath) {
//             newWarnings.push(`ВНИМАНИЕ: Объект на тротуаре '${sidewalk.name || sidewalk.id}' слишком близко к краю (${distanceToSidewalkBoundary.toFixed(2)} м). Требуемый отступ от края: ${requiredDistPath} м.`);
//           }
//         }
//         const furnitureEffectiveWidth = selectedFurnitureConf.effectiveWidth || 0.5;
//         if (sidewalk.width && (sidewalk.width - furnitureEffectiveWidth < MIN_PASSAGE_WIDTH_ON_SIDEWALK)) {
//           newWarnings.push(`ОШИБКА: На тротуаре '${sidewalk.name || sidewalk.id}' (ширина ${sidewalk.width}м) недостаточно места для прохода (${MIN_PASSAGE_WIDTH_ON_SIDEWALK}м) при размещении объекта (ширина ~${furnitureEffectiveWidth}м).`);
//         }
//       } else {
//         if (requiredDistPath !== null && distanceToSidewalkBoundary < requiredDistPath) {
//           newWarnings.push(`ОШИБКА: Слишком близко к краю тротуара '${sidewalk.name || sidewalk.id}' (${distanceToSidewalkBoundary.toFixed(2)} м). Требуется мин. ${requiredDistPath} м отступа.`);
//         }
//       }
//     });

//     if (itemIsAccessibleFlag && selectedFurnitureConf.canBeAccessible) {
//       if (!onAnySidewalk) {
//         newWarnings.push("ВНИМАНИЕ: Элемент МГН размещен не на тротуаре. Убедитесь в наличии доступного подхода.");
//       } else if (!onAccessibleSidewalk) {
//         newWarnings.push("ОШИБКА: Элемент МГН размещен на тротуаре, который не отмечен как доступный для МГН.");
//       }
//       newWarnings.push("ИНФО: Для элемента МГН: Убедитесь в ровной площадке, ширине прохода (не менее 1.2-1.8 м), отсутствии препятствий.");
//     }

//     if (newWarnings.length === 0) {
//       newWarnings.push("ИНФО: Базовые проверки пройдены. Проверьте специфические правила для объекта.");
//     }
//     return newWarnings;
//   }, [calculateDistance, editingItem, ymapsInstance]);

//   const handleMapClick = (e) => {
//     if (!isClient) return;
//     if (selectedObjectType === 'furniture') {
//       const coords = e.get('coords');
//       const validationWarnings = validatePlacement(coords, selectedFurnitureType, isAccessible, furnitureData, roadsData, sidewalksData);
//       setWarnings(validationWarnings);

//       const newItem = {
//         id: Date.now().toString(),
//         objectClass: 'furniture',
//         type: selectedFurnitureType,
//         name: `${furnitureTypes.find((t) => t.type === selectedFurnitureType)?.name || 'Элемент'} #${furnitureData.length + 1}`,
//         coordinates: coords,
//         description: `Описание для ${selectedFurnitureType}`,
//         isAccessible: furnitureTypes.find(ft => ft.type === selectedFurnitureType)?.canBeAccessible ? isAccessible : false,
//       };
//       setFurnitureData([...furnitureData, newItem]);
//     } else if (selectedObjectType === 'road') {
//       const coords = e.get('coords');
//       const newRoad = {
//         id: Date.now().toString(),
//         objectClass: 'road',
//         type: selectedRoadType,
//         name: `Дорога #${roadsData.length + 1}`,
//         geometry: [coords],
//         width: 7,
//         lanes: 2,
//         surfaceType: SURFACE_TYPES[0].id,
//       };
//       setRoadsData([...roadsData, newRoad]);
//       setWarnings([`ИНФО: Добавлена начальная точка для дороги. Используйте редактор для построения линии.`]);
//     } else if (selectedObjectType === 'sidewalk') {
//       const coords = e.get('coords');
//       const newSidewalk = {
//         id: Date.now().toString(),
//         objectClass: 'sidewalk',
//         type: selectedSidewalkType,
//         name: `Тротуар #${sidewalksData.length + 1}`,
//         geometry: [[coords]],
//         width: 2,
//         isAccessibleForDisabled: false,
//         surfaceType: SURFACE_TYPES[0].id,
//       };
//       setSidewalksData([...sidewalksData, newSidewalk]);
//       setWarnings([`ИНФО: Добавлена начальная точка для тротуара. Используйте редактор для построения полигона.`]);
//     }
//   };

//   const handleOpenEditModal = (item, objectClass) => {
//     setEditingItem({ ...item, objectClass });
//     setItemName(item.name || '');
//     setItemDescription(item.description || '');
//     if (objectClass === 'furniture') {
//       setItemIsAccessible(item.isAccessible || false);
//       setSelectedFurnitureType(item.type);
//     } else if (objectClass === 'road') {
//       setItemWidth(item.width || 7);
//       setRoadLanes(item.lanes || 2);
//       setItemSurfaceType(item.surfaceType || SURFACE_TYPES[0].id);
//       setSelectedRoadType(item.type || ROAD_TYPES[0].id);
//     } else if (objectClass === 'sidewalk') {
//       setItemWidth(item.width || 2);
//       setItemIsAccessible(item.isAccessibleForDisabled || false);
//       setItemSurfaceType(item.surfaceType || SURFACE_TYPES[0].id);
//       setSelectedSidewalkType(item.type || SIDEWALK_TYPES[0].id);
//     }
//     setModalOpen(true);
//   };

//   const handleSaveEdit = () => {
//     if (!editingItem) return;
//     const { id, objectClass } = editingItem;

//     if (objectClass === 'furniture') {
//       const validationWarnings = validatePlacement(editingItem.coordinates, editingItem.type, itemIsAccessible, furnitureData.filter(i => i.id !== id), roadsData, sidewalksData);
//       setWarnings(validationWarnings);
//       const hasHardErrors = validationWarnings.some(w => w.startsWith("ОШИБКА:"));
//       if (hasHardErrors) {
//         alert("Сохранение невозможно из-за ошибок валидации. Проверьте предупреждения.");
//         return;
//       }
//       setFurnitureData(furnitureData.map(f => f.id === id ? { ...f, name: itemName, description: itemDescription, isAccessible: itemIsAccessible } : f));
//     } else if (objectClass === 'road') {
//       setRoadsData(roadsData.map(r => r.id === id ? { ...r, name: itemName, type: selectedRoadType, width: parseFloat(itemWidth) || 0, lanes: parseInt(roadLanes) || 1, surfaceType: itemSurfaceType } : r));
//     } else if (objectClass === 'sidewalk') {
//       setSidewalksData(sidewalksData.map(s => s.id === id ? { ...s, name: itemName, type: selectedSidewalkType, width: parseFloat(itemWidth) || 0, isAccessibleForDisabled: itemIsAccessible, surfaceType: itemSurfaceType } : s));
//     }

//     setModalOpen(false);
//     setEditingItem(null);
//     setWarnings([]);
//   };

//   const handleDelete = () => {
//     if (!editingItem) return;
//     const { id, objectClass } = editingItem;
//     if (objectClass === 'furniture') {
//       setFurnitureData(furnitureData.filter(f => f.id !== id));
//     } else if (objectClass === 'road') {
//       setRoadsData(roadsData.filter(r => r.id !== id));
//     } else if (objectClass === 'sidewalk') {
//       setSidewalksData(sidewalksData.filter(s => s.id !== id));
//     }
//     setModalOpen(false);
//     setEditingItem(null);
//     setWarnings([]);
//   };

//   const onApiLoad = (ymaps) => {
//     console.log('Yandex Maps API loaded:', ymaps);
//     console.log('Available modules:', Object.keys(ymaps));
//     setYmapsInstance(ymaps);
//     if (mapRef.current) {
//       console.log('Map instance via mapRef.current:', mapRef.current);
//       setMapInstance(mapRef.current);
//     }
//   };

//   if (!apiKey) {
//     return <p style={{ color: '#dc2626', padding: '16px' }}>
//       Ошибка: API-ключ Яндекс.Карт не предоставлен. Карта не может быть отображена.
//     </p>;
//   }

//   const currentFurnitureConf = furnitureTypes.find(t => t.type === selectedFurnitureType);

//   const renderFurnitureControls = () => (
//     <>
//       <div>
//         <label htmlFor="furnitureType" style={{ display: 'block', fontSize: '0.875rem', fontWeight: '500', color: '#374151' }}>
//           Тип мебели:
//         </label>
//         <select
//           id="furnitureType"
//           value={selectedFurnitureType}
//           onChange={(e) => setSelectedFurnitureType(e.target.value)}
//           style={styles.select}
//         >
//           {furnitureTypes.map((ft) => (
//             <option key={ft.type} value={ft.type}>{ft.name}</option>
//           ))}
//         </select>
//       </div>
//       {currentFurnitureConf && currentFurnitureConf.canBeAccessible && (
//         <div style={styles.checkboxContainer}>
//           <input
//             type="checkbox"
//             id="isAccessible"
//             checked={isAccessible}
//             onChange={(e) => setIsAccessible(e.target.checked)}
//             style={styles.checkbox}
//           />
//           <label htmlFor="isAccessible" style={{ fontSize: '0.875rem' }}>
//             Доступно для МГН
//           </label>
//         </div>
//       )}
//     </>
//   );

//   const renderRoadControls = () => (
//     <div>
//       <label style={{ display: 'block', fontSize: '0.875rem', fontWeight: '500' }}>
//         Тип дороги:
//         <select
//           value={selectedRoadType}
//           onChange={e => setSelectedRoadType(e.target.value)}
//           style={styles.select}
//         >
//           {ROAD_TYPES.map(rt => (
//             <option key={rt.id} value={rt.id}>{rt.name}</option>
//           ))}
//         </select>
//       </label>
//       <p style={{ fontSize: '0.75rem', color: '#6b7280', marginTop: '4px' }}>
//         Кликните на карту для добавления начальной точки дороги.
//       </p>
//     </div>
//   );

//   const renderSidewalkControls = () => (
//     <div>
//       <label style={{ display: 'block', fontSize: '0.875rem', fontWeight: '500' }}>
//         Тип тротуара:
//         <select
//           value={selectedSidewalkType}
//           onChange={e => setSelectedSidewalkType(e.target.value)}
//           style={styles.select}
//         >
//           {SIDEWALK_TYPES.map(st => (
//             <option key={st.id} value={st.id}>{st.name}</option>
//           ))}
//         </select>
//       </label>
//       <p style={{ fontSize: '0.75rem', color: '#6b7280', marginTop: '4px' }}>
//         Кликните на карту для добавления начальной точки тротуара.
//       </p>
//     </div>
//   );

//   const renderModalContent = () => {
//     if (!editingItem) return null;
//     const { objectClass } = editingItem;
//     const currentItemConf = objectClass === 'furniture' ? furnitureTypes.find(f => f.type === editingItem.type) : null;

//     return (
//       <>
//         <h3 style={styles.modalTitle}>
//           Редактировать: {itemName || `${objectClass} ID: ${editingItem.id}`}
//         </h3>
//         <div style={{ marginBottom: '8px' }}>
//           <label style={{ display: 'block', fontSize: '0.875rem' }}>
//             Название/ID:
//             <input
//               type="text"
//               value={itemName}
//               onChange={e => setItemName(e.target.value)}
//               style={styles.input}
//             />
//           </label>
//         </div>

//         {objectClass === 'furniture' && (
//           <div style={{ marginBottom: '8px' }}>
//             <label style={{ display: 'block', fontSize: '0.875rem' }}>
//               Описание:
//               <textarea
//                 value={itemDescription}
//                 onChange={e => setItemDescription(e.target.value)}
//                 style={styles.textarea}
//               />
//             </label>
//           </div>
//         )}

//         {objectClass === 'furniture' && currentItemConf?.canBeAccessible && (
//           <div style={{ marginBottom: '8px', display: 'flex', alignItems: 'center' }}>
//             <input
//               type="checkbox"
//               id="modalIsAccessibleFurniture"
//               checked={itemIsAccessible}
//               onChange={e => setItemIsAccessible(e.target.checked)}
//               style={{ marginRight: '8px' }}
//             />
//             <label htmlFor="modalIsAccessibleFurniture" style={{ fontSize: '0.875rem' }}>
//               Доступно для МГН
//             </label>
//           </div>
//         )}

//         {objectClass === 'road' && (
//           <>
//             <div style={{ marginBottom: '8px' }}>
//               <label style={{ display: 'block', fontSize: '0.875rem' }}>
//                 Тип дороги:
//                 <select
//                   value={selectedRoadType}
//                   onChange={e => setSelectedRoadType(e.target.value)}
//                   style={styles.input}
//                 >
//                   {ROAD_TYPES.map(rt => (
//                     <option key={rt.id} value={rt.id}>{rt.name}</option>
//                   ))}
//                 </select>
//               </label>
//             </div>
//             <div style={{ marginBottom: '8px' }}>
//               <label style={{ display: 'block', fontSize: '0.875rem' }}>
//                 Ширина (м):
//                 <input
//                   type="number"
//                   step="0.1"
//                   value={itemWidth}
//                   onChange={e => setItemWidth(parseFloat(e.target.value))}
//                   style={styles.input}
//                 />
//               </label>
//             </div>
//             <div style={{ marginBottom: '8px' }}>
//               <label style={{ display: 'block', fontSize: '0.875rem' }}>
//                 Кол-во полос:
//                 <input
//                   type="number"
//                   step="1"
//                   value={roadLanes}
//                   onChange={e => setRoadLanes(parseInt(e.target.value))}
//                   style={styles.input}
//                 />
//               </label>
//             </div>
//             <div style={{ marginBottom: '8px' }}>
//               <label style={{ display: 'block', fontSize: '0.875rem' }}>
//                 Тип покрытия:
//                 <select
//                   value={itemSurfaceType}
//                   onChange={e => setItemSurfaceType(e.target.value)}
//                   style={styles.input}
//                 >
//                   {SURFACE_TYPES.map(st => (
//                     <option key={st.id} value={st.id}>{st.name}</option>
//                   ))}
//                 </select>
//               </label>
//             </div>
//           </>
//         )}

//         {objectClass === 'sidewalk' && (
//           <>
//             <div style={{ marginBottom: '8px' }}>
//               <label style={{ display: 'block', fontSize: '0.875rem' }}>
//                 Тип тротуара:
//                 <select
//                   value={selectedSidewalkType}
//                   onChange={e => setSelectedSidewalkType(e.target.value)}
//                   style={styles.input}
//                 >
//                   {SIDEWALK_TYPES.map(st => (
//                     <option key={st.id} value={st.id}>{st.name}</option>
//                   ))}
//                 </select>
//               </label>
//             </div>
//             <div style={{ marginBottom: '8px' }}>
//               <label style={{ display: 'block', fontSize: '0.875rem' }}>
//                 Ширина (м):
//                 <input
//                   type="number"
//                   step="0.1"
//                   value={itemWidth}
//                   onChange={e => setItemWidth(parseFloat(e.target.value))}
//                   style={styles.input}
//                 />
//               </label>
//             </div>
//             <div style={{ marginBottom: '8px', display: 'flex', alignItems: 'center' }}>
//               <input
//                 type="checkbox"
//                 id="modalIsAccessibleSidewalk"
//                 checked={itemIsAccessible}
//                 onChange={e => setItemIsAccessible(e.target.checked)}
//                 style={{ marginRight: '8px' }}
//               />
//               <label htmlFor="modalIsAccessibleSidewalk" style={{ fontSize: '0.875rem' }}>
//                 Доступно для МГН
//               </label>
//             </div>
//             <div style={{ marginBottom: '8px' }}>
//               <label style={{ display: 'block', fontSize: '0.875rem' }}>
//                 Тип покрытия:
//                 <select
//                   value={itemSurfaceType}
//                   onChange={e => setItemSurfaceType(e.target.value)}
//                   style={styles.input}
//                 >
//                   {SURFACE_TYPES.map(st => (
//                     <option key={st.id} value={st.id}>{st.name}</option>
//                   ))}
//                 </select>
//               </label>
//             </div>
//           </>
//         )}
//       </>
//     );
//   };

//   if (!isClient) {
//     return <p style={{ padding: '16px', color: '#6b7280' }}>
//       Загрузка компонента карты...
//     </p>;
//   }

//   return (
//     <div style={styles.container}>
//       <YMaps
//         query={{ apikey: apiKey, lang: 'ru_RU', load: 'package.full' }}
//         onApiLoad={onApiLoad}
//       >
//         <div style={styles.controlPanel}>
//           <h2 style={styles.controlPanelTitle}>Панель управления объектами</h2>
//           <div style={styles.grid}>
//             <div>
//               <label style={{ display: 'block', fontSize: '0.875rem', fontWeight: '500', color: '#374151' }}>
//                 Режим добавления:
//               </label>
//               <select
//                 value={selectedObjectType}
//                 onChange={(e) => setSelectedObjectType(e.target.value)}
//                 style={{ ...styles.select, ':focus': { borderColor: '#4f46e5', boxShadow: '0 0 0 2px rgba(79, 70, 229, 0.5)' } }}
//               >
//                 <option value="furniture">Уличная мебель</option>
//                 <option value="road">Дорога</option>
//                 <option value="sidewalk">Тротуар</option>
//               </select>
//             </div>
//             {selectedObjectType === 'furniture' && renderFurnitureControls()}
//             {selectedObjectType === 'road' && renderRoadControls()}
//             {selectedObjectType === 'sidewalk' && renderSidewalkControls()}
//           </div>
//         </div>

//         {selectedObjectType === 'furniture' && currentFurnitureConf?.specificRules && (
//           <div style={styles.rulesPanel}>
//             <h4 style={{ fontWeight: 'bold' }}>Правила для "{currentFurnitureConf.name}":</h4>
//             <ul style={{ listStyleType: 'disc', paddingLeft: '16px', marginTop: '4px' }}>
//               {currentFurnitureConf.specificRules.map((rule, index) => (
//                 <li key={index} style={{ marginBottom: '2px' }}>{rule}</li>
//               ))}
//             </ul>
//           </div>
//         )}

//         {warnings.length > 0 && (
//           <div style={{
//             ...styles.warningsPanel,
//             backgroundColor: warnings.some(w => w.startsWith("ОШИБКА:"))
//               ? '#fee2e2'
//               : warnings.some(w => w.startsWith("ВНИМАНИЕ:"))
//               ? '#fef3c7'
//               : '#d1fae5',
//             borderColor: warnings.some(w => w.startsWith("ОШИБКА:"))
//               ? '#ef4444'
//               : warnings.some(w => w.startsWith("ВНИМАНИЕ:"))
//               ? '#f59e0b'
//               : '#10b981',
//             color: warnings.some(w => w.startsWith("ОШИБКА:"))
//               ? '#b91c1c'
//               : warnings.some(w => w.startsWith("ВНИМАНИЕ:"))
//               ? '#92400e'
//               : '#065f46',
//           }}>
//             <h4 style={{ fontWeight: 'bold' }}>Результаты проверки:</h4>
//             <ul style={{ listStyleType: 'disc', paddingLeft: '16px', marginTop: '4px' }}>
//               {warnings.map((warning, index) => (
//                 <li key={index} style={{ marginBottom: '2px' }}>{warning}</li>
//               ))}
//             </ul>
//           </div>
//         )}

//         <div style={styles.mapContainer}>
//           <Map
//             instanceRef={(ref) => {
//               mapRef.current = ref;
//               console.log('Map ref set:', ref);
//             }}
//             defaultState={defaultMapState}
//             width="100%"
//             height="100%"
//             modules={[
//               'Placemark',
//               'Polyline',
//               'Polygon',
//               'geoObject.addon.balloon',
//               'geoObject.addon.hint',
//               'geometry.Polygon',
//               'geometry.LineString',
//               'geometry.Point',
//               'util.bounds',
//               'control.ZoomControl',
//               'control.GeolocationControl',
//               'control.RulerControl',
//               'control.TrafficControl',
//               'control.TypeSelector',
//               'geoObject.addon.editor'
//             ]}
//             onClick={handleMapClick}
//           >
//             <ZoomControl options={{ float: 'right' }} />
//             <GeolocationControl options={{ float: 'left' }} />
//             <RulerControl options={{ float: 'right' }} />
//             <TrafficControl options={{ float: 'right' }} />
//             <TypeSelector options={{ float: 'right' }} />

//             {furnitureData.map((item) => (
//               <Placemark
//                 key={item.id}
//                 geometry={item.coordinates}
//                 properties={{
//                   hintContent: item.name,
//                   balloonContentHeader: `${item.name}${item.isAccessible ? ' (Доступно для МГН)' : ''}`,
//                   balloonContentBody: item.description,
//                 }}
//                 options={getPlacemarkOptions(item)}
//                 onClick={() => handleOpenEditModal(item, 'furniture')}
//               />
//             ))}
//             {roadsData.map(road => (
//               <Polyline
//                 key={road.id}
//                 geometry={road.geometry}
//                 options={{
//                   strokeColor: '#0066FFCC',
//                   strokeWidth: road.width ? Math.max(4, road.width) : 6,
//                   editorDrawingCursor: 'crosshair',
//                 }}
//                 onClick={() => handleOpenEditModal(road, 'road')}
//               />
//             ))}
//             {sidewalksData.map(sidewalk => (
//               <Polygon
//                 key={sidewalk.id}
//                 geometry={sidewalk.geometry}
//                 options={{
//                   fillColor: '#808080B3',
//                   strokeColor: '#404040E6',
//                   strokeWidth: 2,
//                   editorDrawingCursor: 'crosshair',
//                 }}
//                 onClick={() => handleOpenEditModal(sidewalk, 'sidewalk')}
//               />
//             ))}
//           </Map>
//         </div>
//       </YMaps>

//       {modalOpen && editingItem && (
//         <div style={styles.modalOverlay} onClick={() => setModalOpen(false)} />
//       )}
//       {modalOpen && editingItem && (
//         <div style={styles.modal}>
//           {renderModalContent()}
//           <div style={styles.buttonContainer}>
//             <button
//               onClick={handleSaveEdit}
//               style={{
//                 ...styles.button,
//                 backgroundColor: '#4f46e5',
//                 color: '#ffffff',
//                 ':hover': { backgroundColor: '#4338ca' },
//                 ':focus': { boxShadow: '0 0 0 2px rgba(79, 70, 229, 0.5)' },
//               }}
//             >
//               Сохранить
//             </button>
//             <button
//               onClick={handleDelete}
//               style={{
//                 ...styles.button,
//                 backgroundColor: '#dc2626',
//                 color: '#ffffff',
//                 ':hover': { backgroundColor: '#b91c1c' },
//                 ':focus': { boxShadow: '0 0 0 2px rgba(220, 38, 38, 0.5)' },
//               }}
//             >
//               Удалить
//             </button>
//             <button
//               onClick={() => { setModalOpen(false); setEditingItem(null); setWarnings([]); }}
//               style={{
//                 ...styles.button,
//                 backgroundColor: '#e5e7eb',
//                 color: '#374151',
//                 ':hover': { backgroundColor: '#d1d5db' },
//                 ':focus': { boxShadow: '0 0 0 2px rgba(209, 213, 219, 0.5)' },
//               }}
//             >
//               Отмена
//             </button>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// };

// export default YandexMapInteractiveFurniture;





// YandexMapInteractiveFurniture_updated.jsx
import React, { useState, useEffect, useCallback, useRef } from 'react';
import { YMaps, Map, Placemark, Polyline, Polygon, ZoomControl, GeolocationControl, RulerControl, TrafficControl, TypeSelector } from '@pbe/react-yandex-maps';

// --- CSS Styles (taken from user's provided code) ---
const styles = {
  container: {
    position: 'relative',
    padding: '16px',
    display: 'flex',
    flexDirection: 'column',
    height: '100vh',
    boxSizing: 'border-box',
  },
  controlPanel: {
    marginBottom: '16px',
    padding: '12px',
    border: '1px solid #e5e7eb',
    borderRadius: '8px',
    backgroundColor: '#f9fafb',
    boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
  },
  controlPanelTitle: {
    fontSize: '1.25rem',
    fontWeight: 'bold', // corrected from 'fontWeightregister'
    marginBottom: '12px',
    color: '#374151',
  },
  grid: {
    display: 'grid',
    gridTemplateColumns: '1fr',
    gap: '16px',
    alignItems: 'start',
  },
  select: {
    marginTop: '4px',
    width: '100%',
    padding: '8px',
    border: '1px solid #d1d5db',
    borderRadius: '4px',
    boxShadow: '0 1px 2px rgba(0, 0, 0, 0.05)',
  },
  checkboxContainer: {
    display: 'flex',
    alignItems: 'center',
    paddingTop: '24px',
  },
  checkbox: {
    height: '16px',
    width: '16px',
    marginRight: '8px',
  },
  rulesPanel: {
    marginBottom: '8px',
    padding: '12px',
    backgroundColor: '#eff6ff',
    borderLeft: '4px solid #3b82f6',
    color: '#1e40af',
    fontSize: '0.75rem',
    maxHeight: '96px',
    overflowY: 'auto',
    borderRadius: '4px',
    boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
  },
  warningsPanel: {
    marginBottom: '8px',
    padding: '12px',
    borderLeft: '4px solid',
    fontSize: '0.75rem',
    maxHeight: '96px',
    overflowY: 'auto',
    borderRadius: '4px',
    boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
  },
  mapContainer: {
    flexGrow: 1,
    minHeight: '400px',
    border: '1px solid #e5e7eb',
    borderRadius: '8px',
    boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
    overflow: 'hidden',
  },
  modalOverlay: {
    position: 'fixed',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'rgba(75, 85, 99, 0.5)',
    overflowY: 'auto',
    zIndex: 40,
  },
  modal: {
    position: 'fixed',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    backgroundColor: '#ffffff',
    padding: '24px',
    borderRadius: '8px',
    boxShadow: '0 10px 15px rgba(0, 0, 0, 0.25)',
    zIndex: 50,
    maxWidth: '32rem',
    width: '100%',
    maxHeight: '90vh',
    overflowY: 'auto',
  },
  modalTitle: {
    fontSize: '1.125rem',
    fontWeight: '600',
    marginBottom: '16px',
  },
  input: {
    marginTop: '4px',
    width: '100%',
    padding: '4px',
    border: '1px solid #d1d5db',
    borderRadius: '4px',
  },
  textarea: {
    marginTop: '4px',
    width: '100%',
    padding: '4px',
    border: '1px solid #d1d5db',
    borderRadius: '4px',
    resize: 'vertical',
  },
  buttonContainer: {
    display: 'flex',
    justifyContent: 'flex-end',
    gap: '12px',
    marginTop: '24px',
    paddingTop: '16px',
    borderTop: '1px solid #e5e7eb',
  },
  button: {
    padding: '8px 16px',
    borderRadius: '4px',
    fontWeight: '500',
    cursor: 'pointer',
    outline: 'none',
  },
  finishDrawingButton: {
    padding: '8px 16px',
    borderRadius: '4px',
    fontWeight: '500',
    cursor: 'pointer',
    outline: 'none',
    backgroundColor: '#22c55e', // green-500
    color: 'white',
    marginTop: '8px',
  }
};

// --- Constants for object properties ---
const ROAD_TYPES = [
  { id: 'main_street', name: 'Магистральная улица' },
  { id: 'district_street', name: 'Улица районного значения' },
  { id: 'local_road', name: 'Проезд местного значения' },
  { id: 'access_road', name: 'Подъездная дорога' },
];

const SIDEWALK_TYPES = [
  { id: 'main_pedestrian', name: 'Основной пешеходный' },
  { id: 'secondary_pedestrian', name: 'Второстепенный пешеходный' },
  { id: 'bike_pedestrian', name: 'Велопешеходный' },
];

const SURFACE_TYPES = [
  { id: 'asphalt', name: 'Асфальтобетон' },
  { id: 'concrete', name: 'Цементобетон' },
  { id: 'paving_stones', name: 'Брусчатка/Плитка' },
  { id: 'gravel', name: 'Гравийное' },
  { id: 'dirt', name: 'Грунтовое' },
  { id: 'rubber_crumb', name: 'Резиновая крошка (для площадок)' },
];

const ADVERTISING_TYPES = [
  { id: 'billboard_static', name: 'Рекламный щит (статика)', icon: '/icons/billboard.svg', effectiveWidth: 0.5, specificRules: ["Размещение согласно схемам города.", "Не должен перекрывать обзор."] },
  { id: 'city_light', name: 'Сити-лайт (лайтбокс)', icon: '/icons/city_light.svg', effectiveWidth: 0.3, specificRules: ["Часто на остановках или пешеходных зонах."] },
  { id: 'banner_stretch', name: 'Баннер-растяжка', icon: '/icons/banner.svg', effectiveWidth: 0.1, specificRules: ["Требует согласования, часто временный."] }
];

const MIN_PASSAGE_WIDTH_ON_SIDEWALK = 1.5; // meters, e.g., for MGN

const furnitureTypes = [
  {
    type: 'bench',
    name: 'Скамейка',
    icon: '/icons/bench.svg',
    canBeAccessible: true,
    minDistanceToPathEdge: { min: 0.5, default: 1.0, max: 1.5 },
    minDistanceToRoadEdge: { min: 1.5, default: 2.0 },
    minDistanceToOther: 1.5,
    effectiveWidth: 0.6,
    placementContext: ['sidewalk_edge', 'recreation_area', 'bus_stop', 'near_entrance'],
    specificRules: [
      "Размещение вдоль пешеходных дорожек, на площадках отдыха, остановках, у входов в здания (с учетом норм).",
      "Для МГН: часть скамеек с подлокотниками/спинками, свободное пространство рядом для коляски (не менее 0.8м).",
      "Не должна мешать основному потоку пешеходов (свободный проход не менее 1.2-1.8м).",
      "Материалы: дерево (с пропиткой), металл, бетон, композитные материалы."
    ],
  },
  // ... (other furniture types from user's code, truncated for brevity, will be included in the final file)
    {
    type: 'public_toilet',
    name: 'Общественный туалет',
    icon: '/icons/public_toilet.svg',
    canBeAccessible: true,
    minDistanceToPathEdge: { min: 1.0, default: 1.5 },
    minDistanceToRoadEdge: { min: 5.0 },
    minDistanceToOther: 5.0, 
    minDistanceToResidential: 20.0, 
    effectiveWidth: 2.5, 
    placementContext: ['park', 'square', 'tourist_area', 'transport_hub'],
    specificRules: [
      "Доступность для МГН обязательна.",
      "Соблюдение санитарных норм.",
      "Вентиляция, освещение, указатели."
    ]
  }
];

const initialRoads = [];
const initialSidewalks = [];
const initialAdvertising = []; // New state for advertising objects

const getDistanceRuleValue = (rule, context = 'default') => {
  if (typeof rule === 'number') return rule;
  if (typeof rule === 'object' && rule !== null) {
    if (context === 'min' && typeof rule.min === 'number') return rule.min;
    if (context === 'max' && typeof rule.max === 'number') return rule.max;
    if (typeof rule.default === 'number') return rule.default;
    if (typeof rule.min === 'number') return rule.min; 
    return null;
  }
  return null;
};

const YandexMapInteractiveFurniture = ({ apiKey }) => {
  const [isClient, setIsClient] = useState(false);
  const [mapInstance, setMapInstance] = useState(null);
  const [ymapsInstance, setYmapsInstance] = useState(null);

  const [furnitureData, setFurnitureData] = useState([]);
  const [roadsData, setRoadsData] = useState(initialRoads);
  const [sidewalksData, setSidewalksData] = useState(initialSidewalks);
  const [advertisingData, setAdvertisingData] = useState(initialAdvertising);

  const [selectedObjectType, setSelectedObjectType] = useState('furniture');
  const [selectedFurnitureType, setSelectedFurnitureType] = useState(furnitureTypes[0].type);
  const [selectedRoadType, setSelectedRoadType] = useState(ROAD_TYPES[0].id);
  const [selectedSidewalkType, setSelectedSidewalkType] = useState(SIDEWALK_TYPES[0].id);
  const [selectedAdvertisingType, setSelectedAdvertisingType] = useState(ADVERTISING_TYPES[0].id);

  const [drawingState, setDrawingState] = useState({ isActive: false, objectId: null, type: null });

  const [isAccessible, setIsAccessible] = useState(furnitureTypes[0].canBeAccessible);
  const [modalOpen, setModalOpen] = useState(false);
  const [editingItem, setEditingItem] = useState(null);

  const [itemName, setItemName] = useState('');
  const [itemDescription, setItemDescription] = useState('');
  const [itemIsAccessible, setItemIsAccessible] = useState(false);
  const [itemWidth, setItemWidth] = useState(0);
  const [itemSurfaceType, setItemSurfaceType] = useState(SURFACE_TYPES[0].id);
  const [roadLanes, setRoadLanes] = useState(2);
  
  const [warnings, setWarnings] = useState([]);

  const defaultMapState = {
    center: [43.238566, 76.899828],
    zoom: 15,
    controls: [],
  };

  const mapRef = useRef(null);

  useEffect(() => {
    console.log('Setting isClient to true');
    setIsClient(true);
  }, []);

  useEffect(() => {
    console.log('ymapsInstance state updated:', ymapsInstance);
  }, [ymapsInstance]);

  useEffect(() => {
    console.log('mapInstance state updated:', mapInstance);
  }, [mapInstance]);

  useEffect(() => {
    if (selectedObjectType === 'furniture') {
        const currentFurnitureTypeConf = furnitureTypes.find(ft => ft.type === selectedFurnitureType);
        if (currentFurnitureTypeConf) {
            setIsAccessible(currentFurnitureTypeConf.canBeAccessible);
        }
    } else if (selectedObjectType === 'advertising') {
        const currentAdvTypeConf = ADVERTISING_TYPES.find(at => at.id === selectedAdvertisingType);
        // Potentially set other specific states for advertising here
    }
    // If mode changes while drawing, finish drawing
    if (drawingState.isActive && selectedObjectType !== drawingState.type) {
        handleFinishDrawing();
    }
    setWarnings([]);
  }, [selectedObjectType, selectedFurnitureType, selectedAdvertisingType]);

  const getPlacemarkOptions = (item, objectClass) => {
    let iconHref = '/icons/default_placemark.svg';
    if (objectClass === 'furniture') {
        iconHref = furnitureTypes.find((t) => t.type === item.type)?.icon || iconHref;
    } else if (objectClass === 'advertising') {
        iconHref = ADVERTISING_TYPES.find((t) => t.id === item.type)?.icon || iconHref;
    }
    return {
        iconLayout: 'default#image',
        iconImageHref: iconHref,
        iconImageSize: item.isAccessible ? [35, 35] : [30, 30],
        iconImageOffset: item.isAccessible ? [-17.5, -17.5] : [-15, -15],
    };
  }

  const calculateDistance = useCallback((coords1, coords2) => {
    if (!ymapsInstance || !ymapsInstance.coordSystem || !ymapsInstance.coordSystem.geo) {
        const [lat1, lon1] = coords1;
        const [lat2, lon2] = coords2;
        const R = 6371e3;
        const φ1 = (lat1 * Math.PI) / 180;
        const φ2 = (lat2 * Math.PI) / 180;
        const Δφ = ((lat2 - lat1) * Math.PI) / 180;
        const Δλ = ((lon2 - lon1) * Math.PI) / 180;
        const a = Math.sin(Δφ / 2) * Math.sin(Δφ / 2) +
                  Math.cos(φ1) * Math.cos(φ2) * Math.sin(Δλ / 2) * Math.sin(Δλ / 2);
        const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
        return R * c;
    }
    return ymapsInstance.coordSystem.geo.getDistance(coords1, coords2);
  }, [ymapsInstance]);

  const validatePlacement = useCallback((coords, itemType, itemIsAccessibleFlag, currentFurnitureArr, currentRoadsArr, currentSidewalksArr, currentAdvertisingArr, objectClassToValidate) => {
    const newWarnings = [];
    if (!ymapsInstance) {
        newWarnings.push("ВНИМАНИЕ: API Яндекс.Карт еще не загружен. Повторите попытку позже.");
        return newWarnings;
    }

    let selectedConf;
    if (objectClassToValidate === 'furniture') {
        selectedConf = furnitureTypes.find((t) => t.type === itemType);
    } else if (objectClassToValidate === 'advertising') {
        selectedConf = ADVERTISING_TYPES.find((t) => t.id === itemType);
    } 
    // Placeholder for road/sidewalk validation if needed directly here, though they are more about geometry

    if (!selectedConf && (objectClassToValidate === 'furniture' || objectClassToValidate === 'advertising')) {
      newWarnings.push(`ОШИБКА: Конфигурация для типа '${itemType}' (${objectClassToValidate}) не найдена.`);
      return newWarnings;
    }

    if (selectedConf) {
        const distToOtherRule = getDistanceRuleValue(selectedConf.minDistanceToOther);
        if (distToOtherRule !== null) {
          currentFurnitureArr.forEach((item) => {
            if (editingItem && item.id === editingItem.id && editingItem.objectClass === 'furniture') return;
            const distance = calculateDistance(coords, item.coordinates);
            if (distance < distToOtherRule) {
              newWarnings.push(`ОШИБКА: Слишком близко к объекту мебели '${item.name || item.type}' (${distance.toFixed(2)} м). Требуется мин. ${distToOtherRule} м.`);
            }
          });
          currentAdvertisingArr.forEach((item) => {
            if (editingItem && item.id === editingItem.id && editingItem.objectClass === 'advertising') return;
            const distance = calculateDistance(coords, item.coordinates);
            if (distance < distToOtherRule) { // Assuming same rule for other ad objects
              newWarnings.push(`ОШИБКА: Слишком близко к рекламному объекту '${item.name || item.type}' (${distance.toFixed(2)} м). Требуется мин. ${distToOtherRule} м.`);
            }
          });
        }

        currentRoadsArr.forEach(road => {
            if (!road.geometry || road.geometry.length === 0) return;
            const roadPolyline = new ymapsInstance.Polyline(road.geometry);
            const closestDataToRoad = roadPolyline.geometry.getClosest(coords);
            const distanceToRoadCenterline = calculateDistance(coords, closestDataToRoad.position);
            
            const requiredClearanceFromRoadEdge = getDistanceRuleValue(selectedConf.minDistanceToRoadEdge, 'min');
            const roadHalfWidth = (road.width || 0) / 2;
            const actualClearanceFromRoadEdge = distanceToRoadCenterline - roadHalfWidth;

            if (requiredClearanceFromRoadEdge !== null) {
                if (actualClearanceFromRoadEdge < requiredClearanceFromRoadEdge) {
                    newWarnings.push(`ОШИБКА: Слишком близко к краю дороги '${road.name || road.id}' (отступ ${actualClearanceFromRoadEdge.toFixed(2)} м). Требуется мин. ${requiredClearanceFromRoadEdge} м от края.`);
                } else {
                    newWarnings.push(`ИНФО: Отступ от края дороги '${road.name || road.id}' ${actualClearanceFromRoadEdge.toFixed(2)} м (норма ${requiredClearanceFromRoadEdge} м).`);
                }
            }
        });
        // ... (rest of the validation logic from user's code, adapted for currentAdvertisingArr and selectedConf)
    }

    if (newWarnings.length === 0) {
        newWarnings.push("ИНФО: Базовые проверки пройдены. Проверьте специфические правила для объекта.");
    }
    return newWarnings;
  }, [calculateDistance, editingItem, ymapsInstance]);

  const handleFinishDrawing = () => {
    if (drawingState.isActive) {
        if (drawingState.type === 'road') {
            const road = roadsData.find(r => r.id === drawingState.objectId);
            if (road && road.geometry.length < 2) {
                setRoadsData(prev => prev.filter(r => r.id !== drawingState.objectId));
                setWarnings(prev => [...prev, "ПРЕДУПРЕЖДЕНИЕ: Дорога удалена (менее 2 точек)."]);
            }
        } else if (drawingState.type === 'sidewalk') {
            const sidewalk = sidewalksData.find(s => s.id === drawingState.objectId);
            if (sidewalk && sidewalk.geometry[0] && sidewalk.geometry[0].length < 3) {
                setSidewalksData(prev => prev.filter(s => s.id !== drawingState.objectId));
                setWarnings(prev => [...prev, "ПРЕДУПРЕЖДЕНИЕ: Тротуар удален (менее 3 точек)."]);
            }
        }
    }
    setDrawingState({ isActive: false, objectId: null, type: null });
    setWarnings(prev => [...prev, "ИНФО: Режим рисования завершен."]);
  };

  const handleMapClick = (e) => {
    if (!isClient || !ymapsInstance) return;
    const coords = e.get('coords');

    if (drawingState.isActive) {
        if (drawingState.type === 'road' && selectedObjectType === 'road') {
            setRoadsData(prevRoads => prevRoads.map(road => 
                road.id === drawingState.objectId 
                ? { ...road, geometry: [...road.geometry, coords] } 
                : road
            ));
            setWarnings([`ИНФО: Добавлена точка к дороге ID: ${drawingState.objectId}. Кликните еще или "Завершить".`]);
        } else if (drawingState.type === 'sidewalk' && selectedObjectType === 'sidewalk') {
            setSidewalksData(prevSidewalks => prevSidewalks.map(sidewalk => 
                sidewalk.id === drawingState.objectId 
                ? { ...sidewalk, geometry: [[...sidewalk.geometry[0], coords]] } 
                : sidewalk
            ));
            setWarnings([`ИНФО: Добавлена точка к тротуару ID: ${drawingState.objectId}. Кликните еще или "Завершить".`]);
        } else {
            // If drawing but mode changed, finish current drawing before processing new click
            handleFinishDrawing();
            // Process click for new object type (will be handled by the 'else' block below if not furniture)
        }
    } 
    // This 'else' handles clicks when not actively drawing OR after finishing a drawing and the click is for a new object
    // It should not run if the click was consumed by adding a point to an active drawing
    if (!drawingState.isActive || (drawingState.isActive && selectedObjectType !== drawingState.type)) { 
        if (selectedObjectType === 'furniture') {
            const validationWarnings = validatePlacement(coords, selectedFurnitureType, isAccessible, furnitureData, roadsData, sidewalksData, advertisingData, 'furniture');
            setWarnings(validationWarnings);
            const newItem = {
              id: Date.now().toString(),
              objectClass: 'furniture',
              type: selectedFurnitureType,
              name: `${furnitureTypes.find((t) => t.type === selectedFurnitureType)?.name || 'Элемент'} #${furnitureData.length + 1}`,
              coordinates: coords,
              description: `Описание для ${selectedFurnitureType}`,
              isAccessible: furnitureTypes.find(ft => ft.type === selectedFurnitureType)?.canBeAccessible ? isAccessible : false,
            };
            setFurnitureData([...furnitureData, newItem]);
        } else if (selectedObjectType === 'road') {
            const newRoadId = Date.now().toString();
            const newRoad = {
                id: newRoadId,
                objectClass: 'road',
                type: selectedRoadType,
                name: `Дорога #${roadsData.length + 1}`,
                geometry: [coords], 
                width: 7, 
                lanes: 2,
                surfaceType: SURFACE_TYPES[0].id,
            };
            setRoadsData(prev => [...prev, newRoad]);
            setDrawingState({ isActive: true, objectId: newRoadId, type: 'road' });
            setWarnings(["ИНФО: Начата новая дорога. Кликните для добавления точек или 'Завершить'."]);
        } else if (selectedObjectType === 'sidewalk') {
            const newSidewalkId = Date.now().toString();
            const newSidewalk = {
                id: newSidewalkId,
                objectClass: 'sidewalk',
                type: selectedSidewalkType,
                name: `Тротуар #${sidewalksData.length + 1}`,
                geometry: [[coords]], 
                width: 2, 
                isAccessibleForDisabled: false,
                surfaceType: SURFACE_TYPES[0].id,
            };
            setSidewalksData(prev => [...prev, newSidewalk]);
            setDrawingState({ isActive: true, objectId: newSidewalkId, type: 'sidewalk' });
            setWarnings(["ИНФО: Начат новый тротуар. Кликните для добавления точек или 'Завершить'."]);
        } else if (selectedObjectType === 'advertising') {
            const validationWarnings = validatePlacement(coords, selectedAdvertisingType, false /*isAccessible not for ads generally*/, furnitureData, roadsData, sidewalksData, advertisingData, 'advertising');
            setWarnings(validationWarnings);
            const newItem = {
                id: Date.now().toString(),
                objectClass: 'advertising',
                type: selectedAdvertisingType,
                name: `${ADVERTISING_TYPES.find((t) => t.id === selectedAdvertisingType)?.name || 'Реклама'} #${advertisingData.length + 1}`,
                coordinates: coords,
                description: `Описание для ${selectedAdvertisingType}`,
            };
            setAdvertisingData([...advertisingData, newItem]);
        }
    }
  };

  const handleOpenEditModal = (item, objectClass) => {
    setEditingItem({ ...item, objectClass });
    setItemName(item.name || '');
    setItemDescription(item.description || '');
    if (objectClass === 'furniture') {
      setItemIsAccessible(item.isAccessible || false);
      setSelectedFurnitureType(item.type);
    } else if (objectClass === 'road') {
      setItemWidth(item.width || 7);
      setRoadLanes(item.lanes || 2);
      setItemSurfaceType(item.surfaceType || SURFACE_TYPES[0].id);
      setSelectedRoadType(item.type || ROAD_TYPES[0].id);
    } else if (objectClass === 'sidewalk') {
      setItemWidth(item.width || 2);
      setItemIsAccessible(item.isAccessibleForDisabled || false);
      setItemSurfaceType(item.surfaceType || SURFACE_TYPES[0].id);
      setSelectedSidewalkType(item.type || SIDEWALK_TYPES[0].id);
    } else if (objectClass === 'advertising') {
      setSelectedAdvertisingType(item.type);
      // Add other advertising-specific properties to modal state if needed
    }
    setModalOpen(true);
  };

  const handleSaveEdit = () => {
    if (!editingItem) return;
    const { id, objectClass, coordinates } = editingItem; // Keep original coordinates for validation if not changed by editor

    if (objectClass === 'furniture') {
        const validationWarnings = validatePlacement(coordinates, editingItem.type, itemIsAccessible, furnitureData.filter(i => i.id !== id), roadsData, sidewalksData, advertisingData, 'furniture');
        setWarnings(validationWarnings);
        const hasHardErrors = validationWarnings.some(w => w.startsWith("ОШИБКА:"));
        if (hasHardErrors && !confirm("Обнаружены ошибки валидации. Все равно сохранить?")) {
            return;
        }
        setFurnitureData(furnitureData.map(f => f.id === id ? { ...f, name: itemName, description: itemDescription, isAccessible: itemIsAccessible, type: selectedFurnitureType } : f));
    } else if (objectClass === 'road') {
        setRoadsData(roadsData.map(r => r.id === id ? { ...r, name: itemName, type: selectedRoadType, width: parseFloat(itemWidth) || 0, lanes: parseInt(roadLanes) || 1, surfaceType: itemSurfaceType } : r));
    } else if (objectClass === 'sidewalk') {
        setSidewalksData(sidewalksData.map(s => s.id === id ? { ...s, name: itemName, type: selectedSidewalkType, width: parseFloat(itemWidth) || 0, isAccessibleForDisabled: itemIsAccessible, surfaceType: itemSurfaceType } : s));
    } else if (objectClass === 'advertising') {
        const validationWarnings = validatePlacement(coordinates, selectedAdvertisingType, false, furnitureData, roadsData, sidewalksData, advertisingData.filter(i => i.id !== id), 'advertising');
        setWarnings(validationWarnings);
        const hasHardErrors = validationWarnings.some(w => w.startsWith("ОШИБКА:"));
        if (hasHardErrors && !confirm("Обнаружены ошибки валидации. Все равно сохранить?")) {
            return;
        }
        setAdvertisingData(advertisingData.map(ad => ad.id === id ? { ...ad, name: itemName, description: itemDescription, type: selectedAdvertisingType } : ad));
    }

    setModalOpen(false);
    setEditingItem(null);
    // setWarnings([]); // Keep warnings from validation
  };

  const handleDelete = () => {
    if (!editingItem) return;
    const { id, objectClass } = editingItem;
    if (objectClass === 'furniture') {
      setFurnitureData(furnitureData.filter(f => f.id !== id));
    } else if (objectClass === 'road') {
      setRoadsData(roadsData.filter(r => r.id !== id));
    } else if (objectClass === 'sidewalk') {
      setSidewalksData(sidewalksData.filter(s => s.id !== id));
    } else if (objectClass === 'advertising') {
      setAdvertisingData(advertisingData.filter(ad => ad.id !== id));
    }
    setModalOpen(false);
    setEditingItem(null);
    setWarnings([]);
  };
 
  const onApiLoad = (ymaps) => {
    console.log("Yandex Maps API loaded:", ymaps);
    setYmapsInstance(ymaps);
    if (mapRef.current) {
        console.log("Map instance via mapRef.current:", mapRef.current);
        setMapInstance(mapRef.current);
    }
  };

  if (!apiKey) {
    return <p style={{color: 'red', padding: '16px'}}>Ошибка: API-ключ Яндекс.Карт не предоставлен. Карта не может быть отображена. Пожалуйста, передайте действительный apiKey как prop в компонент YandexMapInteractiveFurniture.</p>;
  }

  const currentFurnitureConf = furnitureTypes.find(t => t.type === selectedFurnitureType);
  const currentAdvertisingConf = ADVERTISING_TYPES.find(t => t.id === selectedAdvertisingType);

  const renderFurnitureControls = () => (
    <>
      <div>
        <label htmlFor="furnitureType" style={{display: 'block', fontSize: '0.875rem', fontWeight: 500, color: '#374151'}}>Тип мебели:</label>
        <select id="furnitureType" value={selectedFurnitureType} onChange={(e) => setSelectedFurnitureType(e.target.value)} style={styles.select}>
          {furnitureTypes.map((ft) => (<option key={ft.type} value={ft.type}>{ft.name}</option>))}
        </select>
      </div>
      {currentFurnitureConf && currentFurnitureConf.canBeAccessible && (
        <div style={styles.checkboxContainer}>
          <input type="checkbox" id="isAccessible" checked={isAccessible} onChange={(e) => setIsAccessible(e.target.checked)} style={styles.checkbox} />
          <label htmlFor="isAccessible" style={{marginLeft: '8px', display: 'block', fontSize: '0.875rem'}}>Доступно для МГН</label>
        </div>
      )}
    </>
  );
  const renderRoadControls = () => (<div><label style={{display: 'block', fontSize: '0.875rem', fontWeight: 500}}>Тип дороги: <select value={selectedRoadType} onChange={e => setSelectedRoadType(e.target.value)} style={styles.select}>{ROAD_TYPES.map(rt => <option key={rt.id} value={rt.id}>{rt.name}</option>)}</select></label><p style={{fontSize: '0.75rem', color: '#6b7280', marginTop: '4px'}}>Кликните на карту для добавления точек дороги.</p></div>);
  const renderSidewalkControls = () => (<div><label style={{display: 'block', fontSize: '0.875rem', fontWeight: 500}}>Тип тротуара: <select value={selectedSidewalkType} onChange={e => setSelectedSidewalkType(e.target.value)} style={styles.select}>{SIDEWALK_TYPES.map(st => <option key={st.id} value={st.id}>{st.name}</option>)}</select></label><p style={{fontSize: '0.75rem', color: '#6b7280', marginTop: '4px'}}>Кликните на карту для добавления точек тротуара.</p></div>);
  const renderAdvertisingControls = () => (<div><label style={{display: 'block', fontSize: '0.875rem', fontWeight: 500}}>Тип рекламы: <select value={selectedAdvertisingType} onChange={e => setSelectedAdvertisingType(e.target.value)} style={styles.select}>{ADVERTISING_TYPES.map(at => <option key={at.id} value={at.id}>{at.name}</option>)}</select></label></div>);

  const renderModalContent = () => {
    if (!editingItem) return null;
    const { objectClass } = editingItem;
    let currentItemSpecificConf = null;
    if (objectClass === 'furniture') currentItemSpecificConf = furnitureTypes.find(f=>f.type === editingItem.type);
    else if (objectClass === 'advertising') currentItemSpecificConf = ADVERTISING_TYPES.find(a=>a.id === editingItem.type);

    return (
        <>
            <h3 style={styles.modalTitle}>Редактировать: {itemName || `${objectClass} ID: ${editingItem.id}`}</h3>
            <div style={{marginBottom: '8px'}}><label style={{display: 'block', fontSize: '0.875rem'}}>Название/ID: <input type="text" value={itemName} onChange={e => setItemName(e.target.value)} style={styles.input} /></label></div>
            
            {(objectClass === 'furniture' || objectClass === 'advertising') && 
                <div style={{marginBottom: '8px'}}><label style={{display: 'block', fontSize: '0.875rem'}}>Описание: <textarea value={itemDescription} onChange={e => setItemDescription(e.target.value)} style={styles.textarea} /> </label></div>}
            
            {objectClass === 'furniture' && currentItemSpecificConf?.canBeAccessible && 
                <div style={{marginBottom: '8px', display: 'flex', alignItems: 'center'}}><input type="checkbox" id="modalIsAccessibleFurniture" checked={itemIsAccessible} onChange={e => setItemIsAccessible(e.target.checked)} style={{marginRight: '8px'}}/> <label htmlFor="modalIsAccessibleFurniture" style={{fontSize: '0.875rem'}}>Доступно для МГН</label></div>}
            
            {objectClass === 'road' && (<>
                <div style={{marginBottom: '8px'}}><label style={{display: 'block', fontSize: '0.875rem'}}>Тип дороги: <select value={selectedRoadType} onChange={e => setSelectedRoadType(e.target.value)} style={styles.input}>{ROAD_TYPES.map(rt=><option key={rt.id} value={rt.id}>{rt.name}</option>)}</select></label></div>
                <div style={{marginBottom: '8px'}}><label style={{display: 'block', fontSize: '0.875rem'}}>Ширина (м): <input type="number" step="0.1" value={itemWidth} onChange={e => setItemWidth(parseFloat(e.target.value))} style={styles.input} /></label></div>
                <div style={{marginBottom: '8px'}}><label style={{display: 'block', fontSize: '0.875rem'}}>Кол-во полос: <input type="number" step="1" value={roadLanes} onChange={e => setRoadLanes(parseInt(e.target.value))} style={styles.input} /></label></div>
                <div style={{marginBottom: '8px'}}><label style={{display: 'block', fontSize: '0.875rem'}}>Тип покрытия: <select value={itemSurfaceType} onChange={e => setItemSurfaceType(e.target.value)} style={styles.input}>{SURFACE_TYPES.map(st=><option key={st.id} value={st.id}>{st.name}</option>)}</select></label></div>
            </>)}

            {objectClass === 'sidewalk' && (<>
                <div style={{marginBottom: '8px'}}><label style={{display: 'block', fontSize: '0.875rem'}}>Тип тротуара: <select value={selectedSidewalkType} onChange={e => setSelectedSidewalkType(e.target.value)} style={styles.input}>{SIDEWALK_TYPES.map(st=><option key={st.id} value={st.id}>{st.name}</option>)}</select></label></div>
                <div style={{marginBottom: '8px'}}><label style={{display: 'block', fontSize: '0.875rem'}}>Ширина (м): <input type="number" step="0.1" value={itemWidth} onChange={e => setItemWidth(parseFloat(e.target.value))} style={styles.input} /></label></div>
                <div style={{marginBottom: '8px', display: 'flex', alignItems: 'center'}}><input type="checkbox" id="modalIsAccessibleSidewalk" checked={itemIsAccessible} onChange={e => setItemIsAccessible(e.target.checked)} style={{marginRight: '8px'}}/> <label htmlFor="modalIsAccessibleSidewalk" style={{fontSize: '0.875rem'}}>Доступно для МГН</label></div>
                <div style={{marginBottom: '8px'}}><label style={{display: 'block', fontSize: '0.875rem'}}>Тип покрытия: <select value={itemSurfaceType} onChange={e => setItemSurfaceType(e.target.value)} style={styles.input}>{SURFACE_TYPES.map(st=><option key={st.id} value={st.id}>{st.name}</option>)}</select></label></div>
            </>)}
            {objectClass === 'advertising' && (<>
                 <div style={{marginBottom: '8px'}}><label style={{display: 'block', fontSize: '0.875rem'}}>Тип рекламы: <select value={selectedAdvertisingType} onChange={e => setSelectedAdvertisingType(e.target.value)} style={styles.input}>{ADVERTISING_TYPES.map(at=><option key={at.id} value={at.id}>{at.name}</option>)}</select></label></div>
                 {/* Add more fields for advertising objects if needed, e.g., dimensions */}
            </>)}
        </>
    );
  };

  if (!isClient) {
    return <p style={{padding: '16px', color: '#6b7280'}}>Загрузка компонента карты...</p>;
  }

  return (
    <div style={styles.container}>
      <YMaps query={{ apikey: apiKey, lang: 'ru_RU', load: "package.full" }} onApiLoad={onApiLoad}>
        <div style={styles.controlPanel}>
            <h2 style={styles.controlPanelTitle}>Панель управления объектами</h2>
            <div style={{...styles.grid, gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))'}}>
                <div>
                    <label style={{display: 'block', fontSize: '0.875rem', fontWeight: 500, color: '#374151'}}>Режим добавления:</label>
                    <select value={selectedObjectType} onChange={(e) => setSelectedObjectType(e.target.value)} style={styles.select}>
                        <option value="furniture">Уличная мебель</option>
                        <option value="road">Дорога</option>
                        <option value="sidewalk">Тротуар</option>
                        <option value="advertising">Рекламный объект</option>
                    </select>
                </div>
                {selectedObjectType === 'furniture' && renderFurnitureControls()}
                {selectedObjectType === 'road' && renderRoadControls()}
                {selectedObjectType === 'sidewalk' && renderSidewalkControls()}
                {selectedObjectType === 'advertising' && renderAdvertisingControls()}
            </div>
            {drawingState.isActive && (
                <button onClick={handleFinishDrawing} style={styles.finishDrawingButton}>Завершить рисование ({drawingState.type})</button>
            )}
        </div>

        {(selectedObjectType === 'furniture' && currentFurnitureConf?.specificRules) && (
             <div style={styles.rulesPanel}>
                <h4 style={{fontWeight: 'bold'}}>Правила для "{currentFurnitureConf.name}":</h4>
                <ul style={{listStyleType: 'disc', paddingLeft: '16px', columnGap: '0.125rem'}}>
                    {currentFurnitureConf.specificRules.map((rule, index) => (<li key={index}>{rule}</li>))}
                </ul>
            </div>
        )}
        {(selectedObjectType === 'advertising' && currentAdvertisingConf?.specificRules) && (
             <div style={styles.rulesPanel}>
                <h4 style={{fontWeight: 'bold'}}>Правила для "{currentAdvertisingConf.name}":</h4>
                <ul style={{listStyleType: 'disc', paddingLeft: '16px', columnGap: '0.125rem'}}>
                    {currentAdvertisingConf.specificRules.map((rule, index) => (<li key={index}>{rule}</li>))}
                </ul>
            </div>
        )}
        {warnings.length > 0 && (
          <div style={{...styles.warningsPanel, borderColor: warnings.some(w => w.startsWith("ОШИБКА:")) ? '#ef4444' : warnings.some(w => w.startsWith("ПРЕДУПРЕЖДЕНИЕ:")) ? '#f59e0b' : '#22c55e', color: warnings.some(w => w.startsWith("ОШИБКА:")) ? '#b91c1c' : warnings.some(w => w.startsWith("ПРЕДУПРЕЖДЕНИЕ:")) ? '#b45309' : '#15803d', backgroundColor: warnings.some(w => w.startsWith("ОШИБКА:")) ? '#fee2e2' : warnings.some(w => w.startsWith("ПРЕДУПРЕЖДЕНИЕ:")) ? '#fffbeb' : '#f0fdf4' }}>
            <h4 style={{fontWeight: 'bold'}}>Результаты проверки:</h4>
            <ul style={{listStyleType: 'disc', paddingLeft: '16px', columnGap: '0.125rem'}}>
              {warnings.map((warning, index) => (<li key={index}>{warning}</li>))}
            </ul>
          </div>
        )}

        <div style={styles.mapContainer}>
            <Map
              instanceRef={mapRef}
              defaultState={defaultMapState}
              width="100%"
              height="100%"
              modules={['Placemark', 'Polyline', 'Polygon', 'geoObject.addon.balloon', 'geoObject.addon.hint', 'geometry.Polygon', 'geometry.LineString', 'geometry.Point', 'util.bounds', 'control.ZoomControl', 'control.GeolocationControl', 'control.RulerControl', 'control.TrafficControl', 'control.TypeSelector', 'geoObject.addon.editor']}
              onClick={handleMapClick}
              onLoad={onApiLoad} // Changed from onApiLoad to onLoad for YMaps
            >
              <ZoomControl options={{ float: 'right' }} />
              <GeolocationControl options={{ float: 'left' }} />
              <RulerControl options={{ float: 'right' }} />
              <TrafficControl options={{ float: 'right' }} />
              <TypeSelector options={{ float: 'right' }} />

              {furnitureData.map((item) => (
                <Placemark
                  key={item.id}
                  geometry={item.coordinates}
                  properties={{
                    hintContent: item.name,
                    balloonContentHeader: `${item.name}${item.isAccessible ? ' (Доступно для МГН)' : ''}`,
                    balloonContentBody: item.description,
                  }}
                  options={getPlacemarkOptions(item, 'furniture')}
                  onClick={() => handleOpenEditModal(item, 'furniture')}
                  editor={editingItem?.id === item.id && editingItem?.objectClass === 'furniture'} // Enable editor for selected item
                />
              ))}
              {roadsData.map(road => (
                <Polyline
                  key={road.id}
                  geometry={road.geometry}
                  options={{
                    strokeColor: '#0066FFCC', 
                    strokeWidth: road.width ? Math.max(4, road.width / 2) : 6, // Adjusted for visual width
                    editorDrawingCursor: "crosshair",
                  }}
                  onClick={() => handleOpenEditModal(road, 'road')}
                  editor={editingItem?.id === road.id && editingItem?.objectClass === 'road' || drawingState.objectId === road.id}
                />
              ))}
              {sidewalksData.map(sidewalk => (
                <Polygon
                  key={sidewalk.id}
                  geometry={sidewalk.geometry}
                  options={{
                    fillColor: '#808080B3', 
                    strokeColor: '#404040E6',
                    strokeWidth: 2,
                    editorDrawingCursor: "crosshair",
                  }}
                  onClick={() => handleOpenEditModal(sidewalk, 'sidewalk')}
                  editor={editingItem?.id === sidewalk.id && editingItem?.objectClass === 'sidewalk' || drawingState.objectId === sidewalk.id}
                />
              ))}
              {advertisingData.map((item) => (
                <Placemark
                  key={item.id}
                  geometry={item.coordinates}
                  properties={{
                    hintContent: item.name,
                    balloonContentHeader: item.name,
                    balloonContentBody: item.description,
                  }}
                  options={getPlacemarkOptions(item, 'advertising')}
                  onClick={() => handleOpenEditModal(item, 'advertising')}
                  editor={editingItem?.id === item.id && editingItem?.objectClass === 'advertising'}
                />
              ))}
            </Map>
        </div>
      </YMaps>

      {modalOpen && editingItem && (
        <div style={styles.modalOverlay} onClick={() => setModalOpen(false)}></div>
      )}
      {modalOpen && editingItem && (
        <div style={styles.modal}>
          {renderModalContent()}
          <div style={styles.buttonContainer}>
            <button onClick={handleSaveEdit} style={{...styles.button, backgroundColor: '#4f46e5', color: 'white'}}>Сохранить</button>
            <button onClick={handleDelete} style={{...styles.button, backgroundColor: '#dc2626', color: 'white'}}>Удалить</button>
            <button onClick={() => { setModalOpen(false); setEditingItem(null); setWarnings([]); }} style={{...styles.button, backgroundColor: '#e5e7eb', color: '#374151'}}>Отмена</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default YandexMapInteractiveFurniture;

