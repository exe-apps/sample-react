import React, { Component } from 'react';
import './App.css';
import {Header} from './components/header.jsx';
import Footer from './components/footer.jsx'
import Body from './components/body';
import {
  getUserList
} from './util/service-helper';

class App extends Component {
  
  constructor(props) {  
    super(props);
    
    this.state = {
        usersList: [],
        date: new Date()
    };
  }

  // LIFE CYCLE METHODS
  componentDidMount() {
    
    // this.timerID = setInterval(
    //   () => this.tick(),
    //   1000
    // );

    // Call Service
    this.getUsers(); 
  }

  componentWillUnmount() {
    clearInterval(this.timerID);
  }

  // SERVICE METHODS
  getUsers() {
    getUserList().then(res => {
      this.setState({usersList : res.data.data});
    }) 
  }

  // ETC METHODS
  tick() {
    this.setState({
      date: new Date()
    });
  }

  render() {

    console.log('USERLIST: ');
    console.log(this.state.usersList);

    return (
      <div className='my-app'>
        
        {/* <Header date={this.state.date.toLocaleTimeString()}></Header> */}
        
        <Header/>

        <Body usersList={this.state.usersList}/>
      
        <Footer/>
      
      </div>
    );
  }
}

export default App;
