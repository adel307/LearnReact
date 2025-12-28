import './Posts.css';

function Post () {
    return (
        <div className={"PostStyle"}>
            <p className={"PostTitleStyle"}> This is the post title</p>
            <p> This is the post body </p>
        </div>
    )
}

function Posts () {
    let PostsList = [];
    
    for(let i = 0 ; i < 10 ; i++){
        PostsList.push(
            <Post/>
        )
    }
    return (
        <div>
            {PostsList}
        </div>
    )
}





export default Posts ;