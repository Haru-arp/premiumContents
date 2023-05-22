import Link from "next/link";
import { useRouter } from "next/router";

const Home_component = (Props) => {
    const router = useRouter();
    // console.log(">>>>>", Props);
    const onClick = (channel, id) => {
        router.push(`/contents/${channel}/${id}`);
    };
    return (
        <>
            <div onClick={() => onClick(Props.channel, 1)} className="Home_component">
                <div className="contents">title</div>
                <div className="what">무언가 들어갈 예정</div>
            </div>

            <style jsx>
                {`
                    .Home_component {
                        display: flex;
                        flex-direction: column;
                        justify-content: space-between;
                        width: 530px;
                        height: 210px;
                        border-radius: 10px;
                        -webkit-box-shadow: 0 2px 6px 0 rgba(0, 0, 0, 0.05), 0 0 1px 0 rgba(0, 0, 0, 0.07);
                        box-shadow: 0 2px 6px 0 rgba(0, 0, 0, 0.1), 0 0 1px 0 rgba(0, 0, 0, 0.1);
                        background-color: #fff;
                    }
                    .contents {
                        padding: 22px 25px 7px;
                    }
                    .what {
                        padding: 4px 25px 18px;
                    }
                `}
            </style>
        </>
    );
};

export default Home_component;
