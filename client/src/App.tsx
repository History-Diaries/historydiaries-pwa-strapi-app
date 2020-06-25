import React from "react";
import StoreProvider from "./Store/StoreProvider";
import { BrowserRouter, Switch, Route, Router } from "react-router-dom";
import Home from "./Components/Home";
import Navbar from "./Components/Navbar";
import Programs from "./Components/Programs";
import Contact from "./Components/Contact";
import Blog from "./Components/Blog";
import GenericNotFound from "./Components/GenericNotFound";
import BlogArticle from "./Components/BlogArticle";
import { AnimatePresence } from "framer-motion";
import SplashScreen from "./Components/SplashScreen";
import ProgramDetails from "./Components/ProgramDetails";
import ScrollTop from "./Components/ScrollTop";
import ReactGA from "react-ga";
import { createBrowserHistory } from "history";

const history = createBrowserHistory();

const trackingId = "G-B1007MGV70";
ReactGA.initialize(trackingId);
ReactGA.pageview(window.location.pathname + window.location.search);

history.listen((location) => {
  ReactGA.set({ page: location.location.pathname });
  ReactGA.pageview(location.location.pathname);
});

const App: React.FC = () => {
  const [flag, setFlag] = React.useState(true);
  React.useEffect(() => {
    setTimeout(() => {
      setFlag(false);
    }, 900);

    window.scrollTo(0, 0);
  });
  const style =
    "color:red; font-size:16px; font-weight: bold; -webkit-text-stroke: 1px black;";
  console.log("%c Developed by Saran", style);
  console.log("🔥🔥 ", "https://github.com/saranonearth", "🔥🔥");
  if (flag) return <SplashScreen />;

  return (
    <Router history={history}>
      <StoreProvider>
        <Navbar />
        <ScrollTop />
        <AnimatePresence>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/programs" component={Programs} />
            <Route
              exact
              path="/program/:program/:id"
              component={ProgramDetails}
            />
            <Route exact path="/reach" component={Contact} />
            <Route exact path="/blog" component={Blog} />
            <Route exact path="/blog/:id" component={BlogArticle} />
            <Route component={GenericNotFound} />
          </Switch>
        </AnimatePresence>
      </StoreProvider>
    </Router>
  );
};

export default App;
