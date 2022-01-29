import React from "react";
import "./App.css";

function getCurrentDate(separator = "/") {
  let newDate = new Date();
  let date = newDate.getDate();
  let month = newDate.getMonth() + 1;
  let year = newDate.getFullYear();

  return `${
    month < 10 ? `0${month}` : `${month}`
  }${separator}${date}${separator}${year}`;
}

function App() {
  const date = getCurrentDate();
  const APOD = async () => {
    const APOD_DATA = await fetch(
      `https://api.nasa.gov/planetary/apod?api_key=Rnx0ylO4AFEo3UQad1VjlILoUWgsxk92KlTPMhEg`
    );
    const response = APOD_DATA.json();
    return response;
  };

  const render_apod_data = async () => {
    const data = await APOD();

    document.getElementById("picture").src = data.hdurl;
    document.getElementById("imgTitle").innerText = data.title;
    document.getElementById("descriptionText").innerText = data.explanation;
  };
  render_apod_data();
  return (
    <div className="container">
      <h1 id="date">Today's Date: {date}</h1>
      <h1 id="author">By: Vincent Tran</h1>
      <div className="header">
        <h1 id="title">NASA Astronomy Picture of the Day</h1>
        <h1 id="imgTitle"></h1>
      </div>

      <img id="picture" src="" alt=""></img>
      <div className="description">
        <p id="descriptionText"></p>
      </div>
    </div>
  );
}

export default App;
