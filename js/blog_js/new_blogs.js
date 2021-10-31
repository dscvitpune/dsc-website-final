//Click scroll actions
$(document).ready(function () {

    function getBlogsList() {

        var card_colours = ["blue_carder", "red_carder", "green_carder", "yellow_carder"];
        var alt_cards = ["", "alt"];

        fetch('https://api.rss2json.com/v1/api.json?rss_url=https%3A%2F%2Fmedium.com%2Ffeed%2Fdscvitpune', {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            },
        })
            .then((res) => res.json())
            .then((data) => {
                $('.loader').show();
                let output = '';
                let i = 0;
                let j = data.items.length;
                for (i = 0; i < j; i = i + 1) {

                    var pubdate = new Date(data.items[i].pubDate);
                    let ye = new Intl.DateTimeFormat('en', { year: 'numeric' }).format(pubdate);
                    let mo = new Intl.DateTimeFormat('en', { month: 'short' }).format(pubdate);
                    let da = new Intl.DateTimeFormat('en', { day: '2-digit' }).format(pubdate);

                    output += `
                        <div class="blog-card ${alt_cards[i % 2]} ">
                        <div class="meta">
                            <div class="photo" style="background-image: url(${data.items[i].thumbnail}); background-size: cover;"></div>
                        </div>
                        <div class="description ${card_colours[i % 4]}">
                            <h1>${data.items[i].title}</h1>
                                <div class="creator">
                                <p></p>
                                <h4>${da}-${mo}-${ye}</h4>
                                <p></p>
                                <h4><span>Author:</span> ${data.items[i].author}</h4>
                                </div>
                            <div class="read-more">
                                <button class="btn" ><a href="${data.items[i].link}" target="_blank">Read Here</a></button>
                            </div>
                        </div>
                        </div>
                        </div><br><br>`
                };
                $('.loader').hide();

                if (output != null) {
                    document.getElementById("medium-blog-list").innerHTML = output;
                }
            });
    };
    getBlogsList();
})