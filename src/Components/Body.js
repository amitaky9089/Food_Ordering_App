import RestrauntCard from "./RestrauntCard";
import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";

const Body = () => {
  // local state variable
  const [listofRest, setlistofRest] = useState([]);
  //fitlered data comes from this.
  const [FilteredlistRestaurant, setFilteredlistRestaurant] = useState([]);
  // local state variable for seachbox

  let [seachText, setsearchText] = useState("");
  // two arguments call back function and dependencies array for useEffect()
  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=26.9124336&lng=75.7872709&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );
    const json = await data.json();
    // console.log(json);
    setlistofRest(
      json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
    setFilteredlistRestaurant(
      json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
  };

  const onlineStatus = useOnlineStatus();
  if (onlineStatus === false) return (
  <h1>Oops! looks like you are offline.
      Check your connection.
  </h1>);
  // Conditional Rendering
  if (listofRest?.length === 0) {
    return <Shimmer />;
  }

  return (
    <div className="body">
      {/* here is our seach box  */}
      <div className="filter flex m-3">
        <div className="search p-1 ">
          <input
            type="text"
            className="search-box border border-solid border-blue-200 rounded-md"
            value={seachText}
            onChange={(e) => {
              setsearchText(e.target.value);
            }}
          />
          <button className="px-2  bg-slate-200 mx-1 rounded-md"
            onClick={() => {
              // console.log(seachText)
              //filterd restaurnt logic
              const filteredRestaurant = listofRest.filter((res) =>
                res.info.name.toLowerCase().includes(seachText.toLowerCase())
              );
              setFilteredlistRestaurant(filteredRestaurant);
            }}
          >
            Search
          </button>
        </div>
        <div className="search p-1 ">
        <button
          className="filter-btn bg-slate-200 rounded-md px-2"
          onClick={() => {
            let filteredlist = FilteredlistRestaurant.filter(
              (res) => res.info.avgRating > 4
            );
            setFilteredlistRestaurant(filteredlist);
          }}
        >
          Top Rated Restaurant
        </button>
        </div>
      </div>
      {/* here is our restraunt cards */}
      <div className="res-container flex flex-wrap justify-evenly">
        {FilteredlistRestaurant.map((restaurant) => (
          <Link
            key={restaurant.info.id}
            to={"/restaurants/" + restaurant.info.id}
          >
            <RestrauntCard resData={restaurant} />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Body;
