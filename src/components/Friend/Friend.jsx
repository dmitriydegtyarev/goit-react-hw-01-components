import friends from 'data/friends.json';

import { FriendList } from 'components/Friend/FriendList';

import css from 'components/Friend/Friend.module.css';

export const Friend = () => {
  return (
    <section className={css.sectionFriends}>
      <FriendList friends={friends} />
    </section>
  );
};
