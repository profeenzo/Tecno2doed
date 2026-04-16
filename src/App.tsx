import React, { useState } from 'react';
import { BookOpen, Monitor, Factory, HeartHandshake, Menu, X, ChevronRight, PlayCircle, Cog } from 'lucide-react';

const digitalTools = [
  { name: 'Classroom', desc: 'Plataforma educativa gratuita de Google diseñada para facilitar la comunicación entre profesores y alumnos, y organizar tareas.', imgUrl: 'https://img.icons8.com/color/480/google-classroom.png' },
  { name: 'Gmail', desc: 'Servicio de correo electrónico gratuito proporcionado por Google.', imgUrl: 'https://img.icons8.com/color/480/gmail-new.png' },
  { name: 'Drive', desc: 'Servicio de alojamiento y sincronización de archivos en la nube de Google.', imgUrl: 'https://img.icons8.com/color/480/google-drive--v2.png' },
  { name: 'Documentos', desc: 'Procesador de texto en línea de Google que permite crear y editar documentos de forma colaborativa.', imgUrl: "data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24'%3E%3Cpath fill='%234285F4' d='M14 2H6c-1.1 0-2 .9-2 2v16c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V8l-6-6z'/%3E%3Cpath fill='%23BBDEFB' d='M14 2v6h6z'/%3E%3Cpath fill='%23fff' d='M8 14h8v2H8zm0-4h8v2H8zm0 8h5v2H8z'/%3E%3C/svg%3E" },
  { name: 'Word', desc: 'Procesador de texto desarrollado por Microsoft, parte de la suite Office.', imgUrl: 'https://img.icons8.com/color/480/microsoft-word-2019--v2.png' },
  { name: 'QR', desc: 'Código de barras bidimensional que almacena datos y puede ser leído por la cámara de un teléfono inteligente.', imgUrl: 'https://img.icons8.com/ios-filled/480/qr-code.png' },
  { name: 'Copilot', desc: 'Asistente de inteligencia artificial desarrollado por Microsoft.', imgUrl: 'https://img.icons8.com/fluency/480/microsoft-copilot.png' },
  { name: 'Gemini', desc: 'Modelo de lenguaje de inteligencia artificial multimodal desarrollado por Google.', imgUrl: 'https://upload.wikimedia.org/wikipedia/commons/8/8a/Google_Gemini_logo.svg' },
  { name: 'NFC', desc: 'Tecnología de comunicación inalámbrica de corto alcance para el intercambio de datos entre dispositivos.', imgUrl: "data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='black'%3E%3Cpath d='M23.958 1.98C23.895 1 23.143.256 22.145.197c-1.102-.066-4.668-.12-5.693-.12 1.832 1.264 2.082 3.644 2.255 8.066.101 2.62.01 11.799.002 12.188l-.049 2.504-9.628-9.63v-3.014l7.656 7.658c.02-1.516.04-3.492.04-5.299 0-1.76-.026-3.354-.076-4.193-.288-4.819-.737-7.077-3.253-7.962-.77-.27-1.487-.335-2.683-.351C9.728.032 2.848.037 1.854.091.8.147.09.914.042 1.9c-.048.977-.064 19.174 0 20.165.062.98.815 1.724 1.812 1.782 1.102.067 4.668.075 5.694.075-1.832-1.264-2.083-3.643-2.255-8.066-.1-2.62-.009-11.8 0-12.188l.047-2.504 9.629 9.63v3.013L7.312 6.152c-.02 1.514-.04 3.49-.04 5.298 0 1.76.026 3.354.077 4.192.288 4.82.736 7.077 3.252 7.962.77.271 1.487.337 2.683.352.987.012 7.868.006 8.861-.047 1.056-.056 1.765-.822 1.813-1.811.048-.976.064-19.127 0-20.118'/%3E%3C/svg%3E" },
  { name: 'Canva', desc: 'Plataforma de diseño gráfico en línea que permite crear presentaciones, gráficos y otros contenidos visuales.', imgUrl: 'https://img.icons8.com/color/480/canva.png' },
  { name: 'Google', desc: 'Empresa tecnológica multinacional conocida principalmente por su motor de búsqueda en internet.', imgUrl: 'https://img.icons8.com/color/480/google-logo.png' },
  { name: 'Chrome', desc: 'Navegador web rápido y seguro desarrollado por Google.', imgUrl: 'https://img.icons8.com/color/480/chrome--v1.png' },
  { name: 'IA', desc: 'Inteligencia Artificial: Campo de la informática que se enfoca en crear sistemas capaces de realizar tareas que requieren inteligencia humana.', imgUrl: 'https://img.icons8.com/fluency/480/artificial-intelligence.png' },
  { name: 'Docx', desc: 'Formato de archivo predeterminado para documentos creados en Microsoft Word.', imgUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/fb/.docx_icon.svg/1200px-.docx_icon.svg.png' },
  { name: 'PDF', desc: 'Formato de archivo utilizado para presentar e intercambiar documentos de manera fiable, independiente del software.', imgUrl: 'https://img.icons8.com/color/480/pdf.png' },
  { name: 'Google Lens', desc: 'Herramienta de reconocimiento de imágenes de Google que utiliza la cámara para identificar objetos y traducir texto.', imgUrl: 'https://img.icons8.com/color/480/google-lens.png' },
  { name: 'Play Store', desc: 'Tienda oficial de aplicaciones, juegos, películas y libros para el sistema operativo Android.', imgUrl: 'https://img.icons8.com/color/480/google-play.png' },
];

export default function App() {
  const [activeSection, setActiveSection] = useState('tech');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navItems = [
    { id: 'tech', label: 'Herramientas Digitales', icon: <Monitor className="w-5 h-5" /> },
    { id: 'materials', label: 'Materiales', icon: <BookOpen className="w-5 h-5" /> },
    { id: 'processes', label: 'Procesos Productivos', icon: <Cog className="w-5 h-5" /> },
    { id: 'history', label: 'Revolución Industrial', icon: <Factory className="w-5 h-5" /> },
    { id: 'rules', label: 'Normas y Bienestar', icon: <HeartHandshake className="w-5 h-5" /> },
  ];

  const scrollToSection = (id: string) => {
    setActiveSection(id);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMobileMenuOpen(false);
  };

  return (
    <div className="flex min-h-screen bg-gray-50 font-sans text-gray-900">
      {/* Sidebar for Desktop */}
      <aside className="hidden md:flex flex-col w-64 bg-white border-r border-gray-200 fixed h-full z-10">
        <div className="p-6 border-b border-gray-200">
          <h1 className="text-2xl font-bold text-indigo-600">EduPortal</h1>
          <p className="text-sm text-gray-500 mt-1">Guía de estudio interactiva</p>
        </div>
        <nav className="flex-1 p-4 space-y-2 overflow-y-auto">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => scrollToSection(item.id)}
              className={`w-full flex items-center space-x-3 px-4 py-3 rounded-lg transition-colors ${
                activeSection === item.id
                  ? 'bg-indigo-50 text-indigo-700 font-medium'
                  : 'text-gray-600 hover:bg-gray-100 hover:text-gray-900'
              }`}
            >
              {item.icon}
              <span>{item.label}</span>
            </button>
          ))}
        </nav>
      </aside>

      {/* Mobile Header */}
      <header className="md:hidden fixed top-0 left-0 right-0 bg-white border-b border-gray-200 z-20 px-4 py-3 flex items-center justify-between">
        <h1 className="text-xl font-bold text-indigo-600">EduPortal</h1>
        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="p-2 text-gray-600 hover:bg-gray-100 rounded-lg"
        >
          {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </header>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden fixed inset-0 z-10 bg-white pt-16">
          <nav className="p-4 space-y-2">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`w-full flex items-center space-x-3 px-4 py-4 rounded-lg text-lg ${
                  activeSection === item.id
                    ? 'bg-indigo-50 text-indigo-700 font-medium'
                    : 'text-gray-600 hover:bg-gray-100'
                }`}
              >
                {item.icon}
                <span>{item.label}</span>
              </button>
            ))}
          </nav>
        </div>
      )}

      {/* Main Content */}
      <main className="flex-1 md:ml-64 pt-16 md:pt-0 p-6 md:p-10 max-w-5xl mx-auto w-full">
        
        {/* Section 1: Herramientas Digitales */}
        <section id="tech" className="mb-20 scroll-mt-24">
          <div className="mb-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-4 flex items-center">
              <Monitor className="w-8 h-8 mr-3 text-indigo-600" />
              Herramientas y Tecnologías Digitales
            </h2>
            <p className="text-lg text-gray-600">
              Conoce las principales aplicaciones, plataformas y conceptos tecnológicos que utilizamos en la actualidad.
            </p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {digitalTools.map((tool, index) => (
              <div key={index} className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden hover:shadow-md transition-shadow flex flex-col">
                <div className="bg-gray-50 h-48 p-6 flex items-center justify-center border-b border-gray-100">
                  <img 
                    src={tool.imgUrl} 
                    alt={`Logo o icono de ${tool.name}`}
                    className="w-full h-full object-contain drop-shadow-sm"
                    referrerPolicy="no-referrer"
                  />
                </div>
                <div className="p-5 flex-1">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{tool.name}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">{tool.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Section 2: Materiales */}
        <section id="materials" className="mb-20 scroll-mt-24">
          <div className="mb-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-4 flex items-center">
              <BookOpen className="w-8 h-8 mr-3 text-indigo-600" />
              Materiales
            </h2>
            <p className="text-lg text-gray-600">
              Entiende de qué están hechas las cosas y cómo se clasifican.
            </p>
          </div>

          <div className="space-y-6">
            <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
              <h3 className="text-2xl font-bold text-gray-900 mb-3">¿Qué son los Materiales?</h3>
              <p className="text-gray-700 leading-relaxed text-lg">
                Los materiales son elementos o sustancias que se emplean para fabricar, construir o producir objetos. Constituyen la materia prima que, al ser transformada, permite crear todo lo que nos rodea, desde un lápiz hasta un edificio. Se clasifican por su origen (natural o sintético) y poseen propiedades físicas o químicas específicas, como dureza, flexibilidad o conductividad, que determinan su uso industrial o cotidiano.
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Materiales Naturales y Artificiales</h3>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-green-50 p-5 rounded-lg border border-green-100">
                  <h4 className="text-xl font-semibold text-green-800 mb-2">Materiales Naturales</h4>
                  <p className="text-green-900 mb-3">Se obtienen directamente de la naturaleza, sin que el ser humano tenga que crearlos desde cero.</p>
                  <ul className="list-disc list-inside text-green-800 space-y-1">
                    <li><strong>Origen vegetal:</strong> Madera, algodón, lino.</li>
                    <li><strong>Origen animal:</strong> Lana, cuero, seda.</li>
                    <li><strong>Origen mineral:</strong> Piedra, arena, arcilla, oro.</li>
                  </ul>
                </div>
                <div className="bg-blue-50 p-5 rounded-lg border border-blue-100">
                  <h4 className="text-xl font-semibold text-blue-800 mb-2">Materiales Artificiales</h4>
                  <p className="text-blue-900 mb-3">Son creados por el ser humano a partir de la transformación física o química de los materiales naturales.</p>
                  <ul className="list-disc list-inside text-blue-800 space-y-1">
                    <li><strong>Plástico:</strong> Derivado del petróleo.</li>
                    <li><strong>Vidrio:</strong> Creado a partir de arena fundida.</li>
                    <li><strong>Papel:</strong> Elaborado a partir de la celulosa de la madera.</li>
                    <li><strong>Acero:</strong> Aleación de hierro y carbono.</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Section 3: Procesos Productivos */}
        <section id="processes" className="mb-20 scroll-mt-24">
          <div className="mb-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-4 flex items-center">
              <Cog className="w-8 h-8 mr-3 text-indigo-600" />
              Procesos Productivos
            </h2>
            <p className="text-lg text-gray-600">
              Descubre cómo se fabrican y transforman los materiales en productos.
            </p>
          </div>

          <div className="space-y-6">
            <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
              <h3 className="text-2xl font-bold text-gray-900 mb-3">¿Qué es un Proceso Productivo?</h3>
              <p className="text-gray-700 leading-relaxed text-lg mb-4">
                Es el conjunto de operaciones, tareas y métodos que se llevan a cabo de forma secuencial para transformar las materias primas (materiales) en productos terminados o servicios listos para su consumo.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-4 bg-gray-50 p-4 rounded-lg">
                <div className="text-center">
                  <span className="block font-bold text-indigo-600">1. Entrada</span>
                  <span className="text-sm text-gray-600">Materias primas</span>
                </div>
                <ChevronRight className="hidden sm:block text-gray-400" />
                <div className="text-center">
                  <span className="block font-bold text-indigo-600">2. Transformación</span>
                  <span className="text-sm text-gray-600">Proceso de fabricación</span>
                </div>
                <ChevronRight className="hidden sm:block text-gray-400" />
                <div className="text-center">
                  <span className="block font-bold text-indigo-600">3. Salida</span>
                  <span className="text-sm text-gray-600">Producto final</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Section 4: Revolución Industrial */}
        <section id="history" className="mb-20 scroll-mt-24">
          <div className="mb-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-4 flex items-center">
              <Factory className="w-8 h-8 mr-3 text-indigo-600" />
              La Revolución Industrial
            </h2>
            <p className="text-lg text-gray-600">
              El período histórico que cambió para siempre la forma en que producimos y vivimos.
            </p>
          </div>

          <div className="space-y-6">
            <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
              <h3 className="text-2xl font-bold text-gray-900 mb-3">¿Qué es la Revolución Industrial?</h3>
              <p className="text-gray-700 leading-relaxed text-lg mb-6">
                Es el cambio fundamental que experimenta una sociedad cuando su economía deja de basarse en la agricultura y la artesanía, para pasar a depender de la industria y la producción mecanizada a gran escala.
              </p>
              <h3 className="text-2xl font-bold text-gray-900 mb-3">¿Qué fue la Revolución Industrial?</h3>
              <p className="text-gray-700 leading-relaxed text-lg">
                Históricamente, fue un proceso de profunda transformación económica, social, cultural y tecnológica. Marcó el paso de una economía rural basada fundamentalmente en la agricultura y el comercio artesanal, a una economía de carácter urbano, industrializada y mecanizada.
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
              <h3 className="text-xl font-bold text-gray-900 mb-3">¿Dónde y cuándo comenzó?</h3>
              <p className="text-gray-700">
                Comenzó en <strong>Gran Bretaña (Inglaterra)</strong> en la segunda mitad del <strong>siglo XVIII</strong> (aproximadamente entre 1760 y 1840), y luego se extendió a otras partes de Europa y América del Norte.
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
              <h3 className="text-2xl font-bold text-gray-900 mb-3">La Máquina de Vapor</h3>
              <p className="text-gray-700 text-lg mb-6">
                Aunque Thomas Newcomen inventó una primera versión en 1712, fue el ingeniero escocés <strong>James Watt</strong> quien inventó la máquina de vapor moderna y eficiente, patentándola en el año <strong>1769</strong>.
              </p>
              <div className="bg-gray-50 p-6 rounded-xl border border-gray-100 flex flex-col items-center justify-center">
                <img 
                  src="/maquina-vapor.jpg" 
                  alt="Infografía de la Máquina de Vapor" 
                  className="w-full max-w-2xl h-auto rounded-lg shadow-sm"
                  onError={(e) => {
                    e.currentTarget.src = 'https://upload.wikimedia.org/wikipedia/commons/9/9e/Steam_engine_in_action.gif';
                  }}
                />
                <p className="text-sm text-gray-500 text-center mt-4 italic">
                  Infografía sobre la evolución y funcionamiento de la máquina de vapor.
                </p>
              </div>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">El invento de James Watt</h3>
              <div className="space-y-4 text-gray-700">
                <div>
                  <h4 className="font-bold text-indigo-700">¿Cómo funcionaba?</h4>
                  <p>Utilizaba la energía térmica del vapor de agua (generado al calentar agua con carbón) para crear presión. Esta presión empujaba un pistón dentro de un cilindro, transformando la energía térmica en energía mecánica (movimiento) que podía mover maquinaria en fábricas o locomotoras.</p>
                </div>
                <div>
                  <h4 className="font-bold text-indigo-700">¿Qué mejoras introdujo?</h4>
                  <p>Su mejora revolucionaria fue la invención del <strong>condensador separado</strong>. En las máquinas anteriores, el cilindro se enfriaba y calentaba constantemente, desperdiciando mucha energía. Watt separó el proceso de condensación, manteniendo el cilindro principal siempre caliente, lo que aumentó enormemente la eficiencia y redujo drásticamente el consumo de carbón.</p>
                </div>
              </div>
            </div>

            <div className="bg-indigo-900 text-white p-6 rounded-xl shadow-md">
              <h3 className="text-2xl font-bold mb-4 flex items-center">
                <PlayCircle className="w-6 h-6 mr-2 text-indigo-300" />
                Actividad: Manualidad de Máquina de Vapor
              </h3>
              <p className="mb-4 text-indigo-100">
                Aprende cómo funcionaba la máquina de vapor construyendo un modelo casero. Mira el siguiente video tutorial:
              </p>
              <div className="aspect-w-16 aspect-h-9 rounded-lg overflow-hidden bg-black shadow-lg">
                <iframe 
                  src="https://www.youtube.com/embed/jywA55Fie4Q" 
                  title="Manualidad de máquina de vapor" 
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                  allowFullScreen
                  className="w-full h-full min-h-[300px] md:min-h-[450px]"
                ></iframe>
              </div>
            </div>
          </div>
        </section>

        {/* Section 5: Normas y Bienestar */}
        <section id="rules" className="mb-20 scroll-mt-24">
          <div className="mb-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-4 flex items-center">
              <HeartHandshake className="w-8 h-8 mr-3 text-indigo-600" />
              Normas Educativas y Bienestar
            </h2>
            <p className="text-lg text-gray-600">
              Reglas para una mejor convivencia y consejos para un uso saludable de la tecnología.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Normas Educativas en Clase</h3>
              <ul className="space-y-3">
                {[
                  "Respetar a los compañeros y al profesor en todo momento.",
                  "Levantar la mano para hablar y esperar el turno pacientemente.",
                  "Prestar atención a las explicaciones y participar activamente.",
                  "Cuidar el material escolar, los dispositivos y las instalaciones.",
                  "Mantener el orden y la limpieza en el aula.",
                  "Ser puntual y responsable con las tareas asignadas."
                ].map((norma, index) => (
                  <li key={index} className="flex items-start">
                    <span className="flex-shrink-0 w-6 h-6 rounded-full bg-indigo-100 text-indigo-700 flex items-center justify-center font-bold text-sm mr-3 mt-0.5">
                      {index + 1}
                    </span>
                    <span className="text-gray-700">{norma}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-gradient-to-br from-teal-50 to-emerald-50 p-6 rounded-xl shadow-sm border border-teal-100">
              <h3 className="text-2xl font-bold text-teal-900 mb-3">Aprender a Desconectar</h3>
              <p className="text-teal-800 mb-4 leading-relaxed">
                "Aprender a desconectar" es una iniciativa que promueve el uso saludable y responsable de la tecnología. Consiste en tomar conciencia del tiempo que pasamos frente a las pantallas y establecer momentos libres de dispositivos digitales.
              </p>
              <p className="text-teal-800 mb-6 leading-relaxed">
                El objetivo es fomentar la interacción cara a cara, el juego al aire libre, la lectura tradicional y el descanso mental, buscando un equilibrio sano entre el mundo digital y la vida real.
              </p>
              <a 
                href="https://buenosaires.gob.ar/gcaba_historico/educacion/aprende-desconectar" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center px-4 py-2 bg-teal-600 hover:bg-teal-700 text-white font-medium rounded-lg transition-colors"
              >
                Leer más sobre la iniciativa
                <ChevronRight className="w-4 h-4 ml-1" />
              </a>
            </div>
          </div>
        </section>

      </main>
    </div>
  );
}
