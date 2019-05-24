'user strict'; // this 从指向widows 变成指向undefined ,从而从新绑定上自己的数据

import React from 'react';
import Comment from "./Comment"

class CommentList extends React.Component {
    render() {
        let commentNotes = this.props.data.map((com,index)=> {
            return (
                <Comment author={com.author} data={com.data} key={index}>{com.text}</Comment>
            )
        });
        return (
            <div >
                {commentNotes}
                <br/>
            </div>
        )
    }
}

export default CommentList;// export {CommentList as default }