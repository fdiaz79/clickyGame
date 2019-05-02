import React, { Component } from 'react';
import Containers from './Containers';
import Navs from './Navs';
import Jumbotrons from './Jumbotrons';

import './App.css';


class App extends Component {
  state={
    navData:
      {
        current:0,
        top: 0,
        message: "Click an image to begin"
      },
    images:[
      {id: 1, source: "./images/bach.jpg", text:"Bach", clicked: false},
      {id: 2, source: "./images/beethoven.jpg", text:"Beethoven", clicked: false},
      {id: 3, source: "./images/chopin.jpg", text:"Chopin", clicked: false},
      {id: 4, source: "./images/debussy.jpg", text:"Debussy", clicked: false},
      {id: 5, source: "./images/handel.jpg", text:"Handel", clicked: false},
      {id: 6, source: "./images/mendel.jpg", text:"Mendelsohn", clicked: false},
      {id: 7, source: "./images/mozart.jpg", text:"Mozart", clicked: false},
      {id: 8, source: "./images/palestrina.jpg", text:"Palestrina", clicked: false},
      {id: 9, source: "./images/strav.jpg", text:"Stravinsky", clicked: false},
      {id: 10, source: "./images/tchai.jpg", text:"Tchaikovsky", clicked: false},
      {id: 11, source: "./images/verdi.jpg", text:"Verdi", clicked: false},
      {id: 12, source: "./images/vivaldi.jpg", text:"Vivaldi", clicked: false}
    ]
      
  }

  doOnClick = (id) => {
    let navDataCopy = this.state.navData;
    let imagesCopy = this.state.images;

    for (let i=0; i<imagesCopy.length; i++){
      if (imagesCopy[i].id === id) {
        if (!imagesCopy[i].clicked){
          imagesCopy[i].clicked = true;
          navDataCopy.message = "You guessed correctly!!!";
          navDataCopy.current++;
          if (navDataCopy.current > navDataCopy.top) {
            navDataCopy.top = navDataCopy.current;
          }
        } else{
          navDataCopy.message = "You guessed incorrectly!!!";
          navDataCopy.current = 0;
          for (let j=0; j<imagesCopy.length; j++){
            imagesCopy[j].clicked=false;
          }
        }
      }
    }
    this.setState({
      navData: navDataCopy,
      images: imagesCopy
    })   
  }

 
  render() {
    return (
      <div className="App">
        <Navs navData={this.state.navData} />
        <Jumbotrons />
        <Containers images={this.state.images} doOnClick={this.doOnClick} />
        
        
      </div>
    );
    }
}

export default App; 
