import React, { useEffect, useState } from 'react';
import { Download, Mail, Phone, MapPin, MousePointer2, Play } from 'lucide-react';

function App() {
  const [cursorPosition, setCursorPosition] = useState({ x: -100, y: -100 });
  const [isHovering, setIsHovering] = useState(false);

  useEffect(() => {
    const moveCursor = (e: MouseEvent) => {
      setCursorPosition({ x: e.clientX, y: e.clientY });
    };

    document.addEventListener('mousemove', moveCursor);
    return () => document.removeEventListener('mousemove', moveCursor);
  }, []);

  const handleMouseEnter = () => setIsHovering(true);
  const handleMouseLeave = () => setIsHovering(false);

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Custom Cursor */}
      <div 
        className="custom-cursor-dot"
        style={{ left: cursorPosition.x, top: cursorPosition.y }}
      />
      <div 
        className={`custom-cursor-outline ${isHovering ? 'hover' : ''}`}
        style={{ left: cursorPosition.x, top: cursorPosition.y }}
      />

      {/* Hero Section */}
      <div className="relative h-screen flex items-center justify-center overflow-hidden animated-bg">
        <div className="absolute inset-0 bg-black/50 z-10"></div>
        <div className="container mx-auto px-6 relative z-20 text-center">
          <div className="floating">
            <h1 className="text-8xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-purple-500 to-pink-500">
              Nikhil Lohani
            </h1>
            <p className="text-3xl text-gray-300 mb-8">Creative Graphic Designer</p>
            <button 
              className="bg-purple-600 hover:bg-purple-700 text-white px-8 py-3 rounded-full flex items-center gap-2 transition-all transform hover:scale-105 mx-auto"
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
            >
              <Download size={20} />
              Download CV
            </button>
          </div>
        </div>
      </div>

      {/* Experience Section */}
      <section className="py-20 bg-black">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-5xl font-bold mb-12 hover:text-purple-500 transition-colors">Experience</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="bg-zinc-900/50 backdrop-blur-lg p-8 rounded-2xl hover:bg-zinc-800/50 transition-all transform hover:-translate-y-2">
              <h3 className="text-2xl font-bold mb-4">Senior Graphic Designer</h3>
              <p className="text-gray-400">4+ years of experience in the advertising industry, working with top brands and creating compelling visual narratives.</p>
            </div>
            <div className="bg-zinc-900/50 backdrop-blur-lg p-8 rounded-2xl hover:bg-zinc-800/50 transition-all transform hover:-translate-y-2">
              <h3 className="text-2xl font-bold mb-4">Skills & Expertise</h3>
              <ul className="text-gray-400 space-y-2">
                <li>• Brand Identity Design</li>
                <li>• Digital Marketing Assets</li>
                <li>• Print & Editorial Design</li>
                <li>• Motion Graphics</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Work Section */}
      <section className="py-20 bg-zinc-900">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-5xl font-bold mb-12 hover:text-purple-500 transition-colors">Featured Work</h2>
          <div className="space-y-12 max-w-6xl mx-auto">
            <div className="group relative overflow-hidden rounded-2xl">
              <img 
                src="https://images.unsplash.com/photo-1561070791-2526d30994b5?auto=format&fit=crop&w=1400&h=800" 
                alt="Project 1"
                className="w-full transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500 flex items-center justify-center">
                <div className="text-center transform translate-y-10 group-hover:translate-y-0 transition-transform duration-500">
                  <h3 className="text-3xl font-bold mb-2">Brand Campaign Design</h3>
                  <p className="text-gray-300">A comprehensive brand identity project</p>
                </div>
              </div>
            </div>
            <div className="group relative overflow-hidden rounded-2xl">
              <img 
                src="https://images.unsplash.com/photo-1542744094-3a31f272c490?auto=format&fit=crop&w=1400&h=800" 
                alt="Project 2"
                className="w-full transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500 flex items-center justify-center">
                <div className="text-center transform translate-y-10 group-hover:translate-y-0 transition-transform duration-500">
                  <h3 className="text-3xl font-bold mb-2">Digital Marketing Campaign</h3>
                  <p className="text-gray-300">Social media and digital assets</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Video Works Section */}
      <section className="py-20 bg-black">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-5xl font-bold mb-12 hover:text-purple-500 transition-colors">Video Works</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {/* Mobile Mockups */}
            {[1, 2, 3].map((i) => (
              <div key={`mobile-${i}`} className="mockup-phone w-64 h-[500px] mx-auto">
                <div className="relative h-full">
                  <img 
                    src={`https://images.unsplash.com/photo-${1520000000000 + i}?auto=format&fit=crop&w=400&h=800`}
                    alt={`Mobile Design ${i}`}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 flex items-center justify-center bg-black/50 opacity-0 hover:opacity-100 transition-opacity">
                    <Play className="w-12 h-12 text-white" />
                  </div>
                </div>
              </div>
            ))}
          </div>
          {/* Landscape Videos */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12 max-w-6xl mx-auto">
            {[4, 5].map((i) => (
              <div key={`landscape-${i}`} className="relative aspect-video rounded-2xl overflow-hidden">
                <img 
                  src={`https://images.unsplash.com/photo-${1520000000000 + i}?auto=format&fit=crop&w=800&h=450`}
                  alt={`Landscape Design ${i}`}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 flex items-center justify-center bg-black/50 opacity-0 hover:opacity-100 transition-opacity">
                  <Play className="w-16 h-16 text-white" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* New Gallery Section */}
      <section className="py-20 bg-zinc-900">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-5xl font-bold mb-12 hover:text-purple-500 transition-colors">Gallery</h2>
          <div className="gallery-grid max-w-6xl mx-auto">
            {[1, 2, 3, 4, 5].map((i) => (
              <div key={i} className="gallery-item group">
                <img 
                  src={`https://images.unsplash.com/photo-${1520000000000 + i}?auto=format&fit=crop&w=800&h=800`}
                  alt={`Gallery ${i}`}
                  className="w-full h-full object-cover transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end p-6">
                  <p className="text-xl font-bold transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                    Creative Process {i}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Brands Section */}
      <section className="py-20 bg-black">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-5xl font-bold mb-12 hover:text-purple-500 transition-colors">Brands I've Worked With</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-12 max-w-4xl mx-auto">
            {[1, 2, 3, 4].map((i) => (
              <div key={i} className="bg-zinc-900/50 backdrop-blur-lg aspect-square rounded-2xl flex items-center justify-center p-8 hover:bg-zinc-800/50 transition-all transform hover:-translate-y-2">
                <div className="text-4xl font-bold text-gray-500">LOGO {i}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 bg-zinc-900">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-5xl font-bold mb-12 hover:text-purple-500 transition-colors">Get in Touch</h2>
          <div className="flex flex-col md:flex-row gap-8 max-w-4xl mx-auto">
            <div className="flex-1 space-y-6">
              <div className="flex items-center gap-4 justify-center md:justify-start">
                <Mail className="text-purple-500" />
                <span>nikhil.lohani@example.com</span>
              </div>
              <div className="flex items-center gap-4 justify-center md:justify-start">
                <Phone className="text-purple-500" />
                <span>+1 234 567 890</span>
              </div>
              <div className="flex items-center gap-4 justify-center md:justify-start">
                <MapPin className="text-purple-500" />
                <span>New York, USA</span>
              </div>
            </div>
            <form className="flex-1 space-y-4">
              <input 
                type="text" 
                placeholder="Name" 
                className="w-full bg-zinc-800/50 backdrop-blur-lg p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
              />
              <input 
                type="email" 
                placeholder="Email" 
                className="w-full bg-zinc-800/50 backdrop-blur-lg p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
              />
              <textarea 
                placeholder="Message" 
                rows={4} 
                className="w-full bg-zinc-800/50 backdrop-blur-lg p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
              ></textarea>
              <button 
                className="bg-purple-600 hover:bg-purple-700 text-white px-8 py-3 rounded-full transition-all transform hover:scale-105 w-full"
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
}

export default App;