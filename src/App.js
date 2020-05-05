import React ,{Component} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import BlogPost from "./component/BlogPost.jsx"
import Axios from 'axios';

class App extends Component {
 state = {posts: []}
  componentDidMount(){
    (async() => {
      const response = await Axios.get('https://jsonplaceholder.typicode.com/posts');
      console.log(response);
      this.setState({posts : response.data});
    })(); 
  }
  render(){
    return (
      <div className="App">
        <BlogPost posts={this.state.posts}/>
      </div>
    );
  }
 
}

export default App;
