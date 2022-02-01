import React from "react";

export  function Card(card) {
  let txt;
  if(card.openSpots === 0){
    txt = "SOLD OUT"
  }else{
    if(card.location === "Online"){
      txt = "ONLINE"
    }
  }
  //const item = data.map(item =>{if(item.id == props.id){return item}})

  return(
    <div className="card">
      {
        card.openSpots == 0 && 
        <div id="sold" className="card-badge">{txt}</div> 
      }
      {
        card.openSpots != 0 &&
        <div className="card-badge">{txt}</div> 
      }
      
      <img  src={`../img/${card.coverImg}`} alt="Katie-Zafares-Image" className="card--image"/>
      <div className="Card--stats">
        <img src="img\Star.svg" alt="Star-image" />
        <span>{card.star}{card.stats.rating}</span>
        <span className="Gray">({card.stats.reviewCount})•</span>
        <span className="Gray">{card.location}</span>
      </div>
      <p>{card.title}</p>
      <p className="Price-Section"><strong>From ${card.price}</strong> P/ person </p>
    </div>
  )
}
