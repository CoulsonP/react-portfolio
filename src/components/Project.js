// cards for projects
import React from "react";

function Card(props) {
  return (
    <div className="card text-center">
      <div className="card-header">
        <h2>{props.title}</h2>
      </div>
      <img src={props.image}></img>
      <div className="card-body">{props.description}</div>
    <a href={props.url} >{props.title}</a>
    {props.repo && <a href="{props.repo}">Github Repo</a>}
    </div>
  );
}

export default Card;

