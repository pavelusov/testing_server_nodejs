$('#city-search')
    .autocomplete({
        source: (req, res) => {
            $.ajax({
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
            });
        },
        minLength: 2,
        delay: 350
    });
