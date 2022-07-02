import PropTypes from 'prop-types'
import { Friends } from "./FriendList.styled"
import { FriendListItem } from "components/FriendListItem/FriendListItem"

export const FriendList = ({ friends }) => {
    return (
        <Friends>
            {friends.map(friend => (
                <FriendListItem 
                    key={friend.id} 
                    avatar={friend.avatar} 
                    name={friend.name} 
                    onlineStatus={friend.isOnline}
                />
            ))}
        </Friends>
    )
}

FriendList.propTypes = {
    friends: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.number.isRequired,
        }),
    )
}