import React from "react";
import "./Skill.css"
import CIcon from '@coreui/icons-react';
import { cibPython, cilList, cilShieldAlt } from '@coreui/icons';

function Skill(props){
    return(
        <React.Fragment>
            <span className="skill">
                <CIcon icon={props.icon} fill="rgb(30, 66, 159)" style={{marginRight:'8px', paddingBottom: '5px', paddingTop: '3px'}}/>
                <span className="language">
                    {props.language}
                </span>
            </span>
        </React.Fragment>

    )
}

export default Skill