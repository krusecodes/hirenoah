import Banner from './banner/banner';
import Contact from './contact/contact';
import Nav from './nav/nav';
import Projects from './projects/projects';

export default function Home() {
  return (
    <div>
      <Nav />
      <Banner />
      <Projects />
      <Contact />
    </div>
  )
}
