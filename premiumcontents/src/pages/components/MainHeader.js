import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/scrollbar";
import "swiper/css/navigation";

import { Autoplay, Navigation, Scrollbar } from "swiper";
const MainHeader = () => {
    return (
        <>
            <header className="premium_recommand_Area">
                <div className="header_Wrap">
                    <div className="link_studio">
                        <p className="link_btn">프리미엄 스튜디오</p>
                    </div>
                    <div className="premium_header">
                        <Link href={"/"} legacyBehavior>
                            <a className="_logoN">N</a>
                        </Link>
                        <Link href={"/"} legacyBehavior>
                            <a className="_logo_Premium">Premium Contents</a>
                        </Link>
                        <Link href={"/my/mypage"} legacyBehavior>
                            <a className="_logoMy">MY</a>
                        </Link>
                    </div>
                    <div className="carousel">
                        <Swiper
                            autoplay={{
                                delay: 2500,
                                disableOnInteraction: false,
                            }}
                            initialSlide={1}
                            loop={true}
                            slidesPerView={4}
                            spaceBetween={180}
                            centeredSlides={true}
                            scrollbar={{
                                hide: true,
                                dragSize: 40,
                            }}
                            modules={[Scrollbar, Autoplay, Navigation]}
                            className="mySwiper"
                        >
                            <SwiperSlide>
                                <div className="card">
                                    <img
                                        src="https://scs-phinf.pstatic.net/MjAyMzAzMjhfMTkz/MDAxNjgwMDA5ODk5NzQ4.CIKdjBWhhde3PDPaa2yequiSxvXktkbvLAJ9IzTunVIg.7gBHXG7lORGeJkbVRQWTeC8Vd1rslsoWLB6twBE_j7gg.JPEG/image%7Cpremium%7Ctest%7Cbanner%7C2023%7C03%7C28%7C%ED%94%84%EB%A6%AC%EB%AF%B8%EC%97%84%EC%BD%98%ED%85%90%EC%B8%A0_%ED%99%88_%EC%83%81%EB%8B%A8_590x240.jpg?type=nfs590_240"
                                        style={{ width: "295px", position: "absolute", top: "0" }}
                                    />
                                    <div className="card_contents">
                                        <div style={{ fontWeight: "bold", fontSize: "18px" }}>콘텐츠 크리에이터라면?</div>
                                        <div style={{ color: "gray", fontSize: "14px", marginTop: "8px", marginBottom: "8px" }}>나도 창작자 발굴 프로젝트에 도전하세요!</div>
                                        <div style={{ fontSize: "13px", color: "#9B9B9B" }}>최종 스타 채널에는 창작 지원금 300만원의 행운이! 지금 신청하세요.</div>
                                        <div style={{ fontSize: "14px", color: "#C1B08B", marginTop: "10px" }}>자세히 보기</div>
                                    </div>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className="card">
                                    <div className="ChannelCarousel">Channel</div>
                                    <img
                                        src="https://scs-phinf.pstatic.net/MjAyMzAzMTdfMTE5/MDAxNjc5MDUzNzM1NTk0.Z5sv9HDOvxENQEE7H94z3mU2ZH7HtuFmGtwGkwa4VvIg.g5YTUu6yL4awjB0AC_V7UVLdYneeocfw7omDEXLFUHwg.JPEG/image%7Cpremium%7Cchannel%7Corbis%7C2023%7C03%7C17%7C1679053735160.jpg?type=nfs590_240"
                                        style={{ width: "295px", position: "absolute", top: "0" }}
                                    />
                                    <div className="card_contents">
                                        <div style={{ fontWeight: "bold", fontSize: "18px" }}>오르비스투자지문</div>
                                        <div style={{ color: "gray", fontSize: "14px", marginTop: "8px", marginBottom: "8px" }}>경제/비즈니스</div>
                                        <div style={{ fontSize: "13px", color: "#9B9B9B" }}>
                                            오르비스투자자문은 금융위원회 정식 인가 투자자문사입니다. 현직 전문가들로 구성된 투자자문사가 투자에 도움이 될 수 있는 컨텐츠를 발행합니다. 많은 관심
                                            부탁드립니다.
                                        </div>
                                        {/* <div style={{ fontSize: "14px", color: "#C1B08B", marginTop: "10px" }}>자세히 보기</div> */}
                                    </div>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className="card">
                                    <div className="ContentsCarousel">Contents</div>

                                    <img
                                        src="https://scs-phinf.pstatic.net/MjAyMzAzMjhfMjc0/MDAxNjc5OTQyMTY0MjQ5.TxMZayrAQzLvPkfBog_6GOEWGdkVlULpjTyoqFvA91kg.aAJHQPC58rl_fR_Jqxw2rPTWnxALPftOBGziu-moe0gg.JPEG/%EB%82%98%EB%8B%A4%EC%9A%B4_%EA%B7%B8%EB%A6%BC.jpg?type=nfs590_240"
                                        style={{ width: "295px", position: "absolute", top: "0" }}
                                    />
                                    <div className="card_contents">
                                        <div style={{ fontWeight: "bold", fontSize: "18px" }}>자유이 작가</div>
                                        <div style={{ fontWeight: "bold", fontSize: "20px", marginTop: "8px", marginBottom: "8px" }}>나다움을 잃지 않아야 한다. 가장 잘 어울리고 빛날테니</div>
                                        <div style={{ fontSize: "13px", color: "#9B9B9B" }}>
                                            나를 깎아내리면서까지 다른 사람의 틀에 맞출 필요 없다. 무엇보다 나를 소중하게 생각하는 사람은 날 바꾸려 하지 않는다. 나다움을 찾은 사람들은 외부의 영향에
                                            흔들리지 않고...
                                        </div>
                                        {/* <div style={{ fontSize: "14px", color: "#C1B08B", marginTop: "10px" }}>자세히 보기</div> */}
                                    </div>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className="card">
                                    <img
                                        src="https://scs-phinf.pstatic.net/MjAyMzAzMjhfMTkz/MDAxNjgwMDA5ODk5NzQ4.CIKdjBWhhde3PDPaa2yequiSxvXktkbvLAJ9IzTunVIg.7gBHXG7lORGeJkbVRQWTeC8Vd1rslsoWLB6twBE_j7gg.JPEG/image%7Cpremium%7Ctest%7Cbanner%7C2023%7C03%7C28%7C%ED%94%84%EB%A6%AC%EB%AF%B8%EC%97%84%EC%BD%98%ED%85%90%EC%B8%A0_%ED%99%88_%EC%83%81%EB%8B%A8_590x240.jpg?type=nfs590_240"
                                        style={{ width: "295px", position: "absolute", top: "0" }}
                                    />
                                    <div className="card_contents">
                                        <div style={{ fontWeight: "bold", fontSize: "18px" }}>콘텐츠 크리에이터라면?</div>
                                        <div style={{ color: "gray", fontSize: "14px", marginTop: "8px", marginBottom: "8px" }}>나도 창작자 발굴 프로젝트에 도전하세요!</div>
                                        <div style={{ fontSize: "13px", color: "#9B9B9B" }}>최종 스타 채널에는 창작 지원금 300만원의 행운이! 지금 신청하세요.</div>
                                        <div style={{ fontSize: "14px", color: "#C1B08B", marginTop: "10px" }}>자세히 보기</div>
                                    </div>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className="card">
                                    <div className="ChannelCarousel">Channel</div>
                                    <img
                                        src="https://scs-phinf.pstatic.net/MjAyMzAzMTdfMTE5/MDAxNjc5MDUzNzM1NTk0.Z5sv9HDOvxENQEE7H94z3mU2ZH7HtuFmGtwGkwa4VvIg.g5YTUu6yL4awjB0AC_V7UVLdYneeocfw7omDEXLFUHwg.JPEG/image%7Cpremium%7Cchannel%7Corbis%7C2023%7C03%7C17%7C1679053735160.jpg?type=nfs590_240"
                                        style={{ width: "295px", position: "absolute", top: "0" }}
                                    />
                                    <div className="card_contents">
                                        <div style={{ fontWeight: "bold", fontSize: "18px" }}>오르비스투자지문</div>
                                        <div style={{ color: "gray", fontSize: "14px", marginTop: "8px", marginBottom: "8px" }}>경제/비즈니스</div>
                                        <div style={{ fontSize: "13px", color: "#9B9B9B" }}>
                                            오르비스투자자문은 금융위원회 정식 인가 투자자문사입니다. 현직 전문가들로 구성된 투자자문사가 투자에 도움이 될 수 있는 컨텐츠를 발행합니다. 많은 관심
                                            부탁드립니다.
                                        </div>
                                        {/* <div style={{ fontSize: "14px", color: "#C1B08B", marginTop: "10px" }}>자세히 보기</div> */}
                                    </div>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className="card">
                                    <div className="ContentsCarousel">Contents</div>

                                    <img
                                        src="https://scs-phinf.pstatic.net/MjAyMzAzMjhfMjc0/MDAxNjc5OTQyMTY0MjQ5.TxMZayrAQzLvPkfBog_6GOEWGdkVlULpjTyoqFvA91kg.aAJHQPC58rl_fR_Jqxw2rPTWnxALPftOBGziu-moe0gg.JPEG/%EB%82%98%EB%8B%A4%EC%9A%B4_%EA%B7%B8%EB%A6%BC.jpg?type=nfs590_240"
                                        style={{ width: "295px", position: "absolute", top: "0" }}
                                    />
                                    <div className="card_contents">
                                        <div style={{ fontWeight: "bold", fontSize: "18px" }}>자유이 작가</div>
                                        <div style={{ fontWeight: "bold", fontSize: "20px", marginTop: "8px", marginBottom: "8px" }}>나다움을 잃지 않아야 한다. 가장 잘 어울리고 빛날테니</div>
                                        <div style={{ fontSize: "13px", color: "#9B9B9B" }}>
                                            나를 깎아내리면서까지 다른 사람의 틀에 맞출 필요 없다. 무엇보다 나를 소중하게 생각하는 사람은 날 바꾸려 하지 않는다. 나다움을 찾은 사람들은 외부의 영향에
                                            흔들리지 않고...
                                        </div>
                                        {/* <div style={{ fontSize: "14px", color: "#C1B08B", marginTop: "10px" }}>자세히 보기</div> */}
                                    </div>
                                </div>
                            </SwiperSlide>
                        </Swiper>
                    </div>
                </div>
            </header>
            <style jsx>{`
                .premium_recommand_Area {
                    display: flex;
                    width: 100%;
                    height: 489px;
                    padding-bottom: 50px;
                    background: linear-gradient(180deg, #8f66d2 0%, #5c3e8c 99.99%, rgba(143, 102, 210, 0) 100%, rgba(43, 26, 70, 0.53) 100%);
                }
                .header_Wrap {
                    display: flex;
                    flex-direction: column;
                    width: 100%;
                    margin: 0 auto;
                    max-width: 1120px;
                    padding-left: 20px;
                    padding-right: 20px;
                    box-sizing: border-box;
                }
                .link_studio {
                    display: flex;
                    justify-content: flex-end;
                    margin-top: 9px;
                }
                .link_btn {
                    color: #fff;
                    border: 1px solid #fff;
                    padding: 5px 10px 4px;
                    border-radius: 14.5px;
                    letter-spacing: -0.5px;
                    font-weight: 600;
                    font-size: 12px;
                }
                .premium_header {
                    margin-top: 5px;
                    display: flex;
                    flex-direction: row;
                    justify-content: space-between;
                }
                ._logoN {
                    color: #fff;
                    font-weight: 600;
                    font-size: 24px;
                }
                ._logo_Premium {
                    color: #fff;
                    font-weight: 600;
                    font-size: 26px;
                }
                ._logoMy {
                    color: #fff;
                    font-weight: 600;
                    font-size: 24px;
                }

                .card {
                    position: relative;
                    display: flex;
                    flex-direction: column;
                    justify-content: center;
                    align-items: center;
                    text-align: center;
                    background: #fff;
                    width: 295px;
                    height: 338px;
                    padding: 0 12px;
                    border-radius: 4px;
                    box-shadow: 0px 7px 10px rgba(0, 0, 0, 0.25);
                }
                .carousel {
                    margin-top: 20px;
                }
                .card_contents {
                    margin-top: 105px;
                }
                .ChannelCarousel {
                    position: absolute;
                    top: 0px;
                    left: -5px;
                    width: 75px;
                    height: 75px;
                    background-color: #dfa237;
                    z-index: 1000;
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    font-size: 15px;
                    font-weight: bold;
                    color: #fff;
                }
                .ContentsCarousel {
                    position: absolute;
                    top: 0px;
                    left: -5px;
                    width: 75px;
                    height: 75px;
                    background-color: #000;
                    z-index: 1000;
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    font-size: 15px;
                    font-weight: bold;
                    color: #fff;
                }
            `}</style>
        </>
    );
};

export default MainHeader;
