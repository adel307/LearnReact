import './PostTitle.css';

function PostTitle ({Value = "This is the post title"}) {
    return (
        <>
            <p className={"PostTitleStyle"}>{Value}</p>
        </>
    )
}

export default PostTitle ;