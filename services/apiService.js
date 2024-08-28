export const fetchCharacters = async () => {
    try {
      const response = await fetch('https://rickandmortyapi.com/api/character');
      return await response.json();
    } catch (error) {
      console.error("Erro ao buscar dados da API: ", error);
    }
  };
  