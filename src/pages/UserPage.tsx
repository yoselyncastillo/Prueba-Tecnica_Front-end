import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { BannerProfile } from "../components/BannerProfile/BannerProfile";
import { useFetchUsers } from "../hooks/useFetchUsers";

import "./UserPage.scss";

export const UserPage = () => {
  const { id } = useParams();
  const { currentUser, isLoading, error, getUserDetails } = useFetchUsers();

  useEffect(() => {
    getUserDetails(id!);
  }, [id]);

  return (
    <div className="UserPage">
      <div className="header_background"></div>
      {isLoading && !error && (
        <div>
          <span>Cargando datos del usuario...</span>
        </div>
      )}
      {error && <div className="error">{error}</div>}
      {currentUser && <BannerProfile user={currentUser} />}
    </div>
  );
};
