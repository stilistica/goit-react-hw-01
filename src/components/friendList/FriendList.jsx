import FriendListItem from "../FriendListItem.jsx";
import styles from './FriendList.module.css'


const FriendList = ({friends}) => {
	return (
		<ul className={styles.friendList}>
			{friends.map(friend =>
				<FriendListItem name={friend.name} img={friend.avatar} isOnline={friend.isOnline} key={friend.id}/>
			)}
		</ul>
	)
}

export default FriendList;
