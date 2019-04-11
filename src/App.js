import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor(props){
    super(props);

    this.state = {
     background : 'white'
    };
  }
  clicked(menu){
    //untuk memperbarui state sesuai dengan menu yang dipilih
    this.setState({
      name: menu.name,
      background: menu.background
      //active: menu,
    });
  }
  getInitialState(){
    return{
      colors : [
        'black',
        'white'
      ],
      colorSelected : 'white'
    }
  }
  
 
  render() {
    var buttonStyle = {
      marginBottom:4
    };
    var divStyle = {
      backgroundColor:this.state.colorSelected,
      width:200,
      height:200
    };
    var h1Style = {
      textAlign: 'center',
      lineHeight:6
    }
    return(
      <div>
        <button onClick={this.handleButton} style={buttonStyle}>Ganti Tema</button>
      <div style={divStyle}>
        <h1 style={h1Style}>{this.state.colorSelected}</h1>
      </div>
      </div>
    );
  
  }
  handleButton(){
    var indexColor = this.state.colors.findIndex(
      color => color == this.state.colorSelected
    );
    var colorSelected;
    if (typeof this.state.color[indexColor+1] === 'undefined') {
      colorSelected = 'white';
    } else {
      colorSelected = this.state.colors[indexColor+1];
    }

    this.setState({ colorSelected });

  }

}

export default App;
