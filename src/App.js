import React, {Component} from 'react';
import Timer from './components/Timer';
import BreakController from  './components/BreakController';
import SessionController from  './components/SessionController';
import Sound from './components/Sound';
import './App.css';


class App extends Component {
  constructor(props) {
    super(props);

    this.state={
        breakLength: 5,
        sessionLength:25,
        timerMinute: 25
    }

    this.onIncreaseBreakLength = this.onIncreaseBreakLength.bind(this);
    this.onDecreaseBreakLength = this.onDecreaseBreakLength.bind(this);
    this.onIncreaseSessionLength = this.onIncreaseSessionLength.bind(this);
    this.onDecreaseSessionLength = this.onDecreaseSessionLength.bind(this);
    this.onToggleInterval = this.onToggleInterval.bind(this);
    this.onUpdateTimerMinute = this.onUpdateTimerMinute.bind(this);
    this.onResetTimer = this.onResetTimer.bind(this);
}

onIncreaseBreakLength() {
  if(this.state.breakLength === 60){
    return;
}
  this.setState((prevState) => {
    return{
      breakLength: prevState.breakLength + 1,
      
    }
  })
}

onDecreaseBreakLength() {
  if(this.state.breakLength === 1){
    return;
}
  this.setState((prevState) => {
    return{
      breakLength: prevState.breakLength - 1
    }
  })
}

onIncreaseSessionLength() {
  if(this.state.sessionLength === 60){
    return;
}
  this.setState((prevState) => {
    return{
      sessionLength: prevState.sessionLength + 1,
      timerMinute: prevState.sessionLength + 1
    }
  })
}

onDecreaseSessionLength() {
  if(this.state.sessionLength === 1){
    return;
}
  this.setState((prevState) => {
    return{
      sessionLength: prevState.sessionLength - 1,
      timerMinute: prevState.sessionLength-1
    }
  })
}

onUpdateTimerMinute(){
 
  this.setState((prevState) =>{
    return{
      timerMinute: prevState.timerMinute - 1
    }
  })



}

onToggleInterval(isSession){
  if(isSession){
  this.setState((prevState)=>{
    return{
      timerMinute: this.state.sessionLength
    }
  })
}
  else{
    this.setState((prevState)=>{
      return{
        timerMinute: this.state.breakLength
      }
    })
  }
}

onResetTimer(){
  this.setState({
    timerMinute: 25,
    breakLength: 5,
    sessionLength: 25

  })
}

  render(){
  return (
    <div className="main">
      <h1>CountMeDown</h1>
      <div className='wrapper'>
        <div className ='controllers'>
      <BreakController breakInterval={this.state.breakLength}
                       increaseBreak={this.onIncreaseBreakLength}
                       decreaseBreak = {this.onDecreaseBreakLength} 
                       />
      <SessionController  
      sessionLength={this.state.sessionLength} 
      increaseSession = {this.onIncreaseSessionLength}
      decreaseSession = {this.onDecreaseSessionLength}
      />
      </div>
      <Timer timerMinute = {this.state.timerMinute}
             breakLength= {this.state.breakLength}
             updateTimerMinute={this.onUpdateTimerMinute}  
             onToggleInterval={this.onToggleInterval}  
             onResetTimer= {this.onResetTimer}   
      />
      
      
      </div>
    </div>
  );
}
}

export default App;
