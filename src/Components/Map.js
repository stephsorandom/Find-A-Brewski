// import React from 'react';
// import GoogleMapReact from 'google-map-react';

// function Map(props) {
//     const Map = ({ eventData, center, zoom }) => {
//         const [locationInfo, setLocationInfo] = useState(null);
      
//         const markers = eventData.map((eachEvent) => {
//           if (eachEvent.categories[0].id === 8) {
//             return (
//               <LocationMarker
//                 lat={eachEvent.geometries[0].coordinates[1]}
//                 lng={eachEvent.geometries[0].coordinates[0]}
//                 onClick={() =>
//                   setLocationInfo({ id: eachEvent.id, title: eachEvent.title })
//                 }
//               />
//             );
//           }
//           return null;
//         });
//     return (
//         <div>
//             <GoogleMapReact
//                 bootstrapURLKeys={{ key: process.env.AIzaSyCnpg39_zOHWO0uvnnE842cs4RYy7da04c}}
//                 defaultCenter={center}
//                 defaultZoom={zoom} >
//                 {markers}
//             </GoogleMapReact>
//       {locationInfo && <LocationInfoBox info={locationInfo} />}

//         </div>
//     );
// }
























// const Map = ({ eventData, center, zoom }) => {
//   const [locationInfo, setLocationInfo] = useState(null);

//   const markers = eventData.map((eachEvent) => {
//     if (eachEvent.categories[0].id === 8) {
//       return (
//         <LocationMarker
//           lat={eachEvent.geometries[0].coordinates[1]}
//           lng={eachEvent.geometries[0].coordinates[0]}
//           onClick={() =>
//             setLocationInfo({ id: eachEvent.id, title: eachEvent.title })
//           }
//         />
//       );
//     }
//     return null;
//   });
//   return (
//     <div className="map">
//       <GoogleMapReact
//         bootstrapURLKeys={{ key: process.env.REACT_APP_GOOGLE_KEY }}
//         defaultCenter={center}
//         defaultZoom={zoom}
//       >
//         {markers}
//       </GoogleMapReact>
//       {locationInfo && <LocationInfoBox info={locationInfo} />}
//     </div>
//   );
// };

// Map.defaultProps = {
//   center: {
//     lat: 42.3265,
//     lng: -122.8756,
//   },

//   zoom: 6,
// };
export default Map;