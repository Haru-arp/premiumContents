import { useState } from "react";
import MainFooter from "../components/MainFooter";
import Link from "next/link";

const myPage = () => {
    const [list, setList] = useState("channel");
    const [menu, setMenu] = useState("subscribe");
    return (
        <>
            <div className="myPageContainer">
                <div className="myPageHeader">
                    <div className="header">
                        <Link href={"/"} legacyBehavior>
                            <a>
                                <div>PC</div>
                            </a>
                        </Link>
                        <div className="center">MY</div>
                        <div></div>
                    </div>
                </div>
                <div className="container">
                    <div className="mydataContainer">
                        <div className="myInfo">
                            <div className="myImg">
                                <div className="img"></div>
                                <div className="naming">이동희</div>
                            </div>
                            <div className="myTab-wrap">
                                <div className="myTab">
                                    <div className={menu === "subscribe" ? "SelectMenu" : "noneSelectMenu"} onClick={() => setMenu("subscribe")}>
                                        구독 채널
                                    </div>
                                    <div className={menu === "buy" ? "SelectMenu" : "noneSelectMenu"} onClick={() => setMenu("buy")}>
                                        구매 콘텐츠
                                    </div>
                                    <div className={menu === "favorite" ? "SelectMenu" : "noneSelectMenu"} onClick={() => setMenu("favorite")}>
                                        관심 콘텐츠
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="ChannelContainer">
                            <div className="mySection">
                                {menu === "subscribe" && (
                                    <>
                                        <div className="sectionTitle">구독 채널</div>
                                        <div className="subscribe_tab">
                                            <div className={list === "channel" ? "channelBtn" : "noneSelect"} onClick={() => setList("channel")}>
                                                채널
                                            </div>
                                            <div className={list === "NewContents" ? "channelBtn" : "noneSelect"} onClick={() => setList("NewContents")}>
                                                최신 콘텐츠
                                            </div>
                                        </div>
                                        <div>
                                            {list === "channel" && (
                                                <>
                                                    <div>구독 중인 채널이 없습니다.</div>
                                                </>
                                            )}
                                            {list === "NewContents" && (
                                                <>
                                                    <div>업데이트 된 콘텐츠가 없습니다.</div>
                                                </>
                                            )}
                                        </div>
                                    </>
                                )}
                                {menu === "buy" && (
                                    <>
                                        <div className="buyTitle">구매 컨텐츠</div>
                                    </>
                                )}
                                {menu === "favorite" && (
                                    <>
                                        <>
                                            <div className="buyTitle">최근 본 컨텐츠</div>
                                        </>
                                    </>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
                <MainFooter />
            </div>
            <style jsx>
                {`
                    .myPageContainer {
                        background-color: #f6f6f6;
                        height: 100vh;
                        display: flex;
                        flex-direction: column;
                    }

                    .myPageHeader {
                        width: 100%;
                        height: 61px;

                        border-bottom: 1px solid rgba(0, 0, 0, 0.08);
                    }
                    .header {
                        max-width: 1120px;
                        display: flex;
                        margin: 0 auto;
                        padding: 20px 25px 17px;
                    }
                    .center {
                        margin: 0 auto;
                        font-weight: bold;
                        font-size: 18px;
                    }
                    .container {
                        display: flex;
                        flex: 1;
                        flex-direction: column;
                        width: 100%;
                        margin: 0 auto;
                        max-width: 1120px;
                        padding: 20px 20px 40px;
                        box-sizing: border-box;
                    }
                    .mydataContainer {
                        display: flex;
                        gap: 15px;
                    }
                    .myInfo {
                        width: 315px;

                        height: 477.6px;

                        background-color: #fff;
                        display: flex;
                        flex-direction: column;
                        justify-content: center;
                        align-items: center;
                        border-radius: 10px;
                        padding: 0 30px;
                        box-shadow: 0 2px 6px 0 rgba(0, 0, 0, 0.05), 0 0 1px 0 rgba(0, 0, 0, 0.08);
                    }
                    .myImg {
                        padding: 44px 0 21px;
                        display: flex;
                        flex-direction: column;
                        align-items: center;
                    }
                    .img {
                        width: 62px;
                        height: 62px;
                        background-color: gray;
                        border-radius: 50%;
                    }
                    .naming {
                        margin: 10px 0 0;
                        font-weight: bold;
                        color: #222;
                        padding: 0 10px;
                        font-size: 22px;
                    }
                    .myTab-wrap {
                        width: 100%;

                        border-top: 2px solid #222;
                        padding-top: 28px;
                        padding-bottom: 76px;
                    }
                    .myTab {
                        display: flex;
                        flex-direction: column;
                        gap: 28px;
                    }
                    .ChannelContainer {
                        width: 750px;
                        height: 602.6px;
                        background-color: #fff;
                        border-radius: 10px;
                        box-shadow: 0 2px 6px 0 rgba(0, 0, 0, 0.05), 0 0 1px 0 rgba(0, 0, 0, 0.08);
                        padding: 0 65px;
                    }
                    .mySection {
                        padding: 41px 0 50px;
                    }
                    .sectionTitle {
                        font-weight: bold;
                        padding: 0 0 13px;
                        color: #222;
                        font-size: 20px;
                        line-height: 24px;
                        letter-spacing: -0.5px;
                    }
                    .subscribe_tab {
                        padding: 4px 20px 0px 0px;
                        margin: -2px 0px 0px;
                        background: #fff;
                        display: flex;
                        gap: 45px;
                        border-bottom: 1px solid rgba(0, 0, 0, 0.08);
                    }
                    .channelBtn {
                        font-weight: bold;
                        color: #222;
                        border-bottom: 2px solid #333;
                        padding: 13px 0px;
                        font-size: 16px;
                        letter-spacing: -0.64px;
                        line-height: 19px;
                        cursor: pointer;
                    }
                    .noneSelect {
                        font-weight: normal;
                        color: #222;
                        opacity: 0.5;
                        font-size: 16px;
                        letter-spacing: -0.64px;
                        line-height: 19px;
                        padding: 13px 0px;
                        cursor: pointer;
                    }
                    .SelectMenu {
                        font-weight: bold;
                        font-size: 17px;
                        color: #222;
                        cursor: pointer;
                    }
                    .noneSelectMenu {
                        font-size: 17px;
                        cursor: pointer;
                        color: #767678;
                    }
                    .buyTitle {
                        font-weight: bold;
                        padding: 0 0 13px;
                        color: #222;
                        font-size: 20px;
                        line-height: 24px;
                        letter-spacing: -0.5px;
                        border-bottom: 2px solid #333;
                    }
                `}
            </style>
        </>
    );
};

export default myPage;
