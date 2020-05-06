import React ,{Component} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import BlogPost from "./component/BlogPost.jsx"
import InputPost from "./component/InputPost"
import Axios from 'axios';

class App extends Component {
 state = {
   posts: [],
   formBlogPost: {
     userId: 1,
     id: null,
     title: '',
     body: ''
   },
   formBlogUpdate : {
    userId: 1,
    id: null,
    title: '',
    body: ''
   },
   isUpdate : false
  }
  onHandleUpdate = async(id,title,body) =>{
    try{
      await Axios.put(`http://localhost:3004/posts/${id}`,{
        userId: 1,
        id: id,
        title: title,
        body: body
      })
    }catch(err){
      console.log(err)
    }
  }
  onHandleEdit = async(data) => {
  const formBlogUpdateNew = {...data};
  this.setState({formBlogUpdate : formBlogUpdateNew })
 }
 onFormSubmit = async (title,body) => {
   const id = new Date().getTime();
   this.setState({title: title, body: body, id: id});
   await Axios.post('http://localhost:3004/posts',{
    userId: 1,
    id: this.state.id,
    title: title,
    body: body
   })
   this.onGetPost();
 }
 
 onGetPost = async () =>{
   const response = await Axios.get('http://localhost:3004/posts?_sort=id&_order=desc');
   this.setState({posts : response.data});
 }
 onHandleRemove= async(data) => {
    Axios.delete(`http://localhost:3004/posts/${data}`).then((res) => {
      this.onGetPost()
    })
    
  }
  componentDidMount(){
    this.onGetPost();
  }
  render(){
    return (
      <div className="App container">
        <InputPost onSubmit={this.onFormSubmit} data={this.state.formBlogUpdate} isUpdate={true} edit={this.onHandleUpdate} />
        {this.state.posts.map(post=> {
          return <BlogPost key={post.id} posts={post} remove={this.onHandleRemove} edit={this.onHandleEdit}/>
        })}
      </div>
    );
  }
 
}

export default App;
