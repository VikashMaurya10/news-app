import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { SkeletonTheme } from "react-loading-skeleton";

import "./css/style.css";
import Header from "./components/Header";
import ShowCase from "./components/ShowCase";
import Grid from "./components/Grid";
import Footer from "./components/Footer";

const home = () => {
  return (
    <>
      <Header />
      <main>
        <ShowCase query="general" endpoint="everything" />
        <Grid category="general" heading="Top Headlines" />
        <Grid category="technology" heading="Technology" />
        <Grid category="health" heading="Life" />
        <Grid category="business" heading="Business" />
        <Grid category="sports" heading="Sports" />
        <Grid category="politics" heading="Politics" />
        <Grid category="health" heading="Health" />
        <Grid category="entertainment" heading="Entertainment" />
      </main>
      <Footer />
    </>
  );
};
const technology = () => {
  return (
    <>
      <Header />
      <main>
        <ShowCase query="technology" endpoint="everything" />
        <Grid category="technology" heading="Technology" />
      </main>
      <Footer />
    </>
  );
};
const life = () => {
  return (
    <>
      <Header />
      <main>
        <ShowCase query="life" endpoint="everything" />
        <Grid category="health" heading="Life" />
      </main>
      <Footer />
    </>
  );
};
const business = () => {
  return (
    <>
      <Header />
      <main>
        <ShowCase query="business" endpoint="everything" />
        <Grid category="business" heading="Business" />
      </main>
      <Footer />
    </>
  );
};
const sports = () => {
  return (
    <>
      <Header />
      <main>
        <ShowCase query="sports" endpoint="everything" />
        <Grid category="sports" heading="Sports" />
      </main>
      <Footer />
    </>
  );
};
const politics = () => {
  return (
    <>
      <Header />
      <main>
        <ShowCase query="politics" endpoint="everything" />
        <Grid category="politics" heading="Politics" />
      </main>
      <Footer />
    </>
  );
};
const health = () => {
  return (
    <>
      <Header />
      <main>
        <ShowCase query="health" endpoint="everything" />
        <Grid category="health" heading="Health" />
      </main>
      <Footer />
    </>
  );
};
const entertainment = () => {
  return (
    <>
      <Header />
      <main>
        <ShowCase query="entertainment" endpoint="everything" />
        <Grid category="entertainment" heading="Entertainment" />
      </main>
      <Footer />
    </>
  );
};
const App = () => {
  return (
    <SkeletonTheme baseColor="#313131" highlightColor="#525252">
      <BrowserRouter>
        <Routes>
          <Route path="/" Component={home} />
          <Route path="/technology" Component={technology} />
          <Route path="/life" Component={life} />
          <Route path="/business" Component={business} />
          <Route path="/sports" Component={sports} />
          <Route path="/politics" Component={politics} />
          <Route path="/health" Component={health} />
          <Route path="/entertainment" Component={entertainment} />
        </Routes>
      </BrowserRouter>
    </SkeletonTheme>
  );
};

export default App;
