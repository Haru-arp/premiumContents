import Link from "next/link";

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
                        <Link href={"/"} legacyBehavior>
                            <a className="_logoMy">MY</a>
                        </Link>
                    </div>
                </div>
            </header>
            <style jsx>{`
                .premium_recommand_Area {
                    display: flex;
                    width: 100%;
                    height: 489px;
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
            `}</style>
        </>
    );
};

export default MainHeader;
