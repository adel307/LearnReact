import './Posts.css';

function PostTitle () {
    return (
        <p className={"PostTitleStyle"}> This is the post title</p>
    )
}

function Post () {
    return (
        <div className={"PostStyle"}>
            <PostTitle/>
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
    
    for(let i = 0 ; i < 10 ; i++){
        Post.key = i
        PostsList.push(
            <Post/>
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