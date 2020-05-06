import React,{Component,Fragment} from "react"
import Axios from "axios"
import CardBlogPost from "../component/CardBlogPost.jsx"
class InputPost extends Component{
    state= {
        title :'', 
        body :'',
        id :null,
        isUpdate: true
    }
    componentDidUpdate(){
        if((this.state.body !== this.props.data.body || this.state.title !== this.props.data.title) && this.state.isUpdate == true){
            console.log("wtfasasasasas ",this.props.data.title, this.props.data.id, this.props.data.body);
            this.setState({
                id : this.props.data.id,
                title: this.props.data.title,
                body : this.props.data.body,
                isUpdate : false
            });     
        }
    }
 render(){
    return(
        <Fragment>
            <CardBlogPost>
                    <form onSubmit={()=> this.props.onSubmit(this.state.id,this.state.title,this.state.body)}>
                    <div className="form-group">
                        <label htmlFor="titlePost">Title</label>
                        <input type="text" className="form-control" id="titlePost" aria-describedby="TitleHelp" placeholder="Enter Title" name="title" value={this.state.title} onChange={(e) => this.setState({title: e.target.value})}/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="bodyPost">Body</label>
                        <textarea type="text" className="form-control" id="bodyPost" placeholder="Enter Body" name="body" value={this.state.body} onChange={(e) => this.setState({body: e.target.value})}/>
                    </div>
                    <button type="submit" className="btn btn-primary">Submit</button>
                </form>
            </CardBlogPost>
        </Fragment>
    )
 }
}
export default InputPost