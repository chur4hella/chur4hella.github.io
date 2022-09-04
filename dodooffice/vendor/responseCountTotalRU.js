function toCurrency(n) {
    n += "";
    n = new Array(4 - n.length % 3).join("U") + n;
    return n.replace(/([0-9U]{3})/g, "$1 ").replace(/U/g, "");
}

//выручка российской сети
function responseTotal() {
    jQuery.ajax({
        url: "https://api.dodopizza.ru/api/v1/financialmetrics",

        jsonp: "callback",
        jsonpCallback: "responseDodo",

        dataType: "jsonp",
        success: function (response) {
        }
    });
}

function responseDodo(json) {
    var data = json;
    jQuery().ready(function () {
        if (data.meta.Code == "OK") {
            jQuery("#dodoResponse").show();
            jQuery("#earnings-month").html(toCurrency(data.response.current_month_progressive_total));
            jQuery("#earnings-year").html(toCurrency(data.response.current_year_progressive_total));
            jQuery("#earnings-last-month").html(toCurrency(data.response.previous_month.revenue));
            jQuery("#earnings-last-year").html(toCurrency(data.response.previous_year_revenue));
        } else {
            jQuery("#dodoResponse").hide();
        }
    })
}

jQuery().ready(function () {
    responseTotal();
    var interval = setInterval(responseTotal, 10000);
});