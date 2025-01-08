import React from 'react';
import { Cpu, MemoryStick, HardDrive, CircuitBoard, Trophy, Zap, Target, Rocket, Sparkles, Laptop } from 'lucide-react';

const computers = [
  {
    name: "Titan X-9000",
    image: "https://images.unsplash.com/photo-1587202372775-e229f172b9d7?auto=format&fit=crop&w=800&q=80",
    specs: [
      { icon: <Cpu className="w-5 h-5" />, text: "Intel Core i9-14900K" },
      { icon: <MemoryStick className="w-5 h-5" />, text: "64GB DDR5 6000MHz" },
      { icon: <HardDrive className="w-5 h-5" />, text: "2TB NVMe Gen5 SSD" },
      { icon: <CircuitBoard className="w-5 h-5" />, text: "NVIDIA RTX 4090 24GB" }
    ],
    price: "3,999€",
    oldPrice: "4,499€",
    slogan: "Domina el futuro del gaming",
    accent: "bg-purple-600",
    icon: <Trophy className="w-6 h-6" />
  },
  {
    name: "Creator Pro",
    image: "https://images.unsplash.com/photo-1593640495253-23196b27a87f?auto=format&fit=crop&w=800&q=80",
    specs: [
      { icon: <Cpu className="w-5 h-5" />, text: "AMD Ryzen 9 7950X" },
      { icon: <MemoryStick className="w-5 h-5" />, text: "128GB DDR5 5600MHz" },
      { icon: <HardDrive className="w-5 h-5" />, text: "4TB NVMe SSD" },
      { icon: <CircuitBoard className="w-5 h-5" />, text: "NVIDIA RTX 4080 16GB" }
    ],
    price: "3,499€",
    oldPrice: "3,999€",
    slogan: "Creatividad sin límites",
    accent: "bg-blue-600",
    icon: <Zap className="w-6 h-6" />
  },
  {
    name: "Elite Gaming",
    image: "https://images.unsplash.com/photo-1600861194942-f883de0dfe96?auto=format&fit=crop&w=800&q=80",
    specs: [
      { icon: <Cpu className="w-5 h-5" />, text: "Intel Core i7-14700K" },
      { icon: <MemoryStick className="w-5 h-5" />, text: "32GB DDR5 5600MHz" },
      { icon: <HardDrive className="w-5 h-5" />, text: "1TB NVMe SSD" },
      { icon: <CircuitBoard className="w-5 h-5" />, text: "NVIDIA RTX 4070 Ti 12GB" }
    ],
    price: "2,499€",
    oldPrice: "2,899€",
    slogan: "Rendimiento excepcional",
    accent: "bg-green-600",
    icon: <Target className="w-6 h-6" />
  },
  {
    name: "Starter Pro",
    image: "https://images.unsplash.com/photo-1591488320449-011701bb6704?auto=format&fit=crop&w=800&q=80",
    specs: [
      { icon: <Cpu className="w-5 h-5" />, text: "AMD Ryzen 7 7800X3D" },
      { icon: <MemoryStick className="w-5 h-5" />, text: "32GB DDR5 5200MHz" },
      { icon: <HardDrive className="w-5 h-5" />, text: "1TB NVMe SSD" },
      { icon: <CircuitBoard className="w-5 h-5" />, text: "NVIDIA RTX 4060 Ti 8GB" }
    ],
    price: "1,799€",
    oldPrice: "1,999€",
    slogan: "Tu primera bestia gaming",
    accent: "bg-red-600",
    icon: <Rocket className="w-6 h-6" />
  }
];

function App() {
  return (
    <div className="min-h-screen bg-gray-900 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <header className="text-center mb-16">
          <div className="flex items-center justify-center gap-2 mb-4">
            <Laptop className="w-12 h-12 text-blue-500" />
            <h1 className="text-4xl font-black text-white">TechForce Gaming</h1>
          </div>
          <p className="text-xl text-gray-300 mb-8">
            Potencia. Rendimiento. Perfección.
          </p>
          
          <div className="inline-flex items-center gap-2 px-6 py-3 bg-yellow-500 rounded-full text-black font-bold mb-8 animate-pulse">
            <Sparkles className="w-5 h-5" />
            ¡Ofertas de Invierno!
            <Sparkles className="w-5 h-5" />
          </div>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          {computers.map((pc) => (
            <div
              key={pc.name}
              className="bg-gray-800 rounded-2xl overflow-hidden shadow-2xl transform transition-all duration-300 hover:scale-[1.02]"
            >
              <div className="relative">
                <img
                  src={pc.image}
                  alt={pc.name}
                  className="w-full h-64 object-cover"
                />
                <div className="absolute top-4 right-4">
                  <div className={`${pc.accent} p-3 rounded-full text-white`}>
                    {pc.icon}
                  </div>
                </div>
                {pc.oldPrice && (
                  <div className="absolute top-4 left-4 bg-red-500 text-white px-3 py-1 rounded-full text-sm font-bold">
                    ¡OFERTA!
                  </div>
                )}
              </div>

              <div className="p-6">
                <h2 className="text-3xl font-bold text-white mb-4">{pc.name}</h2>
                
                <div className="space-y-3 mb-6">
                  {pc.specs.map((spec, index) => (
                    <div key={index} className="flex items-center text-gray-300">
                      <span className="mr-3">{spec.icon}</span>
                      <span>{spec.text}</span>
                    </div>
                  ))}
                </div>

                <div className="flex items-center justify-between">
                  <div>
                    <div className="text-2xl font-bold text-white">
                      {pc.price}
                    </div>
                    {pc.oldPrice && (
                      <div className="text-sm text-gray-400 line-through">
                        {pc.oldPrice}
                      </div>
                    )}
                  </div>
                  <div className={`${pc.accent} px-4 py-2 rounded-lg text-white font-medium`}>
                    {pc.slogan}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <footer className="text-center text-gray-400 mt-12">
          <p className="mb-2">TechForce Gaming © 2024 - Todos los derechos reservados</p>
          <p>Realizado por Raúl Serrano Rodríguez</p>
        </footer>
      </div>
    </div>
  );
}

export default App;