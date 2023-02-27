import React from "react";
import Header from "./Header";
import ToDoCard from "./toDoCard";

const Main = () => {
  return (
    <div className="grid place-items-center bg-blue-100 h-screen px-6 font-sans">
      <Header />
      <ToDoCard />
    </div>
  );
};

export default Main;
