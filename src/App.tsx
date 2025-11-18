import { useState } from 'react';
import { Menu, X, Github, Linkedin, Mail, Code2, Server, Layers, ChevronDown } from 'lucide-react';
import { Phone } from 'lucide-react';
import Logo from "../logo.jpg"
function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const skills = {
    frontend: ['React.js', 'TypeScript', 'JavaScript', 'HTML5', 'CSS3', 'Tailwind CSS', 'Redux', 'Next.js'],
    backend: ['Node.js', 'ASP.NET', 'Express.js', 'RESTful API', 'MySql', 'MongoDB', 'SQL Server']
  };

  const projects = [
    {
      title: 'Chạm khoảnh khắc',
      description: 'Giải pháp thương mại điện tử mua bán vé xem show ca nhạc toàn diện với React, ASP.NET Core và MySql',
      tech: ['React', 'Asp.net', 'MySql'],
      category: 'Fullstack',
      url_web: "https://chamkhoanhkhac.com"
    },
    {
      title: 'Ikao',
      description: 'Website thương mại điện tử mua bán nội thất gỗ với Nodejs và React',
      tech: ['React', 'ASP.NET', 'SQL Server', 'TypeScript'],
      category: 'Fullstack',
      url_web: "https://ikao.vn"
    },
    // {
    //   title: 'Real-time Chat Application',
    //   description: 'Ứng dụng chat thời gian thực sử dụng WebSocket',
    //   tech: ['React', 'Node.js', 'Socket.io', 'MongoDB'],
    //   category: 'Fullstack'
    // }
  ];

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: 'smooth' });
    setIsMenuOpen(false);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white/80 backdrop-blur-md shadow-sm z-50 transition-all">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center gap-2 font-bold text-xl text-slate-800">
              {/* <Code2 className="inline-block mr-2 text-emerald-600" size={28} /> */}
              <img
                src={Logo}
                alt="Your Brand"
                className="
                  h-9 w-auto object-contain mr-2 shrink-0 select-none
                  rounded-xl ring-1 ring-emerald-200/60
                  drop-shadow
                  transition-transform duration-200 hover:scale-105 active:scale-95
                  bg-white/40 backdrop-blur-sm        
                "
              />
              <p className="m-0">
                Portfolio Freelancer
              </p>
            </div>

            {/* Desktop Menu */}
            <div className="hidden md:flex space-x-8">
              <button onClick={() => scrollToSection('home')} className="text-slate-700 hover:text-emerald-600 transition-colors font-medium">
                Trang chủ
              </button>
              <button onClick={() => scrollToSection('about')} className="text-slate-700 hover:text-emerald-600 transition-colors font-medium">
                Giới thiệu
              </button>
              <button onClick={() => scrollToSection('skills')} className="text-slate-700 hover:text-emerald-600 transition-colors font-medium">
                Kỹ năng
              </button>
              <button onClick={() => scrollToSection('projects')} className="text-slate-700 hover:text-emerald-600 transition-colors font-medium">
                Dự án
              </button>
              <button onClick={() => scrollToSection('contact')} className="text-slate-700 hover:text-emerald-600 transition-colors font-medium">
                Liên hệ
              </button>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden p-2 rounded-lg hover:bg-slate-100 transition-colors"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-white border-t border-slate-200">
            <div className="px-4 py-3 space-y-3">
              <button onClick={() => scrollToSection('home')} className="block w-full text-left py-2 text-slate-700 hover:text-emerald-600 transition-colors font-medium">
                Trang chủ
              </button>
              <button onClick={() => scrollToSection('about')} className="block w-full text-left py-2 text-slate-700 hover:text-emerald-600 transition-colors font-medium">
                Giới thiệu
              </button>
              <button onClick={() => scrollToSection('skills')} className="block w-full text-left py-2 text-slate-700 hover:text-emerald-600 transition-colors font-medium">
                Kỹ năng
              </button>
              <button onClick={() => scrollToSection('projects')} className="block w-full text-left py-2 text-slate-700 hover:text-emerald-600 transition-colors font-medium">
                Dự án
              </button>
              <button onClick={() => scrollToSection('contact')} className="block w-full text-left py-2 text-slate-700 hover:text-emerald-600 transition-colors font-medium">
                Liên hệ
              </button>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section id="home" className="pt-24 pb-20 px-4 sm:px-6 lg:px-8 min-h-screen flex items-center">
        <div className="max-w-7xl mx-auto w-full">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
            <div className="flex-1 text-center lg:text-left">
              <div className="inline-block px-4 py-2 bg-emerald-100 text-emerald-700 rounded-full text-sm font-medium mb-6">
                Freelancer Fullstack Developer
              </div>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-slate-800 mb-6 leading-tight">
                Xin chào, tôi là Nguyễn Trọng Nghĩa
                <span className="text-emerald-600 block mt-2">Fullstack Developer</span>
              </h1>
              <p className="text-lg sm:text-xl text-slate-600 mb-8 max-w-2xl mx-auto lg:mx-0">
                Chuyên xây dựng ứng dụng web hiện đại với React.js, TypeScript, Node.js và ASP.NET.
                Sẵn sàng biến ý tưởng của bạn thành hiện thực.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <button
                  onClick={() => scrollToSection('projects')}
                  className="px-8 py-4 bg-emerald-600 text-white rounded-lg font-medium hover:bg-emerald-700 transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
                >
                  Xem dự án
                </button>
                <button
                  onClick={() => scrollToSection('contact')}
                  className="px-8 py-4 bg-white text-slate-800 rounded-lg font-medium hover:bg-slate-50 transition-all shadow-md hover:shadow-lg border border-slate-200"
                >
                  Liên hệ ngay
                </button>
              </div>
            </div>
            <div className="flex-1 flex justify-center lg:justify-end">
              <div className="relative">
                <div className="w-72 h-72 sm:w-80 sm:h-80 lg:w-96 lg:h-96 bg-gradient-to-br from-emerald-400 to-teal-600 rounded-full flex items-center justify-center shadow-2xl">
                  <Code2 size={120} className="text-white" strokeWidth={1.5} />
                </div>
                <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-slate-800 rounded-lg flex items-center justify-center shadow-xl transform rotate-6">
                  <Layers size={48} className="text-emerald-400" />
                </div>
              </div>
            </div>
          </div>
          <div className="mt-16 flex justify-center animate-bounce">
            <ChevronDown size={32} className="text-slate-400" />
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-800 mb-4">Giới thiệu</h2>
            <div className="w-20 h-1 bg-emerald-600 mx-auto rounded-full"></div>
          </div>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h3 className="text-2xl font-bold text-slate-800">Fullstack Developer với niềm đam mê công nghệ</h3>
              <p className="text-slate-600 leading-relaxed">
                Tôi là một Freelancer Fullstack Developer với kinh nghiệm phát triển ứng dụng web từ frontend đến backend.
                Tôi chuyên về Reactjs và TypeScript cho phần frontend, kết hợp với Node.js và ASP.NET cho backend.
              </p>
              <p className="text-slate-600 leading-relaxed">
                Với tư duy giải quyết vấn đề sáng tạo và khả năng làm việc độc lập, tôi cam kết mang đến những giải pháp
                công nghệ chất lượng cao, đáp ứng mọi nhu cầu của khách hàng.
              </p>
              <p className="text-slate-600 leading-relaxed">
                Tuy mới ra trường nhưng tôi cam kết với quý khách hàng. Tôi sẽ biến mọi nhu cầu của khách hàng từ bản vẽ thành hiện thực
                đúng như mong muốn và ý tưởng đề ra
              </p>
              <div className="grid grid-cols-2 gap-4 pt-4">
                <div className="p-4 bg-slate-50 rounded-lg">
                  <div className="text-3xl font-bold text-emerald-600 mb-2">1+</div>
                  <div className="text-slate-600">Năm kinh nghiệm</div>
                </div>
                <div className="p-4 bg-slate-50 rounded-lg">
                  <div className="text-3xl font-bold text-emerald-600 mb-2">2+</div>
                  <div className="text-slate-600">Dự án hoàn thành</div>
                </div>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-6">
              <div className="bg-gradient-to-br from-emerald-50 to-teal-50 p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow">
                <Code2 size={48} className="text-emerald-600 mb-4" />
                <h4 className="font-bold text-slate-800 mb-2">Frontend</h4>
                <p className="text-sm text-slate-600">React.js, TypeScript, Modern UI/UX</p>
              </div>
              <div className="bg-gradient-to-br from-slate-50 to-slate-100 p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow mt-8">
                <Server size={48} className="text-slate-700 mb-4" />
                <h4 className="font-bold text-slate-800 mb-2">Backend</h4>
                <p className="text-sm text-slate-600">Node.js, ASP.NET, API Design</p>
              </div>
              <div className="bg-gradient-to-br from-teal-50 to-cyan-50 p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow -mt-8">
                <Layers size={48} className="text-teal-600 mb-4" />
                <h4 className="font-bold text-slate-800 mb-2">Database</h4>
                <p className="text-sm text-slate-600">PostgreSQL, MongoDB, SQL Server</p>
              </div>
              <div className="bg-gradient-to-br from-emerald-100 to-emerald-50 p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow">
                <Code2 size={48} className="text-emerald-700 mb-4" />
                <h4 className="font-bold text-slate-800 mb-2">Fullstack</h4>
                <p className="text-sm text-slate-600">End-to-end Development</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-800 mb-4">Kỹ năng</h2>
            <div className="w-20 h-1 bg-emerald-600 mx-auto rounded-full"></div>
          </div>
          <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
            <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-emerald-100 rounded-lg flex items-center justify-center mr-4">
                  <Code2 size={24} className="text-emerald-600" />
                </div>
                <h3 className="text-2xl font-bold text-slate-800">Frontend</h3>
              </div>
              <div className="flex flex-wrap gap-3">
                {skills.frontend.map((skill) => (
                  <span
                    key={skill}
                    className="px-4 py-2 bg-emerald-50 text-emerald-700 rounded-lg font-medium hover:bg-emerald-100 transition-colors"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
            <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-slate-100 rounded-lg flex items-center justify-center mr-4">
                  <Server size={24} className="text-slate-700" />
                </div>
                <h3 className="text-2xl font-bold text-slate-800">Backend</h3>
              </div>
              <div className="flex flex-wrap gap-3">
                {skills.backend.map((skill) => (
                  <span
                    key={skill}
                    className="px-4 py-2 bg-slate-100 text-slate-700 rounded-lg font-medium hover:bg-slate-200 transition-colors"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}

      <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-800 mb-4">Dự án tiêu biểu</h2>
            <div className="w-20 h-1 bg-emerald-600 mx-auto rounded-full"></div>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <div
                key={index}
                className="bg-slate-50 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all transform hover:-translate-y-2"
              >
                <div className="h-48 bg-gradient-to-br from-emerald-400 to-teal-600 flex items-center justify-center">
                  <Layers size={64} className="text-white opacity-80" />
                </div>
                <div className="p-6">
                  <div className="inline-block px-3 py-1 bg-emerald-100 text-emerald-700 rounded-full text-xs font-medium mb-3">
                    {project.category}
                  </div>
                  <a href={project.url_web} target='blank'>
                    <h3 className="text-xl font-bold text-slate-800 mb-3">{project.title}</h3>
                  </a>
                  <p className="text-slate-600 mb-4 leading-relaxed">{project.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 bg-white text-slate-600 rounded-md text-sm border border-slate-200"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>


      {/* Contact Section */}
      <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-50">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-800 mb-4">Liên hệ</h2>
            <div className="w-20 h-1 bg-emerald-600 mx-auto rounded-full"></div>
            <p className="text-slate-600 mt-6 text-lg">
              Hãy liên hệ với tôi để thảo luận về dự án của bạn
            </p>
          </div>
          <div className="bg-white rounded-2xl shadow-xl p-8 sm:p-12">
            <div className="grid sm:grid-cols-3 gap-8">
              <a
                href="mailto:your.email@example.com"
                className="flex flex-col items-center p-6 rounded-xl hover:bg-slate-50 transition-colors group"
              >
                <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center mb-4 group-hover:bg-emerald-200 transition-colors">
                  <Mail size={28} className="text-emerald-600" />
                </div>
                <div className="text-sm text-slate-500 mb-1">Email</div>
                <a href="mailto:ntn8530@gmail.com" className="font-medium text-slate-800 text-center hover:underline"> ntn8530@gmail.com</a>
                {/* <div className="font-medium text-slate-800 text-center">ntn8530@gmail.com</div> */}
              </a>
              <a
                href="https://www.linkedin.com/in/tr%E1%BB%8Dng-ngh%C4%A9a-nguy%E1%BB%85n-2b0375398/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex flex-col items-center p-6 rounded-xl hover:bg-slate-50 transition-colors group"
              >
                <div className="w-16 h-16 bg-slate-100 rounded-full flex items-center justify-center mb-4 group-hover:bg-slate-200 transition-colors">
                  <Linkedin size={28} className="text-slate-700" />
                </div>
                <div className="text-sm text-slate-500 mb-1">Linkedin</div>
                <div className="font-medium text-slate-800">@NguyenTrongNghia</div>
              </a>
              <a
                href="https://linkedin.com/in/yourprofile"
                target="_blank"
                rel="noopener noreferrer"
                className="flex flex-col items-center p-6 rounded-xl hover:bg-slate-50 transition-colors group"
              >
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-4 group-hover:bg-blue-200 transition-colors">
                  <Phone size={28} className="text-blue-600" />
                </div>
                <div className="text-sm text-slate-500 mb-1">Hotline</div>
                <div className="font-medium text-slate-800">0862273012</div>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-800 text-white py-8 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <p className="text-slate-400">
            © 2025 Fullstack Developer Portfolio. Được xây dựng bởi Freelancer Nguyễn Trọng Nghĩa.
          </p>
        </div>
      </footer>
    </div>
  );
}

export default App;
