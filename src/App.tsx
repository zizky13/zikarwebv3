import './App.css'
import { useNavigate } from 'react-router-dom'
import Navbar from './components/Navbar'
import BlurText from './components/BlurText'
import SplitText from './components/SplitText';
import PixelCard from './components/PixelCard';
import HtmlIcon from './assets/images/skill-icons_html.svg';
import CssIcon from './assets/images/skill-icons_css.svg';
import ConfluIcon from './assets/images/skill-icons_conflu.svg'
import TSIcon from './assets/images/skill-icons_ts.svg'
import GitIcon from './assets/images/skill-icons_git.svg'
import GitHubIcon from './assets/images/skill-icons_github.svg'
import JiraIcon from './assets/images/skill-icons_jira.svg'
import JSIcon from './assets/images/skill-icons_js.svg'
import MiroIcon from './assets/images/skill-icons_miro.svg'
import NodeIcon from './assets/images/skill-icons_node.svg'
import PythonIcon from './assets/images/skill-icons_python.svg'
import ReactIcon from './assets/images/skill-icons_react.svg'
import RnIcon from './assets/images/skill-icons_rn.svg'
import SwiftIcon from './assets/images/skill-icons_swift.svg'
import VscodeIcon from './assets/images/skill-icons_vscode.svg'
import XcodeIcon from './assets/images/skill-icons_xcode.svg'
import { ProjectCard } from './components/ProjectCard';
import { projects } from './data/projects';

const handleAnimationComplete = () => {
  console.log('Animation completed!');
};

function App() {
  const navigate = useNavigate();

  return (
  <div className='min-h-screen'>
    {/* Navbar layer - on top */}
    <div className='fixed top-8 left-1/2 -translate-x-1/2 w-3/4 max-w-4xl z-20'>
      <Navbar/>
    </div>

    {/* Zikar Section - Hero */}
    <section id="zikar" className="min-h-screen flex flex-col items-center justify-center px-8">
      <div className="w-full flex flex-col items-center justify-center gap-6">
        <BlurText
          text="Zikar Nurizky is Aspiring iOS Engineer"
          delay={200}
          animateBy="words"
          direction="top"
          onAnimationComplete={handleAnimationComplete}
          className="text-4xl font-[SF-Pro] font-bold text-center"
        />
        <SplitText
          text="Certified iOS Developer. Ultimate IT Student. Tangerang-based."
          className="text-md font-[inter] text-center"
          delay={50}
          duration={1.25}
          ease="power3.out"
          splitType="chars"
          from={{ opacity: 0, y: 40 }}
          to={{ opacity: 1, y: 0 }}
          threshold={0.1}
          rootMargin="-100px"
          textAlign="center"
          onLetterAnimationComplete={handleAnimationComplete}
        />
      </div>
    </section>

    {/* Highlights Section */}
    <section id="about" className="min-h-screen w-full flex flex-col items-center justify-center pb-16">
      <div className="flex flex-col flex-1 h-screen w-full items-center justify-center">
        <div className='my-24'>
        <h1 className='text-4xl font-[SF-Pro] font-bold text-center'>Technologies I've Worked With</h1>
        </div>
        <div className='grid h-screen w-full grid-cols-7 grid-rows-4 gap-2'>
          <div className='col-span-2 row-span- bg-black rounded-3xl flex justify-center items-center'>fill content here</div>
          <div className='col-span-1 row-span-1 rounded-3xl flex justify-center items-center'>
            <PixelCard variant="dark">
              <img src={HtmlIcon} alt="HTML5" className="w-36 h-36" style={{position: 'absolute'}} />
            </PixelCard>
          </div>
          <div className='col-span- row-span- rounded-3xl flex justify-center items-center'>
            <PixelCard variant="dark">
              <img src={CssIcon} alt="CSS" className="w-36 h-36" style={{position: 'absolute'}} />
            </PixelCard>
          </div>
          <div className='col-span- row-span-3 bg-black rounded-3xl flex justify-center items-center'>Blank</div>
          <div className='col-span- row-span- rounded-3xl flex justify-center items-center'>
            <PixelCard variant="dark">
              <img src={GitIcon} alt="GIT" className="w-36 h-36" style={{position: 'absolute'}} />
            </PixelCard>
          </div>
          <div className='col-span- row-span- rounded-3xl flex justify-center items-center'>
            <PixelCard variant="dark">
              <img src={MiroIcon} alt="MIRO" className="w-36 h-36" style={{position: 'absolute'}} />
            </PixelCard>
          </div>
          <div className='col-span- row-span- rounded-3xl flex justify-center items-center'>
            <PixelCard variant="dark">
              <img src={PythonIcon} alt="PYTHON" className="w-36 h-36" style={{position: 'absolute'}} />
            </PixelCard>
          </div>
          <div className='col-span- row-span-  rounded-3xl flex justify-center items-center'>
            <PixelCard variant="dark">
              <img src={SwiftIcon} alt="SWIFT" className="w-36 h-36" style={{position: 'absolute'}} />
            </PixelCard>
          </div>
          <div className='col-span- row-span-  rounded-3xl flex justify-center items-center'>
            <PixelCard variant="dark">
              <img src={TSIcon} alt="TS" className="w-36 h-36" style={{position: 'absolute'}} />
            </PixelCard>
          </div>
          <div className='col-span- row-span-  rounded-3xl flex justify-center items-center'>
            <PixelCard variant="dark">
              <img src={JSIcon} alt="JS" className="w-36 h-36" style={{position: 'absolute'}} />
            </PixelCard>
          </div>
          <div className='col-span- row-span-  rounded-3xl flex justify-center items-center'>
            <PixelCard variant="dark">
              <img src={GitHubIcon} alt="GITHUB" className="w-36 h-36" style={{position: 'absolute'}} />
            </PixelCard>
          </div>
          <div className='col-span- row-span-  rounded-3xl flex justify-center items-center'>
            <PixelCard variant="dark">
              <img src={JiraIcon} alt="JIRA" className="w-36 h-36" style={{position: 'absolute'}} />
            </PixelCard>
          </div>
          <div className='col-span-2 row-span-2 bg-black rounded-3xl flex justify-items-start items-center p-8'>
            <div className='grid grid-cols-1 grid-rows-4 justify-items-start'>
              <h3 className='text-white text-6xl font-[SF-Pro] font-bold text-center'>MVVM</h3>
              <p className='text-white text-6xl font-[SF-Pro] font-bold text-center'>UIKit</p>
              <p className='text-white text-6xl font-[SF-Pro] font-bold text-center'>SwiftUI</p>
              <p className='text-white text-6xl font-[SF-Pro] font-bold text-center'>SwiftLint</p>
            </div>
          </div>
          <div className='col-span- row-span-  rounded-3xl flex justify-center items-center'>
            <PixelCard variant="dark">
              <img src={ReactIcon} alt="REACT" className="w-36 h-36" style={{position: 'absolute'}} />
            </PixelCard>
          </div>
          <div className='col-span- row-span-  rounded-3xl flex justify-center items-center'>
            <PixelCard variant="dark">
              <img src={RnIcon} alt="REACT NATIVE" className="w-36 h-36" style={{position: 'absolute'}} />
            </PixelCard>
          </div>
          <div className='col-span- row-span-  rounded-3xl flex justify-center items-center'>
            <PixelCard variant="dark">
              <img src={ConfluIcon} alt="CONFLUENCE" className="w-36 h-36" style={{position: 'absolute'}} />
            </PixelCard>
          </div>
          <div className='col-span- row-span-  rounded-3xl flex justify-center items-center'>
            <PixelCard variant="dark">
              <img src={XcodeIcon} alt="XCODE" className="w-36 h-36" style={{position: 'absolute'}} />
            </PixelCard>
          </div>
          <div className='col-span- row-span-  rounded-3xl flex justify-center items-center'>
            <PixelCard variant="dark">
              <img src={NodeIcon} alt="NODEJS" className="w-36 h-36" style={{position: 'absolute'}} />
            </PixelCard>
          </div>
          <div className='col-span-3 row-span- bg-black rounded-3xl flex justify-center items-center'>Blank</div>
          <div className='col-span- row-span-  rounded-3xl flex justify-center items-center'>
            <PixelCard variant="dark">
              <img src={VscodeIcon} alt="VSCODE" className="w-36 h-36" style={{position: 'absolute'}} />
            </PixelCard>
          </div>
        </div>
      </div>
    </section>

    {/* iOS Section */}
    <section id="iOS" className="min-h-screen flex flex-col items-center justify-center py-16">
      <div className="w-full">
        <h3 className="text-5xl font-[SF-Pro] font-bold text-center mb-16">iOS Development</h3>
        { projects.map((project, index) => 
        (<ProjectCard 
          key={index} 
          title={project.title}
          highlight={project.highlight}
          description={project.description}
          imageUrl={project.imageUrl}
          onClick={() => navigate(`/project/${project.id}`)}
        />)
        )}
      </div>
    </section>

    {/* Web Section */}
    <section id="web" className="min-h-screen flex flex-col items-center justify-center px-8">
      <div className="max-w-4xl">
        <h3 className="text-5xl font-[SF-Pro] font-bold text-center mb-8">Web Development</h3>
        <p className="text-lg font-[inter] text-center text-gray-700">
          This section is still under construction...
        </p>
      </div>
    </section>

    {/* PM Section */}
    <section id="pm" className="min-h-screen flex flex-col items-center justify-center px-8 bg-white">
      <div className="max-w-4xl">
        <h3 className="text-5xl font-[SF-Pro] font-bold text-center mb-8">Product Management</h3>
        <p className="text-lg font-[inter] text-center text-gray-700">
          This section is still under construction...
        </p>
      </div>
    </section>

    {/* Contact Section */}
    <section id="contact" className="min-h-screen flex flex-col items-center justify-center px-8">
      <div className="max-w-4xl">
        <h3 className="text-5xl font-[SF-Pro] font-bold text-center mb-8">Contact Me</h3>
        <p className="text-lg font-[inter] text-center text-gray-700 mb-8">
          Let's connect! Reach out for collaborations, opportunities, or just to say hello.
        </p>
        <div className="flex justify-center gap-6">
          <a href="mailto:zikar.nurizky@gmail.com" className="px-6 py-3 bg-black text-white rounded-full hover:bg-gray-800 transition-colors">
            Email Me
          </a>
          <a href="https://www.linkedin.com/in/zikar-nurizky/" target="_blank" rel="noopener noreferrer" className="px-6 py-3 border-2 border-black rounded-full hover:bg-black hover:text-white transition-colors">
            LinkedIn
          </a>
        </div>
      </div>
    </section>
  </div>
  )
}

export default App
