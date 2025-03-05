import { BrowserRouter, Route, Routes } from "react-router-dom";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Home from "./pages/Home/Home";
import Project from "./pages/Project/Project";
import Projects from "./pages/Projects/Projects";
import Contacts from "./pages/Contacts/Contacts";
import ScrollToTop from "./utils/ScrollToTop";
import Animation from "./components/Animation/Animation";
import ButtonScrollTop from "./components/ButtunScrollTop/ButtonScrollTop";



function App() {

  return (
    <>
      <div className="app">
        <BrowserRouter>
          <ScrollToTop />
          <Header />
          <div className="main">
            <Animation/>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/projects" element={<Projects />} />
              <Route path="/projects/:id" element={<Project />} />
              <Route path="/contacts" element={<Contacts />} />
            </Routes>
            <ButtonScrollTop/>
          </div>
          <Footer />
        </BrowserRouter>
      </div>
    </>
  );
}

export default App;
