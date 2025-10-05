// src/app/components/JourneyTimeline.tsx
'use client';
import { useState } from 'react';

type ExperienceItem = {
  id: number;
  title: string;
  company: string;
  location: string;
  period: string;
  type: 'work' | 'education' | 'achievement';
  description: string[];
  technologies?: string[];
  highlights?: string[];
};

export default function JourneyTimeline() {
  const [activeTab, setActiveTab] = useState<'experience' | 'skills'>('experience');

  const experiences: ExperienceItem[] = [
    {
      id: 1,
      title: "Product Development Specialist Intern",
      company: "PT Midi Utama Indonesia Tbk",
      location: "Tangerang, Indonesia",
      period: "Sep 2024 - Dec 2024",
      type: "work",
      description: [
        "Improved business processes by developing innovative web-based tools and redesigning workflows",
        "Simplified 13 complex offline processes into 8 streamlined digital ones",
        "Designed wireframes and prototypes using Figma for internal systems"
      ],
      technologies: ["Figma", "Web Development", "Business Process Design"],
      highlights: ["Reduced manual errors", "Eliminated paper usage", "Higher operational efficiency"]
    },
    {
      id: 2,
      title: "Team Leader",
      company: "Meccabot Startup",
      location: "Surabaya",
      period: "Feb 2023 - Aug 2025",
      type: "work",
      description: [
        "Led development of MeccaBot from WhatsApp-based app to Google Play Store APK",
        "Achieved 4,000+ downloads with 4.9/5 rating from 64 reviews",
        "Secured over 140 million rupiah in funding with 4 competition wins"
      ],
      technologies: ["AppSheet", "Google Apps Script", "Product Management"],
      highlights: ["4 competition wins", "140M+ rupiah funding", "Media coverage from Trans7, Kompas"]
    },
    {
      id: 3,
      title: "Machine Learning Cohort",
      company: "Bangkit Academy (Google, Tokopedia, Gojek, Traveloka)",
      location: "Remote",
      period: "Feb 2024 - Jul 2024",
      type: "education",
      description: [
        "Gained thorough understanding of machine learning from data preparation to deployment",
        "Used TensorFlow library to build and deploy models",
        "Selected for Entrepreneur Track Capstone Project (503 applicants)"
      ],
      technologies: ["Python", "TensorFlow", "Machine Learning", "Data Science"],
      highlights: ["Selected from 503 applicants", "Entrepreneur Track", "Market-ready product"]
    },
    {
      id: 4,
      title: "Enterprise Systems Teaching Assistant",
      company: "Institut Teknologi Sepuluh Nopember (ITS)",
      location: "Surabaya",
      period: "Jan 2024 - May 2024",
      type: "work",
      description: [
        "Resolved technical issues during practical tasks",
        "Evaluated and assessed practicum sessions",
        "Provided feedback to improve participants' proficiency in Odoo systems"
      ],
      technologies: ["Odoo", "Enterprise Systems", "Teaching"],
      highlights: ["Technical problem solving", "System proficiency improvement"]
    },
    {
      id: 5,
      title: "System Analyst Intern",
      company: "GMF AeroAsia",
      location: "Tangerang, Indonesia",
      period: "Jan 2024 - Feb 2024",
      type: "work",
      description: [
        "Developed internal project blueprint documents for 2 system development projects",
        "Created use case diagrams, mind maps, ERD, flowcharts, sequence diagrams",
        "Collaborated within TD Unit and coordinated with stakeholders"
      ],
      technologies: ["System Analysis", "ERD", "Flowcharts", "Documentation"],
      highlights: ["2 system projects", "Technical clarity", "Stakeholder coordination"]
    },
    {
      id: 6,
      title: "Business Process Management Teaching Assistant",
      company: "Institut Teknologi Sepuluh Nopember",
      location: "Surabaya",
      period: "Aug 2023 - Dec 2023",
      type: "work",
      description: [
        "Assisted course instructor in delivering lectures",
        "Provided explanations related to Business Process Management",
        "Graded student work and provided comprehensive feedback"
      ],
      technologies: ["BPM", "Process Design", "Teaching", "Assessment"],
      highlights: ["Lecture delivery", "Student assessment", "BPM expertise"]
    },
    {
      id: 7,
      title: "Head of IT and Equipment",
      company: "ILITS! FORDA BANTEN 2023",
      location: "Tangerang",
      period: "Nov 2022 - Jan 2023",
      type: "work",
      description: [
        "Coordinated online (Zoom) and offline event activities with team of 5 staff",
        "Supported delivery of presentations with high school students",
        "Enhanced engagement and strengthened ITS brand presence"
      ],
      technologies: ["Event Management", "Zoom", "Team Coordination"],
      highlights: ["5 staff team", "Brand presence", "Student engagement"]
    },
    {
      id: 8,
      title: "Bachelor of Information System",
      company: "Institut Teknologi Sepuluh Nopember",
      location: "Surabaya",
      period: "Aug 2021 - Aug 2025",
      type: "education",
      description: [
        "GPA: 3.71/4.00",
        "Specialized in Information Systems and Business Process Management",
        "Active in various organizational and academic activities"
      ],
      technologies: ["Information Systems", "Database", "Business Analysis"],
      highlights: ["3.71 GPA", "IS Specialization", "Active participation"]
    }
  ];

  const achievements = [
    "1st Place in ISFEST UKSW 2023 Business Plan Competition",
    "2nd Place in National Business Plan Competition 2023 Universitas Khairun",
    "2nd Winner Lomba Inovasi Surabaya (INOVBOYO) 2024",
    "Finalist ICT Business Development GEMASTIK 2024",
    "Top 15 Startup in Inkubasi Startup Inovatif ITS Dana ADB 2024"
  ];

  const skills = {
    "Technical Skills": [
      "Python", "Machine Learning", "TensorFlow", "System Analysis", 
      "Database Design", "Web Development", "Figma", "AppSheet"
    ],
    "Business Skills": [
      "Product Management", "Business Process Management", "Project Planning",
      "Stakeholder Management", "Process Optimization", "Strategic Planning"
    ],
    "Tools & Platforms": [
      "Google Apps Script", "Odoo", "Trello", "Canva", "Google Workspace",
      "SAP", "Microsoft Office", "Documentation Tools"
    ],
    "Soft Skills": [
      "Leadership", "Problem Solving", "Communication", "Critical Thinking",
      "Team Management", "Public Speaking", "Mentoring"
    ]
  };

  const getTypeColor = (type: string) => {
    switch (type) {
      case 'work': return 'bg-cyan-500';
      case 'education': return 'bg-purple-500';
      case 'achievement': return 'bg-green-500';
      default: return 'bg-gray-500';
    }
  };

  const getTypeIcon = (type: string) => {
    switch (type) {
      case 'work':
        return (
          <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M6 6V5a3 3 0 013-3h2a3 3 0 013 3v1h2a2 2 0 012 2v6a2 2 0 01-2 2H4a2 2 0 01-2-2V8a2 2 0 012-2h2zm4-3a1 1 0 00-1 1v1h2V4a1 1 0 00-1-1zm4 3H6v10h8V6z" clipRule="evenodd" />
          </svg>
        );
      case 'education':
        return (
          <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
            <path d="M10.394 2.08a1 1 0 00-.788 0l-7 3a1 1 0 000 1.84L5.25 8.051a.999.999 0 01.356-.257l4-1.714a1 1 0 11.788 1.838L7.667 9.088l1.94.831a1 1 0 00.787 0l7-3a1 1 0 000-1.838l-7-3zM3.31 9.397L5 10.12v4.102a8.969 8.969 0 00-1.05-.174 1 1 0 01-.89-.89 11.115 11.115 0 01.25-3.762zM9.3 16.573A9.026 9.026 0 007 14.935v-3.957l1.818.78a1 1 0 00.364 0l2.818-1.21v3.957a9.026 9.026 0 00-2.3 1.638z"/>
          </svg>
        );
      default:
        return (
          <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clipRule="evenodd" />
          </svg>
        );
    }
  };

  return (
    <section id="journey" className="w-full py-24 px-8 relative">
      <div className="container mx-auto max-w-7xl">
        {/* Section Header */}
        <div className="text-center mb-16">
          <p className="text-cyan-400 font-medium text-lg mb-4">My Journey</p>
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            Professional <span className="text-transparent bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text">Experience</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            From fresh graduate to product development specialist - here's my journey in tech and business.
          </p>
        </div>

        {/* Tab Navigation */}
        <div className="flex justify-center mb-12">
          <div className="bg-gray-800/50 backdrop-blur-sm rounded-full p-2 border border-gray-700">
            <button
              onClick={() => setActiveTab('experience')}
              className={`px-8 py-3 rounded-full font-medium transition-all duration-300 ${
                activeTab === 'experience'
                  ? 'bg-gradient-to-r from-cyan-600 to-blue-600 text-white shadow-lg'
                  : 'text-gray-400 hover:text-white'
              }`}
            >
              Experience
            </button>
            <button
              onClick={() => setActiveTab('skills')}
              className={`px-8 py-3 rounded-full font-medium transition-all duration-300 ${
                activeTab === 'skills'
                  ? 'bg-gradient-to-r from-cyan-600 to-blue-600 text-white shadow-lg'
                  : 'text-gray-400 hover:text-white'
              }`}
            >
              Skills & Achievements
            </button>
          </div>
        </div>

        {/* Content */}
        {activeTab === 'experience' ? (
          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-cyan-500 via-blue-500 to-purple-500 hidden md:block"></div>
            
            {/* Timeline Items */}
            <div className="space-y-12">
              {experiences.map((item, index) => (
                <div
                  key={item.id}
                  className="relative group"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  {/* Timeline Node */}
                  <div className="absolute left-6 top-6 w-4 h-4 rounded-full bg-gray-800 border-4 border-cyan-500 z-10 hidden md:block group-hover:scale-125 transition-transform duration-300"></div>
                  
                  {/* Content Card */}
                  <div className="md:ml-20 bg-gray-800/50 backdrop-blur-sm rounded-2xl p-8 border border-gray-700/50 hover:border-cyan-500/50 transition-all duration-500 hover:shadow-2xl hover:shadow-cyan-500/10">
                    {/* Header */}
                    <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-6">
                      <div className="flex-1">
                        <div className="flex items-center gap-3 mb-2">
                          <div className={`w-8 h-8 rounded-full ${getTypeColor(item.type)} flex items-center justify-center`}>
                            {getTypeIcon(item.type)}
                          </div>
                          <h3 className="text-xl font-bold text-white group-hover:text-cyan-400 transition-colors duration-300">
                            {item.title}
                          </h3>
                        </div>
                        <p className="text-cyan-400 font-semibold text-lg mb-1">{item.company}</p>
                        <p className="text-gray-400">{item.location}</p>
                      </div>
                      <div className="text-right">
                        <span className="bg-gray-700/50 text-cyan-300 px-4 py-2 rounded-full text-sm font-medium border border-gray-600/50">
                          {item.period}
                        </span>
                      </div>
                    </div>

                    {/* Description */}
                    <div className="space-y-3 mb-6">
                      {item.description.map((desc, idx) => (
                        <p key={idx} className="text-gray-300 flex items-start gap-2">
                          <svg className="w-4 h-4 text-cyan-400 mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                          </svg>
                          {desc}
                        </p>
                      ))}
                    </div>

                    {/* Technologies */}
                    {item.technologies && (
                      <div className="mb-4">
                        <h4 className="text-white font-medium mb-3">Technologies & Tools:</h4>
                        <div className="flex flex-wrap gap-2">
                          {item.technologies.map((tech, idx) => (
                            <span
                              key={idx}
                              className="px-3 py-1 text-xs font-medium bg-gray-700/50 text-cyan-300 rounded-full border border-gray-600/50 hover:border-cyan-500/50 hover:bg-cyan-500/10 transition-all duration-300"
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>
                    )}

                    {/* Highlights */}
                    {item.highlights && (
                      <div>
                        <h4 className="text-white font-medium mb-3">Key Highlights:</h4>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                          {item.highlights.map((highlight, idx) => (
                            <div key={idx} className="flex items-center gap-2 text-green-400 text-sm">
                              <svg className="w-4 h-4 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                              </svg>
                              {highlight}
                            </div>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        ) : (
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Skills */}
            <div>
              <h3 className="text-3xl font-bold text-white mb-8">Technical & Professional Skills</h3>
              <div className="space-y-8">
                {Object.entries(skills).map(([category, skillList], index) => (
                  <div
                    key={category}
                    className="bg-gray-800/50 backdrop-blur-sm rounded-2xl p-6 border border-gray-700/50 hover:border-cyan-500/30 transition-all duration-500"
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    <h4 className="text-xl font-semibold text-cyan-400 mb-4">{category}</h4>
                    <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                      {skillList.map((skill, idx) => (
                        <div
                          key={idx}
                          className="bg-gray-700/50 text-white text-center py-2 px-3 rounded-lg border border-gray-600/50 hover:border-cyan-500/50 hover:bg-cyan-500/10 transition-all duration-300 text-sm"
                        >
                          {skill}
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Achievements */}
            <div>
              <h3 className="text-3xl font-bold text-white mb-8">Awards & Achievements</h3>
              <div className="space-y-6">
                {achievements.map((achievement, index) => (
                  <div
                    key={index}
                    className="bg-gradient-to-r from-yellow-500/10 to-orange-500/10 backdrop-blur-sm rounded-xl p-6 border border-yellow-500/20 hover:border-yellow-400/40 transition-all duration-500"
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    <div className="flex items-start gap-4">
                      <div className="w-10 h-10 bg-gradient-to-r from-yellow-500 to-orange-500 rounded-full flex items-center justify-center flex-shrink-0">
                        <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 20 20">
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                      </div>
                      <div>
                        <p className="text-white font-medium leading-relaxed">{achievement}</p>
                        <span className="text-yellow-400 text-sm font-medium">
                          {achievement.includes('2023') ? '2023' : '2024'}
                        </span>
                      </div>
                    </div>
                  </div>
                ))}

                {/* Funding Achievement */}
                <div className="bg-gradient-to-r from-green-500/10 to-emerald-500/10 backdrop-blur-sm rounded-xl p-6 border border-green-500/20 hover:border-green-400/40 transition-all duration-500">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full flex items-center justify-center flex-shrink-0">
                      <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M4 4a2 2 0 00-2 2v4a2 2 0 002 2V6h10a2 2 0 00-2-2H4zm2 6a2 2 0 012-2h8a2 2 0 012 2v4a2 2 0 01-2 2H8a2 2 0 01-2-2v-4zm6 4a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <div>
                      <p className="text-white font-medium leading-relaxed">
                        Secured 140+ Million Rupiah funding for Meccabot startup development
                      </p>
                      <span className="text-green-400 text-sm font-medium">2024</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}