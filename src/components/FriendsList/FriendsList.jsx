import FriendsListItem from "../../components/FriendsListItem/FriendsListItem";
import css from "./FriendsList.module.css";

export default function FriendsList({ friends }) {
  return (
    <ul className={css.friendsList}>
      {friends.map((friend, index) => (
        <li key={index}>
          <FriendsListItem friend={friend} />
        </li>
      ))}
    </ul>
  );
}
