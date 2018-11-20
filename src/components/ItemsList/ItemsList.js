import React, { Component, Fragment } from 'react';

import TextInput from 'components/TextInput';

import './ItemsList.css';

class ItemsList extends Component {
  state = {
    filterText: '',
    expandedIds: []
  };

  handleItemClick = (e, id) => {
    this.setState(prevState => ({
      expandedIds: prevState.expandedIds.indexOf(id) === -1
        ? [...prevState.expandedIds, id]
        : prevState.expandedIds.filter(i => i !== id)
    }))
  }

  handleFilterChange = filterText =>
    this.setState({filterText});

  getHighlightedText (str) {
    const { filterText } = this.state;
    const pos = str.toLowerCase().indexOf(filterText.toLowerCase());

    return pos !== -1
      ? [
        str.slice(0, pos),
        <strong key='match'>{str.slice(pos, pos + filterText.length)}</strong>,
        str.slice(pos + filterText.length),
      ]
      : str
  }

  isFilterMatched = (fields, item, filterText = '') =>
    fields.some(field => item[field] && item[field].toLowerCase().indexOf(filterText.toLowerCase()) !== -1)


  render () {
    const { items, children } = this.props;
    const { expandedIds, filterText } = this.state;

    return (
      <Fragment>
        <div className='filter'>
          <TextInput
            value={filterText}
            onChange={this.handleFilterChange}
          />
        </div>
        <ul className='itemlist'>
          {items
            .filter(item =>
              !filterText || this.isFilterMatched(['name', 'description'], item, filterText)
            )
            .map(({ id, name, description }) => {
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
                  <span>
                    {this.getHighlightedText(name)}
                  </span>
                  <span className='itemlist__item-arrow'>
                    🡲
                  </span>
                </div>
                <div className='itemlist__item-description'>
                  {this.getHighlightedText(description)}
                </div>
              </li>
            );
          })}
        </ul>
        {children}
      </Fragment>
    );
  }
}

export default ItemsList;