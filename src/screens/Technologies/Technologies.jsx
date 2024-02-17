import "./Technologies.css"
import { techs } from "./techs";

function Technologies() {
    // const technologiesList = techs.maps((tech,idx) => {
    //     return (
    //         <div>
    //             <img src={tech.image} alt={tech.name}/>
    //             <h3>{tech.name}</h3>
    //         </div>
    //     )
    // })

  return (
    <div>
        <h1>Some of the technologies I use:</h1>
        <div>
            {/* {technologiesList} */}
        </div>
        <h3>and more...</h3>
    </div>
  )
}

export default Technologies