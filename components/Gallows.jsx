import React from 'react';
import AppComponent from './AppComponent.jsx';
import PoorDude from './PoorDude.jsx';

class Gallows extends AppComponent {
  render() {
    const { gameState: { over } } = this.context.store.getState();
    let className = ['gallows'];

    if(over) {
      className.push('sleep-well-angel');
    }

    return (
      <div className={className.join(' ')}>
        <div className="bar horizontal-bar" />
        <div className="bar vertical-bar" />
        <PoorDude />
      </div>
    );
  }
}

Gallows.contextTypes = {
  store: React.PropTypes.object
};

export default Gallows;