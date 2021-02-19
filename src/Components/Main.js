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
    lat: 25.761681,
    lng: -80.191788,
  });
  const [breweryLocations, setBreweryLocations] = useState([]);
  useEffect(() => {
    axios
      .get(
        `https://iron-cors-anywhere.herokuapp.com/https://maps.googleapis.com/maps/api/place/textsearch/json?query=brewery+in+${search}&key=AIzaSyCnpg39_zOHWO0uvnnE842cs4RYy7da04c`
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
      {/* map is drawn and styled */}
      <div
        style={{
          height: "500px",
          width: "90vw",
          position: "center",
          marginLeft: "55px",
          marginTop: "100px",
        }}
        ref={mapEle}
      ></div>
      {/* searchbox is drawn under map */}
      <form
        style={{ display: "flex", justifyContent: "center" }}
        onSubmit={updatesSearch}
      >
        <input
          style={{ borderRadius: "5px" }}
          type="text"
          name="search"
          placeholder="Search by city or zipcode"
          ref={searchBoxRef} //connects map
          onChange={(e) => handlesSearchInput(e)}
        />
        <button style={{ borderRadius: "5px" }} type="submit">
          Search
        </button>
      </form>

      <div>
        <div>
          <h1>
            {brewery.name} : {brewery.rating}★'s <br />
          </h1>
        </div>
        <div>
          {/* calls Name, Ratings, Address from googleMapPlaces */}

          <h3>
            {brewery.formatted_address}
            <br />
            {brewery.open_now}
          </h3>
        </div>
        <img
          src={`https://maps.googleapis.com/maps/api/place/photo?photoreference=${brewery.photos?.[0].photo_reference}&sensor=false&maxheight=500&maxwidth=500&key=AIzaSyCnpg39_zOHWO0uvnnE842cs4RYy7da04c`}
          alt="establishment "
        />
      </div>
    </div>
  );
}

export default Main;
