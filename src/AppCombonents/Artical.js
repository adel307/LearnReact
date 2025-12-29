import './Artical.css';

function Artical ({name,age,email,content = "no content"}) {
    return (
        <>
            <div className="Artical">
                <p>{name}</p>
                <p>{age}</p>
                <p>{email}</p>
                <p>{content}</p>
            </div>
        </>
    );
}


export default Artical;