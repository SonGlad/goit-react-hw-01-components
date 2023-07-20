import PropTypes from 'prop-types';
import {ProfileStyle} from './Profile.styled';
import defaultImage from '../../utils/img/Image_not_available.png'


export const Profile = (user) => (
    <ProfileStyle>
        <div className="description">
            <img
            src={user.avatar ? user.avatar : defaultImage}
            alt={user.tag}
            className="avatar"
            />
            <p className="name">{user.username}</p>
            <p className="tag">{user.tag}</p>
            <p className="location">{user.location}</p>
        </div>

        <ul className="stats">
            <li className='stats-items'>
                <span className="label">Followers</span>
                <span className="quantity">{ user.stats.followers }</span>
            </li>
            <li className='stats-items'>
                <span className="label">Views</span>
                <span className="quantity">{ user.stats.views }</span>
            </li>
            <li className='stats-items'>
                <span className="label">Likes</span>
                <span className="quantity">{ user.stats.likes }</span>
            </li>
        </ul>
    </ProfileStyle>
);


Profile.propTypes = {
    avatar: PropTypes.string,
    tag: PropTypes.string.isRequired,
    username: PropTypes.string.isRequired,
    location: PropTypes.string.isRequired,
    stats: PropTypes.shape({
        followers: PropTypes.number.isRequired,
        views: PropTypes.number.isRequired,
        likes: PropTypes.number.isRequired,
    }).isRequired,
};

