import { Link } from "react-router-dom";
import styled from "styled-components";

const Header_STY = styled.div`
  background-color: black;
  height: 122px;

  .inner {
    width: 1200px;
    margin: 0 auto;

    display: flex;
    align-items: center;
    gap: 60px;
  }

  h1 {
    width: 312px;
  }
  .img_box {
    background-image: url(${process.env.PUBLIC_URL + "/assets/20200813_LOGO_header_PC.svg"});
    background-size: 415px 85px;
    background-repeat: no-repeat;
    background-position: center 59px;
    height: 88px;
  }
  .gnb {
    display: flex;
    color: #fff;

    & > li {
      position: relative;

      &:hover ul {
        display: block;
      }

      a {
        display: block;
      }
    }
  }
  .gnb > ul {
    display: flex;
    gap: 30px;
    margin-top: 65px;
  }
  .gnb > ul > li {
    font-size: 20px;
    font-weight: 400;
  }
  .gnb .submenu {
    font-size: 16px;
    font-weight: 300;
    color: #ff0;
    display: none;
  }
`;

const Header = () => {
  return (
    <Header_STY className="Header">
      <div className="inner">
        <h1>
          <Link to="/">
            <div className="img_box"></div>
          </Link>
        </h1>
        <nav className="gnb">
          <ul>
            <li>
              <Link to="/">
                AT THIS MOMENT
                <ul className="submenu">
                  <li>
                    <Link to="/">HIGHLIGHTS</Link>
                  </li>
                  <li>
                    <Link to="/">BEST SELLER</Link>
                  </li>
                </ul>
              </Link>
            </li>
            <li>
              <Link to="/">
                BRAND STORY
                <ul className="submenu">
                  <li>
                    <Link to="/">Origin of Artisanship</Link>
                  </li>
                  <li>
                    <Link to="/">Editorial</Link>
                  </li>
                </ul>
              </Link>
            </li>
            <li>
              <Link to="/">
                TIME RESPONSE
                <ul className="submenu">
                  <li>
                    <Link to="/">About TIME RESPONSE</Link>
                  </li>
                </ul>
              </Link>
            </li>
            <li>
              <Link to="/">
                PRODUCTS
                <ul className="submenu">
                  <li>
                    <Link to="/">Time Response</Link>
                  </li>
                  <li>
                    <Link to="/">Prime Reserve</Link>
                  </li>
                  <li>
                    <Link to="/">Skin Care</Link>
                  </li>
                  <li>
                    <Link to="/">Make Up</Link>
                  </li>
                </ul>
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </Header_STY>
  );
};

export default Header;
