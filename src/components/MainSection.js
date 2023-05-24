import React from 'react';
import './MainSection.css';
import profileImage from './123.jpg';
import { FaHtml5, FaCss3, FaJava, FaJs, FaCode, FaDocker, FaPython } from 'react-icons/fa';
import { SiSpring, SiKubernetes } from 'react-icons/si';
import { FaGithub } from 'react-icons/fa'; // react-icons에서 FaGithub 아이콘 import

function MainSection() {
  return (
    <section className="main-section">
      <div className="main-content">
        <div className="left-content">
          <h2>Back-End Devloper👋</h2>
          <p>Hi. I'm Seong jin Jeon. A passionate Back-end 
            Developer based in Korea.🎈
          </p>
          <a
            href="https://github.com/jinygod"
            target="_blank"
            rel="noopener noreferrer"
            className="github-link"
          >
          <FaGithub className="github-icon" /> {/* react-icons에서 FaGithub 아이콘 사용 */}
          </a>
          <div className="tech-stack">
            <p>Tech Stack </p>
            <FaHtml5 className="icon" title="HTML5" style={{ color: '#E34C26' }} />
            <FaCss3 className="icon" title="CSS3" style={{ color: '#1572B6' }} />
            <FaJava className="icon" title="Java" style={{ color: '#007396' }} />
            <FaJs className="icon" title="JavaScript" style={{ color: '#F7DF1E' }} />
            <SiSpring className="icon" title="Spring" style={{ color: '#6DB33F' }} />
            <FaDocker className="icon" title="Docker" style={{ color: '#2496ED' }} />
            <SiKubernetes className="icon" title="Kubernetes" style={{ color: '#326CE5' }} />
            <FaPython className="icon" title="Python" style={{ color: '#3776AB' }} />
          </div>
        </div>
        <div className="right-content">
          <img src={profileImage} alt="Profile" />
        </div>
      </div>
    </section>
  );
}

export default MainSection;
