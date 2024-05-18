import Footer from "./components/Footer"
import Card from "./components/Card"

function App() {
  return (
    <>
    <div className="flex flex-col mb-16">
      <Card
        image="./src/assets/gradient.png"
        buttonText="Haz clic aquí descubrir más"
      />
      <Footer />
    </div>
    </>
  )
}

export default App
