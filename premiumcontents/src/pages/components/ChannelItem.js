import Link from "next/link";

const ChannelItem = (Props) => {
    let content = Props.description;
    if (content.length >= 70) {
        content = content.substr(0, 68) + "...";
    }
    console.log("Props", Props);
    return (
        <>
            <Link
                href={{
                    pathname: `/Channel/${Props.title}/${Props.channelIdx}`,
                    query: {
                        channelData: JSON.stringify(Props),
                    },
                }}
                as={`/Channel/${Props.title}/${Props.channelIdx}`}
                legacyBehavior
            >
                <a>
                    <div className="container">
                        <img src={Props.img} className="contentsImg" />
                        <div className="titleAndContents">
                            <div className="ContentsTitle">{Props.title}</div>
                            <div className="ContentsDes">{content}</div>
                        </div>
                    </div>
                </a>
            </Link>
            <style jsx>
                {`
                    .container {
                        display: flex;
                        flex-direction: row;
                        align-items: center;
                        width: 530px;
                        height: 100px;
                        background-color: #fff;
                        border-bottom: 0.5px solid #f4f5f4;
                        padding: 0 24px;
                    }
                    .titleAndContents {
                    }
                    .contentsImg {
                        width: 60px;
                        height: 60px;
                        border-radius: 50%;
                        margin: 1px 18px 0 0;
                    }
                    .ContentsTitle {
                        font-weight: bold;
                        font-size: 17px;
                    }
                    .ContentsDes {
                        color: #767678;
                        font-size: 14px;
                    }
                `}
            </style>
        </>
    );
};

export default ChannelItem;
