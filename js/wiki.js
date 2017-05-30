$(document).ready(function () {


        $(".button").click(function () {

            //get value of searchbox text

            var val = $("#query").val();

            if (val == "") {

                window.open('https://en.wikipedia.org/wiki/Special:Random');

            } else {

                //clean the previous entries from page

                $(".entries").html("");

                //move the searchbox up

                $(".container").css({"margin": "1% auto 0 auto", "height": "100px"});
                $(".title").css({"font-size": "2em", "margin-top": "2%"});
                $("#query").css({"top": "10%"});
                $(".button").css({"top": "16%"});


                //set url for query

                var url = "https://en.wikipedia.org/w/api.php?action=opensearch&format=json&search=" +
                    val + "&callback=?";
                ////w/api.php?action=opensearch&format=json&search=tyson
                //make request
                $.getJSON(
                    url,
                    function (data) {
                        for (var i = 0; i < data[2].length; i++) {
                            $(".entries").append("<div class = block id = 'block" + i + "'" + ">" + "</div>");
                            var blockSelector = "#block" + i;
                            $(blockSelector).append("<h3>" + "<a  class = 'link" + i + "'" + "target='_blank'" + ">" + data[1][i] + "</a>" + "</h3>");
                            var selector = ".link" + i;
                            $(selector).attr("href", data[3][i]);
                            var extract = data[2][i];
                            $(blockSelector).append("<p>" + extract + "</p>");

                        }
                    }
                );

            }

        });

});
