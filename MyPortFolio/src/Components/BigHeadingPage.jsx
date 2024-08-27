import '../styles/BigHeadingPage.css'

export default function BigHeadingPage ({text}){
    return (
        <div className='heading-container'>
            <div className="big-heading-container">
                <h1 className="big-heading">{text}</h1>
            </div>
        </div>
    );
}