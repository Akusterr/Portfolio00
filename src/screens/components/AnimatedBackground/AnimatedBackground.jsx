import React from 'react'
import { ReactComponent as Innotation } from "./svg/innotation.svg";
import { ReactComponent as Automation } from "./svg/automation.svg";
import { ReactComponent as Debug } from "./svg/debug.svg";
import { ReactComponent as Code1 } from "./svg/code1.svg";
import { ReactComponent as Code3 } from "./svg/code3.svg";
import { ReactComponent as DataCode } from "./svg/dataCode.svg";
import { ReactComponent as Data1 } from "./svg/data1.svg";
import { ReactComponent as Download1 } from "./svg/download1.svg";
import { ReactComponent as FingerClick } from "./svg/fingerClick.svg";
import { ReactComponent as Github1 } from "./svg/github1.svg";
import { ReactComponent as Github2 } from "./svg/github2.svg";
import { ReactComponent as Java1 } from "./svg/java1.svg";
import { ReactComponent as Lotus } from "./svg/lotus.svg";
import { ReactComponent as Memo } from "./svg/memo.svg";
import { ReactComponent as Program } from "./svg/program.svg";
import { ReactComponent as RectangleCode } from "./svg/rectangleCode.svg";
import { ReactComponent as Software } from "./svg/software.svg";

import "./AnimatedBackground.css";

function AnimatedBackground( {children}) {
  let arr = [];
  let qty = 15;

  for (let i = 0; i < qty; i++) {
    arr.push(i)
  }

  const layers =arr.map (i => (
    <div key={i} className="animated-row">
      <div>
        <Innotation />
        <Github2 />
        <Code3 />
        <Java1 />
        <Github1 />
        <DataCode />
        <Data1 />
        <Download1 />
        <Code1 />
        <Program />
        <Lotus />
        <Debug />
        <RectangleCode />
        <FingerClick />
      </div>

      <div>
        <Innotation />
        <Github2 />
        <Code3 />
        <Java1 />
        <Github1 />
        <DataCode />
        <Data1 />
        <Download1 />
        <Code1 />
        <Program />
        <Lotus />
        <Debug />
        <RectangleCode />
        <FingerClick />
      </div>
    </div>
  ))


  return (
  <section className='animated-section'>
    {layers}
    {children}
  </section>
  )
}

export default AnimatedBackground