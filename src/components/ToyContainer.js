import React from "react";
import ToyCard from "./ToyCard";

function ToyContainer({ toyData, onDeleteToy, onLikeToy }) {
  const toyElements = toyData.map(toy=><ToyCard key={toy.id} toy={toy} onDeleteToy={onDeleteToy} onLikeToy={onLikeToy}/>)
  return (
    <div id="toy-collection">{toyElements}</div>
  );
}

export default ToyContainer;
