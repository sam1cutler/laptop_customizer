import React, { Component } from 'react';
import './App.css';
import CustomizerOptions from './CustomizerTool/CustomizerOptions';
import Cart from './Cart/Cart';

class App extends Component {

  static defaultProps = { features: [] }
  
  state = {
    selected: {
      Processor: {
        name: '17th Generation Intel Core HB (7 Core with donut spare)',
        cost: 700
      },
      'Operating System': {
        name: 'Ubuntu Linux 16.04',
        cost: 200
      },
      'Video Card': {
        name: 'Toyota Corolla 1.5v',
        cost: 1150.98
      },
      Display: {
        name: '15.6" UHD (3840 x 2160) 60Hz Bright Lights and Knobs',
        cost: 1500
      }
    }
  };

  updateFeature = (feature, newValue) => {
    const selected = Object.assign({}, this.state.selected);
    selected[feature] = newValue;
    this.setState({
      selected
    });
  };

  render() {
    
    return (
      <div className="App">

        <header>
          <h1>ELF Computing | Laptops</h1>
        </header>

        <main>

          <form className="main__form">
            <CustomizerOptions 
              currentSelections={this.state.selected}
              handleUpdateFeature={(feature, value) => this.updateFeature(feature, value)}
            />
          </form>

          <section className='main__summary'>
            <h2>Your cart!</h2>
            <Cart 
              currentSelections={this.state.selected}
            />
          </section>

        </main>

      </div>
    );
  }
}

export default App;
