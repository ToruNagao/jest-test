import React, {Component} from 'react';
import logo from './logo.svg';
import testJpgImage from './bg.jpg';
import testPngImage from './bg.png';
import './App.scss';


class AppClass extends Comment {
  add(a, b){
    if(!isNaN(a) || !isNaN(b)) return null;
    return a+b;
  }

  render(){
    return (
      <div className="App" >
  
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
        <img src={testJpgImage} alt={""} style={{ height: "100vh", width: "auto" }} />
        <img src={testPngImage} alt={""} style={{ height: "100vh", width: "auto" }} />
      </div>
    );
  }
}

function App() {


  
}

export default App;
