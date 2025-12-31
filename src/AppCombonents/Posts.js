import './Posts.css';
import PostTitle from './PostTitle.js'

function Post ({post_title}) {
    
    return (

        <div className={"PostStyle"}>
            <PostTitle Value = {post_title}/>
            <div className={"PostBodyStyle"}>
                <p> This is the post body  This is the post body </p>
                <p> This is the post body </p>
                <p> This is the post body  This is the post body </p>
                <p> This is the post body </p>
                <p> This is the post body  This is the post body </p>
                <p> This is the post body </p>
            </div>
        </div>
    )
}

function Posts () {
    let PostsList = [];

    let PostsTitlesList = [
        <>
            <p>20</p>
            <p>Tarmeez acadimy</p>
        </>,
        <>
            <p>Hallo world</p>
        </>,
        <>
            <p>Post3</p>
        </>

    ]
    
    for(let i = 0 ; i < 3 ; i++){
        Post.key = i
        PostsList.push(
            <Post post_title = {PostsTitlesList[i]}/>
        )
    }
    return (
        <div>
            <p className={"PostsContainerTitleStyle"}>Posts</p>
            <div className={"PostsContainerStyle"}>
                {
                    PostsList
                }
            </div>
        </div>
    )
}





export default Posts ;