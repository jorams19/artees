import React, { Component } from 'react';
import * as three from 'three';
import './App.css';

class App extends Component {
  componentDidMount() {
    console.log(this.canvas);
    const scene = new three.Scene();
    const camera = new three.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    const renderer = new three.WebGLRenderer({ canvas: this.canvas });
    renderer.setSize(window.innerWidth, window.innerHeight);
  }
  render() {
    return (
      <canvas ref={(canvas) => this.canvas = canvas}/>
    );
  }
}

export default App;
