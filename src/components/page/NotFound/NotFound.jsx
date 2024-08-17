import React from "react";
import { useNavigate } from "react-router-dom";
import NotFoundImg from "../../../assets/NotFound/10433955.jpg";

const NotFound = () => {
  const navigate = useNavigate();
  return (
    <section className="flex h-screen flex-col items-center justify-center p-4">
      <div className="h-96 w-80 bg-slate-800 md:h-[500px] md:w-[500px]">
        <img src={NotFoundImg} alt="not found img" className="h-full w-full object-cover" />
      </div>
      <div className="mt-8 text-center">
        <h1 className="font-playFair mb-8 text-3xl font-bold uppercase">page not found</h1>
        <button onClick={() => navigate("/")} className="rounded-full bg-primary px-4 py-2 font-bold text-white">
          Back To Home
        </button>
      </div>
    </section>
  );
};

export default NotFound;
