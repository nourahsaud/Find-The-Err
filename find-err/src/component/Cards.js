import React, { useEffect,useState } from "react";
import CardData from "./CardData";
import {Button, Card} from "react-bootstrap";

function Cards() {
  const [memeImage, setMemeImahe] = useState();

  const myRandomEmg = () => {
    const memesArray = CardData.data.card;
    const randomNumber = Math.floor(Math.random() * memesArray.length);
    const url = memesArray[randomNumber].url;
    setMemeImahe(url);
  };
  return (
    <div>
      <Button onClick={myRandomEmg} variant="dark" className="button">Get a new image</Button>
      <br></br>
      <Card className="bg-dark text-white" id ="Card"> 
      <Card.Img variant="top" src={memeImage}/>
      </Card>
    </div>
  );
}

export default Cards;
