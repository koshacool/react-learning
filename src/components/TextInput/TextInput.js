import _ from 'lodash';
import React, { Component } from 'react';

import './TextInput.css';

class TextInput extends Component {
  state = {
    value: this.props.value || ''
  };

  onChangeDebounced = _.debounce(this.props.onChange, 300);

  onChange = e => {
    const {value} = e.target;

    this.setState({value});
    this.onChangeDebounced(value);
  }

  render () {
    return (
      <input
        value={this.state.value}
        onChange={this.onChange}
        // className=''
      />
    );
  }
}

export default TextInput;