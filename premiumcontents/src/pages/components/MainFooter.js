const MainFooter = () => {
    return (
        <>
            <div className="Footer_intro">
                <div className="intro">
                    <div className="intro_logo">Premium Studio</div>
                    <span className="intro_title">콘텐츠가 올바른 가치로 평가되고 공유되는 곳</span>
                    <span className="intro_des">프리미엄콘텐츠에서 지금 콘텐츠를 판매해 보세요!</span>
                </div>
            </div>
            <div className="Footer_Area">
                <div className="Footer_Container"></div>
            </div>
            <style jsx>
                {`
                    .Footer_Area {
                        background: #8c6fb0;
                    }
                    .Footer_Container {
                        max-width: 1120px;
                        margin: 0 auto;
                        padding-top: 30px;
                        padding-left: 20px;
                        padding-right: 20px;
                        box-sizing: border-box;
                        display: flex;

                        flex-direction: column;
                        width: 100%;
                        height: 300px;
                    }
                    .Footer_intro {
                        background: #593d7c;
                    }
                    .intro {
                        max-width: 1120px;
                        margin: 0 auto;
                        height: 150px;
                        padding-top: 30px;
                        padding-left: 20px;
                        padding-right: 20px;
                        display: flex;
                        flex-direction: column;
                    }
                    .intro_title {
                        color: #fff;
                        font-weight: 500;
                        font-size: 18px;
                    }
                    .intro_des {
                        color: #f0f0f2;
                        opacity: 0.7;
                    }
                    .intro_logo {
                        color: #fff;
                        font-size: 24px;
                        margin-bottom: 10px;
                        opacity: 0.5;
                    }
                `}
            </style>
        </>
    );
};

export default MainFooter;
