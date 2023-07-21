import PropTypes from 'prop-types';
import {FriendListStyle} from './FriendList.styled';
import {getRandomColor} from 'utils/random-color/random-color';
import {online, offline} from './FriendList.styled'


export const FriendList = ({friends}) => (
    <FriendListStyle>
        {friends.map(({id, name, isOnline, avatar}) => (
        <li key={id} className="item" style={{backgroundColor: getRandomColor()}}>
            <span className={`status ${isOnline ? online : offline}`}></span>
            <img className="avatar" src={avatar} alt="User avatar" width="48" />
            <p className="name">{name}</p>
        </li>
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