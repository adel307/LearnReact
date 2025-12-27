import './Posts.css';

function Post () {
    return (
        <div className={"PostStyle"}>
            <p> This is the post title</p>
            <p> . </p>
            <p> This is the post body </p>
        </div>
    )
}

function Posts () {
    return (
        <>
            <Post/>
        </>
    )
}





export default Posts ;