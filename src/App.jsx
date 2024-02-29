import group from "./assets/group6.png";
import direct from "./assets/Rectangle12.png";
import group11 from "./assets/Group11.png";
import rectangle15 from "./assets/Rectangle15.png";
import rectangle14 from "./assets/Rectangle14.png";
import { useState } from "react";
function App() {
  const [expand, setexpand] = useState(false);

  return (
    <div className="App">
      {expand && (
        <div>
          <div className="expandabel">
            <div className="line"></div>

            <div className="expand1">
              <p className="expandtop">회사소개</p>
              <p className="expandtop">의료자문</p>
              <p className="expandtop">의료분석</p>
              <p className="expandtop">동시감정</p>
              <p className="expandtop">고객서비스</p>
            </div>
            <div className="line"></div>

            <div className="expand3">
              <div className="expand2">
                <p className="expand2top">인사말</p>
                <p className="expand2top">업무소개</p>
                <p className="expand2top">조직도</p>
                <p className="expand2top">약도</p>
              </div>
              <div className="expand2">
                <p className="expand2top">의료자문 신청</p>
                <p className="expand2top">의료자문 신청내역</p>
              </div>
              <div className="expand2">
                <p className="expand2top">의료분석 신청</p>
                <p className="expand2top">의료분석 신청내역</p>
              </div>
              <div className="expand2">
                <p className="expand2top">동시감정 신청</p>
                <p className="expand2top">동시감정 신청내역</p>
              </div>
              <div className="expand2">
                <p className="expand2top">공지사항</p>
                <p className="expand2top">Q&A</p>
              </div>
            </div>
          </div>
        </div>
      )}
      {/* header */}
      <div className="head">
        <div></div>
        <div onPointerOver={() => setexpand(true)}>(로고인입)</div>

        <div className="logbtn">
          <button className="lbtn">로그인</button>
          <button className="lbts">회원가입</button>
        </div>
      </div>
      {/* line */}
      <div className="line"></div>
      {/* group 4 */}
      <div className="group4">
        <p>회사소개</p>
        <p>의료자문</p>
        <p>의료분석</p>
        <p>동시감정</p>
        <p>고객서비스</p>
      </div>
      {/*Hero  */}
      <div className="hero-container" onPointerOver={() => setexpand(false)}>
        <div className="hero1">
          <p className="herocon1">
            OO의료감정분석원은 <br />
            <span className="topcon">
              <span className="toposbr"> 신뢰를 바탕 </span>
              으로 한 전문 컨설팅이 <br /> 이루어집니다.
            </span>
          </p>
          <p className="herocon2">
            전문성과 공정성을 기반으로 최고 수준의 의료감정서비스를 제공합니다.
          </p>
          <button className="lbtc">자세히보기</button>

          <div className="circon">
            <div className="cir1"></div>
            <div className="cir2"></div>
            <div className="cir2"></div>
          </div>
        </div>
        <div className="hero2">
          {/* <img src="../public/assets/CK.png" className="docimg" alt="doctor" /> */}
        </div>

        <div className="direrela">
          <div className="direrec">
            <p className="diret">Direct</p>
            <img src={direct} alt="group6" className="arrogd" />
          </div>
        </div>
      </div>
      {/* direct */}
      <div className="directcontainer">
        <div className="direcon1">
          <p className="diretop">의료자문</p>
          <p className="diretop2">
            공정하고 신뢰할 수 있는 <br />
            정확한 분석으로 진행됩니다.
          </p>
          <div>
            <img src={group} alt="group6" className="arrog" />
          </div>
          <div className="line2"></div>
        </div>
        <div className="direcon1">
          <p className="diretop">의료자문 신청내역</p>
          <p className="diretop2">
            의료자문을 신청했었다면, <br /> 빠르게 확인해보세요.
          </p>
          <div>
            <img src={group} alt="group6" className="arrog" />
          </div>
        </div>
      </div>{" "}
      {/* line 2 */}
      <div className="line"></div>
      {/* q & a */}
      <div className="qacontainer">
        <div className="cacon">
          <div className="qath">
            <div className="line3"></div>

            <div className="anunder">
              <div>
                <div>
                  <p className="qatop">공지사항</p>
                  <div className="qaunder"></div>
                </div>
              </div>
              <div className="antopo">Q&A</div>
            </div>
            <div>
              <img src={group11} alt="groupqq" className="group11" />
            </div>
          </div>
          <div className="datecontainer">
            <div className="date1">
              <p className="dateun">24.01.01</p>
              <p className="dateun1">
                공지사항 입니다. 이곳에는 공지사항 타이틀이 들어...
              </p>
            </div>
            <div className="date1">
              <p className="dateun">24.01.01</p>
              <p className="dateun1">
                공지사항 입니다. 이곳에는 공지사항 타이틀이 들어...
              </p>
            </div>
            <div className="date1">
              <p className="dateun">24.01.01</p>
              <p className="dateun1">
                공지사항 입니다. 이곳에는 공지사항 타이틀이 들어...
              </p>
            </div>
          </div>
        </div>
        <div className="reccontainer">
          <div className="recrelat">
            <img src={rectangle15} alt="rectangle14" className="rec14" />
            <div className="rectotpo">
              <p className="rectop1">계좌정보</p>
              <p className="rectop2">국민 000000-00-000000</p>
              <p className="rectop3">예금주 OOO</p>
            </div>
          </div>
          <div className="recrelat">
            <img src={rectangle14} alt="rectangle15" className="rec14" />
            <div className="rectotpo">
              <p className="rectop1">대표전화</p>
              <p className="rectop2">
                T. 02-0000-0000 <span className="fax">Fax. 02-0000-0000</span>
              </p>
              <p className="rectop4">오전 9시 ~ 오후 6시 (토,일,공휴일 휴무)</p>
            </div>
          </div>
        </div>
      </div>
      {/* before footer */}
      <div className="befcontainer">
        <p className="beftop1">서비스이용약관</p>
        <p className="beftop">개인정보처리방침</p>
        <p className="beftop">이메일무단수집거부</p>
      </div>
      {/* footer */}
      <div className="footer">
        <p className="footer1">(로고인입)</p>
        <p className="footer2">
          (주)의료감정분석원 l OOO l T. 02-0000-0000 l F. 02-0000-0000 <br />
          사업자등록번호 : 000-00-00000 l E. ddd@gmail.com <br /> 01234 무슨시
          무슨구 무슨로 347 무슨빌딩 1302호
        </p>
      </div>
    </div>
  );
}

export default App;
