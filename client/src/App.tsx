import React from "react";
import StoreProvider from "./Store/StoreProvider";
import { BrowserRouter, Switch, Route } from "react-router-dom";
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

const App: React.FC = () => {
  const [flag, setFlag] = React.useState(true);
  React.useEffect(() => {
    setTimeout(() => {
      setFlag(false);
    }, 1500);

    window.scrollTo(0, 0);
  });
  if (flag) return <SplashScreen />;
  return (
    <BrowserRouter>
      <StoreProvider>
        <Navbar />
        <AnimatePresence>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/programs" component={Programs} />
            <Route exact path="/program/:id" component={ProgramDetails} />
            <Route exact path="/reach" component={Contact} />
            <Route exact path="/blog" component={Blog} />
            <Route exact path="/blog/:id" component={BlogArticle} />
            <Route component={GenericNotFound} />
          </Switch>
        </AnimatePresence>
      </StoreProvider>
    </BrowserRouter>
  );
};

export default App;
