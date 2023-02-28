import React from "react";
import "./meme.css"
import meme from '../../memedata'
function Meme() {

    function getMemeImage() {
        const memesArray = meme.data.memes;
        const randomNumber = Math.floor(Math.random()* memesArray.length);
        const url = memesArray[randomNumber].url
        console.log(url);
    }
    return (
        <main>
        <div className="container">
            <div className="inputs">
                <input type="text" className="input1" placeholder="Top Text"/>
                <input type="text" className="input2" placeholder="Bottom Text"/>
            </div>
            <button onClick={getMemeImage} className="btn">Get a New meme Image &nbsp; <i class="fa-regular fa-image"></i></button>
        </div>
            <img src="" alt="" />
        </main>
    )
}

export default Meme;