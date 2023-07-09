import React from 'react';
import styled from 'styled-components';
import {articles} from '../data/data.js';
import {Link, createBrowserRouter} from 'react-router-dom'
import SelectedText from './SelectedText.jsx';

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: #d5e0ce ;

    margin-top: 0px;
    margin-right: 0px;
    margin-bottom: 20px;
    margin-left: 0px;
`;

const Textdetail = styled.div`
    font-size: 20px;
    font-weight: 500;
`;

export default function PostListItems() {

    const router = createBrowserRouter([
        {
        children:
        [{
            path: `/select`,
            element: <SelectedText/>,
        }]
    },
    ]);

    const listItems = articles.map(article =>
        <ul id="article_list" key={article.id}>
            
            <h3>
                

                {article.text_title}

                <br />
            </h3> 
            <h4>
                
                {article.text}
                <br />

            </h4>
                     
        </ul>
      ); 

    return (
        <>
        <Wrapper >
            <Textdetail>
                <li>
                    <div>
                        <Link to ={`/select`}>
                            {listItems}
                        </Link>
                    </div>
                </li>
            </Textdetail>
        </Wrapper>
        </>
    );
}
