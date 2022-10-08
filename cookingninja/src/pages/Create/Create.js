import React, { useRef, useState } from "react";
import "./Create.css";
export default function Create() {
  const [title, setTitle] = useState("");
  const [method, setMethod] = useState("");
  const [cookingTime, setCookingTime] = useState("");
  const [newIngredient, setNewIngredient] = useState("");
  const [newIngredients, setNewIngredients] = useState([]);
  // this will give me an access to the dom element to use its functionality like now
  const ingredientInput = useRef(null);
  const handleOnSubmit = (e) => {
    e.preventDefault();
    console.log(title, method, cookingTime, newIngredients);
  };
  const handleAdd = (e) => {
    e.preventDefault();
    const ing = newIngredient.trim();
    if (ing && !newIngredients.includes(ing)) {
      setNewIngredients((prevIngredients) => {
        return [...prevIngredients, ing];
      });
    }
    setNewIngredient("");
    ingredientInput.current.focus();
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
          <span>Recipe ingredients:</span>
          <div className="ingredients">
            <input
              type="text"
              onChange={(e) => setNewIngredient(e.target.value)}
              value={newIngredient}
              ref={ingredientInput}
            ></input>
            <button onClick={handleAdd} className="btn">
              Add
            </button>
          </div>
        </label>
        <p>
          Current ingredients:{" "}
          {newIngredients.map((i) => (
            <em key={i}>{i}, </em>
          ))}
        </p>
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
