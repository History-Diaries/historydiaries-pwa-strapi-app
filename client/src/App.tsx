import React from "react";
import StoreProvider from "./Store/StoreProvider";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Home from "./Components/Home";
import Navbar from "./Components/Navbar";
import UpcommingPrograms from "./Components/UpcommingPrograms";
import PastPrograms from "./Components/PastPrograms";
import Contact from "./Components/Contact";
import Blog from "./Components/Blog";
import GenericNotFound from "./Components/GenericNotFound";

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <StoreProvider>
        <Navbar />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route
            exact
            path="/upcomming-programs"
            component={UpcommingPrograms}
          />
          <Route exact path="/past-programs" component={PastPrograms} />
          <Route exact path="/contact" component={Contact} />
          <Route exact path="/blog" component={Blog} />
          <Route exact path="/blog" component={Blog} />
          <Route component={GenericNotFound} />
        </Switch>
      </StoreProvider>
    </BrowserRouter>
  );
};

export default App;
