import styled from "@emotion/styled";
import data from '../../data.json';

export const StatElement = styled.li`
    
  width: calc(100% / ${data.length});
  padding: 12px;
  display: flex;
  flex-direction: column;
  
  color: rgb(255, 255, 255);
  text-align: center;
  font-size: 16px;
  
  :hover {
    box-shadow: inset 0px 3px 13px -4px #000000;
  }
`;

export const Percentage = styled.span`
    font-size: 20px;
    margin-top: 8px;
`;