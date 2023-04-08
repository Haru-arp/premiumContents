import Link from "next/link";
import { useState } from "react";
import axios from "axios";
const login = () => {
    const [id, setID] = useState("");
    const [password, setPassword] = useState("");
    const onSubmit = (event) => {
        event.preventDefault();
    };
    const onIdChange = (event) => {
        setID(event.target.value);
    };
    const onPwChange = (event) => {
        setPassword(event.target.value);
    };
    const onClick = async () => {
        const res = await fetch("http://localhost:8080/precon/user/login", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                userId: "string",
                userPassword: "string",
            }),
        });
    };

    return (
        <>
            <div className="login_container">
                <Link href={"/"} legacyBehavior>
                    <div className="login_title">Premium Contents</div>
                </Link>
                <form onSubmit={onSubmit}>
                    <div className="form_ds">
                        <div>
                            <div>
                                <input className="id_form" type="text" onChange={onIdChange} value={id} placeholder="아이디" />
                            </div>
                            <div>
                                <input className="password_form" type="text" onChange={onPwChange} value={password} placeholder="비밀번호" />
                            </div>
                        </div>

                        <button className="login_btn" type="submit" onClick={onClick}>
                            로그인
                        </button>
                    </div>
                </form>
            </div>
            <style jsx>
                {`
                    .login_container {
                        display: flex;
                        flex-direction: column;
                        align-items: center;
                        justify-content: center;
                        margin-top: 100px;
                    }
                    .login_title {
                        font-size: 24px;
                        font-weight: bold;
                        padding: 48px 0;
                        cursor: pointer;
                    }
                    .form_ds {
                        width: 500px;
                        height: 254px;
                        background-color: #fff;
                        box-shadow: 0 5px 8px 0 rgba(68, 68, 68, 0.04);
                        display: flex;
                        flex-direction: column;
                        justify-content: center;
                        align-items: center;
                        border: 1px solid #c6c6c6;
                        padding: 20px 28px;
                        border-radius: 6px;
                        gap: 0px;
                    }
                    input {
                        padding: 14px 17px 13px;
                        box-sizing: border-box;
                        width: 402px;
                    }
                    .id_form {
                        border-radius: 6px 6px 0 0;
                        border: 1px solid #dadada;
                        box-shadow: 0 2px 6px 0 rgba(68, 68, 68, 0.08);
                    }

                    .password_form {
                        border-radius: 0 0 6px 6px;
                        border: 1px solid #dadada;
                        box-shadow: 0 2px 6px 0 rgba(68, 68, 68, 0.08);
                    }
                    .login_btn {
                        background-color: #be9cf6;
                        border: none;
                        padding: 13px 0px;
                        width: 402px;
                        height: 51px;
                        border-radius: 6px;
                        margin-top: 30px;
                        color: #fff;
                        font-size: 20px;
                        font-weight: bold;
                        cursor: pointer;
                    }
                `}
            </style>
        </>
    );
};

export default login;
