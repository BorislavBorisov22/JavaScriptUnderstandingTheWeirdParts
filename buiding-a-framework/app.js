const g = G$('john', 'Doe', 'en');

$('#login').on('click', (ev) => {
    const language = $('#lang').val();
    g.setLang(language).greetDOM('#greeting');
});