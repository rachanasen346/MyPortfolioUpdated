
import { Route, BrowserRouter as Router, Routes} from 'react-router-dom';
import Navbar from './components/Navbar';
import { HomePage, About, Projects, Contact } from './pages';
import Footer from './components/Footer';
import ProjectGallery from './pages/projectGallery';
import Resume from './pages/Resume';
import Layout from './components/Layout'

const App = () => {
  return (
    <div className=' h-[100vh]'>
      <Router>
        {/* <Navbar /> */}
       <Routes>
        <Route path='/' element={<Layout> <HomePage /></Layout> }/>
        <Route path='/about' element={ <Layout> <About /> </Layout> }/>
        <Route path='/projects' element={ <Layout><Projects /></Layout> }/>
        <Route path='/contact' element={ <Layout><Contact /> </Layout>}/>
        <Route path="/project-gallery/:id" element={<Layout><ProjectGallery /> </Layout>} />
        <Route path="/resume" element={<Resume />} />
       </Routes>
       {/* <Footer /> */}
      </Router>

     

    </div>
  )
}

export default App