const axios = require("axios");

async function consultarCEP(cep) {
  try {
    const response = await axios.get(`https://viacep.com.br/ws/${cep}/json/`);
    return response.data;
  } catch (error) {
    console.error("Erro ao consultar o ViaCEP:", error);
    throw error;
  }
}

module.exports = { consultarCEP };
