import Link from "next/link";

const RecommandChannelItem = (props) => {
    let content = props.description;
    if (content.length >= 25) {
        content = content.substr(0, 25) + "...";
    }
    return (
        <>
            <Link href={{ pathname: `/Channel/${props.title}` }} legacyBehavior>
                <a>
                    <div className="ItemContainer">
                        <img src={props.img} style={{ width: 60, borderRadius: "50%" }} />
                        <div>
                            <div className="itemTitle">{props.title}</div>
                            <div className="itemdesc">{content}</div>
                        </div>
                    </div>
                </a>
            </Link>
            <style jsx>
                {`
                    .ItemContainer {
                        display: flex;
                        align-items: center;
                        gap: 15px;
                        width: 490px;
                        height: 60px;
                        margin-bottom: 15px;
                        padding-bottom: 15px;
                        border-bottom: 1px solid #eeeeee;
                    }

                    .itemTitle {
                        font-size: 18px;
                        font-weight: bold;
                    }
                    .itemdesc {
                        font-size: 14px;
                        color: #848486;
                    }
                `}
            </style>
        </>
    );
};

export default RecommandChannelItem;
