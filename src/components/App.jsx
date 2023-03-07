import { Profile } from "./Profile/profile";
import user from "./Profile/user";
import { Statistics } from "./Statistics/Statistics";
import data from "./Statistics/data";
import { FriendList } from "./FriendList/friendList";
import friends from "./FriendList/friends";
import { TransactionHistory } from "./TransactionHistory/TransactionHistory";
import transactions from "./TransactionHistory/transactions";
export const App = () => {
  return (
    <div
     style={{
      alignItems: 'center',
      backgroundColor: "bisque" ,
      display: 'flex',
      flexDirection: 'column',
      margin: 'auto',
      maxWidth: '1170px',
      padding: '15px',
    }}> 
      <Profile username={user.username}
  tag={user.tag}
  location={user.location}
  avatar={user.avatar}
  stats={user.stats}
/>
    
  
  
<Statistics title="Upload stats" stats={data} />
 
<FriendList friends={friends} />
<TransactionHistory items={transactions} />
</div>
  );
};
