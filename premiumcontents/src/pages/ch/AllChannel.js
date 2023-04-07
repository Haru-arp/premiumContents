import Link from "next/link";
import { useState } from "react";
import ChannelItem from "../components/ChannelItem";
import MainFooter from "../components/MainFooter";

const AllChannel = () => {
    const [List, setList] = useState("Premium");
    const Tags = ["전체", "IT/Tech", "스포츠/건강"];
    const [tag, setTag] = useState("전체");
    const Premium = {
        0: {
            img: "https://scs-phinf.pstatic.net/MjAyMTEyMjdfMTcy/MDAxNjQwNjE2MzE3MTc0.4QwyPmeYhZ_yjQy_IchMbySnayH7lagnineQVWOV2nUg.kkQbmR5PsYgXqWNoZsivjmrcKOVOZ3Eu40LYopus6-og.PNG/image%7Cpremium%7Cchannel%7C3mit%7C2021%7C12%7C27%7C1640616317145.png?type=nfs200_200",
            title: "3분 IT",
            description: "3분만에 읽을 수 있는 IT트렌드를 배달해드려요",
            tag: "IT/Tech",
        },
        1: {
            img: "https://scs-phinf.pstatic.net/MjAyMjA4MDNfMjAw/MDAxNjU5NTE2Mjc4NTQ0.yAMs9mmSKicpz-HRJ2OsFbReWlhx3JYy0Jg8O3B4v7gg.qRaYNGu3V9-XUk_1X4vaUk5HqLvUrxC1kXh-xD9CINwg.PNG/image%7Cpremium%7Cchannel%7Cdatascience%7C2022%7C08%7C03%7C1659516278523.png?type=nfs200_200",
            title: "강지훈의 '데이터는 알고있다'",
            description:
                "데이터 과학은 데이터를 통해 우리가 몰랐던 정보를 만들어낸다. 정보화사회를 거쳐 4차 산업혁명 그리고 앞으로 다가올 미래 사회에 가장 중요한 자원 중 하나인 데이터, 데이터는 생각보다 많은 것을 알고있다.",
            tag: "IT/Tech",
        },
        2: {
            img: "https://scs-phinf.pstatic.net/MjAyMjA3MDdfMTky/MDAxNjU3MTIxMTc2OTI5.gmnYBDA1kKzKorqsgGvLIJ856TScPnzzloZufWDZOp4g.L8rZwybvRU7SC0NodCYzy2KSXH_Rq-B01Es8gQVbF18g.JPEG/image%7Cpremium%7Cchannel%7Cdigitalx%7C2022%7C07%7C07%7C1657121176899.jpg?type=nfs200_200",
            title: "김상윤의 디지털 전환(DX)과 미래",
            description: "현재 우리는 인공지능과 데이터가 지배하는 디지털 대전환의 시대를 살고 있다. 현재 진행되고 있는 변화는 어떤 모습이며, 그 속에서 우리는 어떤 미래를 기대할 수 있을까?",
            tag: "IT/Tech",
        },
        3: {
            img: "https://scs-phinf.pstatic.net/MjAyMjA1MDJfNjkg/MDAxNjUxNDc0NDI0NjQ2.YmZqf-wTJc_6WHlA7QsHtRcgjiwtiZGaGT2OaTOtQbMg.NUGN-ctVMSBTR4p77cOk9QVZeZar7m3lP-w4mrCR2Qsg.JPEG/image%7Cpremium%7Cchannel%7Cenjoydiet%7C2022%7C05%7C02%7C1651474424627.jpg?type=nfs200_200",
            title: "홍경희의 맛있고 건강한 식사 즐기기",
            description: "안녕하세요, 영양학 박사의 공부해서 남주는 영양가 있는 공간입니다. 건강하고 현명하게, 무엇보다 맛있게 음식과 식사를 즐기는 방법에 대하여 나누고자 합니다.",
            tag: "스포츠/건강",
        },
        4: {
            img: "https://scs-phinf.pstatic.net/MjAyMzAxMTBfMjEx/MDAxNjczMzA0MTQzNDU1.hkQw7TFScefKvV-c78_sAzuh59TdjEgzteRlH_TqcNkg.VwILiUkbUoTP7_Q25isoEFi29s219sPa5wDNcwLvl8wg.JPEG/image%7Cpremium%7Cchannel%7Csport%7C2023%7C01%7C10%7C1673304143434.jpg?type=nfs200_200",
            title: "스포츠 명가의 재미와 감동",
            description:
                "스포츠 현장에는 감동이.. 재미가 있습니다. 스포츠 명가라 불리는 선수, 팀, 리그, 이벤트는 매 순간 순간 마다 재미와 감동의 요소를 만들어 팬들을 행복하게 만들고 스포츠의 진 면목을 보여 줍니다. 스포츠 명가를 통해 배울 수 있는 재미와 감동의 요소들을 함께 느껴 보고 나누며 더욱 스포츠를 사랑 하기를 바랍니다.",
            tag: "스포츠/건강",
        },
        5: {
            img: "https://scs-phinf.pstatic.net/MjAyMjEyMjJfMjQ3/MDAxNjcxNzIwMTY4Mzc5.hRMkrLSHpWvO3J3S1tWH4w_9hHEc4h_EtTtV30kg6-cg.9NstjKtgf7uIM9gmKeAanXLCO9YsM0Z_oXh_k0VdU_wg.PNG/image%7Cpremium%7Cchannel%7Cworldcontry%7C2022%7C12%7C22%7C1671720168351.png?type=nfs200_200",
            title: "내 몸의 가이드 북",
            description: "우리 몸에 대해서 알아봅니다. 운동,식단관리,호르몬,영양소,헬스 등등 다양한 방면에서 우리의 건강을 지킬수있는 방법, 그리고 우리 몸의 구조에 대해 알아봅니다",
            tag: "스포츠/건강",
        },
    };
    console.log(Object.keys(Premium).length);

    return (
        <>
            <div className="All_container">
                <div className="Header">
                    <Link href={"/"} legacyBehavior>
                        <a>
                            <div>뒤로가기</div>
                        </a>
                    </Link>
                    <div>
                        <div className="TitleText">CHANNEL LIST</div>
                    </div>
                    <div>검색</div>
                </div>

                <div className="chkTwoChannel">
                    <div className="PrORPar">
                        <div className="NameCon">
                            <span className={List === "Premium" ? "selectTag" : "Name"} onClick={() => setList("Premium")}>
                                프리미엄
                            </span>
                        </div>
                        <div className="NameCon">
                            <span className={List === "Partner" ? "selectTag" : "Name"} onClick={() => setList("Partner")}>
                                파트너
                            </span>
                        </div>
                    </div>
                </div>
                <div className="TagView">
                    {List === "Premium" &&
                        Tags.map((name) => {
                            return (
                                <div className={tag === name ? "tag" : "noneSelectTag"}>
                                    <div onClick={() => setTag(name)}>{name}</div>
                                </div>
                            );
                        })}
                    {List === "Partner" &&
                        Tags.map((name) => {
                            return (
                                <div className={tag === name ? "tag" : "noneSelectTag"}>
                                    <div onClick={() => setTag(name)}>{name}</div>
                                </div>
                            );
                        })}
                </div>
            </div>
            <div className="contents_Container">
                {List === "Premium" &&
                    Tags.map((name) => {
                        return (
                            tag === name && (
                                <>
                                    <div className="lengthBox">
                                        <div style={{ fontWeight: "bold", fontSize: 15, color: "#444" }}>
                                            <span style={{ color: "#8b66c7" }}>{Object.keys(Premium).length}</span>개의 채널
                                        </div>
                                    </div>
                                </>
                            )
                        );
                    })}

                {List === "Partner" &&
                    Tags.map((name) => {
                        return (
                            tag === name && (
                                <>
                                    <div className="lengthBox">
                                        <div style={{ fontWeight: "bold", fontSize: 15, color: "#444" }}>
                                            <span style={{ color: "#8b66c7" }}>{Object.keys(Premium).length}</span>개의 채널
                                        </div>
                                    </div>
                                </>
                            )
                        );
                    })}
            </div>
            {/* 누른거에 따라서 css 달라지게 */}
            <div className="listNumbering">
                <div className="numberingBox">
                    <div className="point"></div>
                    <span className="numberingFont">구독자순</span>
                </div>
                <div className="numberingBox">
                    <div className="point"></div>
                    <span className="numberingFont">주간 구독자순</span>
                </div>
                <div className="numberingBox">
                    <div className="point"></div>
                    <span className="numberingFont">콘텐츠 발행순</span>
                </div>
            </div>
            <div className="contents">
                {/* 프리미엄과 파트너, 태그에 따라서 다르게 출력 */}
                <ChannelItem
                    img="https://scs-phinf.pstatic.net/MjAyMTEyMjdfMTcy/MDAxNjQwNjE2MzE3MTc0.4QwyPmeYhZ_yjQy_IchMbySnayH7lagnineQVWOV2nUg.kkQbmR5PsYgXqWNoZsivjmrcKOVOZ3Eu40LYopus6-og.PNG/image%7Cpremium%7Cchannel%7C3mit%7C2021%7C12%7C27%7C1640616317145.png?type=nfs200_200"
                    title="3분 IT"
                    description="3분만에 읽을 수 있는 IT트렌드를 배달해드려요"
                    tag="IT/Tech"
                />
                <ChannelItem
                    img="https://scs-phinf.pstatic.net/MjAyMjA4MDNfMjAw/MDAxNjU5NTE2Mjc4NTQ0.yAMs9mmSKicpz-HRJ2OsFbReWlhx3JYy0Jg8O3B4v7gg.qRaYNGu3V9-XUk_1X4vaUk5HqLvUrxC1kXh-xD9CINwg.PNG/image%7Cpremium%7Cchannel%7Cdatascience%7C2022%7C08%7C03%7C1659516278523.png?type=nfs200_200"
                    title="강지훈의 '데이터는 알고있다'"
                    description="데이터 과학은 데이터를 통해 우리가 몰랐던 정보를 만들어낸다. 정보화사회를 거쳐 4차 산업혁명 그리고 앞으로 다가올 미래 사회에 가장 중요한 자원 중 하나인 데이터, 데이터는 생각보다 많은 것을 알고있다."
                    tag="IT/Tech"
                />
                <ChannelItem
                    img="https://scs-phinf.pstatic.net/MjAyMjA1MDJfNjkg/MDAxNjUxNDc0NDI0NjQ2.YmZqf-wTJc_6WHlA7QsHtRcgjiwtiZGaGT2OaTOtQbMg.NUGN-ctVMSBTR4p77cOk9QVZeZar7m3lP-w4mrCR2Qsg.JPEG/image%7Cpremium%7Cchannel%7Cenjoydiet%7C2022%7C05%7C02%7C1651474424627.jpg?type=nfs200_200"
                    title="홍경희의 맛있고 건강한 식사 즐기기"
                    description="안녕하세요, 영양학 박사의 공부해서 남주는 영양가 있는 공간입니다. 건강하고 현명하게, 무엇보다 맛있게 음식과 식사를 즐기는 방법에 대하여 나누고자 합니다."
                    tag="스포츠/건강"
                />
                <ChannelItem
                    img="https://scs-phinf.pstatic.net/MjAyMzAxMTBfMjEx/MDAxNjczMzA0MTQzNDU1.hkQw7TFScefKvV-c78_sAzuh59TdjEgzteRlH_TqcNkg.VwILiUkbUoTP7_Q25isoEFi29s219sPa5wDNcwLvl8wg.JPEG/image%7Cpremium%7Cchannel%7Csport%7C2023%7C01%7C10%7C1673304143434.jpg?type=nfs200_200"
                    title="스포츠 명가의 재미와 감동"
                    description="스포츠 현장에는 감동이.. 재미가 있습니다. 스포츠 명가라 불리는 선수, 팀, 리그, 이벤트는 매 순간 순간 마다 재미와 감동의 요소를 만들어 팬들을 행복하게 만들고 스포츠의 진 면목을 보여 줍니다. 스포츠 명가를 통해 배울 수 있는 재미와 감동의 요소들을 함께 느껴 보고 나누며 더욱 스포츠를 사랑 하기를 바랍니다."
                    tag="스포츠/건강"
                />
            </div>

            <style jsx>{`
                .All_container {
                    background-color: #fff;
                    position: fixed;
                    top: 0;
                    left: 0;
                    right: 0;
                    z-index: 1000;
                    width: 100%;
                    max-width: 1120px;
                    padding: 0 20px;
                    margin: 0 auto;
                }
                .Header {
                    display: flex;
                    justify-content: space-between;
                    padding-top: 20px;
                }
                .TitleText {
                    font-size: 18px;
                    font-weight: 500;
                    line-height: 21px;
                    letter-spacing: -0.2px;
                    color: #000;
                }
                .chkTwoChannel {
                    margin-top: 20px;
                }
                .PrORPar {
                    display: flex;
                    justify-content: center;
                    gap: 150px;
                }
                .NameCon {
                    padding: 13px 0px 11px;
                }
                .Name {
                    font-size: 19px;
                    color: #c6c6c6;
                    line-height: 25px;
                    letter-spacing: -0.2px;
                    cursor: pointer;
                    font-weight: 600;
                }
                .selectTag {
                    font-size: 19px;
                    color: #1e1e23;
                    line-height: 25px;
                    letter-spacing: -0.2px;
                    cursor: pointer;
                    font-weight: 600;
                    border-bottom: 2px solid #1e1e23;
                }
                .TagView {
                    background-color: #f4f5f4;
                    height: 54px;
                    padding: 10px 24px;
                    display: flex;
                    gap: 8px;
                }
                .tag {
                    padding: 8px 14px 7px;
                    color: #fff;
                    background-color: #8b66c7;
                    border-radius: 20px;
                    line-height: 19px;
                    cursor: pointer;
                    font-size: 14px;
                }
                .noneSelectTag {
                    padding: 8px 14px 7px;
                    color: #666;
                    background-color: #fff;
                    border-radius: 20px;
                    line-height: 19px;
                    cursor: pointer;
                    font-size: 14px;
                }
                .contents_Container {
                    display: block;
                    max-width: 1120px;
                    padding-top: 184px;
                    padding-left: 20px;
                    padding-right: 20px;
                    box-sizing: border-box;
                    margin: 0 auto;
                    border-bottom: 1px solid #f4f5f4;
                    padding-bottom: 20px;
                }
                .lengthBox {
                }
                .contents {
                    max-width: 1120px;
                    margin: 0 auto;
                    padding: 0 20px;
                    display: flex;
                    flex-wrap: wrap;
                    gap: 20px;
                    margin-top: 20px;
                }
                .listNumbering {
                    max-width: 1120px;
                    margin: 0 auto;
                    padding: 5px 20px;
                    display: flex;
                    gap: 20px;
                }
                .numberingFont {
                    font-size: 14px;
                    color: #444;
                }
                .numberingBox {
                    display: flex;
                    align-items: center;
                    cursor: pointer;
                    gap: 5px;
                }
                .point {
                    width: 6px;
                    height: 6px;
                    border-radius: 50%;
                    background-color: #8b66c7;
                }
            `}</style>
        </>
    );
};

export default AllChannel;
