import MainHeader from "./components/MainHeader";
import MainFooter from "./components/MainFooter";
import { useState } from "react";
import PartnerChannelBanner from "./components/PartnerChannelBanner";
import Link from "next/link";
import PremiumCard from "./components/PremiumCard";
export default function Home() {
    const [tag, setTag] = useState("all");
    const [pTag, setPtag] = useState("all");
    console.log(tag);
    return (
        <>
            <div style={{ height: "100vh", display: "flex", flexDirection: "column" }}>
                <MainHeader />
                <div className="container">
                    <div className="weeklyPartnerChannel">
                        <span style={{ fontSize: 24, letterSpacing: -0.7 }}>이번 주 인기 파트너 채널</span>
                        <div className="tagBtn">
                            <button className={tag === "all" ? "selectTag" : "noneSelectTag"} onClick={() => setTag("all")}>
                                전체
                            </button>
                            <button className={tag === "IT" ? "selectTag" : "noneSelectTag"} onClick={() => setTag("IT")}>
                                IT/Tech
                            </button>
                            <button className={tag === "Sports" ? "selectTag" : "noneSelectTag"} onClick={() => setTag("Sports")}>
                                스포츠/건강
                            </button>
                        </div>
                        <div className="PartnerChannelBannerContainer">
                            {tag === "all" && (
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
                            )}
                            <div className="viewAllChannel">
                                <Link href="/AllChannel" legacyBehavior>
                                    <a>
                                        <div className="viewAllChannelBtn">전체 체널 보기</div>
                                    </a>
                                </Link>
                            </div>
                        </div>
                    </div>
                    <div className="weeklyPremiumChannel">
                        <span style={{ fontSize: 24, letterSpacing: -0.7 }}>이번 주 인기 프리미엄 채널</span>
                        <div className="tagBtn">
                            <button className={pTag === "all" ? "selectPTag" : "noneSelectTag"} onClick={() => setPtag("all")}>
                                전체
                            </button>
                            <button className={pTag === "IT" ? "selectPTag" : "noneSelectTag"} onClick={() => setPtag("IT")}>
                                IT/Tech
                            </button>
                            <button className={pTag === "Sports" ? "selectPTag" : "noneSelectTag"} onClick={() => setPtag("Sports")}>
                                스포츠/건강
                            </button>
                        </div>
                        <div className="PremiumChannelCardContainer">
                            {pTag === "all" && (
                                <>
                                    <PremiumCard
                                        img="https://scs-phinf.pstatic.net/MjAyMjA5MjhfMjcz/MDAxNjY0MzQ4OTYzOTA1.sacu8XX_6tdCdhs1bYOaqktuDaY8EdEOJfH7WynhJ8Yg.Qz68rX9Hfo_yCjsI7lWO7dhxtVMrqabyRRg3mB_yv08g.PNG/image%7Cpremium%7Cchannel%7Cmarket%7C2022%7C09%7C28%7C1664348963885.png?type=nfs200_200"
                                        title="스댕의 멘탈갑 투자노트 현금흐름 중심"
                                        description="모두가 부러워하는 부동산 투자. 현금흐름 만들어 잘 살기. 초보 환영. '개천출신 용'되기 프로젝트. 시세차익형 투자와 현금흐름 투자(연금형-수익형)을 모두 다룹니다. 3주택 10상가!!"
                                    />
                                    <PremiumCard
                                        img="https://scs-phinf.pstatic.net/MjAyMjA4MjJfMTQz/MDAxNjYxMTIxMDM5MjQw.ydhEAK3SIwMbiEKQrbzXsNUn5fYT5PlnNRAjZ9E0M0Eg._A7undf7ISm1LZdtqUExbxcU4VJh_agC_LdaAoywUusg.PNG/image%7Cpremium%7Cchannel%7Chsacademy%7C2022%7C08%7C22%7C1661121039204.png?type=nfs200_200"
                                        title="이효석아카데미"
                                        description="생존투자를 위해 꼭 알아야 하는 글로벌 경제 동향을 가장 쉽고 재미있게 설명해드립니다."
                                    />
                                    <PremiumCard
                                        img="https://scs-phinf.pstatic.net/MjAyMTA5MTVfMjQ1/MDAxNjMxNjg5NTIxNzE0.wikkULVmOwGKMLMHhW9_gzFRBQh7JIkpJx__J1QScUsg.MdgoCkh_FFGFqSQAYaiTmKEGnw1PTSysQsr56grV7J8g.PNG/image%7Cpremium%7Cchannel%7Cusa%7C2021%7C09%7C15%7C1631689521483.png?type=nfs200_200"
                                        title="미국주식 사관학교"
                                        description="상위1% 투자자를 위한 국내 최고 수준의 미국주식 콘텐츠"
                                    />
                                    <PremiumCard
                                        img="https://scs-phinf.pstatic.net/MjAyMjA5MDZfMjU5/MDAxNjYyNDQ1MzA5MTc1.yNoF4WVDmR_TdZIfqKZlWQmEQCPBkO3Er6yUb86B_Xog.7LVpv-a4TUASgajpOYOTGd3P2oUVNjz9Pgbf3xD3IDEg.JPEG/image%7Cpremium%7Cchannel%7Ceduity%7C2022%7C09%7C06%7C1662445309075.jpg?type=nfs200_200"
                                        title="다시, 학교공부"
                                        description="교육에 관한 이야기를 담습니다"
                                    />
                                </>
                            )}
                            <div className="viewAllChannel">
                                <Link href="/AllChannel" legacyBehavior>
                                    <a>
                                        <div className="viewAllChannelBtn2">전체 체널 보기</div>
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
                            flex: 1;
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
                        .selectPTag {
                            background-color: #8b66c7;
                            padding: 7px 16px;
                            border: none;
                            border-radius: 20px;
                            color: #fff;
                        }
                        .weeklyPremiumChannel {
                            margin-top: 50px;
                        }
                        .PremiumChannelCardContainer {
                            display: flex;
                            justify-content: center; //나중에 바꾸기
                            flex-direction: row;
                            gap: 15px;
                            flex-wrap: wrap;
                            margin-top: 30px;
                        }
                        .viewAllChannelBtn2 {
                            background: transparent;
                            border: 1px solid #8b66c7;
                            padding: 17px 43px;
                            border-radius: 30px;
                            color: #8b66c7;
                        }
                    `}
                </style>
            </div>
        </>
    );
}
