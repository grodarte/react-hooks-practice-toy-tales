import React, { useState } from "react";

const blankNewToy = {
  name: "",
  image: "",
  likes: 0
}

function ToyForm({ onNewToySubmit }) {
  const [newToy, setNewToy] = useState(blankNewToy)

  function handleChange(event){
    const name = event.target.name
    const value = event.target.value
    setNewToy({
      ...newToy,
      [name]: value
    })
  }

  function handleSubmit(e){
    e.preventDefault()
    fetch(`http://localhost:3001/toys`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(newToy)
    })
    .then(r=>r.json())
    .then(newToyData=>onNewToySubmit(newToyData))
    setNewToy(blankNewToy)
  }

  return (
    <div className="container">
      <form className="add-toy-form" onSubmit={handleSubmit}>
        <h3>Create a toy!</h3>
        <input
          type="text"
          name="name"
          value={newToy.name}
          placeholder="Enter a toy's name..."
          className="input-text"
          onChange={handleChange}
        />
        <br />
        <input
          type="text"
          name="image"
          value={newToy.image}
          placeholder="Enter a toy's image URL..."
          className="input-text"
          onChange={handleChange}
        />
        <br />
        <input
          type="submit"
          name="submit"
          value="Create New Toy"
          className="submit"
        />
      </form>
    </div>
  );
}

export default ToyForm;
