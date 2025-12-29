import './Artical.css';

function Artical (Props) {
    console.log(Props)
    return (
        <>
            <div className="Artical">
                <p>{Props.name}</p>
                <p>{Props.age}</p>
                <p>{Props.email}</p>
                <p>{Props.content}</p>
            </div>
        </>
    );
}


export default Artical;