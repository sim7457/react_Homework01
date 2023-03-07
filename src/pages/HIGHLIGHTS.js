import { Link } from "react-router-dom";
import styled from "styled-components"

const INNER = styled.div`
    width: 1200px;
    margin: 0 auto;
    
    padding: 100px 0;

    .inner_hd {
        display: flex;
        justify-content: space-between;
        margin-bottom: 40px;
    }
   
    h2 {
        font-size: 24px;
        font-weight: 500;
    }
    .main_news {
        display: flex;
        gap: 30px;
        height: 700px;
        img{
            width: 380px;
            margin-bottom: 60px;
        }
    }
    .main_news_text {
        text-align: center;
    }

    .main_news_text h3 {
        font-size: 22px;
        font-weight: 300;
        margin-bottom: 60px;
        line-height: 30px;
    }
    .main_news_text p{
        font-weight: 300;
        color: #666;
        margin-bottom: 30px;
        line-height: 20px;
    }
    .main_news_text a {
        font-size: 15px;
        font-weight: 400;
        
        border: 1px solid #000;
        padding: 8px 12px;
    }
    .h3_up {
        height: 60px;
    }
`

const HIGHLIGHTS = () => {
    return (
        <>
            <INNER>
                <div className="inner_hd">
                    <h2>HIGHLIGHTS</h2>
                    <p>아모레퍼시픽의 새로운 소식입니다.</p>
                </div>
                <div className="main_news">
                    <div className="main_news_01">
                        <img src="./assets/20230104_final_ABSOLUTE-TIMELESS-ULTIMATE-COLLECTION_main_highlights.jpg" alt="" />
                        <div className="main_news_text">
                            <h3 className="h3_up">2023 앱솔루티™ 얼티밋 컬렉션 출시</h3>
                            <p>강력한 고효능 안티에이징 리추얼을<br />경험할 수 있는 집중 케어 컬렉션</p>
                            <Link to="/">자세히 보기</Link>
                        </div>
                    </div>
                    <div className="main_news_02">
                        <img src="./assets/20221101_final_VINTAGE-SINGLE-ASSENCE-HOLIDAY_main_highlights_1.jpg" alt="" />
                        <div className="main_news_text">
                            <h3>빈티지 싱글 익스트렉트 에센스<br />2022 홀리데이 세트 한정 출시</h3>
                            <p>빈티지 에센스의 파워풀한 항산화 에너지를<br />축제 분위기와 함께 담은 기프트 세트</p>
                            <Link to="/">자세히 보기</Link>
                        </div>
                    </div>
                    <div className="main_news_03">
                        <img src="./assets/20220830_final_ABSOLUTE-TIMELESS-COLLECTION_main_highlights.jpg" alt="" />
                        <div className="main_news_text">
                            <h3 className="h3_up">2022 앱솔루티™ 타임리스 컬렉션 출시</h3>
                            <p>피부의 운명을 결정짓는 중요한 순간,<br />앱솔루티™의 감각적인 리추얼을 경험할 수 있는 컬렉션</p>
                            <Link to="/">자세히 보기</Link>
                        </div>
                    </div>
                </div>

            </INNER>


        </>
    )
}

export default HIGHLIGHTS;