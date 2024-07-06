import React, { useState } from "react";
import "./Home.css";
import Header from "../../components/Header/Header";
import ExploreCat from "../../components/ExploreCateogry/ExploreCat";
import BookDisplay from "../../components/BookDisplay/BookDisplay";
import AppDownload from "../../components/AppDownload/AppDownloader";
import DailyBookPick from "../../components/DailyBookPick/DailyBookPick";
import RecentlyAdded from "../../components/RecentlyAdded/RecentlyAdded";
// import AppDownload from "../../components/AppDownload";

function Home() {
  const [category, setCategory] = useState("All");
  return (
    <div>
      <Header />
      <DailyBookPick bookId="6684e0c0f372945a2dc54fc9" />
      {/* <RecentlyAdded /> */}
      <ExploreCat category={category} setCategory={setCategory} />
      <BookDisplay category={category} />
      <AppDownload />
    </div>
  );
}
export default Home;
