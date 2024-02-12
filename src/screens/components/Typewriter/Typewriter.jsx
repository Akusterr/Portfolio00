import { useEffect } from 'react';
import "./Typewriter.css";

/**
 * 
 * @param {Array} data - Array[]: Array of strings to be typed
 * @param {number} typeSpeed - Number: speed of typing in milliseconds
 * @param {number} msgDelay - Number: delay between each message in milliseconds
 */

function Typewriter({ data = [], typeSpeed = 100, msgDelay = 2000 }) {
    useEffect(() => {
        let characterPos = 0;
        let msgBuffer = "";
        let msgIndex = 0;
        let delay;

        function StartTyping() {
            let id = document.getElementById("typing-text");
              // let data = [
              //   "",
              //   "A Software Engineer",
              //   "Web Developer",
              //   "Full Stack Developer",
              //   "",
              // ]
            if (characterPos !== data[msgIndex].length) {
              msgBuffer = msgBuffer + data[msgIndex].charAt(characterPos);
              id.value = msgBuffer + "_";
              delay = typeSpeed;

            } else {
              delay = msgDelay;
              msgBuffer = "";
              characterPos = -1;
                if (msgIndex !== data.length -1) {
                msgIndex++;
                } else {
                msgIndex = 0;
                }
            }
            characterPos++;
            setTimeout(StartTyping, delay);
        }

        StartTyping();

    }, []);


  return (
    <textarea id="typing-text" readOnly></textarea>
  )
}

export default Typewriter