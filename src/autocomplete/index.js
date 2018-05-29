import './styles.less';

const inputElement = $('.citySearch');

inputElement.autocomplete({
    source: (req, res) => {
        $.ajax( {
            url: "cities",
            type: "POST",
            dataType: "json",
            data: {
                search: req.term
            },
            success: (data) => {
                res($.map(data, city => {
                    return {
                        label: city.City,
                        value: city.id
                    }
                }));
            }
        } );
    },
    minLength: 2
});
