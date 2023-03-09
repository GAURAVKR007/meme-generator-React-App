import React from "react";
import "./meme.css"
import memeData from '../../memedata'
function Meme() {

    // const [memeImage, setMemeImage] = React.useState("http://i.imgflip.com/1bij.jpg")
    const [meme, setMeme] = React.useState({
        topText: "",
        bottomText: "",
        randomImage: "http://i.imgflip.com/1bij.jpg" 
    })
    const [allMemeImages, setAllMemeImages] = React.useState(memeData)
    
    
    function getMemeImage() {
        const memesArray = allMemeImages.data.memes
        const randomNumber = Math.floor(Math.random() * memesArray.length)
        const url = memesArray[randomNumber].url
        setMeme(prevMeme => ({
            ...prevMeme,
            randomImage: url
        }))
        
    }

    function handleChange(event) {
        const {name,value} = event.target
        
        setMeme(prev => {
            return {
                ...prev,
                [name] : value
            }
        })
    }

    return (
        <main>
        <div className="container">
            <div className="inputs">
                <input 
                type="text" 
                className="input1" 
                placeholder="Top Text"
                name="topText"
                value={meme.topText}
                onChange={handleChange}
                />
                <input 
                type="text" 
                className="input2" 
                placeholder="Bottom Text" 
                name="bottomText"
                value={meme.bottomText}
                onChange={handleChange}/>
            </div>
            <button onClick={getMemeImage} className="btn">Get a New meme Image &nbsp; <i class="fa-regular fa-image"></i></button>
        </div>
            <div className="meme-img-div">
            <img src={meme.randomImage} alt="meme" className="meme-img"/>
            <h2 className="meme--text top">{meme.topText}</h2>
            <h2 className="meme--text bottom">{meme.bottomText}</h2>
            </div>
            
        </main>
    )
}

export default Meme;