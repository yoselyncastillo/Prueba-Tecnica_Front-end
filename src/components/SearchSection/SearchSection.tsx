import { useState } from "react";

import "./SearchSection.scss";

interface SearchSectionProps {
  getUsers: (username: string) => Promise<void>;
}

export const SearchSection = ({ getUsers }: SearchSectionProps) => {
  const [username, setUsername] = useState("");
  const [error, setError] = useState("");
  const [isValidInput, setIsValidInput] = useState(false);

  const validateInput = (text: string) => {
    if (text.trim().length < 4) {
      setError("El usuario debe tener al menos 4 caracteres");
      setIsValidInput(false);
    } else if (text.toLowerCase().trim() === "iseijasunow") {
      setError('El usuario "iseijasunow" no esta disponible para la búsqueda');
      setIsValidInput(false);
    } else {
      setError("");
      setIsValidInput(true);
    }
  };

  const handleInputChange = ({
    target,
  }: React.ChangeEvent<HTMLInputElement>) => {
    const value = target.value;
    setUsername(value);
    validateInput(value);
  };

  const handleSearch = async () => {
    if (isValidInput) {
      getUsers(username);
    }
  };

  const handleSubmit = (event: { key: string; }) => {
    if (event.key === "Enter") {
      handleSearch();
    }
  };

  return (
    <div className="search">
      <div className="search search--sm-spacing">
        <span className="search__text search__text--subheading">
          ¡Te estamos buscando!
        </span>
        <span className="search__text search__text--heading">
          Somos Soluciones
        </span>
        <span className="search__text search__text--philosophy">
          Promovemos la integración de personas de distintos perfiles y
          nacionalidades y creemos en un entorno de trabajo con igualdad de
          oportunidades, que se traduce en una visión diversa y muy
          enriquecedora.
        </span>
      </div>

      <div className="search search--sm-spacing search--row">
        <div>
          <input
            data-testid="search-input"
            className={`search__input ${
              error.length > 0 && "search__input--error"
            }`}
            type="text"
            value={username}
            placeholder="Nombre de Usuario"
            onChange={handleInputChange}
            onKeyDown={handleSubmit}
          />
          <span className="search__error">{error}</span>
        </div>
        <button
          data-testid="search-button"
          className="search__button"
          disabled={!isValidInput}
          onClick={handleSearch}
        >
          Buscar
        </button>
      </div>
    </div>
  );
};
