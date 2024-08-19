import { useState } from "react";
import Hero from "./components/Hero";
import Workout from "./components/Workout";
import Generator from "./components/Generator";

function App() {
  return (
    <>
      <Hero />
      <Workout />
      <Generator />
    </>
  );
}

export default App;
