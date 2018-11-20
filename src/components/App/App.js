import React, { Component } from 'react';

import ItemsList from 'components/ItemsList';

import './App.css';

const MOCK_ITEMS = [
  {
    id: 1,
    name: 'First',
    description: 'Some lengthy description about this item. Some lengthy description about this item. Some lengthy description about this item.'
  },
  {
    id: 2,
    name: 'Second',
    description: 'Some lengthy description about this item.'
  },
  {
    id: 3,
    name: 'Third',
    description: 'Some lengthy description about this item.'
  },
  {
    id: 4,
    name: 'Fourth',
    description: 'Some lengthy description about this item.'
  },
  {
    id: 5,
    name: 'Fifth',
    description: 'Some lengthy description about this item.'
  }
];

class App extends Component {
  render() {
    return (
      <div className="App">
        <ItemsList items={MOCK_ITEMS}>
          footer
        </ItemsList>
      </div>
    );
  }
}

export default App;
