import styled from "@emotion/styled";

export const Container = styled.div`
    display: block;
    width: 280px;
    height: auto;
    
    margin-right: 40px;
    
    border-radius: 8px;
    box-shadow: 0px 3px 13px -4px #000000;
    
    background-color: rgb(255,255,255);
    overflow: hidden;
`;

export const MainInfoWraper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    
    justify-content: start;
    padding: 32px 0;
    
`;

export const Avatar = styled.img`
    width: 108px;
    height: 108px;
    border: 1px solid darkgray;
    border-radius: 50%;
    background-color: aquamarine;
    
    margin-bottom: 36px;
`;

export const Name = styled.p`
    font-weight: 700;
    font-size: 24px;
    margin-bottom: 12px;
`;

export const Tag = styled.p`
    color: gray;
    font-size: 16px;
    margin-bottom: 12px;
`;

export const Location = styled.p`
    color: gray;
    font-size: 16px;
`;

export const Stats = styled.ul`
    display: flex;
    background-color: rgb(243,246,249);
`;

export const StatsElement = styled.li`
    display: flex;
    align-items: center;
    flex-direction: column;
    width: calc(100% / 3);
    padding: 24px 8px;

    color: gray;
    border: 1px solid rgb(206,216,229);
`;

export const StatLabel = styled.span`
    font-size: 12px;
    margin-bottom: 6px;
`;

export const StatValue = styled.span`
    color: rgb(0, 0, 0);
    font-weight: 700;
    font-size: 14px;
`;


