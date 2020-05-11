//library
import React ,{Component,Fragment} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter,Route,Router,Link, withRouter} from "react-router-dom";
import Axios from 'axios';
//component
import BlogPost from "./component/BlogPost.jsx"
import InputPost from "./component/InputPost"
import DetailPost from "./component/DetailPost"

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
    isUpdate : false,
    btnText : 'submit'
  }

  onHandleDetail = (data) =>{
    this.props.history.push(`/detail-post/${data.id}`);
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

  onHandleEdit = (data) => {
    this.setState({isUpdate: true, btnText: 'Edit'});
    const formBlogUpdateNew = {...data};
    this.setState({formBlogUpdate : formBlogUpdateNew });
    console.log("data ",data);
    console.log(this.state.formBlogUpdate);
 }

 onFormSubmit = async (id,title,body) => {
  if(this.state.isUpdate == true){
    this.setState({btnText: 'Submit'});
    this.onHandleUpdate(id,title,body);
    this.setState({isUpdate : false});
  }else{
    const id = new Date().getTime();
    this.setState({title: title, body: body, id: id});
    await Axios.post('http://localhost:3004/posts',{
     userId: 1,
     id: this.state.id,
     title: title,
     body: body
    })
   }
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
      <BrowserRouter>
        <Fragment>
          <Route path="/App" exact component={App}/>
          <Route path="/detail-post/:id" exact component={withRouter(DetailPost)} />
          <div className="App container">
            <InputPost onSubmit={this.onFormSubmit} data={this.state.formBlogUpdate} isUpdate={true} btnText={this.state.btnText}/>
            {this.state.posts.map(post=> {
              return <BlogPost key={post.id} posts={post} remove={this.onHandleRemove} edit={this.onHandleEdit}/>
            })}
          </div>
        </Fragment>
      </BrowserRouter>
    );
  }
 
}

export default App;
