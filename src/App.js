import React from "react";
import { useEffect } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

// Preloader
import Preloader from "./components/layouts/Preloader";
// Pages
import Hometwo from "./components/pages/Hometwo";
import About from "./components/pages/About";
import Portfolio from "./components/pages/Portfolio";
import Portfoliodetail from "./components/pages/Portfoliodetail";
import Service from "./components/pages/Service";
import Contact from "./components/pages/Contact";
import "./assets/css/font-awesome.min.css";
import "./assets/css/flaticon.css";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import Tax from "./components/sections/servicedetail/Tax";
import Secretarial from "./components/sections/servicedetail/Secretarial";
import Outsourcing from "./components/sections/servicedetail/Outsourcing";
import NewsPage from "./components/pages/NewsPage";
import Projects from "./components/pages/Projects";

function App() {
  const googleTranslateElementInit = () => {
    new window.google.translate.TranslateElement(
      {
        pageLanguage: "en",
        autoDisplay: false
      },
      "google_translate_element"
    );
  };
  useEffect(() => {
    var addScript = document.createElement("script");
    addScript.setAttribute(
      "src",
      "//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit"
    );
    document.body.appendChild(addScript);
    window.googleTranslateElementInit = googleTranslateElementInit;
  }, []);

  return (
    <Router>
      <Preloader />
      <Switch>
        <Route path="/" exact component={Hometwo} />
        <Route path="/about" component={About} />
        <Route path="/portfolio" component={Portfolio} />
        <Route path="/events" component={Portfoliodetail} />
        <Route path="/service" component={Service} />
        <Route path="/History" component={Tax} />
        <Route path="/Founders" component={Secretarial} />
        <Route path="/Outsourcing" component={Outsourcing} />
        <Route path="/contact" component={Contact} />
        <Route path="/projects" component={Projects} />
        <Route path="/news" component={NewsPage} />
      </Switch>
    </Router>
  );
}

export default App;
