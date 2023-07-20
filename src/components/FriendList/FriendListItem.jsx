import PropTypes from 'prop-types';
import { getRandomColor } from 'utils/random-color/random-color';
import {online, offline} from './FriendList.styled'



export const FriendListItem = ({id, name, isOnline, avatar}) => (
    <li className="item" style={{backgroundColor: getRandomColor()}}>
        <span className={`status ${isOnline ? online : offline}`}></span>
        <img className="avatar" src={avatar} alt="User avatar" width="48" />
        <p className="name">{name}</p>
    </li>
);


FriendListItem.propTypes ={
    name: PropTypes.string.isRequired,
    avatar: PropTypes.string.isRequired,
    isOnline: PropTypes.bool.isRequired,
};