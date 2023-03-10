import styled from "styled-components";
import { Link } from "react-router-dom";

const Bg = styled.div`
  background: #000;
  color: #fff;
`;

const Inner_web = styled.div`
  width: 1200px;
  height: 200px;
  margin: 0 auto;

  padding-top: 50px;

  .hd_ft {
    display: flex;
    justify-content: space-between;
    padding-bottom: 50px;

    border-bottom: 1px solid rgb(221, 221, 221, 0.5);

    ul {
      display: flex;
      gap: 30px;
      align-items: center;
      font-size: 14px;
      font-weight: 300;
    }
  }

  .md_ft {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding-top: 14px;

    font-size: 14px;
    font-weight: 400;
    ul {
      display: flex;
      gap: 30px;
    }
  }
  .md_right {
    ul {
      display: flex;
      gap: 30px;
      align-items: center;
      color: #a6a7a7;
    }
    img {
      width: 72px;
    }
  }
  .bold {
    font-weight: 500;
  }
`;

const Footer = () => {
  return (
    <Bg>
      <Inner_web>
        <div className="hd_ft">
          <div className="menu">
            <ul>
              <li>
                <Link>로그인</Link>
              </li>
              <li>
                <Link>서비스이용약관</Link>
              </li>
              <li className="bold">
                <Link>개인정보처리방침</Link>
              </li>
              <li>
                <Link>영상정보처리방침</Link>
              </li>
              <li>
                <Link>BEAUTY POINT</Link>
              </li>
              <li>
                <Link>SITEMAP</Link>
              </li>
            </ul>
          </div>

          <div className="right">
            <div>box</div>
          </div>
        </div>
        <div className="md_ft">
          <ul>
            <li>고객상담팀(수신자요금부담) 080-023-5454</li>
            <li>월 - 금 : AM 9:00 - PM 6:00</li>
          </ul>
          <div className="md_right">
            <ul>
              <li>© AMOREPACIFIC CORPORATION. All rights reserved.</li>
              <li>
                <img src="./assets/wa_220913.png" alt="" />
              </li>
            </ul>
          </div>
        </div>
      </Inner_web>
    </Bg>
  );
};

export default Footer;
