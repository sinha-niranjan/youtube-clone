import React from "react";

import { AppContext } from "./context/contextApi";

import { BrowserRouter, Routes, Route } from "react-router-dom";

import Header from "./components/Header";

import Feed from "./components/Feed";
import SearchResult from "./components/SearchResult";
import VideoDetails from "./components/VideoDetails";

const App = () => {
  return (
    <AppContext>
      <BrowserRouter>
        <div className="flex flex-col h-full">
          <Header />
          <Routes>
            <Route exact path="/" element={<Feed />} />
            <Route
              exact
              path="/searchResult/:searchQuery"
              element={<SearchResult />}
            />
            <Route exact path="/video/:id" element={<VideoDetails />} />
          </Routes>
        </div>
      </BrowserRouter>
    </AppContext>
  );
};

export default App;
