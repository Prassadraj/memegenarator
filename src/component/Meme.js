import React, { useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css'
import MemeData  from "../MemeData";

export default function Meme(){
    let url;
    let [meme,setmeme]=useState(
        {
            toptext:"",
            bottomtext:"",
            randomImage:"https://i.imgflip.com/30b1gx.jpg"
        }  
    )
    let [allmemeImage,setallImage]=useState("")
    function getMemeImage(e){
        e.preventDefault()
        let memeArray=MemeData.data.memes
        let randomNumber=Math.floor(Math.random()*memeArray.length)
        url=memeArray[randomNumber].url
        setmeme(url)
        // console.log(url);
    }
    


    return(
        <div>
        <main>
            <div className="leftMain">
                <p>
                    Top Text
                </p>
                <input type="text"/>
            </div>
            <div className="rightMain">
                <p>
                    Bottom Text
                </p>
                <input type="text"/>
            </div> 
        </main>
   
            <button id="btn" onClick={getMemeImage} className="btn btn-success">Get a New Meme Image</button>
            <img id="memeImg" src={meme.randomImage}   />
        </div>
    )
}