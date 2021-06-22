import React from 'react'

const Gradient = () => {
  return (
    <section>
      <div className="relative py-20 radius-for-skewed" style={{backgroundImage: 'url("./background.jpeg")', backgroundSize: 'cover', backgroundRepeat: 'no-repeat', backgroundPosition: 'center'}}>
        <div className="absolute inset-0 bg-gray-900 opacity-80 radius-for-skewed" />
        <div className="container mx-auto px-4 relative">
          <div className="max-w-md text-center mx-auto">
            <span className="text-green-600 font-bold" />
            <h2 className="text-4xl lg:text-5xl text-white font-bold font-heading">Conoce el sabor de la buena comida</h2>
            <div className="mb-6 max-w-sm mx-auto">
              <p className="text-gray-400 leading-loose">En Exagonos Parla disfrutarás de un ambiente
                cálido y cercano. Ademas de un trato personalizado y podrá pasar una agradable velada con amigos y familia.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Gradient
