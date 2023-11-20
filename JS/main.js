
const catalogo = [
    {
        pagina: "/pages/cyberpunk.html",
        title: "Cyberpunk 2077",
        description:
            "Cyberpunk 2077 Special Edition",
        image: "https://i.blogs.es/b109e9/cyberpunk2077-johnny-v-rgb_en/1366_2000.jpg",
    },
    {
        pagina: "/pages/bioshock.html",
        title: "Bioshock Infinite",
        description:
            "Bioshock infinite Complete edition",
        image: "https://image.api.playstation.com/vulcan/img/cfn/11307bShMfu86rAKUggseU2hoLu5Hcmx-oJU22cKxxQ6a6_gMaAvZA-ttFZ7HPvUbZVVCiNo6dIOIk5WBIxYzKPcm2gvhZbT.png",
    },
    {
        pagina: "/pages/counter.html",
        title: "Counter Strike",
        description:
            "Counter Strike ",
        image: "https://cdn.cloudflare.steamstatic.com/steam/apps/730/capsule_616x353.jpg?t=1698860631",
    },
    {
        pagina: "/pages/borderlands.html",
        title: "Borderlands 3",
        description:
            "Borderlands 3",
        image: "https://image.api.playstation.com/vulcan/ap/rnd/202010/2323/p50N4PBK9rNanGYKFecTvac5.png",
    },
    {
        pagina: "/pages/cyberpunk.html",
        title: "Doom Eternal",
        description:
            "Doom Eternal",
        image: "https://image.api.playstation.com/vulcan/ap/rnd/202010/0114/b4Q1XWYaTdJLUvRuALuqr0wP.png",
    },
    {
        pagina: "/pages/cyberpunk.html",
        title: "Escape From Tarkov",
        description:
            "Escape From Tarkov",
        image: "https://sim590.github.io/images/Escape-from-Tarkov-header.jpg",
    },
    {
        pagina: "/pages/cyberpunk.html",
        title: "RESIDENT EVIL 4",
        description:
            "RESIDENT EVIL 4 REMAKE",
        image: "https://image.api.playstation.com/vulcan/ap/rnd/202210/0706/EVWyZD63pahuh95eKloFaJuC.png",
    },
    {
        pagina: "/pages/cyberpunk.html",
        title: "S.T.A.L.K.E.R 2",
        description:
            "STALKER 2",
        image: "https://cdn.akamai.steamstatic.com/steam/apps/1643320/capsule_616x353.jpg?t=1698399210",
    },
];

let card = document.getElementById("card-ejemplo");

catalogo.map((producto) => {
    card.innerHTML += ` 
        <div class="articulo mb-5">
            <img src= ${producto.image} class="card-img-top">
            <div class="card-body">
                <h5 class="card-title">${producto.title}</h5>
                <a href=${[producto.pagina]} class="btn btn-primary">Comprar</a>
            </div>
        </div>
    `
});

