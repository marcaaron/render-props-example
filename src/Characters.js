import {Component} from 'react';
import axios from 'axios';

export default class Characters extends Component {
  state = {
    characters: []
  }

  async componentDidMount(){
    const response = await axios.get('https://rickandmortyapi.com/api/character');
    const { data: { results } } = response;
    this.setState({characters: results});
  }

  render() {
    return this.props.render(this.state)
  }
}
