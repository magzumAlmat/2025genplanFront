// 'use client' 
// import UserLogin from "@/components/login"
// import Header from "@/components/header"
// import Home from "@/components/home"
// import Profile from "@/components/profile"
// import jwtDecode from 'jwt-decode'

// import { authorize } from '@/store/slices/authSlice'
// import { useEffect, useState } from "react";
// import { useDispatch,useSelector } from "react-redux";
// import { getBannerByCompanyIdAction, getUserInfo,getAllBanners } from "@/store/slices/authSlice";
// import { YMaps, Map, Placemark, SearchControl, TypeSelector } from "@pbe/react-yandex-maps";

// import { useRef } from "react"
// import React from "react"
// import Autocomplete from "@mui/material/Autocomplete";
// import TextField from "@mui/material/TextField";

// // const API_KEY = "d11ae1cd-cdbf-4395-a8b0-19c5b6584b84";
// // const API_KEY = "b83b032d-0418-41de-bbaa-b028ca3fdb9b"

// const center = [43.238566, 76.899828];

// const images = [...Array(5)].map((n, i) => {
//   const letter = String.fromCharCode(i + 97);
//   return `https://img.icons8.com/ios-filled/2x/marker-${letter}.png`;
// });

// export default function Layout(user) {

//     const host ='http://localhost:8000'
//     const token=localStorage.getItem('token')
//     const TOKEN = useSelector((state) => state.auth.authToken);
//     const CurrentCompany = useSelector((state) => state.auth.currentCompany);
//     const CurrentUSER = useSelector((state) => state.auth.currentUser);
//     let decodedToken=jwtDecode(token)
//     console.log('decodec token from home',decodedToken)
//     const CompanyId=decodedToken.companyId
  
//     const banners= useSelector((state) => state.auth.bannersById);
//     const allBanners= useSelector((state) => state.auth.allBanners);
//     console.log('banners==',banners)
//     const bannersArray=[]
//     bannersArray.push(...allBanners)
//     console.log('1 bannersArray=',bannersArray)
//     const [bannersState, setBannersState] = useState([])
//     console.log('2 Current company from home=', CurrentCompany)
//     console.log('3 Current USER=-----', CurrentUSER)
//     const dispatch = useDispatch(user);
//     const [markerData, setMarkerData] = useState([]);
//   const [map, setMap] = useState(null);

//   console.log('markerPositions=======', markerData);

//   const [selectedMonth, setSelectedMonth] = useState('all');

//   const [selectedBanner, setSelectedBanner] = useState(null);


//   const handleMonthChange = (event) => {
//     setSelectedMonth(event.target.value);
//   };

  
//   const filteredBanners = selectedMonth === 'all'
//   ? bannersArray
//   : bannersArray.filter(banner => {
//       const bannerMonth = new Date(banner.createdDate).getMonth() + 1; // Months are zero-based
//       return bannerMonth.toString() === selectedMonth;
//     });



     
//       const [mapKey, setMapKey] = useState(0); // Add a state variable for re-render

//       const handleClearMarkers = () => {
//         if (map) {
//           var markersLayer = DG.featureGroup().addTo(map);
    
//           // Clear existing markers
//           markersLayer.clearLayers();
//           setMarkerData([]); // Clear marker data in state
          
//           setMapKey((prevKey) => prevKey + 1); // Update map key to trigger re-render
//         }
//       };


//       const handleMarkerClick = (banner) => {
//         setSelectedBanner(banner);
//       };


   



//       useEffect(() => {
//         // Dispatch actions to get banners when the component mounts
//         dispatch(getAllBanners());
//       }, [dispatch]); // Ensure that dispatch is added as a dependency
    
//       useEffect(() => {
//         if (map) {
//           // Clear existing markers
//           map.geoObjects.removeAll();
    
          
//           // Display only the banners created in the selected month
//           filteredBanners.forEach((data) => {
//             const { bannerLatitude, bannerLongitude, title } = data;
    
//             // Create a Placemark for each banner
//             const placemark = new window.ymaps.Placemark(
//               [parseFloat(bannerLatitude), parseFloat(bannerLongitude)],
//               {
//                 iconContent: title,
//               },
//               {
//                 preset: "islands#blueCircleDotIconWithCaption",
//               }
//             );
    
//             // Add the Placemark to the map
//             map.geoObjects.add(placemark);
//           });
//         }
//       }, [selectedMonth, bannersArray, map]);
    

      
//     return (

//       <>
//       <Header loggedIn={true} />
      
//       <YMaps query={{ load: "package.full" }} >
//     <Map
//       state={{
//         center,
//         zoom: 18,
//         controls: []
//       }}
//       width="100vw"
//       height="80vh"
//     >
//      {filteredBanners.map((banner) => (
//             <Placemark
//               key={banner.id} // Assuming each banner has a unique ID
//               geometry={[parseFloat(banner.bannerLatitude), parseFloat(banner.bannerLongitude)]}
//               properties={{
//                 iconContent: banner.bannerNumber,
//               }}
//               options={{
//                 preset: "islands#blueCircleDotIconWithCaption",
//               }}
//               onClick={() => handleMarkerClick(banner)} // Set the click handler
             
//             />
//           ))}
//     </Map>
//   </YMaps>

//   {selectedBanner && (
//         <div>
//           <p>Banner Number: {selectedBanner.bannerNumber}</p>
//           {/* Add other banner details as needed */}
//         </div>
//       )}




//       <div>
//         <label htmlFor="monthFilter">Filter by Month: </label>
//         <select id="monthFilter" value={selectedMonth} onChange={handleMonthChange}>
//           <option value="all">All Months</option>
//           <option value="1">Январь 2023</option>
//           <option value="2">Февраль 2023</option>
//           <option value="3">Март 2023</option>
//           <option value="4">Апрель 2023</option>
//           <option value="5">Май 2023</option>
//           <option value="6">Июнь 2023</option>
//           <option value="7">Июль 2023</option>
//           <option value="8">Август 2023</option>
//           <option value="9">Сентябрь 2023</option>
//           <option value="10">Октябрь 2023</option>
//           <option value="11">Ноябрь 2023</option>
//           <option value="12">Декабрь 2023</option>
//         </select>
//         {/* <button onClick={handleClearMarkers}>Clear Markers</button> */}
//       </div>
//       <Home />
//     </>
//     )
// }




// //ymaps-2-1-79-map-copyrights-promo





'use client';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getAllBanners } from '@/store/slices/authSlice';
import { YMaps, Map, Placemark } from '@pbe/react-yandex-maps';
import Header from '@/components/header';
import Home from '@/components/home';
import jwtDecode from 'jwt-decode';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

const center = [43.238566, 76.899828];

export default function Layout() {
  const router = useRouter();
  const [token, setToken] = useState(null);
  const host = process.env.NEXT_PUBLIC_HOST;

  useEffect(() => {
    const storedToken = typeof window !== "undefined" ? localStorage.getItem("token") : null;
    setToken(storedToken);
    if (!storedToken) {
      router.push("/login");
    }
  }, [router]);

  const decodedToken = token ? jwtDecode(token) : {};
  const companyId = decodedToken.companyId;

  const allBanners = useSelector((state) => state.auth.allBanners) || [];
  const dispatch = useDispatch();

  const [selectedMonth, setSelectedMonth] = useState('all');
  const [selectedBanner, setSelectedBanner] = useState(null);

  const filteredBanners = selectedMonth === 'all'
    ? allBanners
    : allBanners.filter(banner => {
        const bannerMonth = new Date(banner.createdDate).getMonth() + 1;
        return bannerMonth.toString() === selectedMonth;
      });

  const handleMonthChange = (event) => {
    setSelectedMonth(event.target.value);
    setSelectedBanner(null); // Сбрасываем выбранный баннер при смене месяца
  };

  const handleMarkerClick = (banner) => {
    setSelectedBanner(banner);
  };

  useEffect(() => {
    dispatch(getAllBanners());
  }, [dispatch]);

  return (
    <>
      <Header loggedIn={true} />
      <YMaps query={{ load: "package.full" }}>
        <Map
          state={{
            center,
            zoom: 18,
            controls: [],
          }}
          width="100vw"
          height="80vh"
        >
          {filteredBanners.map((banner) => (
            // <Placemark
            //   key={banner.id}
            //   geometry={[parseFloat(banner.bannerLatitude), parseFloat(banner.bannerLongitude)]}
            //   properties={{
            //     balloonContent: `
            //       <div style="padding: 10px; max-width: 200px;">
            //         <h3>${banner.bannerNumber}</h3>
            //         <p><strong>Название:</strong> ${banner.title || 'Нет названия'}</p>
            //         <p><strong>Адрес:</strong> ${banner.bannerAddress}</p>
            //         <a href="/banners/${banner.id}" style="color: blue; text-decoration: underline;">Перейти к баннеру</a>
            //       </div>
            //     `,
            //     iconContent: banner.bannerNumber,
            //   }}
            //   options={{
            //     preset: 'islands#blueCircleDotIconWithCaption',
            //     balloonCloseButton: true,
            //     hideIconOnBalloonOpen: false,
            //   }}
            //   onClick={() => handleMarkerClick(banner)}
            // />

            <Placemark
              key={banner.id} // Assuming each banner has a unique ID
              geometry={[
                parseFloat(banner.bannerLatitude),
                parseFloat(banner.bannerLongitude),
              ]}
              properties={{
                balloonContent: `
                  <div style="padding: 10px; max-width: 200px;">
                    <h3>${banner.bannerNumber}</h3>
                    <p><strong>Название:</strong> ${
                      banner.title || "Нет названия"
                    }</p>
                    <p><strong>Адрес:</strong> ${banner.bannerAddress}</p>
                    <a href="/banner/${
                      banner.id
                    }" style="color: blue; text-decoration: underline;">Перейти к баннеру</a>
                  </div>
                `,
                iconContent: banner.bannerNumber,
              }}
              options={{
                preset: "islands#blueCircleDotIconWithCaption",
                balloonCloseButton: true,
                hideIconOnBalloonOpen: false,
              }}
              onClick={() => handleMarkerClick(banner)} // Set the click handler
            />
          ))}
        </Map>
      </YMaps>

      {/* {selectedBanner && (
        <div style={{ padding: '20px', textAlign: 'center' }}>
          <h3>Выбранный баннер: {selectedBanner.bannerNumber}</h3>
          <p>Название: {selectedBanner.title || 'Нет названия'}</p>
          <p>Адрес: {selectedBanner.bannerAddress}</p>
          <Link href={`/banners/${selectedBanner.id}`}>
            <a style={{ color: 'blue', textDecoration: 'underline' }}>Перейти к баннеру</a>
          </Link>
        </div>
      )} */}

      {selectedBanner && (
        <div>
          <p>Banner Number: {selectedBanner.bannerNumber}</p>
          {/* Add other banner details as needed */}
        </div>
      )}
      <div style={{ padding: "20px", textAlign: "center" }}>
        <label htmlFor="monthFilter">Фильтр по месяцам: </label>
        <select
          id="monthFilter"
          value={selectedMonth}
          onChange={handleMonthChange}
        >
          <option value="all">Все месяцы</option>
          <option value="1">Январь 2025</option>
          <option value="2">Февраль 2025</option>
          <option value="3">Март 2025</option>
          <option value="4">Апрель 2025</option>
          <option value="5">Май 2025</option>
          <option value="6">Июнь 2025</option>
          <option value="7">Июль 2025</option>
          <option value="8">Август 2025</option>
          <option value="9">Сентябрь 2025</option>
          <option value="10">Октябрь 2025</option>
          <option value="11">Ноябрь 2025</option>
          <option value="12">Декабрь 2025</option>
        </select>
      </div>

      <Home />
    </>
  );
}
