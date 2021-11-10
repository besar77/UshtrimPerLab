import React,{Component} from 'react';
import './App.css';
import 'semantic-ui-css/semantic.min.css';
import { Header, Icon } from 'semantic-ui-react';


class App extends Component {
  state ={
      values: []
  }

  componentDidMount(){
    this.setState({
      values: [{id:1,name:'Value 101'},{id:2,name:'Value 102'}]
    })
  }

  render(){
  return (
    <div>
      <Header as='h2'>
        <Icon name='users'/>
        <Header.Content>Reactivities</Header.Content>
      </Header>
        <ul>
          {this.state.values.map((value:any) => (
            <li>{value.name}</li>
          ))}
        </ul>

    </div>
  );
      }
}

export default App;
