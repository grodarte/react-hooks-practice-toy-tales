import React from "react";

function ToyCard({ toy, onDeleteToy, onLikeToy }) {
  const {id, name, image, likes} = toy

  function handleDelete(){
    fetch(`http://localhost:3001/toys/${id}`, {
      method: "DELETE"
    })
    .then(r=>r.json())
    .then(()=>onDeleteToy(toy))
  }

  function handleLike(){
    fetch(`http://localhost:3001/toys/${id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        likes: likes + 1
      })
    })
    .then(r=>r.json())
    .then(likedToy=>onLikeToy(likedToy))
  }

  return (
    <div className="card">
      <h2>{name}</h2>
      <img
        src={image}
        alt={name}
        className="toy-avatar"
      />
      <p>{likes} Likes </p>
      <button className="like-btn" onClick={handleLike}>Like {"<3"}</button>
      <button className="del-btn" onClick={handleDelete}>Donate to GoodWill</button>
    </div>
  );
}

export default ToyCard;
