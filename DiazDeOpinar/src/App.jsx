import React from 'react';
import Footer from './components/Footer';
import Card from './components/Card';

function App() {
  return (
    <div className="flex flex-col md:flex-row justify-center items-center md:mb-16">
      <Card
        image="./gradient.png"
        buttonText={
          <>
            Nos interesa tu opinión
            <br />
            <br />
            Haz clic aquí para descubrir más
          </>
        }
        className="md:mr-8 mb-8 md:mb-0" // Agrega margen derecho solo en pantallas medianas y grandes
      />
      <Footer />
    </div>
  );
}

export default App;
