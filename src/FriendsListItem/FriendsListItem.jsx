import clsx from "clsx";
import css from "./FriendsListItem.module.css";

export default function FriendsListItem({
  friend: { avatar, name, isOnline },
}) {
  const statusClsx = clsx(
    css.friendStatus,
    isOnline ? css.isOnline : css.isOffline
  );
  return (
    <div className={css.friendCard}>
      <img className={css.friendAvatar} src={avatar} alt="Avatar" width="48" />
      <p className={css.friendName}>{name}</p>
      <p className={statusClsx}>{isOnline ? "Online" : "Offline"}</p>
    </div>
  );
}
