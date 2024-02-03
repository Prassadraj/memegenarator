import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css'
import MemeData  from "../MemeData";

export default function Meme(){
    let [memeImage,setmemeImage]=React.useState("")
    let url;
    function getMemeImage(e){
        e.preventDefault()
        let memeArray=MemeData.data.memes
        let randomNumber=Math.floor(Math.random()*memeArray.length)
        url=memeArray[randomNumber].url
        setmemeImage(url)
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
            <img id="memeImg" src={memeImage} alt="Meme Generator"  />
        </div>
    )
}