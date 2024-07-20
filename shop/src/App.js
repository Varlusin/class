import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import Greet from './components/Greet';
import Welcome from './components/welcome';
import Hello from './components/Hello';
import Gr from './components/Gr';
import Wel from './components/Wel';
import Message from './components/Message';
import Counter from './components/Counter';

// function App() {
//   return (
//     <div className="App">
//      <Greet></Greet>
//     </div>
//   );
// }

class App extends Component {
  render() {
    return (
      <div className='App'>
        <Greet />
        <Welcome />
        <Hello />
        <Gr name='Ashot' category='bozi txa'>
          <button> action </button>
        </Gr>
        <Gr name='Aram' category='chato' />
        {/* <Wel  name = 'Ashot' category =   'bozi txa'>
          <button> action </button>
        </Wel> */}
        <Wel name='Smbo' category='xaxpa' />
        <Message />
        <Counter />

      </div>
    );
  }
}


export default App;
