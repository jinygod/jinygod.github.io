import React from 'react';
import './Project.css';

function Project() {
  return (
    <div className = 'project'>
      <ul>
        <li style={{ "--accent-color": "#41516C" }}>
          <div className="date">2021</div>
          <div className="title">PeonyFactory</div>
          <div className="descr">고객의 주문을 받아 관리자가 승인하고 처리 / 판매량을 모니터링하는 사이트</div>
        </li>
        <li style={{ "--accent-color": "#FBCA3E" }}>
          <div className="date">2021</div>
          <div className="title">PeonyFactory</div>
          <div className="descr">고객의 주문을 받아 관리자가 승인하고 처리 / 판매량을 모니터링하는 사이트</div>
        </li>
        <li style={{ "--accent-color": "#E24A68" }}>
          <div className="date">2021</div>
          <div className="title">PeonyFactory</div>
          <div className="descr">고객의 주문을 받아 관리자가 승인하고 처리 / 판매량을 모니터링하는 사이트</div> 
         </li>
        <li style={{ "--accent-color": "#1B5F8C" }}>
         <div className="date">2021</div>
          <div className="title">PeonyFactory</div>
          <div className="descr">고객의 주문을 받아 관리자가 승인하고 처리 / 판매량을 모니터링하는 사이트</div>
        </li>
        <li style={{ "--accent-color": "#4CADAD" }}>
          <div className="date">2021</div>
          <div className="title">PeonyFactory</div>
          <div className="descr">고객의 주문을 받아 관리자가 승인하고 처리 / 판매량을 모니터링하는 사이트</div>
        </li>
      </ul>
    </div>
  );
}

export default Project;
