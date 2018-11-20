import React, { Component } from 'react';

import './ItemsList.css';

class ItemsList extends Component {
  state = {
    expandedIds: []
  };

  handleItemClick = (e, id) => {
    this.setState(prevState => ({
      expandedIds: prevState.expandedIds.indexOf(id) === -1
        ? [...prevState.expandedIds, id]
        : prevState.expandedIds.filter(i => i !== id)
    }))
  }

  render () {
    const { items } = this.props;
    const { expandedIds } = this.state;

    return (
      <ul className='itemlist'>
        {items.map(({ id, name, description }) => {
          const isItemExpanded = expandedIds.indexOf(id) !== -1;

          return (
            <li
              key={id}
              className={`itemlist__item${isItemExpanded ? ' itemlist__item--expanded' : ''}`}
            >
              <div
                className='itemlist__item-name'
                onClick={e => this.handleItemClick(e, id)}
              >
                {name}
                <span className='itemlist__item-arrow'>
                  🡲
                </span>
              </div>
              <div className='itemlist__item-description'>
                {description}
              </div>
            </li>
          );
        })}
      </ul>
    );
  }
}

export default ItemsList;