import axios from 'axios';

// Função assíncrona que busca e retorna uma citação motivacional
const citacoesMotivacionais = async () => {
    try {
        const response = await axios.get('https://zenquotes.io/api/random');
        const data = response.data;
        const citação = {
            quote: data[0].q,
            author: data[0].a
        };
        return citação; // Retorna um objeto com a citação e o autor
    } catch (error) {
        console.error('Error:', error);
        throw error; // Lança o erro para tratamento externo
    }
};

export default citacoesMotivacionais;
