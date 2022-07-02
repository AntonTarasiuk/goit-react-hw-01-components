import styled from "@emotion/styled";

export const FileListItem = styled.li`
    display: flex;
    align-items: center;
    padding: 4px 12px;

    width: 100%;
    height: auto;
    box-shadow: 0px 3px 13px -4px #000000;
    
    :not(:last-child) {
        margin-bottom: 12px;
    }
`;

export const FriendAvatar = styled.img`
    width: 68px;
    height: 68px;
    border-radius: 8px;
    background-color: bisque;
    margin-right: 12px;
`;

export const OnlineStatus = styled.span`
    display: block;
    width: 16px;
    height: 16px;
    margin-right: 12px;
    
    border-radius: 50%
`;

export const FriendName = styled.p`
    font-size: 20px;
`;