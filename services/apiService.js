export const fetchCharacters = async () => {
  try {
    // tenta fazer a requisicao para a API
    const response = await fetch('https://rickandmortyapi.com/api/character');
    // converte a resposta para json e retorna os dados
    return await response.json();
  } catch (error) {
    // captura e exibe qualquer erro que ocorrer durante a requisicao
    console.error("Erro ao buscar dados da API: ", error);
  }
};
