import React from 'react'
import Navbar from './components/Navbar'
import MyAvatar from './components/Avatar'
import About from './components/About'
import Skills from './components/Skills'
import Works from './components/Works'
import Contact from './components/Contact'
import ScrollUpToTop from './components/ScrollUpToTop'
import Career from './components/Career'

const App: React.FC = () => {
  const sectionStyle = {
    height: '60v',
    paddingTop: '6vh',
    display: "flex",
    justifyContent: "center",
    alignItems: "center"
  };


  return (
    <div style={{height: '100vh'}}>
      <section>
        <Navbar />
      </section>
      <section style={sectionStyle}>
        <MyAvatar />
      </section>
      <section id='about' style={sectionStyle}>
        <About />
      </section>
      <section id='career' style={sectionStyle}>
        <Career />
      </section>
      <section id='skills' style={sectionStyle}>
        <Skills />
      </section>
      <section id='works' style={sectionStyle}>
        <Works />
      </section>
      <section id='contact' style={sectionStyle}>
        <Contact />
      </section>
      <ScrollUpToTop />
    </div>
  );
}
export default App;