import './PostBody.css';

const DefaultPostBody = 
    <>
        <p> This is the post body  This is the post body </p>
        <p> This is the post body </p>
        <p> This is the post body  This is the post body </p>
        <p> This is the post body </p>
        <p> This is the post body  This is the post body </p>
        <p> This is the post body </p>
    </>

function PostBody ({Value = DefaultPostBody}) {
    return (
        <>
            <p className={"PostBodyStyle"}>{Value}</p>
        </>
    )
}

export default PostBody ;