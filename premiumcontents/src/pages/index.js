import MainHeader from "./components/MainHeader";
import MainFooter from "./components/MainFooter";
import { useEffect, useState } from "react";
import PartnerChannelBanner from "./components/PartnerChannelBanner";
import Link from "next/link";
import PremiumCard from "./components/PremiumCard";
import SubscribeGuide from "./components/SubscribeGuide";
export default function Home() {
    const [tag, setTag] = useState("all");
    const [pTag, setPtag] = useState("all");
    console.log(tag);

    //channel-category-controller
    // const getData = async () => {
    //     const result = await (await fetch(`http://localhost:8080/precon/channelCategory/idx/${1}`)).json();
    //     console.log(result);
    // };
    useEffect(() => {
        // getData();
    }, []);
    return (
        <>
            <div style={{ height: "100vh", display: "flex", flexDirection: "column" }}>
                <MainHeader />
                <SubscribeGuide />
                <div className="container">
                    <div className="recommended_channel">
                        <span style={{ fontSize: 20, fontWeight: "bold", letterSpacing: -0.7 }}>추천 채널</span>
                    </div>
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
                    <div className="recommand_channel_container">
                        {/*태그버튼 클릭하면 태그 클릭한대로 렌더링 해주되, 
                        유료 무료 정보에 따라서 유료면 왼쪽에 무료면 오른쪽에 따로 렌더링 되게 코딩 */}
                        <div>
                            <div>유료</div>
                        </div>
                        <div>
                            <div>무료</div>
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
                            margin-bottom: 50px;
                        }
                         {
                            /* .weeklyPartnerChannel {
                            margin-top: 50px;
                        } */
                        }
                        .recommended_channel {
                            margin-top: 50px;
                        }
                        .recommand_channel_container {
                            display: flex;
                            flex-direction: row;
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
{
    /* <div className="weeklyPartnerChannel">
                        <span style={{ fontSize: 20, fontWeight: "bold", letterSpacing: -0.7 }}>이번 주 인기 파트너 채널</span>
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
                                        channel="haru"
                                    />
                                    <PartnerChannelBanner
                                        img="https://scs-phinf.pstatic.net/MjAyMjA1MTVfMjI0/MDAxNjUyNjAzODU0Mzc5.S6Sj6BDIUnX6IQVaoa2Nx5soGWQaq-_u_nNGoJTpVhYg.CBaU0ouOWKEXgv130m07jZCVCQpimq6L32uwNYHcDCgg.JPEG/image%7Cpremium%7Cchannel%7Cchemistryeverywhere%7C2022%7C05%7C15%7C1652603854351.jpg?type=nfs200_200"
                                        title="이광렬의 '모두를 위한 화학'"
                                        channel="haru1"
                                        description="화학이란 이름만 들어가면 다 무섭고 나쁜 것 같아요. 가족의 안전을 지키기 위해 당신은 매일 어떤 선택을 하시나요? 혼란스러운 정보의 홍수를 헤쳐 나가기 위한 생존 매뉴얼!"
                                    />
                                    <PartnerChannelBanner
                                        img="https://scs-phinf.pstatic.net/MjAyMzAxMjlfMTMz/MDAxNjc0OTIxODI5Nzg4.zfNonlfLY1UKPrhC2T9p6cXJ0nqA5ehirOpGvaqa8oMg.rSd9at0jxl3g5Nkv6gTQpBKwTQxJcFRui5Lav8z-zgQg.JPEG/image%7Cpremium%7Cchannel%7Crosebud%7C2023%7C01%7C29%7C1674921829769.jpg?type=nfs200_200"
                                        title="강성률의 시네마 파라디소"
                                        channel="haru2"
                                        description="영화를 사랑하는 이의 채널입니다. 영화를 둘러싼 여러 논의를 할 생각이고, 지금은 특정 컷으로 특정 영화 전체를 설명하거나, 영화 감독의 세계에 빠져들거나, 영화 사회학의 시점으로 특정 영화를 읽는 일을 합니다."
                                    />
                                </>
                            )}
                            {tag === "IT" && (
                                <>
                                    <PartnerChannelBanner
                                        img="https://scs-phinf.pstatic.net/MjAyMTEyMjdfMTcy/MDAxNjQwNjE2MzE3MTc0.4QwyPmeYhZ_yjQy_IchMbySnayH7lagnineQVWOV2nUg.kkQbmR5PsYgXqWNoZsivjmrcKOVOZ3Eu40LYopus6-og.PNG/image%7Cpremium%7Cchannel%7C3mit%7C2021%7C12%7C27%7C1640616317145.png?type=nfs200_200"
                                        title="3분 IT"
                                        description="3분만에 읽을 수 있는 IT트렌드를 배달해드려요"
                                    />
                                    <PartnerChannelBanner
                                        img="https://scs-phinf.pstatic.net/MjAyMjA4MDNfMjAw/MDAxNjU5NTE2Mjc4NTQ0.yAMs9mmSKicpz-HRJ2OsFbReWlhx3JYy0Jg8O3B4v7gg.qRaYNGu3V9-XUk_1X4vaUk5HqLvUrxC1kXh-xD9CINwg.PNG/image%7Cpremium%7Cchannel%7Cdatascience%7C2022%7C08%7C03%7C1659516278523.png?type=nfs200_200"
                                        title="강지훈의 '데이터는 알고있다'"
                                        description="데이터 과학은 데이터를 통해 우리가 몰랐던 정보를 만들어낸다. 정보화사회를 거쳐 4차 산업혁명 그리고 앞으로 다가올 미래 사회에 가장 중요한 자원 중 하나인 데이터, 데이터는 생각보다 많은 것을 알고있다."
                                    />
                                    <PartnerChannelBanner
                                        img="https://scs-phinf.pstatic.net/MjAyMjA3MDdfMTky/MDAxNjU3MTIxMTc2OTI5.gmnYBDA1kKzKorqsgGvLIJ856TScPnzzloZufWDZOp4g.L8rZwybvRU7SC0NodCYzy2KSXH_Rq-B01Es8gQVbF18g.JPEG/image%7Cpremium%7Cchannel%7Cdigitalx%7C2022%7C07%7C07%7C1657121176899.jpg?type=nfs200_200"
                                        title="김상윤의 디지털 전환(DX)과 미래"
                                        description="현재 우리는 인공지능과 데이터가 지배하는 디지털 대전환의 시대를 살고 있다. 현재 진행되고 있는 변화는 어떤 모습이며, 그 속에서 우리는 어떤 미래를 기대할 수 있을까?"
                                    />
                                </>
                            )}
                            {tag === "Sports" && (
                                <>
                                    <PartnerChannelBanner
                                        img="https://scs-phinf.pstatic.net/MjAyMjA1MDJfNjkg/MDAxNjUxNDc0NDI0NjQ2.YmZqf-wTJc_6WHlA7QsHtRcgjiwtiZGaGT2OaTOtQbMg.NUGN-ctVMSBTR4p77cOk9QVZeZar7m3lP-w4mrCR2Qsg.JPEG/image%7Cpremium%7Cchannel%7Cenjoydiet%7C2022%7C05%7C02%7C1651474424627.jpg?type=nfs200_200"
                                        title="홍경희의 맛있고 건강한 식사 즐기기"
                                        description="안녕하세요, 영양학 박사의 공부해서 남주는 영양가 있는 공간입니다. 건강하고 현명하게, 무엇보다 맛있게 음식과 식사를 즐기는 방법에 대하여 나누고자 합니다."
                                    />
                                    <PartnerChannelBanner
                                        img="https://scs-phinf.pstatic.net/MjAyMzAxMTBfMjEx/MDAxNjczMzA0MTQzNDU1.hkQw7TFScefKvV-c78_sAzuh59TdjEgzteRlH_TqcNkg.VwILiUkbUoTP7_Q25isoEFi29s219sPa5wDNcwLvl8wg.JPEG/image%7Cpremium%7Cchannel%7Csport%7C2023%7C01%7C10%7C1673304143434.jpg?type=nfs200_200"
                                        title="스포츠 명가의 재미와 감동"
                                        description="스포츠 현장에는 감동이.. 재미가 있습니다. 스포츠 명가라 불리는 선수, 팀, 리그, 이벤트는 매 순간 순간 마다 재미와 감동의 요소를 만들어 팬들을 행복하게 만들고 스포츠의 진 면목을 보여 줍니다. 스포츠 명가를 통해 배울 수 있는 재미와 감동의 요소들을 함께 느껴 보고 나누며 더욱 스포츠를 사랑 하기를 바랍니다."
                                    />
                                    <PartnerChannelBanner
                                        img="https://scs-phinf.pstatic.net/MjAyMjEyMjJfMjQ3/MDAxNjcxNzIwMTY4Mzc5.hRMkrLSHpWvO3J3S1tWH4w_9hHEc4h_EtTtV30kg6-cg.9NstjKtgf7uIM9gmKeAanXLCO9YsM0Z_oXh_k0VdU_wg.PNG/image%7Cpremium%7Cchannel%7Cworldcontry%7C2022%7C12%7C22%7C1671720168351.png?type=nfs200_200"
                                        title="내 몸의 가이드 북"
                                        description="우리 몸에 대해서 알아봅니다. 운동,식단관리,호르몬,영양소,헬스 등등 다양한 방면에서 우리의 건강을 지킬수있는 방법, 그리고 우리 몸의 구조에 대해 알아봅니다"
                                    />
                                </>
                            )}

                            <div className="viewAllChannel">
                                <Link href="/ch/AllChannel" legacyBehavior>
                                    <a>
                                        <div className="viewAllChannelBtn">전체 체널 보기</div>
                                    </a>
                                </Link>
                            </div>
                        </div>
                    </div>
                    <div className="weeklyPremiumChannel">
                        <span style={{ fontSize: 20, fontWeight: "bold", letterSpacing: -0.7 }}>이번 주 인기 프리미엄 채널</span>
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
                            {pTag === "IT" && (
                                <>
                                    <PremiumCard
                                        img="https://scs-phinf.pstatic.net/MjAyMjEyMzFfMiAg/MDAxNjcyNDU3ODY5NTEz.Wj7WJ_HDPI1oq3fkLi-b4sFyJJ8baa69cY7xW5DDGwwg.EYJ1cylgr1YpG_0jfnGLI-OlwlahDnX_Tscz-wPXH5gg.PNG/image%7Cpremium%7Cchannel%7Cpickool%7C2022%7C12%7C31%7C1672457869469.png?type=nfs200_200"
                                        title="Pickool: 기업분석 쿨하게"
                                        description="국내/외 IT 기반 테크 기업들의 사업 모델과 방향성, 그 이면의 전략을 매주 2회 공유드립니다."
                                    />
                                    <PremiumCard
                                        img="https://scs-phinf.pstatic.net/MjAyMjExMDlfMjIy/MDAxNjY3OTg5MDY0NDEw.UtKge8ARdSCzlwc3FgSizVLqLyZbaIc_idcBxPg0aIkg.y_CpQ2GiUwZwUoY_SddYQkyE9Mc2lUNsiUYWS839zeog.JPEG/image%7Cpremium%7Cchannel%7Cexceldevil%7C2022%7C11%7C09%7C1667989064387.jpg?type=nfs200_200"
                                        title="엑셀마왕의 실무엑셀 프리미엄 콘텐츠"
                                        description="업무효율을 높이는 엑셀 템플릿과 노하우를 공유 드립니다."
                                    />
                                    <PremiumCard
                                        img="https://scs-phinf.pstatic.net/MjAyMTA5MTdfMTMy/MDAxNjMxODU4MTg4ODk0.jhf2gJPv3F_blAXJWZhVn5GZ850ytJpkkMj9_6diGZgg.eI0fKypHfjkN1WUuPcjUvUOZ3c_DKObt3dVmAqkbDN4g.PNG/image%7Cpremium%7Cchannel%7Cdmkglobal%7C2021%7C09%7C17%7C1631858188752.png?type=nfs200_200"
                                        title="MIT 테크놀로지 리뷰"
                                        description="120년 전통의 세계적인 테크 매거진 'MIT Technology Review' 한국어판입니다."
                                    />
                                    <PremiumCard
                                        img="https://scs-phinf.pstatic.net/MjAyMjExMDVfMjQx/MDAxNjY3NjE0ODU2Nzg3.hiaBUWMbZJGKnyhQgtzT5Nk6ZRI8hZDXw19R6ranVXcg.-4yH3uo4Y76TboLI0ji4BzGWFJDYIKkniK2FbaZ6hdUg.PNG/image%7Cpremium%7Cchannel%7Cminpapa%7C2022%7C11%7C05%7C1667614856765.png?type=nfs200_200"
                                        title="민파파-온라인 재택부업 전문 스쿨"
                                        description="[온라인 스마트부업 전문채널] 20여종 온라인 자동부업 프로그램 모두 사용 ﻿1. 온라인 부업을 배워서 자동수익실현을 해보시고 싶은 분 2. 챗GPT를 이용한 인공지능 지동부업 소개 3. 애드센스, 쿠팡파트너스, 뉴스픽파트너스, 애드픽 등 온라인 부업을 시도해보고 싶은 분 4. 워드프레스를 시작해보고자 하시는 분 5. 디지털 노마드를 꿈꾸시는 분 6. IT를 쉽게 접근하여 업무나 부업에 활용하고 싶으신분 #온라인 홍보 #제휴마케팅 #부업 #온라인부업 #뉴스픽파트너스 #쿠팡파트너스 #자동부업"
                                    />
                                </>
                            )}
                            {pTag === "Sports" && (
                                <>
                                    <PremiumCard
                                        img="https://scs-phinf.pstatic.net/MjAyMTA5MTZfMzEg/MDAxNjMxNzU1NTk2NzY3.d-i4pFXXEfIz6C-Bs5Wb_gX3rLqqd_ER1ho92xr4cRYg.QpUGhfkOIUwZV87HGnGZBAeNxuqdtRgNSu7WUeXIcgsg.JPEG/image%7Cpremium%7Cchannel%7Cgolfguy%7C2021%7C09%7C16%7C1631755596754.jpg?type=nfs200_200"
                                        title="골프&룰스 가이"
                                        description="깊이 있고 유다른 골프 스토리"
                                    />
                                    <PremiumCard
                                        img="https://scs-phinf.pstatic.net/MjAyMjA5MjdfNDEg/MDAxNjY0MjcxMzg4MDM0.EHThxk40T2vK00OEdFnCygFC3muMsco5b8w5iK5CdeMg.Rvjko8yPE468eC6YEhtI4G6p8DGbgrNnnel22fLPxpAg.JPEG/image%7Cpremium%7Cchannel%7Cdearhsp%7C2022%7C09%7C27%7C1664271387996.jpg?type=nfs200_200"
                                        title="섬세한 사람들의 심리카페 안 이야기"
                                        description="연남동에서 7년째 심리카페를 운영하면서 섬세한 성격을 갖고 힘든 시간을 겪고 보내고 있는 분들을 만났습니다. 저 역시 섬세한 성격으로 여러 힘든 시간을 보내야 했었죠. 살아 있는 실질적인 내용을 들려드리고 알려드리고 싶어 이 채널을 만들었습니다. 섬세한 누군가들이 여기의 글들로 인해 저에게 고마워하기를 바라면서요."
                                    />
                                    <PremiumCard
                                        img="https://scs-phinf.pstatic.net/MjAyMzAyMjNfMjgy/MDAxNjc3MTQxMjY0Nzg3.EoHH4wnE0A8m3l7KVK6Rf-aTO5GKZE618nAjfPyQ1w0g.WbMCrkauPyh34r5L7fFVelLWYMDTUgFlETigiYSkEMMg.PNG/image%7Cpremium%7Cchannel%7Canatomyntraininglab%7C2023%7C02%7C23%7C1677141264764.png?type=nfs200_200"
                                        title="아나토미 앤 트레이닝 랩"
                                        description="SCI급 논문을 바탕으로 웨이트트레이닝/신경과학/임상해부학/재활운동에 관한 칼럼을 제작합니다."
                                    />
                                    <PremiumCard
                                        img="https://scs-phinf.pstatic.net/MjAyMTA5MjhfMTM0/MDAxNjMyODE4Mjg4ODA5._1EC791tGtFSCwfkmypo8H1x5XGSeokWouezEs1CUdkg.6RyyF1471NBalXjPxUIqzJHToMx-w1_mZD8nb8ATKlsg.PNG/image%7Cpremium%7Cchannel%7Chidoc%7C2021%7C09%7C28%7C1632818288793.png?type=nfs200_200"
                                        title="하이닥 프리미엄"
                                        description="[건강의학전문미디어 하이닥] 건강의학 전문가들의 수준 높은 건강정보와 메디컬이슈를 선별해서 전합니다"
                                    />
                                </>
                            )}
                            <div className="viewAllChannel">
                                <Link href="/ch/AllChannel" legacyBehavior>
                                    <a>
                                        <div className="viewAllChannelBtn2">전체 체널 보기</div>
                                    </a>
                                </Link>
                            </div>
                        </div>
                    </div> */
}
