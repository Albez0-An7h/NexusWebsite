import Home from './Home'
import UseCases from './UseCases'
import Pricing from './Pricing'
import Footer from './Footer'

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#0B1426] via-[#1E3A8A] to-[#4338CA] text-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 25% 25%, rgba(124, 58, 237, 0.3) 0%, transparent 50%),
                            radial-gradient(circle at 75% 75%, rgba(6, 182, 212, 0.3) 0%, transparent 50%)`
        }}></div>
      </div>
      <Home />
      <UseCases />
      <Pricing />
      <Footer />
    </div>
  )
}

export default App
