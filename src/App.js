import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

  class App extends React.Component {
    state = {
      loading: true
    };
  
    componentDidMount() {
      setTimeout(() => this.setState({ loading: false }), 1500); 
    }
    
    render() {
      const { loading } = this.state;
      
      if(loading) { 
        return (
          <div className="loadingScreenDiv"> Loading.... </div>  
        )
      }
      
      return (
        <div>I'm the app</div>
      ); 
    }
  }

export default App;