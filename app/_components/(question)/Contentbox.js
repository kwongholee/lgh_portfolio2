'use client';

import styled from "styled-components";

const Box = styled.div`
  width: 1250px;
  height: 100px;
  background: rgba(66, 240, 146, 0.40);
  box-shadow: 3px 4px 3px 1px rgba(0, 0, 0, 0.25);
`

const AnsweredBox = styled.div`
  width: 1250px;
  height: 100px;
  background: rgba(66, 177, 240, 0.4);
  box-shadow: 3px 4px 3px 1px rgba(0, 0, 0, 0.25);
`

export default function Contentbox(props) {
  return(
    <div> 
      {
        props.answered 
        ? 
        <Box>
          <div>
            작성 날짜
          </div>
          
          <div>
            제목, 작성자
          </div>

          <div style={{cursor: 'pointer'}}>
            아래방향 화살표
          </div>
        </Box>
        :
        <AnsweredBox>
          <div>
            작성 날짜
          </div>
          
          <div>
            제목, 작성자
          </div>

          <div style={{cursor: 'pointer'}}>
            아래방향 화살표
          </div>
        </AnsweredBox>
      }
    </div>
  )
}