import Footer from "./components/Footer"
import Card from "./components/Card"
import img01 from "./gradient.png"

function App() {
  return (
    <>
    <div className="flex flex-col mb-16">
      <Card
        image={img01}
        buttonText="Haz clic aquí descubrir más"
      />
      <Footer />
    </div>
    </>
  )
}

export default App
