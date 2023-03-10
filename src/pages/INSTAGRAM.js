import styled from "styled-components";
import { Link } from "react-router-dom";

const Inner = styled.div`
  width: 1200px;
  margin: 0 auto;

  padding: 100px 0 100px 0;

  .head_box {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 60px;

    h2 {
      font-size: 20px;
      font-size: 500;
    }

    .right {
      font-size: 16px;
      font-weight: 300;
      line-height: 25px;
    }
  }

  .md_box {
    img {
      width: 100%;
      height: 200px;

      -webkit-transform: scale(1);
      transform: scale(1);
      -webkit-transition: 0.3s ease-in-out;
      transition: 0.3s ease-in-out;
    }
    a:hover img {
      -webkit-transform: scale(1.1);
      transform: scale(1.1);
    }

    ul {
      display: grid;
      grid-template-columns: repeat(6, 1fr);
      gap: 30px;
    }
  }
`;

const INSTAGRAM = () => {
  return (
    <Inner>
      <div className="head_box">
        <h2>INSTAGRAM</h2>
        <div className="right">
          <p>
            INSTAGRAMThe Artisanship of Beauty #AMOREPACIFIC
            <br />
            인스타그램에서 @amorepacific.official 를 방문해보세요
          </p>
        </div>
      </div>
      <div className="md_box">
        <ul>
          <li>
            <Link to="/">
              <img src="./assets/itm01.jpg" alt="" />
            </Link>
          </li>
          <li>
            <Link to="/">
              <img src="./assets/itm02.jpg" alt="" />
            </Link>
          </li>
          <li>
            <Link to="/">
              <img src="./assets/itm03.jpg" alt="" />
            </Link>
          </li>
          <li>
            <Link to="/">
              <img src="./assets/itm04.jpg" alt="" />
            </Link>
          </li>
          <li>
            <Link to="/">
              <img src="./assets/itm05.jpg" alt="" />
            </Link>
          </li>
          <li>
            <Link to="/">
              <img src="./assets/itm06.jpg" alt="" />
            </Link>
          </li>
          <li>
            <Link to="/">
              <img src="./assets/itm07.jpg" alt="" />
            </Link>
          </li>
          <li>
            <Link to="/">
              <img src="./assets/itm08.jpg" alt="" />
            </Link>
          </li>
          <li>
            <Link to="/">
              <img src="./assets/itm09.jpg" alt="" />
            </Link>
          </li>
          <li>
            <Link to="/">
              <img src="./assets/itm10.jpg" alt="" />
            </Link>
          </li>
          <li>
            <Link to="/">
              <img src="./assets/itm11.jpg" alt="" />
            </Link>
          </li>
          <li>
            <Link to="/">
              <img src="./assets/itm12.jpg" alt="" />
            </Link>
          </li>
        </ul>
      </div>
    </Inner>
  );
};

export default INSTAGRAM;
