import './Posts.css';
import PostTitle from './PostTitle.js'
import PostBody from './PostBody.js'

function Post ({post_title,post_body}) {
    
    return (

        <div className={"PostStyle"}>
            <PostTitle Value = {post_title}/>
            <div className={"PostBodyStyle"}>
                <PostBody Value = {post_body}/>
            </div>
        </div>
    )
}

function Posts () {
    let PostsList = [];

    let PostsTitlesList = [
        <>
            <p>Tarmeez acadimy</p>
        </>,
        <>
            <p>Hallo world</p>
        </>,
        <>
            <p>Post3</p>
        </>,
    ]

    let PostsBodysList = [
        <>
            <p> أكاديمية متخصصة في تعليم البرمجة بكافة فروعها </p>
        </>,
        <>
            <p>This is the Hallo world artical </p>
        </>,
        <>
            <p>Post3 content</p>
        </>,
    ]

    for(let PostsNumber = 0 ; PostsNumber < PostsBodysList.length ; PostsNumber--){
        Post.key = PostsNumber
        PostsList.push(
            <Post post_title = {PostsTitlesList[PostsNumber]} post_body = {PostsBodysList[PostsNumber]}/>
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