import React from "react";
import { useNavigate } from "react-router-dom";
import NotFoundImg from "../../../assets/NotFound/10433955.jpg";

const NotFound = () => {
  return (
    <section>
      <div className="h-96 w-80">
        <img src={NotFoundImg} alt="not found img" className="w-full" />
      </div>
      <div></div>
    </section>
  );
};

export default NotFound;
