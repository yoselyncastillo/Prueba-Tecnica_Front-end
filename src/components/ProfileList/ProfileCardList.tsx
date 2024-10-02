import { Link } from "react-router-dom";
import { User } from "../../interfaces/user";

import "./ProfileCardList.scss";

interface ProfileCardListProps {
  user: User;
}

export const ProfileCardList = ({ user }: ProfileCardListProps) => {
  return (
    <div className="profile-card">
      <img
        data-testid="avatar-img"
        className="profile-card__avatar"
        src={user.avatar_url}
        alt={`${user.login}'s avatar`}
      />
      <span className="profile-card__text profile-card__text--name">
        {user.name || "S/N"}
      </span>
      <Link
        className="profile-card__text profile-card__text--role"
        to={`/user/${user.login}`}
      >
        {user.login}
      </Link>
      <span className="profile-card__text profile-card__text--id">
        ID: {user.id}
      </span>
    </div>
  );
};
