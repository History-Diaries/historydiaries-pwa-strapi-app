import * as React from "react";
import { Istore } from "../Interfaces";

const Store = React.createContext<Istore | any>({
  name: "",
});

export default Store;
