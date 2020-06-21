import React from "react";
import StoreProvider from "./Store/StoreProvider";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Home from "./Components/Home";
import Navbar from "./Components/Navbar";

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <StoreProvider>
        <Navbar />
        <Switch>
          <Route exact path="/" component={Home} />
        </Switch>
      </StoreProvider>
    </BrowserRouter>
  );
};

export default App;
