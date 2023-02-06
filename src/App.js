import { Routes, Route, Link } from "react-router-dom"
import Home from "./pages/Home"
import About from "./pages/About"
import NotFound from "./pages/NotFound"
import Navbar from "./components/layout/Navbar"
import Footer from "./components/layout/Footer"
import { GithubProvider } from "./context/github/GithubContext"

const App = () => {
  return (
    <GithubProvider>
      <div className="flex flex-col justify-between min-h-screen">
        <Navbar />
        <main className="container mx-auto px-3 pb-12 " >
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </GithubProvider>
  )
}


export default App