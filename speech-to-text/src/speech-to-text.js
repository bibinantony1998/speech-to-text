//Author: Bibin Antony
//https://github.com/bibinantony1998/speech-to-text

import React from 'react';

export const SpeechToText = () => {
    let timer;
    const speechButton = document.getElementById("speech");
    const stopButton = document.getElementById("stop");
    const loading = document.getElementById("loading")
    let speech = false;
    window.SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
    const recognition = new SpeechRecognition();
    recognition.interimResults = true;
    recognition.lang = "ml_IN"

    function startSpeech () {
        speechButton.style = "display: none";
        stopButton.style = "display: block";
        speechButton.innerHTML
        speech = true      
        const words = document.querySelector('.words');
        words.appendChild(p);
        recognition.addEventListener('result', e => {
            const transcript = Array.from(e.results)
            .map(result => result[0])
            .map(result => result.transcript)
            .join('')
            clearTimeout(timer);
            timer = setTimeout(()=> {
                loading.style = "display: none";
                document.getElementById("p").innerHTML += " " + transcript;
            }, 1000);
            loading.style += "display: block";
            console.log(transcript);   
        });
        
        if (speech == true) {
            recognition.start();
            recognition.addEventListener('end', recognition.start);
        }
    }

    function stopSpeech() {
        clearTimeout(timer);
        loading.style = "display: none";
        speechButton.style = "display: block";
        stopButton.style = "display: none";
        speech = false
        recognition.removeEventListener('end', recognition.start);
        recognition.removeEventListener('result', e => {
            const transcript = Array.from(e.results)
                .map(result => result[0])
                .map(result => result.transcript)
                .join('');                   
        });
    } 
    
    return (
        <>
            <button id="speech" onclick={startSpeech}>Start Speech</button>
            <button style="display: none;" id="stop" onclick={stopSpeech}>Stop</button>
            <div style="border: 1px solid black; padding: 30px; margin-top: 15px; outline: none; border-radius: 4px; position: relative;" class="words" contenteditable>
                <p id="p"></p>
                <span style="display: none;" class="loading" id="loading">Listening...</span>
            </div>
        </>     
    )
}