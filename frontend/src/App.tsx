import { HomePage } from "./Pages/HomePage";
import { Route, Routes } from "react-router-dom";
import { Casualpage } from "./Pages/CasualPage";
import { Navigate } from "react-router-dom";

export default function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/speaklify/casual" element={<Casualpage />} />

        <Route path="*" element={<Navigate to="/" replace/>}/>
      </Routes>
    </>
  );
}
