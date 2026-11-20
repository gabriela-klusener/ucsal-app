
app.service('NoticiasService', function() {

    var noticias = [

        {
            id: 1,
            titulo: 'Prazo de Rematrícula 2027.1',
            data: '10/11/2026',
            categoria: 'Notícia',
            imagem: 'https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=800',
            resumo: 'Confira as orientações para realizar sua rematrícula.',
            conteudo: 'A Universidade Católica do Salvador informa que o período de rematrícula para o semestre 2027.1 estará disponível no portal acadêmico. Os estudantes devem verificar suas pendências e realizar o procedimento dentro do prazo estabelecido.'
        },

        {
            id: 2,
            titulo: 'Semana de Mobilização Científica',
            data: '15/11/2026',
            categoria: 'Evento',
            imagem: 'https://images.unsplash.com/photo-1523580494863-6f3031224c94?w=800',
            resumo: 'Participe das atividades de pesquisa e extensão.',
            conteudo: 'A SEMOC reúne estudantes, professores e pesquisadores em atividades acadêmicas, apresentações científicas, palestras e oficinas. Confira a programação e participe.'
        },

        {
            id: 3,
            titulo: 'Maratona de Programação',
            data: '18/11/2026',
            categoria: 'Evento',
            imagem: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=800',
            resumo: 'Desafie seus conhecimentos em programação.',
            conteudo: 'A UCSal promove uma atividade voltada à resolução de problemas computacionais, estimulando o raciocínio lógico, o trabalho em equipe e o desenvolvimento de soluções tecnológicas.'
        },

        {
            id: 4,
            titulo: 'Edital de Iniciação Científica',
            data: '20/11/2026',
            categoria: 'Notícia',
            imagem: 'https://images.unsplash.com/photo-1455390582262-044cdead277a?w=800',
            resumo: 'Confira as oportunidades de iniciação científica.',
            conteudo: 'Estão disponíveis informações sobre oportunidades de participação em projetos de iniciação científica. Os interessados devem consultar os requisitos e prazos de inscrição.'
        }

    ];

    this.listar = function() {
        return noticias;
    };

    this.buscarPorId = function(id) {

        return noticias.find(function(noticia) {
            return noticia.id === parseInt(id);
        });

    };

});
