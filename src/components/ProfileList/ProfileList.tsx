import { ProfileCardList } from "./ProfileCardList";
import { User } from "../../interfaces/user";

import "./ProfileList.scss";

interface ProfileListProps {
  users: User[];
}

export const ProfileList = ({ users }: ProfileListProps) => {
  return (
    <div className="profile-list">
      {users.map((user) => (
        <ProfileCardList user={user} key={user.login} />
      ))}
    </div>
  );
};
