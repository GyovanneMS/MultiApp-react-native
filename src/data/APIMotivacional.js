import axios from 'axios';

// Definindo a função que busca as citações motivacionais
const citacoesMotivacionais = () => {
   axios.get('https://zenquotes.io/api/random')
    .then(response => {
      const data = response.data;
      console.log(`Quote: ${data[0].q}\nAuthor: ${data[0].a}`);
      const dados = [data[0].q, data[0].a]
      console.log(dados);
      return dados;
    })
    .catch(error => {
      console.error('Error:', error);
    });
};

export default citacoesMotivacionais;
