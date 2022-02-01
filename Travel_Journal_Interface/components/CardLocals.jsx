import React from "react";

export function Card(props){
  return(
    <section className="Card">

     <img className="Card-Photo" src={`../img/${props.ImgURL}`} alt="Local-Image" />  
     <div className="Card--Description">
      <p className="Card-LocalInfo"> 
        <img src="..\img\location-icon.svg" alt="Icon-Location"/>
        <span className="Card--Local">{props.Location}</span>
        <a href={props.Link}>View on Google Maps</a>
      </p>  
      <h2>{props.Title}</h2>
      <h6>{props.StartDate} - {props.EndDate}<br/><span className="Font-normal">{props.Description}</span></h6>
      <p></p>
      </div>
      
    </section>
  )
}