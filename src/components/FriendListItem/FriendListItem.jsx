import PropTypes from 'prop-types'
import { FileListItem, FriendAvatar, OnlineStatus, FriendName } from "./FriendListItem.styled"

export const FriendListItem = ({ avatar, name, onlineStatus }) => {
    return (
        <FileListItem>
            <OnlineStatus style={{backgroundColor: onlineStatus ? "green" : "red"}}></OnlineStatus>
            <FriendAvatar src={avatar} alt="User avatar" width="48" />
            <FriendName>{name}</FriendName>
        </FileListItem>
    )
}

FriendListItem.propTypes = {
    onlineStatus: PropTypes.bool.isRequired,
    avatar: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
}