import React from 'react';
import axios from 'axios';
import Data from './Data';

const apiUrl = 'https://jsonplaceholder.typicode.com/todos/1';

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      item: null
    };
    this.setState = this.setState.bind(this);
  }

  componentDidMount() {
    console.log('DID MOUNT')
    axios.get(apiUrl)
      .then((response) => {
        console.log('INSIDE COMPONENT', response.data);
        const data = response.data;
        this.setState({
          item: data
        });
      })
    // Data.all().then((data) => {
    //   console.log('INSIDE COMPONENT', response.data);
    //   this.setState({
    //     item: response.data
    //   });
    // });
  }

  render() {
    return (
      <div>
        <h1>Hello</h1>
        <h2>{this.state.item ? this.state.item.title : ''}</h2>
      </div>
    )
  }
}

export default App;

