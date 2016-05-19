import { Component } from 'react';

class AppComponent extends Component {
  _bind(...methods) {
    methods.forEach((method) => {
      this[method] = this[method].bind(this)
    });
  }
}

export default AppComponent;