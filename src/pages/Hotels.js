import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import SearchBar from "../components/SearchBar";
export default function Hotels(props) {
  const { params } = useParams();
  // const apikey = process.env.API_KEY;
  const [data, setData] = useState([]);
  const [searchText, setSearchText] = useState(null);
  async function getData() {
    const options = {
      method: "GET",
      headers: {
        "X-RapidAPI-Key": "4d62eac7f5mshfe935fda00e013ap1d60dfjsnc91d2d8bb543",
        "X-RapidAPI-Host": "hotels4.p.rapidapi.com",
      },
    };

    fetch(
      `https://hotels4.p.rapidapi.com/locations/v3/search?q=${searchText}&locale=en_US&langid=1033&siteid=300000001`,
      options
    )
      .then((response) => response.json())
      .then((response) => {
        setData(response);
        console.log(response);
      })
      .catch((err) => console.error(err));
  }
  useEffect(() => {
    getData();
  }, [searchText]);
  // const hotelData = data;
  // const name = data.regionNames.fullname;
  console.log(data);
  console.log("Search", searchText);
  return (
    <>
      <h3>Find Hotels Here</h3>
      <SearchBar setSearchText={setSearchText} />
      {/* <h2>{data?.sr?.[2]?.regionNames?.displayName} </h2>
      <h2>{data?.sr?.[2]?.regionNames?.fullName} </h2> */}
      <>
        <ol>
          {(data?.sr ?? []).map((e) => {
            if (e.type !== "HOTEL") return;
            return (
              <>
                {/* <li>{e.regionNames.displayName}</li> */}
                <li>
                  <p>{e.regionNames.fullName}</p>
                  <p>{e.type}</p>
                </li>
              </>
            );
          })}
        </ol>
      </>
      {/* <h3>{name}</h3> */}
    </>
  );
}
