import React, { useState } from "react";
import "./App.css";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Task from "./Containers/Task/Task";

function App() {
  const [userName] = useState<string>("Olivia Wilde");
  return (
    <main>
      <Header userName={userName} />
      <Task />
      <Footer />
    </main>
  );
}

export default App;
