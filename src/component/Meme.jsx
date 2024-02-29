import React, { useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css'
// import MemeData  from "../MemeData";

export default function Meme(){
    let url;
    let [meme,setmeme]=useState(
        {
            toptext:"",
            bottomtext:"",
            randomImage:"https://i.imgflip.com/30b1gx.jpg"
        }  
    )
    let [allmemeImage,setallImage]=useState([])

    React.useEffect(function(){
        fetch("https://api.imgflip.com/get_memes")
        .then(res=>res.json()).then(data=>setallImage(data.data.memes))
    },[])
    // console.log(allmemeImage);
   
    function getMemeImage(e){
        e.preventDefault()
        let randomNumber=Math.floor(Math.random()*allmemeImage.length)
        let url=allmemeImage[randomNumber].url
        setmeme(preview=>{
            return{
                ...preview,
                randomImage:url
            }
        })
        // console.log(url);
    }
    function handler(event){
        const {value,name}=event.target
        setmeme(preview=>{
            return{
                ...preview,
                [name]:value
            }
        })
    }
    console.log(meme);


    return(
        <div>
        <main>
            <div className="leftMain">
                <p>
                    Top Text..
                </p>
                <input type="text"
                name="toptext"
                value={meme.toptext}
                onChange={handler}
                />
            </div>
            <div className="rightMain">
                <p>
                    Bottom Text..
                </p>
                <input type="text"
                name="bottomtext"
                value={meme.bottomtext}
                onChange={handler}
                />
            </div> 
        </main>
        
            <button id="btn" onClick={getMemeImage} className="btn btn-success">Get a New Meme Image</button>
            <div className="memebox">
            <img id="memeImg" src={meme.randomImage}/>
            <h2 className="textTop">{meme.toptext}</h2>
            <h2 className="textbottom">{meme.bottomtext}</h2>
            </div>

        </div>
    )
}