import styled from "@emotion/styled";

export const Container = styled.div`
    display: block;
    width: 550px;
    height: auto;
    
    margin-right: 80px;
    
    border-radius: 15px;
    box-shadow: 0px 3px 13px -4px #000000;
    
    background-color: rgb(255,255,255);
    overflow: hidden;
`;

export const MainInfoWraper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    
    justify-content: start;
    padding: 72px 0;
    
`;

export const Avatar = styled.img`
    width: 200px;
    height: 200px;
    border: 1px solid darkgray;
    border-radius: 50%;
    background-color: aquamarine;
    
    margin-bottom: 48px;
`;

export const Name = styled.p`
    font-weight: 700;
    font-size: 48px;
    margin-bottom: 20px;
`;

export const Tag = styled.p`
    color: gray;
    font-size: 40px;
    margin-bottom: 20px;
`;

export const Location = styled.p`
    color: gray;
    font-size: 40px;
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
    padding: 32px;

    color: gray;
    border: 1px solid rgb(206,216,229);
`;

export const StatLabel = styled.span`
    font-size: 28px;
    margin-bottom: 12px;
`;

export const StatValue = styled.span`
    color: rgb(0, 0, 0);
    font-weight: 700;
    font-size: 36px;
`;


