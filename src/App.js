import React, { Component } from 'react';
import './App.scss';
import CommentList from "./CommentList";

import AdminMode from "./AdminMode";

class App extends Component {
  state = { 
    name: "",
    comment: "",
    comments: [  
      { id: 1,name: "JB", message: "Youhou la famille!"},
      { id: 2, name: "Kirikou", message: "Je ne suis pas grand mais je suis vaillant"}
    ]
   }

  handleSubmit = (e) => {
    e.preventDefault();
    let newComment = {
      name: this.state.name,
      message: this.state.comment
    }

    this.setState({
      comments: [...this.state.comments,newComment]
    })
  }


  handleChangeName = (e) => {
    this.setState({
      name:  e.target.value
    })
  }

  handleChangeComment = (e) => {
    this.setState({
      comment:  e.target.value
    })
  }

  render() { 

    return ( 
      <div className="App container">

        <AdminMode />
      <section className="columns">
        <div className="column">
          <h2 className="title is-2">Ajouter un commentaire</h2>
          <form onSubmit={this.handleSubmit} className="commentForm" >

            <label htmlFor="Name" className="has-text-weight-bold field mt-2">
              Name
              <input type="text" placeholder="Text Input"
              onChange={this.handleChangeName} className="input control mt-2"
              value={this.state.name} />
            </label>

              <label htmlFor="Message" className="has-text-weight-bold mt-2">
                Message
                <textarea placeholder="Textarea"
                className="textarea control mt-2"
                onChange={this.handleChangeComment}
                value={this.state.comment}
                cols="30" rows="10"></textarea>
              </label>
              
            <button className="button is-primary field mt-2">Envoyer</button>
          </form>
        </div>
        <div className="column">
          <CommentList comments={this.state.comments} />
        </div>
      </section>
        </div>
      
     );
  }
}
 
export default App;