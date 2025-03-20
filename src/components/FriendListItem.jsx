import styles from './friendList/FriendList.module.css'

export default function FriendListItem({name, img, isOnline}) {
	return (
        <li className={styles.friendCard}>
            <img src={img} alt={name} width="48" />
            <p className={styles.friendName}>{name}</p>
            {isOnline
                ? <p style={{color: 'green'}}>Online</p>
                : <p style={{color: 'red'}}>Offline</p>}
        </li>
    )
};