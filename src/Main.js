import React, { useEffect, useRef, useState } from "react";
/*global google*/
const startMap = () => {};
startMap();

function Main() {
  const mapEle = useRef(null);
  const searchBoxRef = useRef(null);
  const maps = useRef(null);
  const [search, setSearch] = useState("Miami");
  const [coordinates, setCoordinates] = useState({
    lat: 41.3977381,
    lng: 2.190471916,
  })
  const [breweryLocations, setBreweryLocations] = useState([])

  useEffect(() => {
    if (mapEle.current) {
      
      const map = new google.maps.Map(mapEle.current, {
        zoom: 5,
        center: coordinates,
      });
      maps.current = map;
    }
    if (searchBoxRef.current) {
      //this that shows on map
      const input = searchBoxRef.current;
      const ac = new google.maps.places.Autocomplete(input, {
        types: ["geocode"], //by city
      });
      console.log(ac)
      console.log(google)
      google.maps.event.addListener(ac, 'place_changed', function (e) {
        setSearch(ac.getPlace().formatted_address)
        //     console.log(ac)
        // console.log(ac.getPlace(), e, ac.getPlace().geometry.location.lat(), ac.getPlace().geometry.location.lng())
        setCoordinates({
          lat:ac.getPlace().geometry.location.lat(),
          lng:ac.getPlace().geometry.location.lng()
        })
      })
      // set on place_changed listener, like: ac.addListener("place_changed")
      // use result to get lat/lng (in event listener)
      // pass lat/lng to brewery API to get list of breweries
      // use list of breweries to get bounds for map (see google.maps.LatLngBounds part of Google Maps example)
      // use list to create markers to add to map.
    }
  }, [coordinates]);

  const handlesSearchInput = (e) => {
    setSearch(e.target.value);
  };
  console.log(search)
  //
  const updatesSearch = (e) => {
    e.preventDefault(); //prevents from submitting
    console.log(search);
    // setSearch(search); //updates search with each keystroke
    //axios call
    //setBrelocat..
    
  };
  return (
    <div>
      <form onSubmit={updatesSearch}>
        <input
          type="text"
          name="search"
          // autoComplete="off"
          placeholder="Search by city or zipcode"
          // value={search}
          ref={searchBoxRef} //connects map
          onChange={(e) => handlesSearchInput(e)}
          // onChange= (e) => setSearch(e.target.value)
        />

        <button type="submit">Search</button>
      </form>
      <div style={{ height: "400px", width: "50vw" }} ref={mapEle}></div>
    </div>

    // <div>
    //   <input type="text" ref={searchBoxRef} onChange={(e) => setPlace(e.target.value)} />
    // </div>
  );
}

export default Main;
