import PropTypes from "prop-types";
import { FriendItem } from "./FriendsItem";
import css from "./FriendList.module.css";
export const FriendList = ({ friends }) => {
    return  (
        <ul className={css.friends}>
            {friends.map(({ id, avatar,name, isOnline }) =>
     
    <FriendItem key={id}
avatar={avatar}
name={name}
isOnline={isOnline} />)}
</ul>
    )
    }
    FriendList.propTypes = {
        friends: PropTypes.arrayOf(PropTypes.shape({
        avatar: PropTypes.string.isRequired,
        isOnline: PropTypes.bool.isRequired, 
        name: PropTypes.string.isRequired,
        id: PropTypes.number.isRequired,
    })),
};