import SesiOlimpiada from "../assets/Administracao.png";
import TccSenai from "../assets/TccSenai.png";
import Documentario from "../assets/Documentário.png";

const experiencias = [
    {
        id: 1,
        NomeExperiencia: "Administração de olimpíada de Geografia escolar",
        Subtitulo: "SESI (Ago 2023 - Dez 2023)",
        Imagem: SesiOlimpiada,
        Skills: ["Excel"],
        Experiencia: "No ensino médio, surgiu a oportunidade de criar uma Olimpíada de Geografia, inspirada na OBG (Olimpíada Brasileira de Geografia). Fui um dos administradores responsáveis pela organização. Porém, a administração escolar não oferecia o suporte necessário, e o comitê organizador não ajudava no projeto. Diante disso, integrei uma comissão menor para liderar o projeto. Para garantir o sucesso das provas, conversei com a administração escolar buscando um consenso sobre datas, horários e locais adequados para as avaliações. Esse esforço resultou no sucesso das provas, com a participação organizada de todos os alunos, além de atrair mais 40% de alunos para as provas."
    },
    {
        id: 2,
        NomeExperiencia: "Trabalho de graduação de curso técnico",
        Subtitulo: "SENAI (Jan 2023 - Jun 2023)",
        Imagem: TccSenai,
        Skills: ["React", "Scrum", "Kanban"],
        Experiencia: "Ao fazer meu trabalho final de curso, inicialmente fiquei responsável pela gestão do banco de dados. Ao longo das primeiras semanas, surgiram mudanças que resultaram em atrasos no desenvolvimento do front-end (área de visualização pela web). Diante da necessidade de garantir o progresso do projeto, mudei para a área de front-end. Aprendi a nova linguagem necessária e ofereci suporte aos colegas envolvidos nessa área. Essa mudança permitiu que nosso projeto avançasse, culminando em uma apresentação bem-sucedida."
    },
    {
        id: 3,
        NomeExperiencia: "Criação de documentário",
        Subtitulo: "SESI (Jan 2023 - Dez 2023)",
        Imagem: Documentario,
        Skills: ["Inteligência Artificial", "Comunicação"],
        Experiencia: "No terceiro ano do ensino médio, elaborei um projeto sobre a produção de um documentário. Como um dos criadores do projeto, assumi o papel de líder. Ao longo do ano, minha equipe se desfez, deixando-me sozinho para reconstruir o projeto. Consequentemente, tive que refazer as entrevistas e desempenhar os papéis de entrevistador, cinegrafista e editor. Obtive acesso a entrevistas com pessoas mais influentes, mas também com pessoas mais simples, o que me fez ajustar a forma de abordagem com cada um. Consegui cumprir o prazo estabelecido, mesmo com menos recursos disponíveis, adquirindo habilidades significativas em comunicação e organização."
    }
];

export default experiencias;
