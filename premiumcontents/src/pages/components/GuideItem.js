const GuideItem = (props) => {
    return (
        <>
            <div className="ItemContainer">
                <img src={props.img} className="imgThumb" />
                <div className="ItemTitle">{props.title}</div>
            </div>
            <style jsx>
                {`
                    .ItemContainer {
                        display: flex;
                        flex-direction: row;
                        align-items: center;
                        gap: 10px;
                    }
                    .imgThumb {
                        width: 30px;
                        border-radius: 100%;
                    }
                    .ItemTitle {
                        letter-spacing: -0.7;
                    }
                `}
            </style>
        </>
    );
};

export default GuideItem;
