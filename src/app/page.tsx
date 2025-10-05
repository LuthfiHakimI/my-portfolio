// src/app/page.tsx
'use client';
import { useState } from 'react';
import ProjectCard from './components/ProjectCard';
import ProfileImage from './components/ProfileImage';
import ProjectModal from './components/ProjectModal';
import JourneyTimeline from './components/JourneyTimeline';

export default function Home() {
  const [selectedProject, setSelectedProject] = useState<any>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const projects = [
    {
      title: "Meccabot",
      image: "/meccabot-1.jpg",
      description: "Meccabot adalah aplikasi pendamping ibadah haji & umrah yang membantu jamaah dalam setiap tahap perjalanan, mulai dari persiapan, pelaksanaan, hingga kepulangan. Aplikasi ini menyediakan panduan doa (Arab, latin, dan terjemahan), peta lokasi penting, tasbih digital, jadwal salat berbasis lokasi, hingga fitur AI untuk memudahkan jamaah.",
      detailedDescription: "Meccabot merupakan aplikasi komprehensif yang dirancang khusus untuk membantu jamaah haji dan umrah dalam melaksanakan ibadah dengan lebih mudah dan terorganisir. Aplikasi ini menggabungkan teknologi modern dengan kebutuhan spiritual, menyediakan berbagai fitur yang mendukung perjalanan ibadah dari awal hingga akhir.",
      link: "https://meccabot.id/",
      technologies: ["Appsheet", "Google Spreadsheet", "Google Appscript"],
      demoType: "playstore",
      timeline: "3 bulan (Desember 2024 - Februari 2025)",
      features: [
        "Panduan doa lengkap dengan Arab, Latin, dan terjemahan",
        "Peta interaktif lokasi penting di Mekah dan Madinah",
        "Tasbih digital dengan counter otomatis",
        "Jadwal sholat berdasarkan lokasi real-time",
        "Chatbot AI untuk panduan ibadah"
      ],
      challenges: [
        "Mengintegrasikan data lokasi real-time dengan akurasi tinggi",
        "Memastikan aplikasi dapat berjalan offline",
        "Mengoptimalkan performa AI chatbot dengan dataset bahasa Arab",
        "Mendesain UI yang mudah digunakan untuk semua kalangan usia"
      ],
      results: [
        "Digunakan oleh 4000+ jamaah dari Google Playstore",
        "Rating 4.9/5 dari 69 reviewer Google Playstore",
        "Mengurangi kebingungan/kecemasan jamaah saat di tanah suci",
        "Meningkatkan pengalaman ibadah secara keseluruhan"
      ],
      images: [
        "/meccabot-1.jpg",
        "/meccabot-2.jpg", 
        "/meccabot-3.jpg"
      ],
      video: "https://www.youtube.com/embed/P4z1VCsCeqo"
    },
    {
      title: "N+ Website System",
      image: "/HomePageN+.png",
      description: "N Plus Website System is designed to simplify and enhance your business processes by providing efficient, integrated, and user-friendly solutions. It enables companies to manage workflows, data, and information faster and more accurately, while reducing operational complexity. Built with flexibility to adapt to modern business needs, N Plus helps boost productivity, strengthen decision-making, and make your company more competitive in the digital era.",
      detailedDescription: "Sistem website N+ adalah platform manajemen bisnis yang dirancang untuk mengoptimalkan proses bisnis dengan antarmuka yang intuitif dan fitur-fitur canggih. Platform ini memungkinkan bisnis untuk mengelola operasional mereka dengan lebih efisien.",
      link: "#",
      technologies: ["Figma", "Microsoft Excel", "Business Analysis", "Product Development", "Product Analyst"],
      timeline: "2 bulan (Juni - Juli 2024)",
      features: [
        "Dashboard analitik bisnis real-time",
        "Sistem manajemen inventori otomatis",
        "Integrasi dengan berbagai payment gateway",
        "Laporan keuangan otomatis",
        "Multi-user access dengan role management"
      ],
      challenges: [
        "Menganalisis kebutuhan bisnis yang kompleks",
        "Mendesain user flow yang efisien",
        "Memastikan skalabilitas sistem untuk berbagai ukuran bisnis"
      ],
      results: [
        "Meningkatkan efisiensi bisnis hingga 40%",
        "Mengurangi waktu administrative tasks",
        "Feedback positif dari 15+ business stakeholders"
      ],
      images: [
        "/HomePageN+.png",
        "/Desktop26.png"
      ]
    },
    {
      title: "Snap Eat",
      image: "Snapeat_1.jpg",
      description: "SnapEat is a social food app that uses machine learning to deliver personalized dish recommendations, connect food enthusiasts, and bring transparency to food reviews.",
      detailedDescription: "SnapEat adalah aplikasi sosial inovatif yang menggunakan teknologi machine learning untuk memberikan rekomendasi makanan yang dipersonalisasi. Aplikasi ini menghubungkan para food enthusiast dan memberikan transparansi dalam review makanan melalui sistem rekomendasi yang cerdas.",
      link: "#",
      technologies: ["Python", "Machine Learning", "Cloud Computing", "Recommendation System", "TensorFlow"],
      github: "https://github.com/snapeat-bangkit",
      timeline: "6 bulan (Februari - Juli 2024)",
      features: [
        "Hybrid recommendation system (Collaborative + Content-based filtering)",
        "Image recognition untuk identifikasi makanan",
        "Social networking features untuk food enthusiasts",
        "Real-time restaurant recommendations",
        "Review sentiment analysis menggunakan NLP",
        "Personalized nutrition tracking"
      ],
      challenges: [
        "Mengembangkan algoritma hybrid recommendation yang akurat",
        "Mengintegrasikan computer vision untuk food recognition",
        "Menangani cold start problem untuk user baru",
        "Optimasi model ML untuk deployment di mobile app"
      ],
      results: [
        "Akurasi recommendation mencapai 87%",
        "User engagement meningkat 65%",
        "Berhasil mengidentifikasi 500+ jenis makanan Indonesia",
        "Terpilih sebagai Best Capstone Project di Bangkit 2024"
      ],
      images: [
        "/Snapeat_1.jpg"
      ],
      video: "https://www.youtube.com/embed/DC5zbPp_4Bg"
    }
  ];

  const openModal = (project: any) => {
    setSelectedProject(project);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedProject(null);
  };

  return (
    <main className="flex flex-col items-center">
      {/* Section 1: Hero / About Me */}
      <section id="about" className="w-full min-h-screen flex items-center justify-center p-8 relative overflow-hidden">
        {/* Background decoration */}
        <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 via-transparent to-blue-500/5"></div>
        <div className="absolute top-20 left-10 w-72 h-72 bg-cyan-500/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl"></div>
        
        <div className="container mx-auto max-w-7xl grid lg:grid-cols-2 gap-16 items-center relative z-10">
          {/* Text Content - Left Column */}
          <div className="space-y-6 text-center lg:text-left order-2 lg:order-1">
            <div className="space-y-2">
              <p className="text-cyan-400 font-medium text-lg animate-fade-in">Hello, It's Me</p>
              <h1 className="text-5xl lg:text-7xl font-bold tracking-tight bg-gradient-to-r from-white via-gray-100 to-gray-300 bg-clip-text text-transparent animate-fade-in-up">
                Luthfi Hakim
              </h1>
              <h2 className="text-2xl lg:text-4xl font-semibold text-gray-300 animate-fade-in-up">
                And I'm a <span className="text-transparent bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text font-bold">Product Development and Management Enthusiast</span>
              </h2>
            </div>
            
            <p className="text-gray-400 text-lg leading-relaxed max-w-xl mx-auto lg:mx-0 animate-fade-in-up">
              I'm a passionate product management enthusiast who thrives on transforming ideas into impactful, user-centered solutions that deliver real value.
            </p>
            
            {/* Social Links */}
            <div className="flex justify-center lg:justify-start gap-4 pt-6 animate-fade-in-up">
              <a 
                href="https://github.com/LuthfiHakimI" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="group bg-gray-800 hover:bg-gray-700 text-white font-semibold py-3 px-6 rounded-full transition-all duration-300 hover:scale-105 hover:shadow-lg flex items-center gap-2"
              >
                <svg className="w-5 h-5 group-hover:rotate-12 transition-transform duration-300" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                </svg>
                GitHub
              </a>
              <a 
                href="https://www.instagram.com/luthfihkim_/" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="group bg-gray-800 hover:bg-gray-700 text-white font-semibold py-3 px-6 rounded-full transition-all duration-300 hover:scale-105 hover:shadow-lg flex items-center gap-2"
              >
                <svg className="w-5 h-5 group-hover:rotate-12 transition-transform duration-300" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
                Instagram
              </a>
              <a 
                href="https://www.linkedin.com/in/luthfi-hakim-irawan-ab9b82217/" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="group bg-gradient-to-r from-blue-600 to-blue-500 hover:from-blue-500 hover:to-blue-400 text-white font-semibold py-3 px-6 rounded-full transition-all duration-300 hover:scale-105 hover:shadow-lg flex items-center gap-2"
              >
                <svg className="w-5 h-5 group-hover:rotate-12 transition-transform duration-300" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
                LinkedIn
              </a>
            </div>
          </div>

          {/* Profile Image - Right Column */}
          <div className="flex justify-center items-center order-1 lg:order-2">
            <ProfileImage />
          </div>
        </div>
      </section>

      {/* Section 2: My Journey Timeline */}
      <JourneyTimeline />

      {/* Section 3: Projects */}
      <section id="projects" className="w-full py-24 px-8 relative">
        <div className="container mx-auto max-w-7xl">
          <div className="text-center mb-16">
            <p className="text-cyan-400 font-medium text-lg mb-4">My Work</p>
            <h2 className="text-4xl lg:text-5xl font-bold mb-6">
              Latest <span className="text-transparent bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text">Projects</span>
            </h2>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              Here are some of my recent projects that showcase my skills in product development, management, and technical implementation.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <div key={index} className="animate-fade-in-up" style={{animationDelay: `${index * 0.2}s`}}>
                <ProjectCard 
                  {...project} 
                  onViewDetails={() => openModal(project)}
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 4: Contact */}
      <section id="contact" className="w-full py-24 px-8 relative overflow-hidden">
        {/* Background decoration */}
        <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 via-transparent to-blue-500/5"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl"></div>
        
        <div className="container mx-auto max-w-4xl text-center relative z-10">
          <div className="space-y-6">
            <p className="text-cyan-400 font-medium text-lg">Get In Touch</p>
            <h2 className="text-4xl lg:text-5xl font-bold">
              Let's Work <span className="text-transparent bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text">Together</span>
            </h2>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto leading-relaxed">
              I'm always open to discussing new opportunities, creative projects, or potential collaborations. 
              Let's create something amazing together!
            </p>
            <div className="pt-6">
              <a 
                href="mailto:luthfi.hakim.id@gmail.com" 
                className="group inline-flex items-center gap-3 bg-gradient-to-r from-cyan-600 to-blue-600 hover:from-cyan-500 hover:to-blue-500 text-white font-semibold py-4 px-8 rounded-full text-lg transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-cyan-500/25"
              >
                <svg className="w-5 h-5 group-hover:rotate-12 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 7.89a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                Send Message
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Project Modal */}
      {selectedProject && (
        <ProjectModal
          isOpen={isModalOpen}
          onClose={closeModal}
          project={selectedProject}
        />
      )}
    </main>
  );
}