
const MyCard = () => {
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
        <article className="about">
            <h3 className="about-title">About</h3>
            <p>Hi, I'm Syed Shuja Hussain. I'm a Full Stack Developer with a background in Computer Science. I'm passionate about building web applications and learning new technologies. I'm currently looking for a full time position as a Software Engineer.</p>
        </article>

        <article className= "Interest about">
            <h3 className="about-title">Interests</h3>
            <p>My interests include reading, writing, and learning new technologies. I'm also a big fan of the outdoors and enjoy hiking, camping, and rock climbing.</p>
        </article>

        <ul className='SocialMedia'>
            <li><a href='http://twitter.com/SyedShujaHussa3'><img src={require('../Assets/Twitter.png')} alt='Twitter' /></a></li>
            <li><a href='http://github.com/shuja-shah'><img src={require('../Assets/GitHub.png')} alt='GitHub' /></a></li>
        </ul>
        </> 
    )
}

export default MyCard;