import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css'
import MemeData  from "../MemeData";

export default function Meme(){
    let url;
    function getdata(e){
        e.preventDefault()
        let memeArray=MemeData.data.memes
        let randomNumber=Math.floor(Math.random()*memeArray.length)
        url=memeArray[randomNumber].url
        console.log(url);
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
   
            <button id="btn" onClick={getdata} className="btn btn-success">Get a New Meme Image</button>
            
        </div>
    )
}