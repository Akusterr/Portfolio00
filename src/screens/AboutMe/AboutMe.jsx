import "./AboutMe.css";

let imgUrl = "http://picsum.photos/800"

function AboutMe() {
  return (
    <div id="aboutme" className="aboutme-container">
        <img src={imgUrl} alt="aboutme" />
        <div>
            <h1>About Me</h1>
            <br />
            <p>
                My name is <strong>Alexa Kuster</strong>
                <br />
                I have a diverse background that includes both formal education and hands-on experience in different fields. I completed the Software Engineer program at Flatiron, where I gained comprehensive skills in coding and software development. Additionally, I have extensive experience as a store and restaurant manager, where I honed my leadership, problem-solving, and customer service abilities. This blend of technical expertise and managerial experience allows me to approach challenges with a unique perspective and adaptability.
            </p>
        </div>
    </div>
  )
}

export default AboutMe