
import React from 'react';
import styled from 'styled-components';
import PostListItems from './PostListitems';

const Wrappers = styled.div`
display: flex;
flex-direction: column;
align-items: flex-start;
justify-content: center;
`;


function PostList(props) {
    const { onClickItem, posting } = props;

    return (
        <Wrappers>
            {posting.map((posted, index) => {

                <PostListItems
                    key={posted.id}
                    post={posted}
                    onClick={() => {
                        onClickItem(posted);
                    }}
                />
            
            }
            )


        };
        </Wrappers>

    );
}
export default PostList;