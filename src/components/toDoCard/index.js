import React from "react";
import Footer from "./Footer";

import ToDoForm from "./ToDoForm";
import ToDoList from "./ToDoList";

const ToDoCard = () => {
  return (
    <div className="w-full max-w-3xl shadow-lg rounded-lg p-6 bg-white">
      {/* <!-- header || ToDo Adder form --> */}
      <ToDoForm />
      <hr className="mt-4" />

      {/* <!-- todo list --> */}
      <ToDoList />
      <hr className="mt-4" />

      {/* <!-- footer || TODO Filters --> */}
      <Footer />
    </div>
  );
};

export default ToDoCard;
