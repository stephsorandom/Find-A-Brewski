import React, { useEffect, useRef, useState } from "react";
/*global google*/
const startMap = () => {};
startMap();

function Main() {
  const mapEle = useRef(null);
  const searchBoxRef = useRef(null);
  const maps = useRef(null);
  useEffect(() => {
    if (mapEle.current) {
      const beerfolio = {
        lat: 41.3977381,
        lng: 2.190471916,
      };
      const map = new google.maps.Map(mapEle.current, {
        zoom: 5,
        center: beerfolio,
      });
      maps.current = map
      console.log(map)
    }
    if (searchBoxRef.current) {//this that shows on map
      const input = searchBoxRef.current;
      const ac = new google.maps.places.Autocomplete(input, {
        types: ["(cities)"]//by city
      });
      // set on place_changed listener, like: ac.addListener("place_changed")
      // use result to get lat/lng (in event listener)
      // pass lat/lng to brewery API to get list of breweries
      // use list of breweries to get bounds for map (see google.maps.LatLngBounds part of Google Maps example)
      // use list to create markers to add to map.
    }
  }, []);
  function doSearch() {
    // maps.current.fitBounds(...)
  }
  console.log(mapEle.current);
  return (
    <div>
      <input type="text" ref={searchBoxRef} />
      <div style={{ height: '400px', width: '50vw' }} ref={mapEle}></div>
    </div>
  );
}

export default Main;
