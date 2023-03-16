import "./App.css";

import { MainPage } from "./components/MainPage/MainPage";
import { Navbar } from "./components/Navbar/Navbar";
import { Routes, Route, BrowserRouter as Router } from "react-router-dom";
import { SkillsScreen } from "./components/Skills/SkillsScreen";
import { ProjectsScreen } from "./components/ProjectsScreen/ProjectsScreen";
import { ProjectDetails } from "./components/ProjectDetails/ProjectDetails";
import { Design } from "./components/Design/Design";
import { GooglePlayScreen } from "./components/GooglePlayScreen/GooglePlayScreen";
import { Certificates } from "./components/Certificates/Certificates";
import { Contact } from "./components/Contact/Contact";

function App() {
  return (
    <Router>
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100vw",
          height: "100%",
        }}
      >
        <Design />
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100vw",
            height: "100%",
          }}
        >
          <Navbar />

          <Routes>
            <Route path="/" element={<MainPage />} />
            <Route path="/projects" element={<SkillsScreen />} />
            <Route path="/projects/:type" element={<ProjectsScreen />} />
            {/* <Route path="/projects" element={<ProjectsScreen />} /> */}
            <Route path="/project-details" element={<ProjectDetails />} />

            <Route path="/google-play" element={<GooglePlayScreen />} />
            <Route path="/certificates" element={<Certificates />} />
            <Route path="/contact-me" element={<Contact />} />
          </Routes>
          {/* You can render <Route> and <NavTabs /> here */}
        </div>
      </div>
    </Router>
  );
}

export default App;
