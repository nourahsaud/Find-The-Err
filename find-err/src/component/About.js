import React from "react";
import {Button, Card} from "react-bootstrap";
import { useEffect,useState } from "react";

function About() {

  const [Img, setImg] = useState("https://aelbrecht.weebly.com/uploads/1/4/0/9/14094766/deadline_1_orig.jpg");

  const [val, setVal] =  useState(false);
  useEffect (() => {
      if(val == true){
          setImg("https://aelbrecht.weebly.com/uploads/1/4/0/9/14094766/deadline_1_orig.jpg");
      } else {
          setImg('');
      }

  }, [val]);
  return (
    <div>
      ماابي اصدمكم بس هنا ابيكم تستخدمون اليوز افكت تصرفوا احتاج يوز افكت في
      موقعي :

      <br/>
      <Button onClick={()=>{setVal(!val)}} variant="dark" className="button">Show</Button>
      <br/>
      <Card className="bg-dark text-white" id ="Card"> 
      <Card.Img variant="top" src={Img}/>
      </Card>
    </div>
  );
      }

export default About;
