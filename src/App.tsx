import Header from './components/Header.tsx'
import { ThemeProvider } from './providers/ThemeProvider.tsx'

// Sections for this page (app)
import Skills from './sections/app/Skills.tsx'
import Home from './sections/app/Home.tsx'
import Separator from './components/Separator.tsx'
import Projects from './sections/app/Projects.tsx'
import Footer from './components/Footer.tsx'

const App = () => {
  return (
    <ThemeProvider defaultTheme="dark">
      <div className='min-h-screen bg-background flex flex-col'>
        <Header/>
        <main>
          <Home/>
          <Separator/>
          <Skills/>
          <Separator/>
          <Projects/>
        </main>
        <Footer/>
      </div>
    </ThemeProvider>
  )
}

export default App
