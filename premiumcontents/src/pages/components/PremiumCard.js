import Link from "next/link";
import { useState } from "react";

const PremiumCard = (Props) => {
    const title = Props.title;
    let content = Props.description;
    if (content.length >= 40) {
        content = content.substr(0, 40) + "...";
    }

    return (
        <>
            <Link href={"/"} legacyBehavior>
                <a>
                    <div className="cardContainer">
                        <div className="cardThumbnail">
                            <img src={Props.img} className="Thumbnail" />
                            <div className="PrBtn">Pr</div>
                        </div>
                        <div className="Card_Contents">
                            <span className="title">{title}</span>
                            <span className="description">{content}</span>
                        </div>
                    </div>
                </a>
            </Link>
            <style jsx>{`
                .cardContainer {
                    width: 258px;
                    height: 280px;
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    background: #ffffff;
                    border-radius: 15px;
                    box-shadow: 0px 4px 15px rgba(100, 100, 100, 0.28);
                    padding: 16px 8px;
                }
                .cardThumbnail {
                    position: relative;
                }
                .Thumbnail {
                    width: 114px;
                    height: 114px;
                    border-radius: 100px;
                    border: 0.5px solid #e8e8e8;
                }
                .PrBtn {
                    position: absolute;
                    width: 40px;
                    height: 40px;
                    background-color: #be9cf6;
                    border-radius: 100px;
                    position: absolute;
                    right: 0px;
                    top: 83px;
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    font-weight: 600;
                    font-size: 18px;
                    color: #fff;
                }
                .Card_Contents {
                    display: flex;
                    flex-direction: column;
                }
                .title {
                    font-weight: 600;
                    text-align: center;
                    font-size: 18px;
                    margin-top: 5px;
                }
                .description {
                    text-align: center;
                    font-size: 14px;
                    margin-top: 10px;
                }
            `}</style>
        </>
    );
};

export default PremiumCard;
