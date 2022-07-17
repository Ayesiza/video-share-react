import React from "react";
import styled from "styled-components";
import smallImage from "../images/mytybe.jpg";

const Container = styled.div`
  display: flex;
  gap: 10px;
  margin: 30px 0px;
`;
const Avatar = styled.img`
  width: 40px;
  height: 40px;
  border-radius: 50px;
  background-color: #999;
`;
const Details = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  color: ${({ theme }) => theme.text};
`;

const Name = styled.span`
  font-size: 13px;
  font-weight: 500;
  
`;
const Date = styled.span`
font-size: 12px;
  font-weight: 400;
  color: ${({ theme }) => theme.textSoft};
  margin-left: 5px;
  `;
 
const Text = styled.span`
font-size: 14px;
`;

const Comment = () => {
  return (
    <Container>
        <Avatar src={smallImage}/>
      <Details>
        <Name>
          JohnDoe<Date> 1 day ago</Date>
        </Name>
        <Text>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laborum,
          voluptatem, expedita optio, ipsa dolor illo pariatur dicta dolore unde
          sunt autem iusto iure ipsam doloribus natus itaque mollitia! Vero,
          fuga.
        </Text>
      </Details>
    </Container>
  );
};
export default Comment;
