import Link from "next/link";

const PartnerChannelBanner = (Props) => {
    console.log("props", Props);
    return (
        <>
            <Link href="/" legacyBehavior>
                <a>
                    <div className="PartnerChannelBanner">
                        <div className="ChannerThumbnail">
                            <img src={Props.img} className="ChannerThumbnailImg" />
                            <div className="premiumBtn">P</div>
                        </div>
                        <div className="contents">
                            <span className="contents_title">{Props.title}</span>
                            <span className="contents_discription">{Props.description}</span>
                        </div>
                    </div>
                </a>
            </Link>
            <style jsx>{`
                .PartnerChannelBanner {
                    display: flex;
                    gap: 60px;
                    align-items: center;
                    width: 100%;
                    height: 150px;
                    border-radius: 15px;
                    box-shadow: 0px 4px 15px rgba(100, 100, 100, 0.28);
                    background: #ffffff;
                    padding: 10px 60px;
                }
                .ChannerThumbnail {
                    position: relative;
                }
                .ChannerThumbnailImg {
                    width: 114px;
                    height: 114px;
                    border-radius: 100px;
                }
                .premiumBtn {
                    width: 40px;
                    height: 40px;
                    background-color: #e4e4e4;
                    border-radius: 100px;
                    position: absolute;
                    bottom: 0px;
                    right: 0px;
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    font-weight: 600;
                    font-size: 18px;
                }
                .contents {
                    display: flex;
                    flex-direction: column;
                    gap: 8px;
                }
                .contents_title {
                    font-size: 22px;
                    font-weight: 600;
                }
                .contents_discription {
                    font-size: 18px;
                }
            `}</style>
        </>
    );
};

export default PartnerChannelBanner;
