import GuideItem from "./GuideItem";

const SubscribeGuide = () => {
    return (
        <>
            <div className="container">
                <div>
                    <div className="guideTitle">구독</div>
                    <div style={{ display: "flex", flexDirection: "column", gap: 5 }}>
                        <GuideItem
                            title="하이닥 프리미엄"
                            img="https://scs-phinf.pstatic.net/MjAyMTA5MjhfMTM0/MDAxNjMyODE4Mjg4ODA5._1EC791tGtFSCwfkmypo8H1x5XGSeokWouezEs1CUdkg.6RyyF1471NBalXjPxUIqzJHToMx-w1_mZD8nb8ATKlsg.PNG/image%7Cpremium%7Cchannel%7Chidoc%7C2021%7C09%7C28%7C1632818288793.png?type=nfs200_200"
                        />
                        <GuideItem
                            img="https://scs-phinf.pstatic.net/MjAyMzAyMjNfMjgy/MDAxNjc3MTQxMjY0Nzg3.EoHH4wnE0A8m3l7KVK6Rf-aTO5GKZE618nAjfPyQ1w0g.WbMCrkauPyh34r5L7fFVelLWYMDTUgFlETigiYSkEMMg.PNG/image%7Cpremium%7Cchannel%7Canatomyntraininglab%7C2023%7C02%7C23%7C1677141264764.png?type=nfs200_200"
                            title="아나토미 앤 트레이닝 랩"
                        />
                        <GuideItem
                            img="https://scs-phinf.pstatic.net/MjAyMjA5MjdfNDEg/MDAxNjY0MjcxMzg4MDM0.EHThxk40T2vK00OEdFnCygFC3muMsco5b8w5iK5CdeMg.Rvjko8yPE468eC6YEhtI4G6p8DGbgrNnnel22fLPxpAg.JPEG/image%7Cpremium%7Cchannel%7Cdearhsp%7C2022%7C09%7C27%7C1664271387996.jpg?type=nfs200_200"
                            title="섬세한 사람들의 심리카페"
                        />
                    </div>
                </div>
                <div>
                    <div className="guideTitle">추천 채널</div>
                    <div style={{ display: "flex", flexDirection: "column", gap: 5 }}>
                        <GuideItem
                            title="하이닥 프리미엄"
                            img="https://scs-phinf.pstatic.net/MjAyMTA5MjhfMTM0/MDAxNjMyODE4Mjg4ODA5._1EC791tGtFSCwfkmypo8H1x5XGSeokWouezEs1CUdkg.6RyyF1471NBalXjPxUIqzJHToMx-w1_mZD8nb8ATKlsg.PNG/image%7Cpremium%7Cchannel%7Chidoc%7C2021%7C09%7C28%7C1632818288793.png?type=nfs200_200"
                        />
                        <GuideItem
                            img="https://scs-phinf.pstatic.net/MjAyMzAyMjNfMjgy/MDAxNjc3MTQxMjY0Nzg3.EoHH4wnE0A8m3l7KVK6Rf-aTO5GKZE618nAjfPyQ1w0g.WbMCrkauPyh34r5L7fFVelLWYMDTUgFlETigiYSkEMMg.PNG/image%7Cpremium%7Cchannel%7Canatomyntraininglab%7C2023%7C02%7C23%7C1677141264764.png?type=nfs200_200"
                            title="아나토미 앤 트레이닝 랩"
                        />
                        <GuideItem
                            img="https://scs-phinf.pstatic.net/MjAyMjA5MjdfNDEg/MDAxNjY0MjcxMzg4MDM0.EHThxk40T2vK00OEdFnCygFC3muMsco5b8w5iK5CdeMg.Rvjko8yPE468eC6YEhtI4G6p8DGbgrNnnel22fLPxpAg.JPEG/image%7Cpremium%7Cchannel%7Cdearhsp%7C2022%7C09%7C27%7C1664271387996.jpg?type=nfs200_200"
                            title="섬세한 사람들의 심리카페"
                        />
                    </div>
                </div>
            </div>
            <style jsx>{`
                .container {
                    position: absolute;
                    top: 35px;
                    left: 50px;
                    width: 300px;
                    background: #fff;
                    display: flex;
                    flex-direction: column;
                    padding: 15px;
                    border-radius: 10px;
                    box-shadow: 0 5px 8px 0 rgba(68, 68, 68, 0.2);
                    gap: 80px;
                }
                .guideTitle {
                    margin-bottom: 15px;
                    font-weight: bold;
                    font-size: 18px;
                }
                @media screen and (max-width: 1790px) {
                    .container {
                        display: none;
                    }
                }
            `}</style>
        </>
    );
};

export default SubscribeGuide;
