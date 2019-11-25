import React from "react";
import { DoubleBounce } from "better-react-spinkit";

const Loader = () => (
  <div className="mt-3 d-flex justify-content-center">
    <DoubleBounce size={60} color="#CCC" />
  </div>
);

export default Loader;
