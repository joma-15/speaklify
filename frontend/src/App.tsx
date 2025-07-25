import {HomePage} from "./Pages/HomePage";
import { Route, Routes } from "react-router-dom";
import { Casualpage } from "./Pages/CasualPage";

export default function App() {
  return (
    <>
      <HomePage/>

      <Routes>
        <Route path="/casual" element={<Casualpage/>}/>
      </Routes>
    </>
  );
}
