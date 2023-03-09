import "slick-carousel/slick/slick.css";
import Slider from "react-slick";
import styled, { css } from "styled-components";
import { useRef, useState } from "react";
import { DEFAULT_CONTENTS } from "./data/default";

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
          <Itm bg={idx}>{DEFAULT_CONTENTS[idx].title}</Itm>
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
