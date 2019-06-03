'user strict' ; // this 从指向widows 变成指向undefined ,从而从新绑定上自己的数据

import React from 'react';
class CommentForm extends React.Component{
    render(){
        return(
            <form action="">
                <input type="text" placeholder="请输入姓名"/>
                <br/>
                <br/>
                <textarea style={{resize:"none"}} name="" id="" cols="30" rows="10" placeholder="评论"></textarea>
                <br/>
                <button type="sublime"> 添加评论</button>
            </form>
        )
    }
}
export default CommentForm;// export {CommentList as default }