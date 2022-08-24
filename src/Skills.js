import React from "react";
import "./Skills.css"
import "./Skill"
import Skill from "./Skill";
import { cibPython, cibJavascript, cibJava, cibTypescript, cibHtml5, cibCss3, cibReact, cibMongodb, cibNodeJs, cibFlask } from '@coreui/icons'

function Skills(props){
    return(
         <div className="container">
            <div className="skills">
                <Skill language="Python" icon={cibPython}/>
                <Skill language="JavaScript" icon={cibJavascript}></Skill>
                <Skill language="TypeScript" icon={cibTypescript}></Skill>
                <Skill language="Java" icon={cibJava}></Skill>
            </div>
            <div className="skills">
                <Skill language="HTML" icon={cibHtml5}></Skill>
                <Skill language="CSS" icon={cibCss3}></Skill>
                <Skill language="React" icon={cibReact}></Skill>
            </div>
            <div className="skills">
                <Skill language="Mongo.db" icon={cibMongodb}></Skill>
                <Skill language="Node.js" icon={cibNodeJs}></Skill>
                <Skill language="Flask" icon={cibFlask}></Skill>
            </div>
        </div>
    )

}

export default Skills;
