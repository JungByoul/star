import React from 'react';
import { Outlet } from 'react-router-dom';

export default function NewPosting() {

    return(

        <form >
        <p id= 'NewPosting_title'>제목 입력: <input id='NewPosting_title_real'/> </p>


        <p id="NewPosting_text">내용 입력: <input id = 'NewPosting_text_real'/></p>

        <button id="posting">게시</button>

    </form>


    );
    
};

