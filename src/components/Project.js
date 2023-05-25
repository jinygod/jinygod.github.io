import React from 'react';
import './Project.css';

function Project() {
  return (
    <div className="project-container">
    <section className="projects-section">
      <div className="timeline">
        <div className="timeline-item">
          <div className="timeline-item-content">
            <div className="project-media">
              <img src="project-image.jpg" alt="Project" />
            </div>
            <div className="project-description">
              <h3>Peony Factory</h3>
              <p>고객의 주문을 받아 관리자가 승인하고 처리/ 판매량을 모니터링하는 사이트</p>
              <p>고객의 주문을 받아 관리자가 승인하고 처리/ 판매량을 모니터링하는 사이트</p>
              <p>고객의 주문을 받아 관리자가 승인하고 처리/ 판매량을 모니터링하는 사이트</p>
              <p>고객의 주문을 받아 관리자가 승인하고 처리/ 판매량을 모니터링하는 사이트</p>
            </div>
          </div>
        </div>
        {/* Add more timeline items */}
      </div>
    </section>
    </div>
  );
}

export default Project;
