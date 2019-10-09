import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  constructor() {
    super();
    this.state = {
      scores: [],
    }
  }

  componentDidMount() {
    fetch('http://localhost:4000/scores')
    .then(res => res.json)
    .then(data => this.setState({scores:data}));
  }

  handleDelete = (_id)=> {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json',
    },
    data: { _id }
  })

  handleAdd() {
    fetch('http://localhost:4000/scores'), {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      data: JSON.stringify({ name: this.state.name, score: this.state.scoreInput})
    }
  }

  handleChange(e) {
    const { name,value } = e.target;
    this.setState({ [name]: value});
  }

  render () {
    return (
      <div className="App">
        <h1>High Scores</h1>
        <ul>
          {this.state.scores.map(score => {
            return <li key={score._id}>{score.name} - {score.score}</li>
          })}
        </ul>
        <input
          name="nameInput"
          value={}
      </div>
    )
  }
}

export default App;
