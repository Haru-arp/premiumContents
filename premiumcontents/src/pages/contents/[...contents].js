import { useRouter } from "next/router";
import MainFooter from "../components/MainFooter";

const contents = () => {
    const router = useRouter();
    const Premium = {
        img: "https://scs-phinf.pstatic.net/MjAyMTEyMjdfMTcy/MDAxNjQwNjE2MzE3MTc0.4QwyPmeYhZ_yjQy_IchMbySnayH7lagnineQVWOV2nUg.kkQbmR5PsYgXqWNoZsivjmrcKOVOZ3Eu40LYopus6-og.PNG/image%7Cpremium%7Cchannel%7C3mit%7C2021%7C12%7C27%7C1640616317145.png?type=nfs200_200",
        title: "3분 IT",
        description: "3분만에 읽을 수 있는 IT트렌드를 배달해드려요",
        tag: "IT/Tech",
    };
    return (
        <>
            <div className="Container">
                <div className="channelHeader">
                    <div className="HeaderContents">
                        <a>
                            <div>Premium Contents</div>
                        </a>
                        <div>title</div>
                        <div style={{ display: "flex", gap: 8 }}>
                            <div>검색</div>
                            <div>MY</div>
                        </div>
                    </div>
                </div>
                <div className="main">
                    <div>ㅎㅇㅎㅇ</div>
                </div>
                <MainFooter />
            </div>
            <style jsx>
                {`
                    .Container {
                        height: 100vh;
                        display: flex;
                        flex-direction: column;
                    }
                    .main {
                        display: flex;
                        flex-direction: column;
                        flex: 1;
                        width: 100%;
                        max-width: 1120px;
                        box-sizing: border-box;
                        margin: 0 auto;
                        padding: 0 20px;
                        padding-top: 60px;
                        margin-bottom: 50px;
                    }
                    .channelHeader {
                        position: fixed;
                        top: 0;
                        left: 0;
                        height: 60px;
                        width: 100%;
                        background-color: #fff;
                        padding-top: 20px;
                        padding-bottom: 20px;
                        border-bottom: 1px solid #f6f6f6;
                    }
                    .HeaderContents {
                        padding: 0 20px;
                        max-width: 1120px;
                        margin: 0 auto;
                        display: flex;
                        justify-content: space-between;
                        align-items: center;
                    }
                    .main_template {
                        padding-top: 20px;
                        display: flex;
                        justify-content: space-between;
                        align-items: center;
                    }
                    .template_img {
                        width: 50px;
                        height: 50px;
                        border-radius: 50%;
                    }
                    .template_title {
                        font-weight: bold;
                        font-size: 25px;
                    }
                    .template_des {
                        font-size: 14px;
                    }
                    .subscriBtn {
                        background-color: #111;
                        color: #fff;
                        font-size: 14px;
                        padding: 10px;
                        width: 170px;
                        height: 40px;
                        font-weight: bold;
                        line-height: 20px;
                        max-width: 170px;
                        text-align: center;
                        border-radius: 4px;
                        box-sizing: border-box;
                        vertical-align: top;
                        cursor: pointer;
                    }
                    .recommand_three_box {
                        display: flex;
                        gap: 8px;
                        padding-top: 24px;
                        justify-content: center;
                    }
                    .three_box {
                        width: 351px;
                        height: 208px;
                        background-color: #111;
                        border-radius: 10px;
                    }
                    .threeMenu {
                        padding: 20px 0;
                    }
                    .select {
                        background: transparent;
                        border: none;
                        font-weight: bold;
                        font-size: 17px;
                        padding: 10px 15px;
                        border-bottom: 2px solid #000;
                    }
                    .noneSelect {
                        background: transparent;
                        border: none;
                        color: #00000099;
                        font-size: 17px;
                        padding: 10px 15px;
                    }
                    .Home_container {
                        display: flex;
                        flex-wrap: wrap;
                        justify-content: space-between;
                        gap: 15px;
                    }
                    .category_container {
                        width: 100%;
                        padding: 16px 40px 30px;
                        background-color: red;
                        box-sizing: border-box;
                        border-radius: 10px;
                        box-shadow: 0 2px 6px 0 rgba(0, 0, 0, 0.1), 0 0 1px 0 rgba(0, 0, 0, 0.1);
                        background-color: #fff;
                    }
                    .info_container {
                        display: flex;
                        gap: 9px;
                    }
                    .channelIntro {
                        width: 531px;
                        height: 134px;
                        background-color: #fff;
                        padding: 20px;
                        border-radius: 10px;
                        box-shadow: 0 2px 6px 0 rgba(0, 0, 0, 0.1), 0 0 1px 0 rgba(0, 0, 0, 0.1);
                    }
                    .activity {
                        width: 531px;
                        height: 134px;
                        background-color: #fff;
                        padding: 20px;
                        border-radius: 10px;
                        box-shadow: 0 2px 6px 0 rgba(0, 0, 0, 0.1), 0 0 1px 0 rgba(0, 0, 0, 0.1);
                    }
                    .statistic {
                        width: 531px;
                        height: 134px;
                        background-color: #fff;
                        padding: 20px;
                        border-radius: 10px;
                        box-shadow: 0 2px 6px 0 rgba(0, 0, 0, 0.1), 0 0 1px 0 rgba(0, 0, 0, 0.1);
                    }
                    .info_user {
                        width: 531px;
                        height: 134px;
                        background-color: #fff;
                        padding: 20px;
                        border-radius: 10px;
                        box-shadow: 0 2px 6px 0 rgba(0, 0, 0, 0.1), 0 0 1px 0 rgba(0, 0, 0, 0.1);
                    }
                `}
            </style>
        </>
    );
};

export default contents;
