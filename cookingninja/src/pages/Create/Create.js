import React, { useState } from "react";
import "./Create.css";
export default function Create() {
  const [title, setTitle] = useState("");
  const [method, setMethod] = useState("");
  const [cookingTime, setCookingTime] = useState("");
  const handleOnSubmit = (e) => {
    e.preventDefault();
    console.log(title, method, cookingTime);
  };
  return (
    <div className="create">
      <h2 className="page-title">Add a New Recipe</h2>
      {/* we need to listen to the button when it is clicked  */}
      <form onSubmit={handleOnSubmit}>
        <label>
          <span>Recipe title</span>
          <input
            type="text"
            onChange={(e) => setTitle(e.target.value)}
            value={title}
            required
          ></input>
        </label>
        <label>
          <span>Recipe Method</span>
          <textarea
            onChange={(e) => setMethod(e.target.value)}
            value={method}
            required
          />
        </label>
        <label>
          <span>Cooking time (minutes):</span>
          <input
            type="number"
            onChange={(e) => setCookingTime(e.target.value)}
            value={cookingTime}
            required
          ></input>
        </label>
        <button className="btn"> submit</button>
      </form>
    </div>
  );
}
