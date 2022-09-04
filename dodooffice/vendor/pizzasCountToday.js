//счетчик на количество пицц с начала дня
function getDodoData() {
    jQuery.ajax({
        url: "https://api.dodopizza.ru/api/v1/operationalstatistics",

        jsonp: "callback",
        jsonpCallback: "parseDodo",

        dataType: "jsonp",
        success: function (response) {
        }
    });
}

function parseDodo(json) {
    var data = json;
    jQuery().ready(function () {
        if (data.meta.Code == "OK") {
            jQuery("#dodois").show();
            var pizzaCount = data.response.todayPizzasCompletedCount;
            jQuery("#dodois__todayPizzasCompletedCount").html("<span class=pizzasCount>" + pizzaCount + "</span> " + "<div>" + plural(pizzaCount, ['пиццy', 'пиццы', 'пицц']) + "</div>");
        } else {
            jQuery("#dodois").hide();
        }
    })
}

function plural(n, forms) {
    plural_form = (n % 10 == 1 && n % 100 != 11 ? 0 : n % 10 >= 2 && n % 10 <= 4 && (n % 100 < 10 || n % 100 >= 20) ? 1 : 2);
    return forms[plural_form];
}

jQuery().ready(function () {
    getDodoData();
    var interval = setInterval(getDodoData, 10000);
});