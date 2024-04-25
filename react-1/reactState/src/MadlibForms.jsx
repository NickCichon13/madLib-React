import React, {useState} from "react";

function Madlibs () {
    const [noun, setNoun] = useState('');
    const [noun2, setNoun2] = useState('');
    const [adjective, setAdjective] = useState('');
    const [color, setColor] = useState('');

    const generateMadlib = (e) => {
        e.preventDefault
        const madLibText = `The ${noun} was going for a walk down by the ${adjective} the color of the sky was ${color}. I was a wonderful day to ${noun2}. `
        text = madLibText;
    }

const MadlibForm = () => {
    const [formData, setFormData] = useState({
        noun: "",
        noun2: "",
        adjective: "",
        color: ""
    });

    return (
        <div>
        <h1>MadLib</h1>
        <form onSubmit={generateMadlib}>
            <label htmlFor="noun">Noun</label>
            <input 
            id="noun" 
            type="text" 
            placeholder="noun" 
            onChange={(e) => setNoun(e.target.value)}
            />

        <label htmlFor="noun2">Noun2</label>
            <input 
            id="noun2" 
            type="text" 
            placeholder="noun2" 
            onChange={(e) => setNoun2(e.target.value)}
            />

        <label htmlFor="adjective">adjective</label>
            <input 
            id="adjective" 
            type="text" 
            placeholder="adjective" 
            onChange={(e) => setAdjective(e.target.value)}
            />

        <label htmlFor="color">color</label>
            <input 
            id="color" 
            type="text" 
            placeholder="color" 
            onChange={(e) => setColor(e.target.value)}
            />
            <button type="submit">Submit Story!</button>
        </form>
        <p>{text}</p>
        </div>
        )
    }
};
