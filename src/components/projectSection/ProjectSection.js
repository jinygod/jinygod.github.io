import React from 'react';
import './ProjectSection.css';

function ProjectSection() {
  return (
    <div className = 'project'>
      <div className = 'project header'>P</div>
      <ul>
      <li style={{ "--accent-color": "#1B5F8C" }}>
         <div className="date">2022.12 ~ 2023.06</div>
          <div className="title">도슨트 앱 개발</div>
          <div className="descr">관광취약계층을 위한 무장애관광 AR/VR 관광지소개앱
          <br/>
          <br/>
          <strong>담당역할</strong><br/>
          - 요구사항에 따른 기능 및 테이블 설계 참여<br/>
          - 전자정부프레임워크, Spring 을 이용하여 API 설계 및 개발<br/>
          - PostgreSQL을 이용한 DB 설계 및 Query 작성<br/>
          - 관광지 간 최적 길찾기 M/L 알고리즘 구현<br/>
           </div>
        </li>
        <li style={{ "--accent-color": "#E24A68" }}>
          <div className="date">2022.11 ~ 2023.04</div>
          <div className="title">AI 교통 빅데이터 플랫폼 구축</div>
          <div className="descr">전일 교통량,날씨,돌발상황 고려 혼잡도예측<br/>
          <br/>
          <strong>담당역할</strong><br/>
          - 빅데이터 인프라 구축, 설계 참여<br/>
          - 대시보드, 지도 데이터 백엔드 구축<br/>
          - PostgreSQL을 이용한 DB 설계 및 Query 작성<br/>
          - 데이터 입출력 API 개발
         </div>
         </li>
        <li style={{ "--accent-color": "#41516C" }}>
          <div className="date">2022.08</div>
          <div className="title">PeonyFactory</div>
          <div className="descr">고객의 주문을 받아 관리자가 승인하고 처리 / 판매량을 모니터링하는 사이트<br/>
          <br/>
          <strong>담당역할</strong><br/>
                 - 프로젝트 개발환경 구축, 설계 참여<br/>
                  - 메인 페이지 구현<br/>
                  - 회원가입 / 로그인 / 기초정보관리(품목,공정,거래처,주문 등록)<br/>
                  - 리스트 페이징 처리<br/>
                  - ajax 비동기통신을 이용한 ID중복확인 체크<br/>
                  - Echarts 에 샘플 데이터를 적용시켜 차트 구현<br/>
                  - BootStrap 활용하여 view 페이지 구현<br/>
                  - Hibernate validator 를 활용하여 회원가입/로그인/각종등록 등 유효성 검사 구현<br/>
                  - GitHub 레포지토리 전체 관리<br/>
                  - 팀원들의 Git Conflict 해결<br/>
                  <a href = "https://github.com/jinygod/PeonyFactory">GitHub Link</a><br/>
          </div>
        </li>
        <li style={{ "--accent-color": "#FBCA3E" }}>
          <div className="date">2022.08</div>
          <div className="title">PeonyShop</div>
          <div className="descr">여성의류 쇼핑몰<br/>
          <br/>
          <strong>담당역할</strong><br/>
          - 프로젝트 개발환경 구축, 설계 참여<br/>
          - 메인 페이지 구현<br/>
          - 회원가입 / 로그인 / 공지사항 / 상품 리스트 구현<br/>
          - 상품 및 게시글 CRUD 구현<br/>
          - 상품 상세페이지 구현(구매하기, 장바구니, 수량에 따른 가격 증가)<br/>
          - GitHub 레포지토리 전체 관리<br/>
          - 팀원들의 Git Conflict 해결<br/>
          <a href = "https://github.com/jinygod/peonyshop">GitHub Link</a>
      </div>  
        </li>


        {/* <li style={{ "--accent-color": "#4CADAD" }}>
          <div className="date">2021</div>
          <div className="title">PeonyFactory</div>
          <div className="descr">고객의 주문을 받아 관리자가 승인하고 처리 / 판매량을 모니터링하는 사이트</div>
        </li>  */}
      </ul>
    </div>
  );
}

export default ProjectSection;
