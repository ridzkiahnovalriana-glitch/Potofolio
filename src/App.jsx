import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import { 
  Terminal, Code, Cpu, Database, Network, ExternalLink, 
  FolderGit2, Award, CheckCircle2, Send, School, Mail 
} from 'lucide-react';

export default function App() {
  const email = 'ridzkiahnovalriana@gmail.com';

  const educations = [
    { period: '2013 - 2019', school: 'SDN Mangkubumi' },
    { period: '2019 - 2022', school: 'SMPN 14 Tasikmalaya' },
    { period: '2022 - 2025', school: 'SMAN 10 Tasikmalaya' },
  ];

  const projects = [
    {
      title: 'Warung Gamantha',
      category: 'TEAM PROJECT // UMKM WEB APP',
      image: '/assets/project/gamantha.png',
      description: 'Aplikasi web sistem manajemen dan pemesanan kuliner lokal UMKM yang dikembangkan secara kolaboratif dengan tim menggunakan React dan Tailwind CSS.',
      tech: ['React.js', 'Tailwind CSS', 'Team Work'],
      link: 'https://warung-gamantha.vercel.app/'
    },
    {
      title: 'Smart Parking System',
      category: 'TEAM PROJECT // UAS SYSTEM',
      image: '/assets/project/SystemSmartParking.png',
      description: 'Sistem manajemen parkir cerdas berbasis web untuk proyek UAS, dikerjakan secara tim bersama rekan kolaborator (Rayival Dede Saputra).',
      tech: ['JavaScript', 'HTML5/CSS3', 'Team Work'],
      link: 'https://rayival.vercel.app'
    },
    {
      title: 'Portal Sistem Pengumpulan Tugas // Sistem Operasi',
      category: 'ACADEMIC REPOSITORY // Sistem Operasi',
      image: '/assets/project/sistempengumpulantugas.png',
      description: 'Web portofolio akademik interaktif untuk memenuhi tugas mata kuliah Sistem Operasi. Menyajikan rincian pengerjaan algoritma lengkap dengan tabel analisis dan alur proses.',
      tech: ['React.js', 'Tailwind CSS v3'],
      link: 'https://sistem-pengumpulan-tugas-ridzkiahnoval.vercel.app/'
    }
  ];

  const certs = [
    {
      title: 'Kaggle Python Certification',
      issuer: 'Kaggle Platform',
      date: '2026',
      image: '/assets/certificate/python.png',
      desc: 'Sertifikasi keahlian pemrograman Python dasar hingga lanjutan yang diperoleh melalui platform Kaggle.'
    },
    {
      title: 'Dicoding AI Mini Camp',
      issuer: 'Dicoding Indonesia',
      date: '2026',
      image: null,
      desc: 'Pelatihan intensif interaktif seputar konsep Generative AI, prompt engineering, dan pemanfaatan teknologi AI modern.'
    },
    {
      title: 'Computer Networking & Lab Practice',
      issuer: 'Informatics Program',
      date: '2026',
      image: null,
      desc: 'Praktikum jaringan komputer, topologi routing mikrotik, dan konfigurasi lingkungan virtual.'
    }
  ];

  return (
    <div className="bg-[#101319] text-[#e1e2ea] font-sans antialiased selection:bg-[#1b365d] selection:text-[#aec7f7] min-h-screen">
      <Navbar />

      <main className="w-full pt-16 lg:pt-20">
        
        {/* HERO SECTION */}
        <section className="relative w-full overflow-hidden bg-[#101319] py-16 lg:py-28 border-b border-[#32353b]">
          <div className="absolute inset-0 pointer-events-none opacity-[0.03]" style={{ backgroundImage: 'radial-gradient(#aec7f7 1px, transparent 1px)', backgroundSize: '32px 32px' }}></div>
          <div className="max-w-7xl mx-auto px-6 lg:px-12 w-full">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
              
              {/* Left Column */}
              <div className="lg:col-span-7 flex flex-col items-start z-10">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#1b365d]/40 text-[#aec7f7] mb-4 border border-[#465f88]/30">
                  <span className="w-2 h-2 rounded-full bg-[#aec7f7] animate-pulse"></span>
                  <span className="text-[11px] font-semibold uppercase tracking-wider font-mono">Informatics Engineering Student</span>
                </div>

                <h1 className="text-4xl sm:text-6xl text-[#e1e2ea] font-extrabold tracking-tight mb-2">
                  HELLO, I'M RIDZKI<span className="text-[#aec7f7]">.</span>
                </h1>
                <h2 className="text-2xl sm:text-3xl text-[#a8c8ff] font-bold tracking-tight mb-6">
                  INFORMATICS ENGINEERING STUDENT
                </h2>

                <p className="text-base sm:text-lg text-[#c4c6cf] max-w-2xl mb-8 leading-relaxed font-light">
                  Mahasiswa Teknik Informatika yang memiliki ketertarikan pada dunia pemrograman dan pengembangan perangkat lunak. Memiliki pemahaman dan pengalaman dalam menggunakan HTML, CSS, JavaScript, dan C++. Saat ini, saya sedang mengembangkan kemampuan di bidang Frontend Development dengan mempelajari React.js dan Tailwind CSS melalui pembelajaran mandiri dan proyek akademik.
                </p>

                <div className="flex flex-wrap items-center gap-4 w-full sm:w-auto">
                  <a href="#projects" className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-lg bg-[#1b365d] text-[#aec7f7] hover:bg-[#aec7f7] hover:text-[#101319] transition-all duration-200 font-semibold text-sm shadow-md">
                    <Terminal size={18} />
                    <span>Explore My Projects</span>
                  </a>
                  <a href="#contact" className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-lg bg-[#1d2025] hover:bg-[#272a30] text-[#e1e2ea] transition-all duration-200 font-mono text-xs border border-[#32353b]">
                    <span>Contact Me</span>
                  </a>
                </div>

                <div className="mt-12 pt-4 flex flex-wrap items-center gap-6 font-mono text-xs text-[#8e9099]">
                  <span className="flex items-center gap-1.5"><span className="text-[#aec7f7] font-bold">LOC:</span> TASIKMALAYA, ID</span>
                  <span className="flex items-center gap-1.5"><span className="text-[#aec7f7] font-bold">FOCUS:</span> WEB & SYSTEMS</span>
                  <span className="flex items-center gap-1.5"><span className="text-[#aec7f7] font-bold">STATUS:</span> ACTIVE</span>
                </div>
              </div>

              {/* Right Column - Profile Cover Card */}
              <div className="lg:col-span-5 relative flex items-center justify-center">
                <div className="relative w-full max-w-[360px] aspect-[4/5] rounded-2xl bg-gradient-to-b from-[#1d2025] to-[#14171e] border-2 border-[#465f88]/40 overflow-hidden shadow-2xl flex flex-col justify-between p-5 group hover:border-[#aec7f7] transition-all duration-300">
                  
                  <div className="flex items-center justify-between font-mono text-xs text-[#8e9099] pb-3 border-b border-[#32353b]">
                    <span className="tracking-widest text-[#aec7f7] font-bold">STUDENT PROFILE // 01</span>
                    <span className="flex items-center gap-1.5 bg-[#1b365d]/40 px-2 py-0.5 rounded text-[10px] text-[#aec7f7]">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#aec7f7] animate-ping"></span> ONLINE
                    </span>
                  </div>

                  <div className="relative my-auto flex flex-col items-center justify-center text-center py-2">
                    <div className="relative w-40 h-48 sm:w-44 sm:h-52 rounded-xl overflow-hidden border-2 border-[#aec7f7]/30 shadow-lg bg-[#0b0e13] group-hover:scale-105 transition-transform duration-300">
                      <img 
                        src="/assets/ridzki.jpeg" 
                        alt="Ridzki Ahnovalrian Arifin" 
                        className="w-full h-full object-cover"
                      />
                    </div>
                    
                    <div className="font-bold text-lg text-[#e1e2ea] mt-4 tracking-tight">Ridzki Ahnovalrian Arifin</div>
                    <div className="font-mono text-xs text-[#a8c8ff] mt-0.5 px-3 py-1 bg-[#1b365d]/20 rounded-full inline-block border border-[#465f88]/20">
                      Teknik Informatika
                    </div>
                  </div>

                  <div className="pt-3 font-mono text-[11px] text-[#8e9099] flex items-center justify-between border-t border-[#32353b]">
                    <span className="text-[#aec7f7]">ID: 2503010031</span>
                    <span>WEST JAVA, ID</span>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* ABOUT ME SECTION */}
        <section className="w-full bg-[#0b0e13] py-20 border-b border-[#32353b]" id="about">
          <div className="max-w-7xl mx-auto px-6 lg:px-12">
            <div className="flex items-center gap-2 mb-2 font-mono text-xs text-[#aec7f7]">
              <span>01 //</span>
              <span className="tracking-widest uppercase">Overview</span>
            </div>
            <h2 className="text-3xl text-[#e1e2ea] font-bold tracking-tight mb-12">
              GET TO KNOW ME
            </h2>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
              <div className="lg:col-span-7 flex flex-col gap-6">
                <p className="text-base sm:text-lg text-[#e1e2ea] leading-relaxed font-light">
                  Halo! Saya Ridzki Ahnovalrian Arifin, mahasiswa Program Studi Teknik Informatika di Universitas Perjuangan. Saya memiliki ketertarikan pada bidang teknologi informasi, khususnya pemrograman dan pengembangan perangkat lunak. Selama perkuliahan, saya telah mempelajari dan menggunakan HTML, CSS, JavaScript, serta C++ dalam berbagai latihan dan proyek akademik.
                </p>
                <p className="text-sm sm:text-base text-[#c4c6cf] leading-relaxed font-light">
                  Sebagai mahasiswa, saya terus berusaha mengembangkan pengetahuan dan keterampilan di bidang teknologi melalui proses pembelajaran, praktik, dan pengerjaan proyek. Saat ini, saya sedang mendalami React dan Tailwind CSS untuk memperluas kemampuan di bidang Frontend Development serta mempersiapkan diri menghadapi dunia kerja di bidang teknologi.
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-4">
                  <div className="p-4 rounded-lg bg-[#1d2025] border border-[#32353b]">
                    <h4 className="font-bold text-sm text-[#e1e2ea] mb-1">Frontend & Frameworks</h4>
                    <p className="text-xs text-[#c4c6cf]">Mengeksplorasi React JS, Vue JS, Tailwind, dan Bootstrap.</p>
                  </div>
                  <div className="p-4 rounded-lg bg-[#1d2025] border border-[#32353b]">
                    <h4 className="font-bold text-sm text-[#e1e2ea] mb-1">Team Collaboration</h4>
                    <p className="text-xs text-[#c4c6cf]">Berpengalaman menggarap proyek aplikasi bersama tim (team work).</p>
                  </div>
                </div>
              </div>

              <div className="lg:col-span-5 bg-[#1d2025] rounded-xl p-6 border border-[#32353b] shadow-xl relative overflow-hidden">
                <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#1b365d] via-[#aec7f7] to-[#a8c8ff]"></div>
                <div className="flex items-center justify-between pb-4 mb-4 border-b border-[#32353b]">
                  <span className="font-mono text-xs text-[#8e9099] tracking-wider uppercase">ACADEMIC DOSSIER</span>
                  <span className="font-mono text-xs text-[#aec7f7]">ID: INFORMATIKA</span>
                </div>
                <div className="space-y-4 text-sm">
                  <div>
                    <span className="font-mono text-[11px] text-[#8e9099] block mb-1 uppercase">Program of Study</span>
                    <p className="font-bold text-base text-[#e1e2ea]">Teknik Informatika</p>
                  </div>
                  <div>
                    <span className="font-mono text-[11px] text-[#8e9099] block mb-1 uppercase">Core Programming Stack</span>
                    <p className="text-[#e1e2ea] text-xs font-mono">HTML5 / CSS3 / C++ / JavaScript / React / Vue / Bootstrap / Tailwind</p>
                  </div>
                  <div>
                    <span className="font-mono text-[11px] text-[#8e9099] block mb-1 uppercase">Active Interests</span>
                    <p className="text-[#c4c6cf] text-xs">Web Development, UI Styling, Collaborative Team Projects</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* EDUCATIONAL BACKGROUND SECTION */}
        <section className="w-full bg-[#101319] py-20 border-b border-[#32353b]" id="education">
          <div className="max-w-7xl mx-auto px-6 lg:px-12">
            <div className="flex items-center gap-2 mb-2 font-mono text-xs text-[#aec7f7]">
              <span>02 //</span>
              <span className="tracking-widest uppercase">Milestones</span>
            </div>
            <h2 className="text-3xl text-[#e1e2ea] font-bold tracking-tight mb-12">
              EDUCATIONAL BACKGROUND
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {educations.map((edu, idx) => (
                <div key={idx} className="bg-[#1d2025] rounded-xl p-6 border border-[#32353b] shadow-md flex flex-col justify-between hover:border-[#465f88] transition-all">
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <div className="p-2.5 rounded-lg bg-[#1b365d]/50 text-[#aec7f7]">
                        <School size={22} />
                      </div>
                      <span className="font-mono text-xs text-[#aec7f7] bg-[#1b365d]/30 px-2.5 py-1 rounded border border-[#465f88]/30">
                        {edu.period}
                      </span>
                    </div>
                    <h3 className="font-bold text-lg text-[#e1e2ea]">{edu.school}</h3>
                  </div>
                  <div className="mt-4 pt-3 border-t border-[#32353b] font-mono text-[11px] text-[#8e9099]">
                    FORMAL EDUCATION // TASIKMALAYA
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* TECH STACK & CAPABILITIES */}
        <section className="w-full bg-[#0b0e13] py-20 border-b border-[#32353b]" id="tech-stack">
          <div className="max-w-7xl mx-auto px-6 lg:px-12">
            <div className="flex items-center gap-2 mb-2 font-mono text-xs text-[#aec7f7]">
              <span>03 //</span>
              <span className="tracking-widest uppercase">Capabilities</span>
            </div>
            <h2 className="text-3xl text-[#e1e2ea] font-bold tracking-tight mb-12">
              MY TECH STACK
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-[#1d2025] rounded-xl p-6 border border-[#32353b] flex flex-col justify-between">
                <div>
                  <span className="font-mono text-xs text-[#aec7f7] uppercase tracking-wider block mb-2">FOUNDATIONAL</span>
                  <h3 className="text-lg font-bold text-[#e1e2ea] mb-3">Programming & Markup</h3>
                  <p className="text-xs text-[#c4c6cf] mb-6">Bahasa dan dasar yang dikuasai untuk membangun kerangka logika dasar aplikasi.</p>
                </div>
                <div className="space-y-2 font-mono text-xs">
                  <div className="p-2 rounded bg-[#0b0e13] flex justify-between items-center"><span className="text-[#aec7f7]">C++</span><span>Logic & CLI</span></div>
                  <div className="p-2 rounded bg-[#0b0e13] flex justify-between items-center"><span className="text-[#aec7f7]">HTML / CSS</span><span>Markup & Style</span></div>
                  <div className="p-2 rounded bg-[#0b0e13] flex justify-between items-center"><span className="text-[#aec7f7]">JavaScript</span><span>DOM & Script</span></div>
                </div>
              </div>

              <div className="bg-[#1d2025] rounded-xl p-6 border border-[#32353b] flex flex-col justify-between">
                <div>
                  <span className="font-mono text-xs text-[#a8c8ff] uppercase tracking-wider block mb-2">ACTIVE EXPLORATION</span>
                  <h3 className="text-lg font-bold text-[#e1e2ea] mb-3">Modern Web Frameworks</h3>
                  <p className="text-xs text-[#c4c6cf] mb-6">Teknologi modern yang sedang aktif dipelajari dan dieksplorasi.</p>
                </div>
                <div className="space-y-2 font-mono text-xs">
                  <div className="p-2 rounded bg-[#0b0e13] flex justify-between items-center"><span className="text-[#a8c8ff]">React.js</span><span>Components</span></div>
                  <div className="p-2 rounded bg-[#0b0e13] flex justify-between items-center"><span className="text-[#a8c8ff]">Vue.js</span><span>Reactivity</span></div>
                  <div className="p-2 rounded bg-[#0b0e13] flex justify-between items-center"><span className="text-[#a8c8ff]">Tailwind CSS & Bootstrap</span><span>Styling UI</span></div>
                </div>
              </div>

              <div className="bg-[#1d2025] rounded-xl p-6 border border-[#32353b] flex flex-col justify-between">
                <div>
                  <span className="font-mono text-xs text-[#8e9099] uppercase tracking-wider block mb-2">ENVIRONMENT</span>
                  <h3 className="text-lg font-bold text-[#e1e2ea] mb-3">Tools & Workflow</h3>
                  <p className="text-xs text-[#c4c6cf] mb-6">Perangkat bantu harian yang digunakan dalam penulisan kode.</p>
                </div>
                <div className="space-y-2 font-mono text-xs">
                  <div className="p-2 rounded bg-[#0b0e13] flex justify-between items-center"><span>VS Code</span><span className="text-[#8e9099]">Editor</span></div>
                  <div className="p-2 rounded bg-[#0b0e13] flex justify-between items-center"><span>Git & GitHub</span><span className="text-[#8e9099]">Version Control</span></div>
                  <div className="p-2 rounded bg-[#0b0e13] flex justify-between items-center"><span>VirtualBox</span><span className="text-[#8e9099]">Virtualization</span></div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* FEATURED PROJECTS SECTION */}
        <section className="w-full bg-[#101319] py-20 border-b border-[#32353b]" id="projects">
          <div className="max-w-7xl mx-auto px-6 lg:px-12">
            <div className="flex items-center gap-2 mb-2 font-mono text-xs text-[#aec7f7]">
              <span>04 //</span>
              <span className="tracking-widest uppercase">Team Work & Portfolio</span>
            </div>
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-12">
              <div>
                <h2 className="text-3xl text-[#e1e2ea] font-bold tracking-tight">FEATURED PROJECTS</h2>
                <p className="text-sm text-[#c4c6cf] mt-1">Proyek kolaborasi tim (team work) dan penugasan akademik pilihan.</p>
              </div>
              <span className="font-mono text-xs text-[#a8c8ff]">TOTAL: 03 ENTRIES</span>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              {projects.map((project, idx) => (
                <div key={idx} className="bg-[#1d2025] rounded-xl overflow-hidden border border-[#32353b] shadow-lg flex flex-col group hover:border-[#465f88] transition-all">
                  
                  <div className="relative w-full h-48 bg-[#0b0e13] overflow-hidden border-b border-[#32353b]">
                    <img 
                      src={project.image} 
                      alt={project.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute top-3 left-3 bg-[#101319]/80 backdrop-blur-md px-2.5 py-1 rounded border border-[#32353b] font-mono text-[10px] text-[#aec7f7]">
                      {project.category}
                    </div>
                  </div>

                  <div className="p-6 flex-1 flex flex-col justify-between">
                    <div>
                      <h3 className="text-lg font-bold text-[#e1e2ea] mb-2">{project.title}</h3>
                      <p className="text-xs text-[#c4c6cf] leading-relaxed mb-6">{project.description}</p>
                    </div>

                    <div>
                      <div className="flex flex-wrap gap-1.5 mb-6">
                        {project.tech.map((t, tIdx) => (
                          <span key={tIdx} className="px-2 py-0.5 rounded bg-[#0b0e13] text-[#8e9099] font-mono text-[11px] border border-[#32353b]">{t}</span>
                        ))}
                      </div>
                      <a href={project.link} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1.5 text-xs text-[#aec7f7] font-mono hover:text-[#e1e2ea] transition-colors">
                        <span>View Repository / Live App</span>
                        <ExternalLink size={14} />
                      </a>
                    </div>
                  </div>

                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CERTIFICATIONS & TRAINING */}
        <section className="w-full bg-[#0b0e13] py-20 border-b border-[#32353b]" id="learning">
          <div className="max-w-7xl mx-auto px-6 lg:px-12">
            <div className="flex items-center gap-2 mb-2 font-mono text-xs text-[#aec7f7]">
              <span>05 //</span>
              <span className="tracking-widest uppercase">Growth Trajectory</span>
            </div>
            <h2 className="text-3xl text-[#e1e2ea] font-bold tracking-tight mb-12">
              CERTIFICATIONS & TRAINING
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {certs.map((cert, idx) => (
                <div key={idx} className="bg-[#1d2025] rounded-xl overflow-hidden border border-[#32353b] shadow-sm flex flex-col justify-between group hover:border-[#465f88] transition-all">
                  {cert.image && (
                    <div className="relative w-full h-40 bg-[#0b0e13] overflow-hidden border-b border-[#32353b]">
                      <img 
                        src={cert.image} 
                        alt={cert.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                    </div>
                  )}
                  <div className="p-6 flex-1 flex flex-col justify-between">
                    <div>
                      <div className="flex items-center justify-between mb-4">
                        <div className="p-2.5 rounded-lg bg-[#1b365d]/40 text-[#aec7f7]">
                          <Award size={22} />
                        </div>
                        <span className="font-mono text-xs text-[#8e9099] bg-[#0b0e13] px-2.5 py-1 rounded border border-[#32353b]">
                          {cert.date}
                        </span>
                      </div>
                      <h3 className="font-bold text-base text-[#e1e2ea] mb-1">{cert.title}</h3>
                      <p className="text-xs text-[#a8c8ff] font-mono mb-3">{cert.issuer}</p>
                      <p className="text-xs text-[#c4c6cf] leading-relaxed">{cert.desc}</p>
                    </div>
                    <div className="mt-6 pt-3 border-t border-[#32353b] flex items-center gap-2 font-mono text-[11px] text-[#8e9099]">
                      <CheckCircle2 size={14} className="text-[#aec7f7]" /> VERIFIED CREDENTIAL
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CONTACT & COLLABORATION */}
        <section className="w-full bg-[#101319] py-20" id="contact">
          <div className="max-w-7xl mx-auto px-6 lg:px-12">
            <div className="flex items-center gap-2 mb-2 font-mono text-xs text-[#aec7f7]">
              <span>06 //</span>
              <span className="tracking-widest uppercase">Communication</span>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
              
              <div className="lg:col-span-5 flex flex-col justify-between">
                <div>
                  <h2 className="text-3xl text-[#e1e2ea] font-extrabold tracking-tight mb-4">
                    LET'S BUILD SOMETHING TOGETHER<span className="text-[#aec7f7]">.</span>
                  </h2>
                  <p className="text-sm text-[#c4c6cf] mb-8 leading-relaxed">
                    Terbuka untuk berdiskusi, berkolaborasi dalam proyek aplikasi web, maupun berbagi ilmu seputar teknologi dan rekayasa perangkat lunak.
                  </p>

                  <div className="space-y-4 mb-8">
                    <div className="flex items-center gap-4 p-4 rounded-lg bg-[#1d2025] border border-[#32353b]">
                      <div className="w-10 h-10 rounded-lg bg-[#0b0e13] flex items-center justify-center text-[#aec7f7]">
                        <Mail size={18} />
                      </div>
                      <div>
                        <span className="font-mono text-[10px] text-[#8e9099] uppercase block">DIRECT EMAIL</span>
                        <a href={`mailto:${email}`} className="font-mono text-xs text-[#e1e2ea] hover:text-[#aec7f7] transition-colors">
                          {email}
                        </a>
                      </div>
                    </div>

                    <div className="flex items-center gap-4 p-4 rounded-lg bg-[#1d2025] border border-[#32353b]">
                      <div className="w-10 h-10 rounded-lg bg-[#0b0e13] flex items-center justify-center text-[#aec7f7]">
                        <span className="font-mono text-xs font-bold">IG</span>
                      </div>
                      <div>
                        <span className="font-mono text-[10px] text-[#8e9099] uppercase block">INSTAGRAM</span>
                        <a href="https://instagram.com/rzkiahnval__" target="_blank" rel="noopener noreferrer" className="font-mono text-xs text-[#e1e2ea] hover:text-[#aec7f7] transition-colors">
                          @rzkiahnval__
                        </a>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="p-4 rounded-lg bg-[#1d2025] font-mono text-xs text-[#8e9099] flex items-center justify-between border border-[#32353b]">
                  <span className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-[#aec7f7]"></span>
                    STATUS: OPEN FOR DISCUSSION
                  </span>
                  <span className="text-[#aec7f7] font-bold">2026</span>
                </div>
              </div>

              <div className="lg:col-span-7 bg-[#1d2025] rounded-xl p-8 border border-[#32353b] shadow-2xl relative">
                <div className="flex items-center justify-between pb-4 mb-6 border-b border-[#32353b]">
                  <div className="flex items-center gap-2 font-mono text-xs text-[#aec7f7]">
                    <span className="font-bold">$</span>
                    <span>contact --send-message</span>
                  </div>
                  <span className="font-mono text-[10px] text-[#8e9099]">SECURE TRANSMISSION</span>
                </div>

                <form onSubmit={(e) => { e.preventDefault(); alert('Terima kasih! Pesan Anda siap dikirimkan.'); }} className="space-y-4">
                  <div>
                    <label className="block font-mono text-xs text-[#8e9099] mb-1">// YOUR NAME</label>
                    <input type="text" placeholder="e.g. Budi Santoso" required className="w-full px-4 py-2.5 rounded-lg bg-[#0b0e13] text-[#e1e2ea] placeholder:text-[#32353b] text-sm border border-[#32353b] focus:outline-none focus:border-[#aec7f7]" />
                  </div>
                  <div>
                    <label className="block font-mono text-xs text-[#8e9099] mb-1">// YOUR EMAIL ADDRESS</label>
                    <input type="email" placeholder="e.g. budi@company.com" required className="w-full px-4 py-2.5 rounded-lg bg-[#0b0e13] text-[#e1e2ea] placeholder:text-[#32353b] text-sm border border-[#32353b] focus:outline-none focus:border-[#aec7f7]" />
                  </div>
                  <div>
                    <label className="block font-mono text-xs text-[#8e9099] mb-1">// MESSAGE & COLLABORATION DETAILS</label>
                    <textarea rows="4" placeholder="Tuliskan pesan atau topik diskusi di sini..." required className="w-full px-4 py-2.5 rounded-lg bg-[#0b0e13] text-[#e1e2ea] placeholder:text-[#32353b] text-sm border border-[#32353b] focus:outline-none focus:border-[#aec7f7] resize-none"></textarea>
                  </div>
                  <div className="pt-2 flex items-center justify-between">
                    <button type="submit" className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-[#1b365d] text-[#aec7f7] hover:bg-[#aec7f7] hover:text-[#101319] transition-all font-semibold text-sm shadow-md">
                      <Send size={16} />
                      <span>Send Message</span>
                    </button>
                    <span className="font-mono text-[11px] text-[#8e9099] hidden sm:inline">LATENCY: ~12ms</span>
                  </div>
                </form>
              </div>

            </div>
          </div>
        </section>

      </main>

      <Footer />
    </div>
  );
}