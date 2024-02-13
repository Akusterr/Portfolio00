import { Typewriter, AnimatedBackground } from "../components";
import "./Landing.css";

let msgArray = [
  "",
  "A Software Engineer",
  "A Web Developer",
  "Full-Stack Developer",
  "A Web Designer",
  "",
]

function Landing() {
  return (
    <AnimatedBackground >
      <div className='landing-type'>
        <div>Who am I ?</div>
        <Typewriter data={msgArray}/>  
      </div>
    </AnimatedBackground>
  )
}

export default Landing