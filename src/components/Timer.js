import React, { Component } from 'react';
import './Timer.css';


class Timer extends Component {
    constructor(props) {
        super(props);

        this.state={
          isSession: true,
          timerSeconds: 0,
          intervalId: 0,
          alarmColor: {color:'#EA3B2E'}
        }


        this.play = this.play.bind(this);
        this.stop = this.stop.bind(this);
        this.reset= this.reset.bind(this);
        this.decreaseTimer= this.decreaseTimer.bind(this);
        this.startAlarm= this.startAlarm.bind(this);
    }



    play(){
      let intervalId = setInterval(this.decreaseTimer, 1000);
      this.setState({
        intervalId: intervalId
      })
    }

    startAlarm(){ 
      if ((this.props.timerMinute ===0 ) && (this.state.timerSeconds === 1)){
          this.setState({
            alarmColor: {color:'red'} 
          });
          this.playBeep();   
    }
  }
  
    decreaseTimer(){
      switch (this.state.timerSeconds){
       case 0:
         if(this.props.timerMinute===0){
           if(this.state.isSession){
             this.setState({
               isSession: false,
               alarmColor: {color:'green'}
             })
             this.props.onToggleInterval(this.state.isSession);
           } 
           else{
            this.setState({
              isSession: true,
              alarmColor: {color:'#EA3B2E'}
            })
            this.props.onToggleInterval(this.state.isSession);
           }

                 
         }
         this.props.updateTimerMinute()
         this.setState({
           timerSeconds: 59
         })
         break;
         case 1:
          if(this.props.timerMinute===0){
            this.startAlarm();
          }

         default:
           this.setState((prevState) =>{
             return{
             timerSeconds: prevState.timerSeconds - 1
           } 
           })
           break;
          
      }
     }

     stop(){
       clearInterval(this.state.intervalId)
     }

     reset(){
      this.stop();
      this.props.onResetTimer()
      this.setState({
        timerSeconds: 0,
        alarmColor: {color:'#EA3B2E'},
        isSession: true
      })
     }

     playBeep() {
      this.refs.beepSound.play();
    }
     

     render(){
      
      console.log (this.state.timerSeconds)
        return(
            <div>
          <div className="timer" style={this.state.alarmColor}>              
        <div id="timer-label">{this.state.isSession ===true ? 'Session' : 'Break'}</div>           
        <div id="time-left">
        <span>{this.props.timerMinute}</span>:
        <span>{this.state.timerSeconds === 0 ? '00' : this.state.timerSeconds < 10 ? '0'+ this.state.timerSeconds : this.state.timerSeconds}</span></div>
          </div>
          <div className="timer-control">
              <button onClick={this.play} id="start_stop" className="btn-control"><i className="fa fa-play fa-2x"></i></button>
              <button onClick={this.stop} className="btn-control"> <i className="fa fa-pause fa-2x"></i></button>
              <button onClick={this.reset} id="reset" className="btn-control"><i className="fa fa-refresh fa-2x"></i></button>
              <audio
          id="beep"
          ref="beepSound"
          src="https://api.coderrocketfuel.com/assets/pomodoro-times-up.mp3"
        >
          <source
            src="https://api.coderrocketfuel.com/assets/pomodoro-times-up.mp3"
            type="audio/mpeg"
          />
        </audio>
              </div>
              </div>

        )

     }

}

export default Timer