'user strict' ; // this 从指向widows 变成指向undefined ,从而从新绑定上自己的数据

import React from 'react';
class Comment extends React.Component{
    render(){
        return(
            <div >
                <p>
                <span>{this.props.author}</span> <span>{this.props.data}</span><br/>
                <span>{this.props.children}</span>
                </p>
                

            </div>
        )
    }
}
export default Comment;// export {CommentList as default }