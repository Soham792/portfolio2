import React, { useState } from 'react';
import { Github, Linkedin, Mail, Moon, Sun, Download, ExternalLink } from 'lucide-react';
import NavBar from './components/NavBar';
import Section from './components/Section';
import ProjectCard from './components/ProjectCard';
import SkillBadge from './components/SkillBadge';
import AchievementCard from './components/AchievementCard';
import ContactForm from './components/ContactForm';

function App() {
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => setDarkMode(!darkMode);

  const handleDownloadResume = () => {
    const link = document.createElement('a');
    link.href = '/resume.pdf';
    link.download = 'Soham_Marathe_Resume.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className={`min-h-screen transition-colors duration-300 ${darkMode ? 'dark bg-gray-900' : 'bg-gray-50'}`}>
      <NavBar darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
      
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-purple-500/20 dark:from-blue-900/30 dark:to-purple-900/30" />
        </div>
        <div className="container mx-auto px-4 z-10 text-center">
          <img
            src="/profile.jpg"
            alt="Soham Marathe"
            className="w-32 h-32 rounded-full mx-auto mb-6 border-4 border-white dark:border-gray-800 shadow-lg object-cover"
          />
          <h1 className="text-5xl font-bold mb-4 text-gray-800 dark:text-white">
            Soham Marathe
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 mb-8">
            Electronics & Computer Science Engineering Student
          </p>
          <div className="flex justify-center gap-4 mb-8">
            <button onClick={handleDownloadResume} className="btn-primary">
              <Download className="w-4 h-4 mr-2" />
              Download Resume
            </button>
            <a href="#contact" className="btn-secondary">
              Contact Me
            </a>
          </div>
          <div className="flex justify-center gap-6">
            <a href="https://github.com" className="social-link">
              <Github />
            </a>
            <a href="https://linkedin.com" className="social-link">
              <Linkedin />
            </a>
            <a href="mailto:contact@example.com" className="social-link">
              <Mail />
            </a>
          </div>
        </div>
      </section>

      {/* About Section */}
      <Section id="about" title="About Me">
        <div className="prose dark:prose-invert max-w-none">
          <p className="text-lg text-gray-700 dark:text-gray-100">
          As a dedicated Electronics & Computer Science Engineering student, I'm passionate about harnessing technology 
          to drive change and innovation. My journey through diverse tech domains—from foundational electronics to cutting-edge 
          software development—has shaped my problem-solving approach to be both analytical and creative. I thrive on staying 
          up-to-date with emerging technologies, which I explore in-depth to push the boundaries of what's possible. My goal 
          is to develop solutions that not only address today's challenges but also anticipate future needs, combining technical
          proficiency with a forward-thinking mindset
          </p>
        </div>
      </Section>

      {/* Skills Section */}
      <Section id="skills" title="Skills & Technologies">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          <SkillBadge name="React" level="Advanced" />
          <SkillBadge name="TypeScript" level="Advanced" />
          <SkillBadge name="Node.js" level="Intermediate" />
          <SkillBadge name="Python" level="Advanced" />
          <SkillBadge name="C++" level="Intermediate" />
          <SkillBadge name="AWS" level="Intermediate" />
          <SkillBadge name="Docker" level="Basic" />
          <SkillBadge name="Machine Learning" level="Intermediate" />
        </div>
      </Section>

      {/* Projects Section */}
      <Section id="projects" title="Featured Projects">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          <ProjectCard
            title="FixLiT.iot"
            description="IoT-based solution for fixing life technologies, implementing smart automation and monitoring systems"
            tags={['IoT', 'Automation', 'Smart Systems']}
            image="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/FixlitIOT.jpg-ILP0lRuW8qvd5LmyfmTQdhyJ9c1yoR.jpeg"
          />
          <ProjectCard
            title="Alumni Connect Portal"
            description="Web platform connecting Electronics Engineering alumni from Fr.Conceicao Rodrigues College batch of 1999"
            tags={['Web Development', 'React', 'Alumni Network']}
            image="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/ElectronicsEngineering1999Batch.jpg-buNexfMWhXKZDNCns17bqo9XKqpoCk.jpeg"
          />
          <ProjectCard
            title="PMSS Student portal-Internal Hackathon"
            description="Secure voting system using Ethereum blockchain"
            tags={['Html', 'CSS', 'React','Firebase']}
            image="https://images.unsplash.com/photo-1639762681485-074b7f938ba0?w=500&h=300&fit=crop"
          />
        </div>
      </Section>

      
{/* Achievements Section */}
<Section id="achievements" title="Certificates & Achievements">
  <div className="grid md:grid-cols-2 gap-8">
    <AchievementCard
      imageUrl="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/certificate1%20(2).jpg-UAB9XcTsLKSYDiNRNnC35UHQlm8DI4.jpeg"
      altText="Adobe Premiere Pro CC Essential Video Editing Zero To Hero Certificate"
    />
    <AchievementCard
      imageUrl="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/certificate3.jpg-zETpMMRWsNtOyoj4g2qKH7pJ2zZyoj.jpeg"
      altText="Walk for Freedom Certificate of Appreciation"
    />
  </div>
</Section>

      {/* Contact Section */}
      <Section id="contact" title="Get in Touch">
        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-semibold dark:text-white mb-4">Contact Information</h3>
                <div className="space-y-3">
                  <p className="flex items-center text-gray-600 dark:text-gray-300">
                    <Mail className="w-5 h-5 mr-2" />
                    sohammarathe3@gmail.com
                  </p>
                  <p className="flex items-center text-gray-600 dark:text-gray-300">
                    <Github className="w-5 h-5 mr-2" />
                    https://github.com/Soham792
                  </p>
                  <p className="flex items-center text-gray-600 dark:text-gray-300">
                    <Linkedin className="w-5 h-5 mr-2" />
                    https://www.linkedin.com/in/soham-marathe-896636323/
                  </p>
                </div>
              </div>
              <div>
                <h3 className="text-xl font-semibold dark:text-white mb-4">Quick Links</h3>
                <div className="space-y-3">
                  <button onClick={handleDownloadResume} className="flex items-center text-blue-600 dark:text-blue-400 hover:underline">
                    <Download className="w-5 h-5 mr-2" />
                    Download Resume
                  </button>
                  <a href="#projects" className="flex items-center text-blue-600 dark:text-blue-400 hover:underline">
                    <ExternalLink className="w-5 h-5 mr-2" />
                    View Projects
                  </a>
                </div>
              </div>
            </div>
            <div className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-md">
              <ContactForm />
            </div>
          </div>
        </div>
      </Section>

      {/* Footer */}
      <footer className="py-6 text-center text-gray-600 dark:text-gray-400">
        <p>© 2024 Soham Marathe. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default App;