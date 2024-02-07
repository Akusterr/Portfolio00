import { useEffect } from 'react';
import "./Typewriter.css";

function Typewriter({ data = [], TypeSpeed = 100, msgDelay = 2000 }) {
    useEffect(() => {
        let characterPos = 0;
        let msgBuffer = "";
        let msgIndex = 0;
        let delay;

        function StartTyping() {
            let id = document.getElementById("typing-text");
        }

    }, []);


  return (
    <textarea id="typing-text" readOnly></textarea>
  )
}

export default Typewriter