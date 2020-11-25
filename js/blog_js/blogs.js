//Click scroll actions
$(document).ready(function () {

    function gettext() {

        var card_colours = ["blue_carder", "red_carder", "green_carder", "yellow_carder"];
        var alt_cards = ["", "alt"];

        fetch('https://medium-f.herokuapp.com/api/v2/articles?orgid=dscvitpune', {
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
                let j = data.articles.length;
                for (i = 0; i < j; i = i + 1) {
                        output += `
                        <div class="blog-card ${alt_cards[i%2]} ">
                        <div class="meta">
                            <div class="photo" style="background-image: url(${data.articles[i].thumbnailref})"></div>
                        </div>
                        <div class="description ${card_colours[i%4]}">
                            <h1>${data.articles[i].title}</h1>
                            <p>${data.articles[i].subtitle}</p>
                                <div class="creator">
                                <h5>${data.articles[i].creators.name}</h5>
                                <img src="${data.articles[i].creators.avatar}" alt="${data.articles[i].creators.name}">
                                </div>
                            <p class="read-more">
                                <button class="btn" ><a href="${data.articles[i].link}" target="_blank">Read More</a></button>
                            </p>
                        </div>
                        </div>
                        </div><br><br><br><br>`
                };
                $('.loader').hide();
                if (output != null){
                    document.getElementById("github-repos").innerHTML = output;
                }
                
            });
    };
    gettext();
})
