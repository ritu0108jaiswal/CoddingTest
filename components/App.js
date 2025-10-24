import React from "react";
import Header from "./Header";
import bootstrap from "bootstrap"; // eslint-disable-line no-unused-vars
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../public/styles.css";
import CountApp from "./CountApp";
import IncrementApp from "./IncrementApp";
import FetchBooks from "./FetchBooks";

export default function App() {
  return (
    <>
      <Header />
      <CountApp />
      <IncrementApp />
      <FetchBooks />
    </>
  );
}
