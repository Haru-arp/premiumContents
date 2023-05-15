import Link from "next/link";
import { useEffect } from "react";
import { useRouter } from "next/router";
const NewchannelItem = (props) => {
    const router = useRouter();
    const onClick = (title) => {
        router.push(`/Channel/${title}`);
    };
    let content = props.description;
    if (content.length >= 15) {
        content = content.substr(0, 15) + "...";
    }

    return (
        <>
            <div
                onClick={() => {
                    onClick(props.title);
                }}
                className="itemContainer"
            >
                <div style={{ display: "flex", flexDirection: "row", gap: 10, alignItems: "center" }}>
                    <img src={props.img} style={{ width: 50, height: 50, borderRadius: "50%" }} />
                    <div>
                        <div className="itemTitle">{props.title}</div>
                        <div className="itemDesc">{content}</div>
                    </div>
                </div>
                <div>{">"}</div>
            </div>

            <style jsx>{`
                .itemContainer {
                    width: 300px;
                    height: 60px;
                    display: flex;
                    align-items: center;
                    justify-content: space-between;
                }
                .itemTitle {
                    font-size: 16px;
                    font-weight: bold;
                }
                .itemDesc {
                    font-size: 12px;
                    color: #848486;
                }
            `}</style>
        </>
    );
};

export default NewchannelItem;
