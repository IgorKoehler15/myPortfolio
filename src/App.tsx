import AboutSection from "./Pages/Home/sections/AboutSection/AboutSection"
import HeroSection from "./Pages/Home/sections/HeroSection/HeroSection"
import Navbar from "./components/Navbar/Navbar"
import ProjectsSection from "./Pages/Home/sections/ProjectsSection/ProjectsSection"
import Footer from "./components/Footer/Footer"
import MusicPlayer from "./components/MusicPlayer/MusicPlayer.tsx" // 👈 importe aqui

const App: React.FC = () => {
  return (
    <>
      <Navbar />
      <HeroSection />
      <AboutSection />
      <ProjectsSection />
      <Footer />
      <MusicPlayer /> {/* 👈 player fixo sempre no canto inferior */}
    </>
  )
}

export default App
