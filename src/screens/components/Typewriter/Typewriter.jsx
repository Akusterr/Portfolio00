import { useEffect } from 'react';
import "./Typewriter.css";

function Typewriter({ data = [], TypeSpeed = 100, MsgDelay = 2000 }) {
    useEffect(() => {
        let CharacterPos = 0;
        let MsgBuffer = "";
        let MsgIndex = 0;
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
            if (CharacterPos !== data[MsgIndex].length) {
              MsgBuffer = MsgBuffer + data[MsgIndex].charAt(CharacterPos);
              id.value = MsgBuffer + "_";
              delay = TypeSpeed;

            } else {
              delay = MsgDelay;
              MsgBuffer = "";
              CharacterPos = -1;
                if (MsgIndex !== data.length -1) {
                MsgIndex++;
                } else {
                MsgIndex = 0;
                }
            }
            CharacterPos++;
            setTimeout(StartTyping, delay);
        }

        StartTyping();

    }, []);


  return (
    <textarea id="typing-text" readOnly></textarea>
  )
}

export default Typewriter