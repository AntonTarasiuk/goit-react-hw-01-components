import { FileListItem, FriendAvatar, OnlineStatus } from "./FriendListItem.styled"

export const FriendListItem = ({ avatar, name, onlineStatus}) => {
    console.log(onlineStatus)
    return (
        <FileListItem>
            <OnlineStatus style={{backgroundColor: onlineStatus ? "green" : "red"}}></OnlineStatus>
            <FriendAvatar src={avatar} alt="User avatar" width="48" />
            <p className="name">{name}</p>
        </FileListItem>
    )
}