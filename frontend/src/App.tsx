import { HomePage } from "./Pages/HomePage";
import { Route, Routes } from "react-router-dom";
import { CasualPage } from "./Pages/CasualPage";
import { InterviewPage } from "./Pages/InterviewPage";
import { TherapyPage } from "./Pages/TherapyPage";

import { Navigate } from "react-router-dom";

export default function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/speaklify/casual/" element={<CasualPage />} />
        <Route path="/speaklify/interview/" element={<InterviewPage />} />
        <Route path="/speaklify/therapy/" element={<TherapyPage />} />

        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </>
  );
}
