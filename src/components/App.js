import React, { useEffect, useState } from "react";

import Header from "./Header";
import ToyForm from "./ToyForm";
import ToyContainer from "./ToyContainer";

const API = `http://localhost:3001/toys`

function App() {
  const [showForm, setShowForm] = useState(false);
  const [toys, setToys] = useState([])

  function handleClick() {
    setShowForm((showForm) => !showForm);
  }

  function handleNewToySubmit(newToy){
    const newToyList = [
      ...toys,
      newToy
    ]
    setToys(newToyList)
    setShowForm(false)
  }

  function handleLikeToy(likedToy){
    const newToyList = toys.map(toy=>{
      if(toy.id === likedToy.id){
        return likedToy
      } else { return toy}
    })

    setToys(newToyList)
  }

  function handleDeleteToy(deletedToy){
    const newToyList = toys.filter(toy=>toy.id !== deletedToy.id)
    setToys(newToyList)
  }

  useEffect(()=>{
    fetch(API)
    .then(r=>r.json())
    .then(toyData=>setToys(toyData))
  }, [])

  return (
    <>
      <Header />
      {showForm ? <ToyForm onNewToySubmit={handleNewToySubmit}/> : null}
      <div className="buttonContainer">
        <button onClick={handleClick}>{ showForm ? "Hide Form" : "Add a Toy"}</button>
      </div>
      <ToyContainer toyData={toys} onDeleteToy={handleDeleteToy} onLikeToy={handleLikeToy}/>
    </>
  );
}

export default App;
