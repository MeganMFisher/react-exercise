import React, {Component} from 'react';
import Search from './Search/Search';
import '../reset.css';
import './App.css';

export default class App extends Component {
  render() {
    return (
     <div>
        <nav>
            <h1>Who's My Representative?</h1>
        </nav>
        <Search/>
      </div>
    );
  }
}