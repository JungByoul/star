import React from 'react';
import styled from 'styled-components';

import {articles} from '../data/data.js';
import {Link, createBrowserRouter} from 'react-router-dom'

import Login from '../Login/Login.jsx';

import SelectedText from '../Posting/SelectedText.jsx';

import NewPosting from '../Posting/NewPosting.jsx';


export default function Root() {

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


  const router = createBrowserRouter([
    {
      children:
      [{
        path: `/login`,
        element: <Login/>,

      }]
    },

    {
      children: 
      [{
        path: `/say`,
        element: <NewPosting/>,
      }]

    },
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

        </h3> 
        <h4>       
            {article.text}
            <br />
        </h4>

        <h5>
          {article.date}
        </h5>
                 
    </ul>
  ); 

    return (

        <div id="sidebar">


          <div>
            <div id='Login_button'>
                <Link to= {`/login`}> 
                  🔐(login)
                </Link>
            </div>


            <div id='Title'><h1>🌲Star's Blog🌲</h1></div>

            <div id = 'Write'>

            <h1 id = 'Write_1'> 
              <form method="post">
                          
              <div>
                <Link to= {`/say`}>
                  
                  ✍🏻
                  
                </Link>
              </div>
                            

              </form>
            </h1></div>
              
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
                     
          </div>


      </div>
    
    );
}