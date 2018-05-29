const inputElement = $('.citySearch');

inputElement.autocomplete({
    source: (req, res) => {

    },
    minLength: 2
});
