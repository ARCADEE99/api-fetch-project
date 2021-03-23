
async function getUsers() {
    let url = 'http://api.tvmaze.com/shows';
    try {
        let res = await fetch(url);
        return await res.json();
    } catch (error) {
        console.log(error);
    }
}

async function renderUsers() {
    let users = await getUsers();
    let html = '';
    console.log(users);
    users.forEach(user => {

        allowedValue = ermal(user);

        let htmlSegment =

            `<div class="user">
                <a target="_blank" href="${allowedValue.url}"> 
                    <img src="${allowedValue.image}"> 
                </a>
                <a target="_blank" href="${allowedValue.url}" style="color: darkslategray">
                    <p class="title"> ${allowedValue.title}</p>
                </a>
                <p <i class="far fa-star"></i> ${allowedValue.ratings} | <i class="far fa-calendar-alt"></i> ${allowedValue.premiered} | <i class="far fa-heart" id="heart"></i></p> 
                <p>${allowedValue.genres}</p>
            
            </div>`;

        html += htmlSegment;
    });

    let container = document.querySelector('.container'); // Elementet siper kalohen ne html, tek div me class container
    container.innerHTML = html;
}


function ermal(user) {
    let erm = {};

    let image = user.image === null ? "image not found" : user.image.medium;
    let title = user.name ?? "title not found";
    let ratings = user.rating.average ?? "rating not found";
    let url = user.url ?? "url not found";
    let premiered = user.premiered ?? "date not found";
    let genres = user.genres ?? "genres not found";

    erm.image = image;
    erm.title = title;
    erm.ratings = ratings;
    erm.url = url;
    erm.premiered = premiered;
    erm.genres = genres;
    return erm;
}


renderUsers();