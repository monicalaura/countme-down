import React from 'react';




function BreakController(props) {

    
        return(
          <div className="length-control">
              
              <div id="break-label" className="labels">Break Length</div>
              <div className="controls">
              <button  onClick={props.decreaseBreak} id="break-decrement" className="btn-level btn" value="-"><i className="fa fa-arrow-down fa-2x"></i></button>
        <div id="break-length" className="btn-level">{props.breakInterval}</div>
              <button onClick={props.increaseBreak} id="break-increment" className="btn-level btn" value="+"><i className="fa fa-arrow-up fa-2x"></i></button>
              </div>
              </div>


        )    

}

export default BreakController