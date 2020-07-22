import React, { Component } from 'react';
import styles from './App.module.css';

class App extends Component {
  state = {
    cards: []
  }

  add = () => {
    const { cards } = this.state;
    let newCard
    do {
      newCard = Math.floor(Math.random() * 100);
    } while (cards.includes(newCard))

    this.setState({ cards: [...cards, newCard] })
  }

  remove = (item) => () => {
    const { cards } = this.state;
    this.setState({ cards: cards.filter(card => card !== item) })
  }

  sort = () => {
    const { cards } = this.state;
    this.setState({ cards: [...cards].sort((a, b) => a - b) })
  }

  render() {
    const { cards } = this.state;
    return (
      <div className={styles.root}>
        <div className={styles.body}>
          <div className={styles.header}>
            <div className={styles.button} onClick={this.add}>Add card</div>
            <div className={styles.button} onClick={this.sort}>Sort card</div>
          </div>

          <div className={styles.scrollableWrapper}>
            <div className={styles.scrollable}>
              {cards.map(card => <Card key={card} item={card} remove={this.remove(card)} />)}
            </div>
          </div>
          <div className={styles.footer}>
            Footer
          </div>
        </div>
        <div className={styles.rightPanel}> (instructions)</div>
      </div>
    );
  }
}

function Card(props) {
  const { item, remove } = props;
  return (
    <div className={styles.card}>
      <div className={styles.cardBody}>
        {item}
        <span role="img" aria-label="cross" className={styles.cross} onClick={remove}>&#x274C;</span>

      </div>
    </div>
  )
}

export default App;
