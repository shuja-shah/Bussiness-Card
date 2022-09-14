
const myCard = () => {
    return (
        <>
        <img className = "myPhoto" src={require('../Assets/headshot.png')} alt='myPhoto' />
        <article className="Intro">
            <h1 className="myName">Syed Shuja Hussain (He/Him) </h1>
            <h2 className='myTitle'>Full Stack Developer</h2>
            <a href = "https://shuja-shah.github.io" target="_blank" rel="noopener noreferrer">My Portfolio</a>
        </article>
        <div className="buttons">
            <a className='btn email'  href="mailto:shujashah786@gmail.com" target="_blank" rel="noopener noreferrer">Email</a>
            <a className= 'btn email' href= "https://linkedin.com/syedshujahussa" target="_blank" rel="noopener noreferrer"> LinkedIn</a>
        </div>
        </>
    )
}