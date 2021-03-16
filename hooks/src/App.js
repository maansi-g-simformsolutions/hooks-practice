import React, { useState } from "react";
import "./App.css";

/*
const App = () => {

  const state = useState();

  const [count, setCount] = useState(0);

  const Increment = () => {
    setCount(count+1);
  }
  let time = new Date().toLocaleTimeString()
  const [ctime, setUpdate] = useState(time);

  const TimeUpdate = () => {
    time = new Date().toLocaleTimeString();
    setUpdate(time);
  }

  const purple = "#8e44ad"
  const [bg, setBg] = useState(purple);
  let name = 'Click Me !';
  const [cname, setName] = useState(name);

  const bgChange = () => {
    let newbg = '#f39c12';
    setBg(newbg);
    setName('Hey Orange Color');
  }

  const colorBack = () => {
    setBg('#2c3e50');
    setName('Hey Dark Blue');
  }

  setInterval(TimeUpdate, 1000);

  return(
    <div className='body'>
      <img className='body-pic' src='https://images.pexels.com/photos/36753/flower-purple-lical-blosso.jpg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940' alt='random' />
    <div className='main-app' style={{ backgroundColor : bg }}>
    <div className='app'>
      <div className='d1'>
    <h1>{count}</h1>
    <button className='btn-1' onClick={Increment}>Add Me</button>
    </div>
  
    <div className='d3'>
      <h1>{ctime}</h1>
    </div>
    </div>

    <div className='d4' >
      <h1> Colour Changer</h1>
      <button className='btn-2' onClick={bgChange} onDoubleClick={colorBack}>{cname}</button>
    </div>
    </div>
    </div>
  )
}
*/

const App = () => {
  const state = useState();
  let background1 =
    "https://images.pexels.com/photos/4041278/pexels-photo-4041278.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940";
  const [cbg, setBg] = useState(background1);

  const [ctext, setText] = useState("#ff6b81");

  const colourChange = () => {
    let newbg = "./img/flower2.jpg";
    setBg(newbg);
    let newtext = "black";
    setText(newtext);
  };

  const colourChange2 = () => {
    let background1 =
      "https://images.pexels.com/photos/4041278/pexels-photo-4041278.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940";
    setBg(background1);
  };

  return (
    <div
      className="app"
      style={{ backgroundImage: `url(${cbg})`, color: ctext }}
    >
      <div className="sub-app">
        <div className="btns">
          <button
            className="click"
            onClick={colourChange}
            style={{ color: ctext }}
          >
            Change My Colour
          </button>
          <button
            className="click1"
            onClick={colourChange2}
            style={{ color: ctext }}
          >
            Change My Colour Back !
          </button>
        </div>
      </div>
    </div>
  );
};

export default App;
