import React from 'react';



function SessionController(props){
    
        return(
            <div className="length-control">

            <div id="session-label" className="labels">Session Length</div>
            <div className="controls">
            <button onClick={props.decreaseSession} id="session-decrement" className="btn-level btn" value="-"><i className="fa fa-arrow-down fa-2x"></i></button>
        <div id="session-length" className="btn-level">{props.sessionLength}</div>
            <button onClick={props.increaseSession} id="session-increment" className="btn-level btn" value="+"><i className="fa fa-arrow-up fa-2x"></i></button>
            </div>
            </div>
        )

}

export default SessionController