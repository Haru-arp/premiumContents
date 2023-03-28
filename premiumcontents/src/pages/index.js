import MainHeader from "./components/MainHeader";
import MainFooter from "./components/MainFooter";
import { useState } from "react";
import PartnerChannelBanner from "./components/PartnerChannelBanner";
import Link from "next/link";
export default function Home() {
    const [tag, setTag] = useState("all");
    console.log(tag);
    return (
        <>
            <MainHeader />
            <div className="container">
                <div className="weeklyPartnerChannel">
                    <span style={{ fontSize: 26, letterSpacing: -0.7 }}>이번 주 인기 파트너 채널</span>
                    <div className="tagBtn">
                        <button className={tag === "all" ? "selectTag" : "noneSelectTag"} onClick={() => setTag("all")}>
                            전체
                        </button>
                        <button className={tag === "economy" ? "selectTag" : "noneSelectTag"} onClick={() => setTag("economy")}>
                            경제/비즈니스
                        </button>
                        <button className={tag === "investment" ? "selectTag" : "noneSelectTag"} onClick={() => setTag("investment")}>
                            재테크
                        </button>
                    </div>
                    <div className="PartnerChannelBannerContainer">
                        {tag === "all" ? (
                            <>
                                <PartnerChannelBanner
                                    img="https://scs-phinf.pstatic.net/MjAyMjA1MTZfMjM4/MDAxNjUyNjkzOTcyMTg1.AjlrrMf9TbL9Tj0JZ7FSzffllRjPm_e_MwpIbN-Oyyog.IuEQ9tL5wBZKiCGmESnh1J-khuOhccUBKdlxyQU9DzUg.JPEG/image%7Cpremium%7Cchannel%7Cphilcounsel%7C2022%7C05%7C16%7C1652693972166.jpeg?type=nfs200_200"
                                    title="일상을 위한 철학"
                                    description="생각을 정리하고 마음을 돌보는 글, 커뮤니케이터 박은미의 채널입니다!"
                                />
                                <PartnerChannelBanner
                                    img="https://scs-phinf.pstatic.net/MjAyMjA1MTVfMjI0/MDAxNjUyNjAzODU0Mzc5.S6Sj6BDIUnX6IQVaoa2Nx5soGWQaq-_u_nNGoJTpVhYg.CBaU0ouOWKEXgv130m07jZCVCQpimq6L32uwNYHcDCgg.JPEG/image%7Cpremium%7Cchannel%7Cchemistryeverywhere%7C2022%7C05%7C15%7C1652603854351.jpg?type=nfs200_200"
                                    title="이광렬의 '모두를 위한 화학'"
                                    description="화학이란 이름만 들어가면 다 무섭고 나쁜 것 같아요. 가족의 안전을 지키기 위해 당신은 매일 어떤 선택을 하시나요? 혼란스러운 정보의 홍수를 헤쳐 나가기 위한 생존 매뉴얼!"
                                />
                                <PartnerChannelBanner
                                    img="https://scs-phinf.pstatic.net/MjAyMzAxMjlfMTMz/MDAxNjc0OTIxODI5Nzg4.zfNonlfLY1UKPrhC2T9p6cXJ0nqA5ehirOpGvaqa8oMg.rSd9at0jxl3g5Nkv6gTQpBKwTQxJcFRui5Lav8z-zgQg.JPEG/image%7Cpremium%7Cchannel%7Crosebud%7C2023%7C01%7C29%7C1674921829769.jpg?type=nfs200_200"
                                    title="강성률의 시네마 파라디소"
                                    description="영화를 사랑하는 이의 채널입니다. 영화를 둘러싼 여러 논의를 할 생각이고, 지금은 특정 컷으로 특정 영화 전체를 설명하거나, 영화 감독의 세계에 빠져들거나, 영화 사회학의 시점으로 특정 영화를 읽는 일을 합니다."
                                />
                            </>
                        ) : null}
                        <div className="viewAllChannel">
                            <Link href="/AllChannel" legacyBehavior>
                                <a>
                                    <div className="viewAllChannelBtn">전체 체널 보기</div>
                                </a>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
            <MainFooter />
            <style jsx>
                {`
                    .container {
                        display: flex;
                        flex-direction: column;
                        width: 100%;
                        margin: 0 auto;
                        max-width: 1120px;
                        padding-left: 20px;
                        padding-right: 20px;
                        box-sizing: border-box;
                    }
                    .weeklyPartnerChannel {
                        margin-top: 50px;
                    }
                    .tagBtn {
                        display: flex;
                        margin-top: 15px;
                        gap: 10px;
                    }
                    .selectTag {
                        background-color: #585163;
                        padding: 7px 16px;
                        border: none;
                        border-radius: 20px;
                        color: #fff;
                    }
                    .noneSelectTag {
                        background-color: #f3f3f3;
                        padding: 7px 16px;
                        border: none;
                        border-radius: 20px;
                        color: #acacac;
                    }
                    .PartnerChannelBannerContainer {
                        display: flex;
                        flex-direction: column;
                        gap: 10px;
                        margin-top: 30px;
                    }
                    .viewAllChannel {
                        display: flex;
                        justify-content: center;
                        margin-top: 30px;
                    }
                    .viewAllChannelBtn {
                        background: transparent;
                        border: 1px solid #8a8a8a;
                        padding: 17px 43px;
                        border-radius: 30px;
                    }
                `}
            </style>
        </>
    );
}
