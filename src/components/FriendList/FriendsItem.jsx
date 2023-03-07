import PropTypes from "prop-types";
import css from "./FriendList.module.css";
export const FriendItem = ({ avatar, name, isOnline }) => {
    return (

        <li className={css.friends_item}>
  <span className={`${css.status} ${isOnline ? css.isOnline : css.isOffline}`}></span>
  <img  src={avatar} alt="User avatar" width="48" />
  <p className={css.name}>{name}</p>
</li>
    )
}
FriendItem.propTypes = {
    avatar: PropTypes.string.isRequired,
    isOnline: PropTypes.bool, 
    name: PropTypes.string.isRequired,
}