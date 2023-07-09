import React from "react";


export default function Login() {


    const handleOnClick = () => {

        navigate(`/finished`);
    }

    return(
            <div>
                <form >
                    <p id= 'id'>아이디: <input/> </p>

                    <p id= 'password'>비밀번호: <input/> </p>

                    <button id="loging">로그인</button>

                    <p onClick={handleOnClick}>회원가입</p>

                </form>
            </div>

    );
};
