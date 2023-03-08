import { Link } from "react-router-dom";
import styled from "styled-components"

const Bg = styled.div`
background: #000;
height: 600px;

width: 100vw;
    img {
position: relative;
left: -30%;
    }
`

const INNER = styled.div`
    width: 1200px;
    margin: 0 auto;
    position: relative;

    h3 {
        position: absolute;
        top: 30%;
        left: 0;
        font-size: 25px;
        font-weight: 500;
        color: #fff;
    }
    p {
        position: absolute;
        top: 40%;
        left: 0;
        font-size: 16px;
        font-weight: 400;
        color: #fff;
        line-height: 25px;
    }
    a {
        position: absolute;
        top: 60%;
        left: 0;
        font-size: 16px;
        font-weight: 400;
        color: #000;
        background: #fff;

        border: 1px solid #fff;
        padding: 15px 50px;
    }
`
const Static_parbase = () => {
    return (
        <>
            <Bg>
                <INNER>
                    <img src="./assets/20200806_AP_Main_brand_PC.jpg" alt="" />
                    <h3>THE ARTISANSHIP OF BEAUTY</h3>
                    <p>오직 피부만을 위한 차, 한계를 넘어서는 아름다움<br />Beauty beyond limits with exclusive tea created for the skin
                    </p>
                    <Link to="/">자세히보기</Link>
                </INNER>
            </Bg>
        </>
    )
}

export default Static_parbase;