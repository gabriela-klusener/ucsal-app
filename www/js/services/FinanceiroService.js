
app.service('FinanceiroService', function() {

    var mensalidades = [

        {
            semestre: '2025.2',
            mes: 'Agosto',
            vencimento: '10/08/2025',
            valor: 850.00,
            status: 'Paga',
            codigoBarras: '00190.00009 01234.567890 12345.678901 1'
        },
        {
            semestre: '2025.2',
            mes: 'Setembro',
            vencimento: '10/09/2025',
            valor: 850.00,
            status: 'Paga',
            codigoBarras: '00190.00009 01234.567890 12345.678902 1'
        },

        {
            semestre: '2026.1',
            mes: 'Janeiro',
            vencimento: '10/01/2026',
            valor: 950.00,
            status: 'Paga',
            codigoBarras: '00190.00009 01234.567890 12345.678903 1'
        },
        {
            semestre: '2026.1',
            mes: 'Fevereiro',
            vencimento: '10/02/2026',
            valor: 950.00,
            status: 'Paga',
            codigoBarras: '00190.00009 01234.567890 12345.678904 1'
        },

        {
            semestre: '2026.2',
            mes: 'Agosto',
            vencimento: '10/08/2026',
            valor: 950.00,
            status: 'Paga',
            codigoBarras: '00190.00009 01234.567890 12345.678905 1'
        },
        {
            semestre: '2026.2',
            mes: 'Setembro',
            vencimento: '10/09/2026',
            valor: 950.00,
            status: 'A Pagar',
            codigoBarras: '00190.00009 01234.567890 12345.678906 1'
        },
        {
            semestre: '2026.2',
            mes: 'Outubro',
            vencimento: '10/10/2026',
            valor: 950.00,
            status: 'A Pagar',
            codigoBarras: '00190.00009 01234.567890 12345.678907 1'
        },
        {
            semestre: '2026.2',
            mes: 'Novembro',
            vencimento: '10/11/2026',
            valor: 950.00,
            status: 'A Pagar',
            codigoBarras: '00190.00009 01234.567890 12345.678908 1'
        }

    ];

    this.listar = function() {
        return mensalidades;
    };

    this.listarSemestres = function() {

        return ['2025.2', '2026.1', '2026.2'];

    };

});
