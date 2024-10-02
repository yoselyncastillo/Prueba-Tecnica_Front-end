import { useFetchUsers } from "../hooks/useFetchUsers";
import { BarChart, ProfileList, SearchSection } from "../components";

import "./SearchPage.scss";

export const SearchPage = () => {
  const { users, isLoading, error, getUsers } = useFetchUsers();

  return (
    <div className="search_page">
      <SearchSection getUsers={getUsers} />
      {isLoading && <div>Cargando...</div>}
      {error && <div>{error}</div>}
      {!error && users.length > 0 && !isLoading && (
        <ProfileList users={users} />
      )}
      {!error && users.length > 0 && !isLoading && <BarChart users={users} />}
    </div>
  );
};
