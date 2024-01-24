import React from 'react'
import { ReactComponent as Innotation } from "./svg/innotation.svg";
import { ReactComponent as Automation } from "./svg/automation.svg";
import { ReactComponent as Debug } from "./svg/debug.svg";
import { ReactComponent as Checklist } from "./svg/checklist.svg";
import { ReactComponent as Code1 } from "./svg/code1.svg";
import { ReactComponent as Code2 } from "./svg/code2.svg";
import { ReactComponent as CodeSquare } from "./svg/codeSquare.svg";
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
  let qty = 10;

  for (let i = 0; i < qty; i++) {
    arr.push(i)
  }

  const layers =arr.map (i => (
    <div key={i} className="animated-row">
      <div>
        <Innotation />
        <Automation />
        <Debug />
        <Checklist />
        <Code1 />
        <Code2 />
        <Code3 />
        <CodeSquare />
        <DataCode />
        <Data1 />
        <Download1 />
        <FingerClick />
        <Github1 />
        <Github2 />
        <Java1 />
        <Lotus />
        <Memo />
        <Program />
        <RectangleCode />
        <Software />
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