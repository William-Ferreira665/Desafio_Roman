import axios from 'axios';

// define a função para chamada das requisições
const api = axios.create({
  // define a URL base das requisições

  //MUDAR IP
  //COMANDO - CMD: ipconfig
  baseURL: 'http://192.168.6.203:5000/api',
});

// define o padrão de exportação
export default api;