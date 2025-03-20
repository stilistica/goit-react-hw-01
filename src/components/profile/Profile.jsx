import styles from './Profile.module.css'

export default function Profile({name,	tag,	location, 	image, 	stats}) {
	return (
		<div className={styles.profileContainer}>
  <div className={styles.profileInfo}>
    <img
      src={image}
      alt={name}
    />
    <p className={styles.profileName}>{name}</p>
    <p className={styles.profileTagLoc}>@{tag}</p>
    <p className={styles.profileTagLoc}>{location}</p>
  </div>

  <ul className={styles.profileList}>
    <li>
      <span>Followers</span>
      <span className={styles.profileNunList}>{stats.followers}</span>
    </li>
    <li>
      <span>Views</span>
      <span className={styles.profileNunList}>{stats.views}</span>
    </li>
    <li>
      <span>Likes</span>
      <span className={styles.profileNunList}>{stats.likes}</span>
    </li>
  </ul>
</div>
	)
}

