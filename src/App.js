import React from 'react';
import './App.css';

class App extends React.Component {
  
  state = {
    person:{
      fullName:"rafaaBenHassine",
      bio:"rafpets",
      profession:"manager",
      imgSrc:"https://scontent.ftun14-1.fna.fbcdn.net/v/t39.30808-6/301382704_550217363570783_7804836825405236399_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=1NtozqoEyK0AX-KGjaR&_nc_ht=scontent.ftun14-1.fna&oh=00_AfCOTnYgt4QrSi8KNs7URx6mxQVQ_HcA9h2CbbScvT68Xw&oe=64EDB4EA"
    },
    Show:false,
    
    count: 0,
    
    };
  handleShow =()=>{
    this.setState({Show:!this.state.Show});
    
  };
  
  componentDidMount() {
    this.interval = setInterval(() => {
      this.setState({ count: this.state.count + 1 });
    }, 1000);
  }
  
  componentWillUnmount() {
    clearInterval(this.interval);
  }
  
  
  
  handleReset = () => {
    
    this.setState({ count: 0 });
    
  };
  
  handleStop = () => {
    
    this.setState({ count: 0 });
    clearInterval(this.interval);
  };
  
  render(){
    console.log(this.state.Show);
  return (
  
    <div className='App'>
      <button onClick={this.handleShow} >click me</button>
      
      {this.state.Show?
      <div>
        <h1>My fullName is {this.state.person.fullName}</h1>
        <h1>My bio is {this.state.person.bio}</h1>
        <h1>My profession is {this.state.person.profession}</h1>
        <img src={this.state.person.imgSrc} alt='rafpets' />
      </div>
      :<div></div>}
      <p>You clicked {this.state.count} times</p>
      <button onClick={this.handleReset}>reset</button>
      <br></br>
      <br></br>
      <button onClick={this.handleStop}>stop</button>
    </div>
  );
}
}

export default App;

