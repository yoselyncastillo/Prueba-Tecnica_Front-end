import { User } from "../../interfaces/user";
import "./BannerProfile.scss";

interface BannerProfileProps {
  user: User;
}

export const BannerProfile = ({ user }: BannerProfileProps) => {
  return (
    <div className="banner">
      <img src={user.avatar_url} alt="" className="banner__img" />
      <div className="profile_header">
        <div className="name_email">
          <span className="name">{user.name}</span>
          <span className="user">{user.login}</span>
        </div>
        <div className="metrics">
          <div className="metrics__item">
            <span className="metrics__text metrics__text--primary">
              {user.followers}
            </span>
            <span className="metrics__text metrics__text--secondary">
              Seguidores
            </span>
          </div>
          <div className="metrics__divider" />
          <div className="metrics__item">
            <span className="metrics__text metrics__text--primary">
              {user.following}
            </span>
            <span className="metrics__text metrics__text--secondary">
              Seguidos
            </span>
          </div>
          <div className="metrics__divider" />
          <div className="metrics__item">
            <span className="metrics__text metrics__text--primary">
              {user.public_repos}
            </span>
            <span className="metrics__text metrics__text--secondary">
              Repositorios
            </span>
          </div>
        </div>
        <a className="banner__cta" href={user.html_url} target="_blank">
          Ver en Github
        </a>
      </div>
    </div>
  );
};
