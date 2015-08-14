$(document).ready(function () {           
            function request() {
                $.ajax({
                    url: "http://api.fixer.io/latest?base=USD",
                    //url:"https://currency-api.appspot.com/api/USD/CNY.json",
                    //url:"http://yahoo.finance.xchange",
                    dataType: "json",
                    cache: false,
                    success: function (data) {
                        //var json = $.parseJSON(data);
   
                        //USD to CNY
                        var rate_CNY = data.rates.CNY + 0.01 * Math.random() - 0.01 * Math.random();
                        rate_CNY = Math.round(rate_CNY * 10000) / 10000;
                        var rate_CNY1 = data.rates.CNY + 0.01 * Math.random() - 0.01 * Math.random();
                        rate_CNY1 = Math.round(rate_CNY1 * 10000) / 10000;
                        var rate_CNY2 = data.rates.CNY - 0.01 * Math.random() + 0.01 * Math.random();
                        rate_CNY2 = Math.round(rate_CNY2 * 10000) / 10000;
                        //USD to AUD
                        var rate_AUD = data.rates.AUD + 0.01 * Math.random() - 0.01 * Math.random();
                        rate_AUD = Math.round(rate_AUD * 10000) / 10000;
                        var rate_AUD1 = data.rates.AUD + 0.01 * Math.random() - 0.01 * Math.random();
                        rate_AUD1 = Math.round(rate_AUD1 * 10000) / 10000;
                        var rate_AUD2 = data.rates.AUD - 0.01 * Math.random() + 0.01 * Math.random();
                        rate_AUD2 = Math.round(rate_AUD2 * 10000) / 10000;
                        //USD to GBP
                        var rate_GBP = data.rates.GBP + 0.01 * Math.random() - 0.01 * Math.random();
                        rate_GBP = Math.round(rate_GBP * 10000) / 10000;
                        var rate_GBP1 = data.rates.GBP + 0.01 * Math.random() - 0.01 * Math.random();
                        rate_GBP1 = Math.round(rate_GBP1 * 10000) / 10000;
                        var rate_GBP2 = data.rates.GBP - 0.01 * Math.random() + 0.01 * Math.random();
                        rate_GBP2 = Math.round(rate_GBP2 * 10000) / 10000;
                        //USD to CAD
                        var rate_CAD = data.rates.CAD + 0.01 * Math.random() - 0.01 * Math.random();
                        rate_CAD = Math.round(rate_CAD * 10000) / 10000;
                        var rate_CAD1 = data.rates.CAD + 0.01 * Math.random() - 0.01 * Math.random();
                        rate_CAD1 = Math.round(rate_CAD1 * 10000) / 10000;
                        var rate_CAD2 = data.rates.CAD - 0.01 * Math.random() + 0.01 * Math.random();
                        rate_CAD2 = Math.round(rate_CAD2 * 10000) / 10000;
                        //USD to INR
                        var rate_INR = data.rates.INR + 0.01 * Math.random() - 0.01 * Math.random();
                        rate_INR = Math.round(rate_INR * 10000) / 10000;
                        var rate_INR1 = data.rates.INR + 0.01 * Math.random() - 0.01 * Math.random();
                        rate_INR1 = Math.round(rate_INR1 * 10000) / 10000;
                        var rate_INR2 = data.rates.INR - 0.01 * Math.random() + 0.01 * Math.random();
                        rate_INR2 = Math.round(rate_INR2 * 10000) / 10000;
                        //USD to JPY
                        var rate_JPY = data.rates.JPY + 0.01 * Math.random() - 0.01 * Math.random();
                        rate_JPY = Math.round(rate_JPY * 10000) / 10000;
                        var rate_JPY1 = data.rates.JPY + 0.01 * Math.random() - 0.01 * Math.random();
                        rate_JPY1 = Math.round(rate_JPY1 * 10000) / 10000;
                        var rate_JPY2 = data.rates.JPY - 0.01 * Math.random() + 0.01 * Math.random();
                        rate_JPY2 = Math.round(rate_JPY2 * 10000) / 10000;
                        //USD to EUR
                        var rate_EUR = data.rates.EUR + 0.01 * Math.random() - 0.01 * Math.random();
                        rate_EUR = Math.round(rate_EUR * 10000) / 10000;
                        var rate_EUR1 = data.rates.EUR + 0.01 * Math.random() - 0.01 * Math.random();
                        rate_EUR1 = Math.round(rate_EUR1 * 10000) / 10000;
                        var rate_EUR2 = data.rates.EUR - 0.01 * Math.random() + 0.01 * Math.random();
                        rate_EUR2 = Math.round(rate_EUR2 * 10000) / 10000;
                        //USD to CHF
                        var rate_CHF = data.rates.CHF + 0.01 * Math.random() - 0.01 * Math.random();
                        rate_CHF = Math.round(rate_CHF * 10000) / 10000;
                        var rate_CHF1 = data.rates.CHF + 0.01 * Math.random() - 0.01 * Math.random();
                        rate_CHF1 = Math.round(rate_CHF1 * 10000) / 10000;
                        var rate_CHF2 = data.rates.CHF - 0.01 * Math.random() + 0.01 * Math.random();
                        rate_CHF2 = Math.round(rate_CHF2 * 10000) / 10000;

                        $(".CNY").html(data.rates.CNY);
                        $(".AUD").html(data.rates.AUD);
                        $(".GBP").html(data.rates.GBP);
                        $(".CAD").html(data.rates.CAD);
                        $(".INR").html(data.rates.INR);
                        $(".JPY").html(data.rates.JPY);
                        $(".EUR").html(data.rates.EUR);
                        $(".CHF").html(data.rates.CHF);
                        
                        function compare(a,b,c,id,id1,id2,r) {
                            if (a >= r) {
                                id.css("color", "green").html(a);
                                if (b >= r) {
                                    id1.css("color", "green").html(b);
                                    if (c >= r) {
                                        id2.css("color", "green").html(c);
                                    }
                                    else {
                                        id2.css("color", "red").html(c);
                                    }
                                }
                                else{
                                    id1.css("color", "red").html(b);
                                }                               
                            }
                           /* else if (a == r) {
                                id.css("color", "blue").html(a);
                                id1.css("color", "blue").html(b);
                                id2.css("color", "blue").html(c);
                            }
                            */
                            else {
                                id.css("color", "red").html(a);
                                if (b < r) {
                                    id1.css("color", "red").html(b);
                                    if (c < r) {
                                        id2.css("color", "red").html(c);
                                    }
                                    else {
                                        id2.css("color", "green").html(c);
                                    }
                                }
                                else {
                                    id1.css("color", "green").html(c);
                                }                                
                            }
                        }
                        compare(rate_CNY, rate_CNY1, rate_CNY2, $("#CNY"), $("#CNY1"), $("#CNY2"),data.rates.CNY);
                        compare(rate_AUD, rate_AUD1, rate_AUD2, $("#AUD"), $("#AUD1"), $("#AUD2"),data.rates.AUD);
                        compare(rate_GBP, rate_GBP1, rate_GBP2, $("#GBP"), $("#GBP1"), $("#GBP2"), data.rates.GBP);
                        compare(rate_CAD, rate_CAD1, rate_CAD2, $("#CAD"), $("#CAD1"), $("#CAD2"), data.rates.CAD);
                        compare(rate_INR, rate_INR1, rate_INR2, $("#INR"), $("#INR1"), $("#INR2"), data.rates.INR);
                        compare(rate_JPY, rate_JPY1, rate_JPY2, $("#JPY"), $("#JPY1"), $("#JPY2"), data.rates.JPY);
                        compare(rate_EUR, rate_EUR1, rate_EUR2, $("#EUR"), $("#EUR1"), $("#EUR2"), data.rates.EUR);
                        compare(rate_CHF, rate_CHF1, rate_CHF2, $("#CHF"), $("#CHF1"), $("#CHF2"), data.rates.CHF);
                    }
                });
            }
            setInterval(request, 1000);
        });