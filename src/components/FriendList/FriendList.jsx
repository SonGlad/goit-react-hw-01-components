import PropTypes from 'prop-types';
import { FriendListItem } from './FriendListItem';
import {FriendListStyle} from './FriendList.styled';


export const FriendList = ({friends}) => (
    <FriendListStyle>
        {friends.map(friend => (
            <FriendListItem
                key ={friend.id}
                name ={friend.name}
                isOnline ={friend.isOnline}
                avatar ={friend.avatar}
            />
        ))}
    </FriendListStyle>
);


FriendList.propTypes ={
    friends: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.number.isRequired,
            name: PropTypes.string.isRequired,
            avatar: PropTypes.string.isRequired,
            isOnline: PropTypes.bool.isRequired,
        }).isRequired
    ).isRequired,
};