import React from 'react';
import './App.css';
import image1 from "./Images/301382704_550217363570783_7804836825405236399_n.jpg"
// The App class extends the React.Component class and defines the state of the component, which includes a person object, a boolean value, and a count value. 
class App extends React.Component {
  
  state = {
    person:{
      fullName:"Rafaa Ben Hassine",
      bio:"rafpets",
      profession:"pet Shop manager",
      imgSrc:image1
    },
    Show:false,
    
    count: 0,
    
    };
    // handleReset, method is used to show the state and a compter (to update the state of the component)  when "click me button" is clicked.
  handleShow =()=>{
    this.setState({Show:!this.state.Show});
    
  };
  // The componentDidMount method is used to set up and clean up any resources that the component uses.
  componentDidMount() {
    this.interval = setInterval(() => {
      this.setState({ count: this.state.count + 1 });
    }, 1000);
  }
  // The componentWillUnmount method is used to set up and clean up any resources that the component uses.
  componentWillUnmount() {
    clearInterval(this.interval);
  }
  
  
  // handleReset, method is used to reset a counter(to update the state of the component)  when "reset button" is clicked.
  handleReset = () => {
    
    this.setState({ count: 0 });
    
  };
  // handleStop, method is used to stop a counter(to update the state of the component)  when "stop button" is clicked.
  handleStop = () => {
    
    this.setState({ count: 0 });
    clearInterval(this.interval);
  };
  // The render method is used to render the component’s user interface. It includes a button that toggles the visibility of a person object, which displays their full name, bio, profession, and image. It also includes a counter that increments every second and two buttons that reset or stop the counter.
  render(){
    console.log(this.state.Show);
  return (
  
    <div className="App">
      <button onClick={this.handleShow} >click me</button>
      
      {this.state.Show?
      <div>
        <h1>My fullName is {this.state.person.fullName}</h1>
        <h1>My bio is {this.state.person.bio}</h1>
        <h1>My profession is {this.state.person.profession}</h1>
        <img src={this.state.person.imgSrc} alt='rafpets' />
      </div>
      :<div></div>}
      
      {/* compter */}
        <p>You clicked {this.state.count} times</p>
        {/* button reset compter */}
        <button onClick={this.handleReset}>reset</button>
      <br></br>
      <br></br>
      {/* button stop compter */}
        <button onClick={this.handleStop}>stop</button>
      
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
    </div>
  );
}
}

export default App;

