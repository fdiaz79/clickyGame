import React, { Component } from 'react';
import Containers from './Containers';
import Navs from './Navs';
import Jumbotrons from './Jumbotrons';
import Bach from './images/bach.jpg';
import Beeth from './images/beethoven.jpg';
import Chop from './images/chopin.jpg';
import Debu from './images/debussy.jpg';
import Hand from './images/handel.jpg';
import Mend from './images/mendel.jpg';
import Moza from './images/mozart.jpg';
import Pales from './images/palestrina.jpg';
import Stra from './images/strav.jpg';
import Tchai from './images/tchai.jpg';
import Verdi from './images/verdi.jpg';
import Vival from './images/vivaldi.jpg';


import './App.css';


class App extends Component {
  state={
    navData:
      {
        current:0,
        top: 0,
        message: "Click an image to begin",
        classColor: " "
      },
      containerClass:{
        shaky: "container"
      },
    images:[
      {id: 1, source: Bach, text:"Bach", clicked: false},
      {id: 2, source: Beeth, text:"Beethoven", clicked: false},
      {id: 3, source: Chop, text:"Chopin", clicked: false},
      {id: 4, source: Debu, text:"Debussy", clicked: false},
      {id: 5, source: Hand, text:"Handel", clicked: false},
      {id: 6, source: Mend, text:"Mendelsohn", clicked: false},
      {id: 7, source: Moza, text:"Mozart", clicked: false},
      {id: 8, source: Pales, text:"Palestrina", clicked: false},
      {id: 9, source: Stra, text:"Stravinsky", clicked: false},
      {id: 10, source: Tchai, text:"Tchaikovsky", clicked: false},
      {id: 11, source: Verdi, text:"Verdi", clicked: false},
      {id: 12, source: Vival, text:"Vivaldi", clicked: false}
    ]
      
  }

  doOnClick = (id) => {
    let navDataCopy = this.state.navData;
    let imagesCopy = this.state.images;
    let containerClassCopy = this.state.containerClass;

    for (let i=0; i<imagesCopy.length; i++){
      if (imagesCopy[i].id === id) {
        if (!imagesCopy[i].clicked){
          imagesCopy[i].clicked = true;
          navDataCopy.message = "You guessed correctly!!!";
          navDataCopy.classColor = "success";
          containerClassCopy.shaky = "container"
          navDataCopy.current++;
          if (navDataCopy.current > navDataCopy.top) {
            navDataCopy.top = navDataCopy.current;
          }
        } else{
          navDataCopy.message = "You guessed incorrectly!!!";
          navDataCopy.classColor = "fail";
          navDataCopy.current = 0;
          containerClassCopy.shaky = "container shaky";
          for (let j=0; j<imagesCopy.length; j++){
            imagesCopy[j].clicked=false;
          }
        }
      }
    }
    this.setState({
      navData: navDataCopy,
      images: imagesCopy,
      containerClass: containerClassCopy
    })   
  }

 
  render() {
    return (
      <div className="App">
        <Navs navData={this.state.navData} />
        <Jumbotrons />
        <Containers images={this.state.images} doOnClick={this.doOnClick} containerClass={this.state.containerClass} />
        
        
      </div>
    );
    }
}

export default App; 
