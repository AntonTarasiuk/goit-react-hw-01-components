import styled from "@emotion/styled";

export const FileListItem = styled.li`
    
    display: flex;
    align-items: center;
    padding: 16px;

    width: 650px;
    height: auto;
    box-shadow: 0px 3px 13px -4px #000000;
    
    :not(:last-child) {
        margin-bottom: 24px;
    }
`;

export const FriendAvatar = styled.img`
    width: 96px;
    height: 96px;
    border-radius: 15px;
    background-color: bisque;
    margin-right: 24px;
`;

export const OnlineStatus = styled.span`
    display: block;
    width: 36px;
    height: 36px;
    margin-right: 24px;
    
    border-radius: 50%
`;