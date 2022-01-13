import { useState } from "react"

function Meme({data}) {
    const [img,setImg]=useState("")

    async function genImg()
    {
       const index=await Math.floor(Math.random()*1000)%data.length;
       console.log(data[index])
        setImg(data[index].url);

    }


    return (
        <div className="meme">
            A wild meme will appear here
            <button onClick={genImg}>Generator</button>
            <img src={img} alt="hoo you are approaching me?"/>
        </div>
    )
}

export default Meme
