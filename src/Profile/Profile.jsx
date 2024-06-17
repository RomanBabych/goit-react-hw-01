import css from "./Profile.module.css";
export default function Profile({
  data: {
    username,
    tag,
    location,
    avatar,
    stats: { followers, views, likes },
  },
}) {
  return (
    <div className={css.userCard}>
      <div className={css.userInfo}>
        <img className={css.userAvatar} src={avatar} alt="User avatar" />
        <p className={css.userName}>{username}</p>
        <p className={css.userTag}>@{tag}</p>
        <p className={css.userLocation}>{location}</p>
      </div>

      <ul className={css.userStatsList}>
        <li className={css.statsListItem}>
          <span className={css.userStatName}>Followers</span>
          <span className={css.userStatValue}>{followers}</span>
        </li>
        <li className={css.statsListItem}>
          <span className={css.userStatName}>Views</span>
          <span className={css.userStatValue}>{views}</span>
        </li>
        <li className={css.statsListItem}>
          <span className={css.userStatName}>Likes</span>
          <span className={css.userStatValue}>{likes}</span>
        </li>
      </ul>
    </div>
  );
}
