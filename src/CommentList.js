import React, { Component } from 'react';

class CommentList extends Component {
    display = () => {
        if(this.props.isAdmin) {
            let elem=document.getElementById=('display');
            elem.style.display = "initial";
        } else {
            let elem=document.getElementById=('display');
            elem.style.display = "none";
        }
     }
    render() { 
        let commentsList = this.props.comments.map(comment => {
            return <ul className="columns"><div className="column"><li className="has-text-weight-bold">{comment.name}</li><li>{comment.message}</li></div><a class="delete column" id="display"></a></ul>
         })
         let numberComments = commentsList.length;
        /* let isVisible = true; */
        return (
            <div>
                <h2 className="title is-2">Liste des commentaires ({numberComments})</h2>
                <div className="media">
                    <ul className="comment-list media-content">
                        {commentsList} 
                    </ul>
                </div>
            </div>
          );
    }
}
 
export default CommentList;