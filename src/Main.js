import React, { useEffect, useRef, useState } from "react";
/*global google*/
const startMap = () => {};
startMap();

function Main() {
  const mapEle = useRef(null);
  const searchBoxRef = useRef(null);
  const maps = useRef(null);
  const [search, setSearch] = useState("Miami")

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

  const handlesSearchInput = (e)=> {
    setSearch(e.target.value)
  }
  // console.log(search)
//
const updatesSearch = (e) => {
e.preventDefault()//prevents from submitting
console.log(search)
// setSearch(e.target.value)//updates search with each keystroke
}
  return (
    <div>
      <form  onSubmit={updatesSearch}>
            <input 
            type="text" 
            name="search"
            // autoComplete="off"
            placeholder="Search by city or zipcode"
            // value={search}
            ref={searchBoxRef} //connects map
            onChange={e=>handlesSearchInput(e)} 
            // onChange= (e) => setSearch(e.target.value)
            />
        
            <button type="submit">Search</button> 
      </form> 
      <div style={{ height: '400px', width: '50vw' }} ref={mapEle}></div>
    </div>
    
    // <div>
    //   <input type="text" ref={searchBoxRef} onChange={(e) => setPlace(e.target.value)} />
    // </div>
  );
}

export default Main;
