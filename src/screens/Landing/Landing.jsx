import { Typewriter, AnimatedBackground } from "../components";
import "./Landing.css";

let msgArray = [
  // "",
  "A Software Engineer",
  "Web Developer",
  "Full Stack Developer",
  "",
]

function Landing() {
  return (
    <AnimatedBackground >
      <div className='landing-type'>
        <div>What am I?</div>
        <Typewriter data={msgArray}/>  
      </div>
    </AnimatedBackground>
  )
}

export default Landing