import "slick-carousel/slick/slick.css";
import Slider from "react-slick";
import styled, { css } from "styled-components";
import { useRef, useState } from "react";
import { DEFAULT_CONTENTS } from "./data/default";
import { Link } from "react-router-dom";

const dd = Array.from({ length: 5 });
const Itm = styled.div`
  //background: #333;
  height: 600px;
  color: #fff;
  white-space: pre-wrap;
  ${(props) =>
    css`
      background: url(${process.env.PUBLIC_URL +
      `/assets/bg0${props.bg + 1}.jpg`});
    `}

  .in_box {
    position: absolute;
    top: 15%;
    left: 50%;
    margin: 0 0 0 100px;
  }
  h2 {
    font-size: 30px;
    font-weight: 400;
    margin-bottom: 30px;
    line-height: 40px;
  }
  p {
    font-size: 20px;
    font-weight: 400;
    margin-bottom: 60px;
    line-height: 30px;
  }

  a {
    border: 1px solid #000;
    background: #fff;
    color: #000;
    padding: 12px 16px;
  }
`;

const Dots = styled.ul`
  display: flex;

  position: absolute;
  top: 80%;
  left: 50%;
  transform: translate(-50%, -50%);
  margin: 0 0 0 350px;
`;
const DotsItm = styled.li`
  width: 100px;
  height: 5px;
  background: rgba(255, 255, 255, 0.4);
  &.on {
    background: #fff;
  }
`;

const SlideWrapper = styled.section`
  position: relative;
`;

const Slide = () => {
  const [on, setOn] = useState(0);
  const slide = useRef(null);
  const option = {
    //arrows: false,
    fade: true,
    afterChange: (idx) => setOn(idx),
  };
  return (
    <SlideWrapper>
      <Slider {...option} ref={slide}>
        {dd.map((it, idx) => (
          <Itm bg={idx}>
            <div className="in_box">
              <h2>{DEFAULT_CONTENTS[idx].title}</h2>
              <p>{DEFAULT_CONTENTS[idx].title02}</p>
              <Link>{DEFAULT_CONTENTS[idx].link}</Link>
            </div>
          </Itm>
        ))}
      </Slider>
      <Dots>
        {dd.map((it, idx) => (
          <DotsItm
            className={idx === on ? "on" : ""}
            onClick={() => slide.current.slickGoTo(idx)}
          ></DotsItm>
        ))}
      </Dots>
    </SlideWrapper>
  );
};

export default Slide;
