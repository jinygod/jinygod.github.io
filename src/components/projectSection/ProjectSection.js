import React from 'react';
import './ProjectSection.css';

function ProjectSection() {
  return (
    <div className = 'project'>
      <ul>
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
        <li style={{ "--accent-color": "#E24A68" }}>
          <div className="date">2021</div>
          <div className="title">PeonyFactory</div>
          <div className="descr">고객의 주문을 받아 관리자가 승인하고 처리 / 판매량을 모니터링하는 사이트</div> 
         </li>
  {/*       <li style={{ "--accent-color": "#1B5F8C" }}>
         <div className="date">2021</div>
          <div className="title">PeonyFactory</div>
          <div className="descr">고객의 주문을 받아 관리자가 승인하고 처리 / 판매량을 모니터링하는 사이트</div>
        </li>
        <li style={{ "--accent-color": "#4CADAD" }}>
          <div className="date">2021</div>
          <div className="title">PeonyFactory</div>
          <div className="descr">고객의 주문을 받아 관리자가 승인하고 처리 / 판매량을 모니터링하는 사이트</div>
        </li> */}
      </ul>
    </div>
  );
}

export default ProjectSection;
