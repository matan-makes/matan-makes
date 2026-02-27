import { Link } from 'react-router-dom'
import avatarSrc from '../assets/IMG_6429.jpg'

function Home() {
  return (
    <main className="page">
      <section className="about">
        <img
          src={avatarSrc}
          alt="Photo of Matan"
          className="avatar"
        />
        <h1>Hi,</h1>
        <p>
          I'm Matan. I like to build things and make art. You can listen to my band <a href="https://coldwrecks.bandcamp.com/">Cold Wrecks</a>!
        </p>
        <p>
          {/* <Link to="/resume">View my resume</Link> or check out{' '} */}
          <Link to="/privacy">privacy policy for my apps</Link> if you're curious.
        </p>
      </section>
    </main>
  )
}

export default Home
