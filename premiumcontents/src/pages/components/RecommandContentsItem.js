const RecommandContentsItem = (props) => {
    return (
        <>
            <div className="ItemContainer">
                <img src={props.img} style={{ width: 60, borderRadius: "50%" }} />
                <div>
                    <div className="itemTitle">{props.title}</div>
                </div>
            </div>
            <style jsx>
                {`
                    .ItemContainer {
                        display: flex;
                        align-items: center;
                        gap: 15px;
                        width: 245px;
                        height: 60px;
                        margin-bottom: 15px;
                        padding-bottom: 15px;
                        border-bottom: 1px solid #eeeeee;
                    }

                    .itemTitle {
                        font-size: 18px;
                        font-weight: bold;
                    }
                `}
            </style>
        </>
    );
};

export default RecommandContentsItem;
