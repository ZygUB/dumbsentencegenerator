import './components/WordRandomizer.css';
import { useState, useEffect } from 'react';


const WordRandomizer = () => {
    const [words, setWords] = useState([]);
    const [sentence, setSentence] = useState('');

    useEffect(() => {
        const fetchWords = async () => {
            const response = await fetch('https://raw.githubusercontent.com/dwyl/english-words/master/words.txt');
            const text = await response.text();
            const wordArray = text.split('\n');
            setWords(wordArray);
        };
        fetchWords();
    }, []);
    const generateSentence = () => {
        const randomWords = [];
        for (let i = 0; i < Math.floor(Math.random() * 3) + 3; i++) {
            const randomIndex = Math.floor(Math.random() * words.length);
            randomWords.push(words[randomIndex]);
        }
        setSentence(randomWords.join('\n'));
    };
    return(
        <div className='randomizer'>
            <h1> Dumb Sentence Generator</h1>
            <p>{sentence}</p>
            <button onClick={generateSentence}>Generate</button>
        </div>
    );
};

export default WordRandomizer;