import React, { useEffect, useRef, useState } from "react";
import axios from "axios";
/*global google*/
const startMap = () => {};
startMap();

function Main() {
  const mapEle = useRef(null);
  const searchBoxRef = useRef(null);
  const maps = useRef(null);
  const [search, setSearch] = useState("Miami");
  const [brewery, setBrewery] = useState({});
  const [coordinates, setCoordinates] = useState({
    lat: 41.3977381,
    lng: 2.190471916,
  });
  const [breweryLocations, setBreweryLocations] = useState([]);
  useEffect(() => {
    axios
      .get(
        `http://cors-anywhere.herokuapp.com/https://maps.googleapis.com/maps/api/place/textsearch/json?query=brewery+in+${search}&key=AIzaSyCnpg39_zOHWO0uvnnE842cs4RYy7da04c`
      )
      .then((res) => {
        console.log(res);
        setBreweryLocations(res.data.results);
      });
  }, [coordinates]);

  const MapView = () => {
    if (mapEle.current) {
      const map = new google.maps.Map(mapEle.current, {
        zoom: 12,
        center: coordinates,
      });
      maps.current = map;
      for (let brewery of breweryLocations) {
        var marker = new google.maps.Marker({
          position: brewery.geometry.location,
          title: brewery.name,
          // icon: "🍺",
        });

        marker.addListener("click", (e) => {
          console.log("huhhh", e, this, brewery.name);
          setBrewery(brewery);
        });
        marker.setMap(map);
      }
    }
  };
  if (searchBoxRef.current) {
    //this that shows on map
    const input = searchBoxRef.current;
    const ac = new google.maps.places.Autocomplete(input, {
      types: ["geocode"], //by city
    });
    // console.log(ac)
    // console.log(google)
    google.maps.event.addListener(ac, "place_changed", function (e) {
      setSearch(ac.getPlace().formatted_address);
      //     console.log(ac)
      // console.log(ac.getPlace(), e, ac.getPlace().geometry.location.lat(), ac.getPlace().geometry.location.lng())
      setCoordinates({
        lat: ac.getPlace().geometry.location.lat(),
        lng: ac.getPlace().geometry.location.lng(),
      });
    });
  }

  const getBreweryData = async () => {
    let res = await fetch("");
    //  console.log(response)
  };
  getBreweryData();
  const handlesSearchInput = (e) => {
    setSearch(e.target.value);
  };
  // console.log(search)
  const updatesSearch = (e) => {
    e.preventDefault();
    // setSearch(search); //updates search with each keystroke
    //axios call
    //setBrelocat..
  };
  {
    MapView();
  }
  return (
    <div>
      <form onSubmit={updatesSearch}>
        <input
          type="text"
          name="search"
          placeholder="Search by city or zipcode"
          // value={search}
          ref={searchBoxRef} //connects map
          onChange={(e) => handlesSearchInput(e)}
        />
        <button type="submit">Search</button>
      </form>
      <div style={{ height: "400px", width: "50vw" }} ref={mapEle}></div>
      <h1>{brewery.name}</h1>
      <img
        src={`https://maps.googleapis.com/maps/api/place/photo?photoreference=${brewery.photos?.[0].photo_reference}&sensor=false&maxheight=1500&maxwidth=1500&key=AIzaSyCnpg39_zOHWO0uvnnE842cs4RYy7da04c`}
      />
    </div>
  );
}

//use the places autocomplete to get a place and get the coordinates of said place and use the coordinates as an input in the brewery API to get a list of places

export default Main;
