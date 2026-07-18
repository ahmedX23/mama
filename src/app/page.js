import Navbar from '@/components/Navbar';
import ContactForm from '@/components/ContactForm';
import AnimationWrapper from '@/components/AnimationWrapper';

export default function Home() {
  return (
    <AnimationWrapper>
      <Navbar />
      
      {/* HERO SECTION */}
      <section id="hero" className="min-h-screen flex items-center justify-center pt-24 pb-12 relative overflow-hidden px-4">
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-[#0077b6]/10 rounded-full blur-[120px] pointer-events-none" />
        
        <div className="max-w-4xl text-center z-10 animate-on-scroll fade-in-up">
          <div className="inline-flex items-center space-x-2 bg-[#0b0f19]/60 backdrop-blur-xl border border-gray-800 px-4 py-1.5 rounded-full mb-6">
            <span className="w-2 h-2 rounded-full bg-[#ffb703] animate-pulse"></span>
            <span className="text-xs text-gray-400 font-medium uppercase tracking-widest">Aspiring Software Engineers</span>
          </div>
          
          <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight text-white mb-6">
            Building the Digital Future:<br />
            <span className="bg-gradient-to-r from-[#00b4d8] via-white to-[#ffb703] bg-clip-text text-transparent">
              Shahriar Nafis &amp; Misil Ahmed
            </span>
          </h1>
          
          <p className="text-base sm:text-lg text-gray-400 max-w-2xl mx-auto mb-8 leading-relaxed">
            Welcome to our official collaboration hub. We are dedicated student developers from Bangladesh, 
            crafting optimization-centric tools and scalable software systems engineered to solve real-world media and scripting challenges.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a 
              href="#projects" 
              className="w-full sm:w-auto bg-[#ffb703] hover:bg-[#ffb703]/90 text-[#0d1117] font-bold px-8 py-3.5 rounded-xl transition-all shadow-lg shadow-[#ffb703]/10 tracking-wide text-sm"
            >
              EXPLORE OUR PROJECTS
            </a>
            <a 
              href="#about"
              className="w-full sm:w-auto bg-[#0b0f19]/60 backdrop-blur-xl border border-gray-800 hover:border-gray-700 text-gray-300 font-semibold px-8 py-3.5 rounded-xl transition-all text-sm"
            >
              OUR STORY
            </a>
          </div>
        </div>
      </section>

      {/* ABOUT & INSPIRATION SECTION */}
      <section id="about" className="py-24 border-t border-gray-900 bg-[#0b0f19]/30 relative px-4">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-2xl sm:text-3xl font-bold mb-12 text-center tracking-tight animate-on-scroll fade-in-up">
            Our Journey <span className="text-[#00b4d8]">&amp;</span> Inspiration
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-stretch">
            <div className="bg-[#0b0f19]/60 backdrop-blur-xl border border-gray-800/80 p-8 rounded-2xl shadow-xl shadow-[#0077b6]/2 animate-on-scroll fade-in-left flex flex-col justify-between">
              <div>
                <h3 className="text-lg font-bold text-[#00b4d8] mb-4">Academic &amp; Tech Pursuit</h3>
                <p className="text-gray-400 text-sm leading-relaxed mb-4">
                  As tech-driven students based in Bangladesh, our approach to programming goes beyond conventional textbook paradigms. We immerse ourselves in systems architecture, script parsing, and software application flow.
                </p>
                <p className="text-gray-400 text-sm leading-relaxed">
                  Driven by continuous education, both <span className="text-white font-medium">Shahriar Nafis</span> and <span className="text-white font-medium">Misil Ahmed</span> continuously scale our technical limits—moving rapidly from logical problem-solving to building distribution-ready pipelines.
                </p>
              </div>
              <div className="mt-6 pt-4 border-t border-gray-800/50 text-xs text-gray-500 font-mono">
                Focus: Framework Agility &amp; Automation
              </div>
            </div>

            <div className="bg-[#0b0f19]/60 backdrop-blur-xl border border-gray-800/80 p-8 rounded-2xl shadow-xl shadow-[#ffb703]/2 animate-on-scroll fade-in-right flex flex-col justify-between">
              <div>
                <h3 className="text-lg font-bold text-[#ffb703] mb-4">The Creative Spark</h3>
                <p className="text-gray-400 text-sm leading-relaxed mb-4">
                  Behind our technical focus lies a profound source of inspiration. Our elder sister, a celebrated film actress in the Bangladeshi cinema industry, serves as our ultimate template for execution and resilience.
                </p>
                <p className="text-gray-400 text-sm leading-relaxed">
                  Observing her master complex narratives under public lenses has taught us the art of dedication. She proved to us that success is the result of focused preparation. We apply that identical hard work directly to our software engineering goals every single day.
                </p>
              </div>
              <div className="mt-6 pt-4 border-t border-gray-800/50 text-xs text-gray-500 font-mono">
                Influence: Artistry Meets Logical Execution
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SKILLS & TOOLS SECTION */}
      <section id="skills" className="py-24 px-4 relative">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-2xl sm:text-3xl font-bold mb-4 tracking-tight animate-on-scroll fade-in-up">
            Technical Stack <span className="text-[#ffb703]">&amp;</span> Ecosystem
          </h2>
          <p className="text-gray-400 text-sm max-w-xl mx-auto mb-12 animate-on-scroll fade-in-up">
            The programming models, environments, and specialized tools we utilize to construct resilient architectures.
          </p>
          
          <div className="grid grid-cols-2 sm:grid-cols-5 gap-4 animate-on-scroll fade-in-up">
            {[
              { name: 'Flutter', desc: 'Mobile & Desktop UI' },
              { name: 'Python', desc: 'Automation & Scripts' },
              { name: 'Tailwind CSS', desc: 'Optimized Layouts' },
              { name: 'Git & GitHub', desc: 'Version Control' },
              { name: 'VS Code', desc: 'Development Hub' }
            ].map((skill, index) => (
              <div key={index} className="bg-[#0b0f19]/40 backdrop-blur-xl border border-gray-800/60 p-4 rounded-xl hover:border-[#00b4d8]/40 transition-colors group">
                <div className="text-white font-semibold text-sm mb-1 group-hover:text-[#00b4d8] transition-colors">{skill.name}</div>
                <div className="text-gray-500 text-[11px] font-medium">{skill.desc}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PROJECTS SHOWCASE */}
      <section id="projects" className="py-24 border-t border-gray-900 bg-[#0b0f19]/20 px-4">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-2xl sm:text-3xl font-bold mb-4 text-center tracking-tight animate-on-scroll fade-in-up">
            Engineered Deployments
          </h2>
          <p className="text-gray-400 text-sm text-center max-w-xl mx-auto mb-16 animate-on-scroll fade-in-up">
            A comprehensive breakdown of active software applications deployed by Shahriar Nafis &amp; Misil Ahmed.
          </p>
          
          <div className="max-w-3xl mx-auto animate-on-scroll fade-in-up">
            <div className="bg-[#0b0f19]/70 backdrop-blur-xl border border-gray-800 p-6 sm:p-8 rounded-2xl shadow-xl shadow-[#0077b6]/5 relative group overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-[#0077b6]/5 rounded-full blur-2xl pointer-events-none transition-all group-hover:bg-[#0077b6]/10" />
              
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
                <div>
                  <span className="text-[10px] font-bold text-[#ffb703] uppercase tracking-widest border border-[#ffb703]/30 px-2 py-0.5 rounded">Flagship Application</span>
                  <h3 className="text-xl sm:text-2xl font-bold text-white mt-2">SakuraTube</h3>
                </div>
                <div className="flex items-center space-x-2">
                  <span className="bg-[#0d1117] text-gray-400 border border-gray-800 px-2.5 py-1 rounded-md text-xs font-mono">Flutter</span>
                  <span className="bg-[#0d1117] text-gray-400 border border-gray-800 px-2.5 py-1 rounded-md text-xs font-mono">yt-dlp</span>
                  <span className="bg-[#0d1117] text-gray-400 border border-gray-800 px-2.5 py-1 rounded-md text-xs font-mono">FFmpeg</span>
                </div>
              </div>

              <p className="text-sm text-gray-400 mb-6 leading-relaxed">
                <span className="text-white font-medium">SakuraTube</span> is an advanced, cross-platform media extraction and downloader suite. It harnesses native asynchronous Flutter frameworks to interface with specialized backends powered by yt-dlp pipelines. Video configurations are parsed dynamically, passing multiplexed streams directly into local FFmpeg instances for lossless audio-video merging and post-process conversions.
              </p>

              <div className="flex items-center space-x-4 pt-4 border-t border-gray-800/40">
                <a href="#projects" className="text-xs font-bold text-[#00b4d8] hover:text-[#00b4d8]/80 transition-colors tracking-wider">
                  VIEW CODE ARCHIVE →
                </a>
                <span className="text-gray-600 text-xs">|</span>
                <span className="text-gray-500 text-xs font-medium">Status: In Active Testing</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CONTACT SECTION */}
      <section id="contact" className="py-24 border-t border-gray-900 px-4 relative">
        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-12 items-center">
            
            <div className="md:col-span-5 space-y-6 animate-on-scroll fade-in-left">
              <h2 className="text-2xl sm:text-3xl font-bold tracking-tight">
                Initiate a<br />
                <span className="bg-gradient-to-r from-[#00b4d8] to-[#ffb703] bg-clip-text text-transparent">Connection</span>
              </h2>
              <p className="text-gray-400 text-sm leading-relaxed">
                Whether you have project proposals, engineering inquiries, or simply want to sync with Shahriar Nafis &amp; Misil Ahmed, feel free to send a direct communication pulse.
              </p>
              
              <div className="pt-4 space-y-3">
                <div className="text-xs text-gray-400">
                  <span className="font-semibold text-gray-300">Channels:</span> contact@shahriarnafis-misilahmed.com
                </div>
                <div className="flex items-center space-x-4 text-xs font-mono text-gray-500">
                  <a href="#contact" className="hover:text-white transition-colors">GitHub</a>
                  <span>/</span>
                  <a href="#contact" className="hover:text-white transition-colors">LinkedIn</a>
                </div>
              </div>
            </div>

            <div className="md:col-span-7 bg-[#0b0f19]/60 backdrop-blur-xl border border-gray-800 p-6 sm:p-8 rounded-2xl shadow-xl shadow-[#0077b6]/2 animate-on-scroll fade-in-right">
              <ContactForm />
            </div>

          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-gray-900 py-8 text-center text-xs text-gray-600 font-mono px-4">
        © {new Date().getFullYear()} Shahriar Nafis &amp; Misil Ahmed. All core rights reserved. Structured for Technical SEO.
      </footer>
    </AnimationWrapper>
  );
}
