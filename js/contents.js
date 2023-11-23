const series = [
    {
        id: "s1",
        name: "L'âne Trotro",
        age: "30",
        info: "https://www.filmspourenfants.net/lane-trotro/",
        available: {"netflix": "https://www.netflix.com/title/70234499"},
        image: "series/trotro.png"
    },
    {
        id: "s2",
        name: "Simon",
        age: "30",
        info: "https://www.filmspourenfants.net/simon/",
        available: {"netflix": "https://www.netflix.com/title/80227186"},
        image: "series/simon.png"
    },
    {
        id: "s3",
        name: "Puffin Rock",
        age: "30",
        info: "https://www.filmspourenfants.net/puffin-rock/",
        available: {"netflix": "https://www.netflix.com/title/80044965"},
        image: "series/puffin_rock.png"
    },
    {
        id: "s4",
        name: "Océan d'amour",
        age: "30",
        info: "https://www.filmspourenfants.net/ocean-damour/",
        available: {"netflix": "https://www.netflix.com/title/81095076"},
        image: "series/ocean_d_amour.png"
    },
    {
        id: "s5",
        name: "Petit Lama",
        age: "30",
        available: {"netflix": "https://www.netflix.com/title/80115338"},
        image: "series/llama.png"
    },
    {
        id: "s6",
        name: "Les Octonauts",
        age: "36",
        info: "https://www.filmspourenfants.net/les-octonauts/",
        available: {"netflix": "https://www.netflix.com/title/80020935"},
        image: "series/octonauts.png"
    },
    {
        id: "s7",
        name: "Yakari",
        age: "48",
        info: "https://www.filmspourenfants.net/yakari/",
        available: {"netflix": "https://www.netflix.com/title/70234488"},
        image: "series/yakari.png"
    },
    {
        id: "s8",
        name: "Ella, Oscar et Hoo",
        age: "40",
        info: "https://www.filmspourenfants.net/ella-oscar-hoo/",
        available: {"prime": ""},
        image: "series/ella-oscar-hoo.png"
    },
    {
        id: "s9",
        name: "Tut Tut Cory Bolides",
        age: "38",
        available: {"netflix": "https://www.netflix.com/title/80237347"},
        image: "series/tut-tut-cory-bolides.png"
    },
    {
        id: "s10",
        name: "Justin rêve",
        age: "38",
        available: {"netflix": "https://www.netflix.com/title/70272742"},
        image: "series/justin-reve.png"
    },
    {
        id: "s11",
        name: "Comptines les oies",
        age: "38",
        available: {"netflix": "https://www.netflix.com/title/80226787"},
        image: "series/comptines-les-oies.png"
    },
    {
        id: "s12",
        name: "Thomas et ses amis\nTous en avant",
        age: "38",
        available: {"netflix": "https://www.netflix.com/title/81553278"},
        image: "series/thomas-amis.png"
    },
    {
        id: "s13",
        name: "Fonce, toutou, fonce",
        age: "38",
        available: {"netflix": "https://www.netflix.com/title/81047300"},
        image: "series/fonce-toutou-fonce.png"
    },
    {
        id: "s14",
        name: "Sammy",
        age: "38",
        available: {"netflix": "https://www.netflix.com/title/80042177"},
        image: "series/sammy.png"
    },
    {
        id: "s15",
        name: "Ada Twist,\nla scientifique",
        age: "38",
        available: {"netflix": "https://www.netflix.com/title/80198673"},
        image: "series/ada-twist.png"
    },
    {
        id: "s16",
        name: "Les Octonauts,\nmission terre",
        age: "39",
        available: {"netflix": "https://www.netflix.com/title/81154899"},
        info: "https://www.filmspourenfants.net/les-octonauts/",
        image: "series/octonauts-terre.png"
    },
    {
        id: "s17",
        name: "Pyjamasques",
        age: "43",
        available: {"netflix": "https://www.netflix.com/title/80187223"},
        info: "https://www.filmspourenfants.net/les-pyjamasques/",
        image: "series/pyjamasques.png"
    },
    {
        id: "s18",
        name: "Pat Patrouille",
        age: "39",
        available: {"netflix": "https://www.netflix.com/title/80026226"},
        info: "https://www.filmspourenfants.net/la-pat-patrouille/",
        image: "series/pat-patrouille.png"
    },
    {
        id: "s19",
        name: "Nico Nickel\nle camion poubelle",
        age: "39",
        available: {"netflix": "https://www.netflix.com/title/80234731"},
        image: "series/nico-nickel.png"
    },
    {
        id: "s20",
        name: "Masha et Michka",
        age: "46",
        available: {"netflix": "https://www.netflix.com/title/70286901"},
        image: "series/masha-michka.png"
    },
    {
        id: "s21",
        name: "Gigantosaurus",
        age: "47",
        available: {"netflix": "https://www.netflix.com/title/80223368"},
        image: "series/gigantosaurus.png"
    },
];

const movies = [
    {
        id: "m1",
        name: "Mon voisin Totoro",
        age: "34",
        info: "https://www.filmspourenfants.net/mon-voisin-totoro/",
        available: {"netflix": "https://www.netflix.com/title/60032294"},
        image: "movies/totoro.png"
    },
    {
        id: "m2",
        name: "Kiki la petite sorcière",
        age: "37",
        info: "https://www.filmspourenfants.net/kiki-la-petite-sorciere/",
        available: {"netflix": "https://www.netflix.com/title/60027106"},
        image: "movies/kiki.png"
    },
    {
        id: "m3",
        name: "Arrietty,\n le petit monde des chapardeurs",
        age: "43",
        info: "https://www.filmspourenfants.net/arrietty-le-petit-monde-des-chapardeurs/",
        available: {"netflix": "https://www.netflix.com/title/70216227"},
        image: "movies/arrietty.png"
    },
    {
        id: "m4",
        name: "Ponyo sur la falaise",
        age: "38",
        info: "https://www.filmspourenfants.net/ponyo-sur-la-falaise-pres-de-la-mer/",
        available: {"netflix": "https://www.netflix.com/title/70106454"},
        image: "movies/ponyo.png"
    },
    {
        id: "m5",
        name: "Le Grans Méchant Renard\net autres contes... ",
        age: "60",
        info: "https://www.filmspourenfants.net/le-grand-mechant-renard-et-autres-contes/",
        available: {"netflix": "https://www.netflix.com/title/80211285"},
        image: "movies/mechant_renard.png"
    },
    {
        id: "m6",
        name: "Si tu tends l'oreille",
        age: "42",
        info: "https://www.filmspourenfants.net/si-tu-tends-l-oreille/",
        available: {"netflix": "https://www.netflix.com/title/70045021"},
        image: "movies/tends_oreille.png"
    },
    {
        id: "m7",
        name: "Le chateau ambulant",
        age: "60",
        info: "https://www.filmspourenfants.net/le-chateau-ambulant/",
        available: {"netflix": "https://www.netflix.com/title/70028883"},
        image: "movies/chateau_ambulant.png"
    },
    {
        id: "m8",
        name: "Le royaume des chats",
        age: "42",
        info: "https://www.filmspourenfants.net/le-royaume-des-chats/",
        available: {"netflix": "https://www.netflix.com/title/70019058"},
        image: "movies/royaume_chats.png"
    },
    {
        id: "m9",
        name: "Le château dans le ciel",
        age: "60",
        info: "https://www.filmspourenfants.net/le-chateau-dans-le-ciel/",
        available: {"netflix": "https://www.netflix.com/title/60027393"},
        image: "movies/chateau_ciel.png"
    },
    {
        id: "m10",
        name: "Le Noël de Nico Nickel",
        age: "48",
        info: "https://www.filmspourenfants.net/le-noel-de-nico-nickel/",
        available: {"netflix": "https://www.netflix.com/title/81010807"},
        image: "movies/noel_nico_nickel.png"
    },
    {
        id: "m12",
        name: "Les aristochats",
        age: "60",
        info: "https://www.filmspourenfants.net/les-aristochats/",
        available: {"local": ""},
        image: "movies/aristochats.png"
    },
    {
        id: "m13",
        name: "Le livre de la jungle",
        age: "60",
        info: "https://www.filmspourenfants.net/le-livre-de-la-jungle/",
        available: {"local": ""},
        image: "movies/livre_jungle.png"
    },
    {
        id: "m14",
        name: "Kuzco\nl'empereur mégalo",
        age: "48",
        info: "https://www.filmspourenfants.net/kuzco-lempereur-megalo/",
        available: {"local": ""},
        image: "movies/kuzco.png"
    },
    {
        id: "m15",
        name: "Kuzco 2\nKing Kronk",
        age: "60",
        info: "https://www.filmspourenfants.net/kuzco-2-king-kronk/",
        available: {"local": ""},
        image: "movies/kuzco_2.png"
    },
    {
        id: "m16",
        name: "Merlin l'enchanteur",
        age: "60",
        info: "https://www.filmspourenfants.net/merlin-l-enchanteur/",
        available: {"local": ""},
        image: "movies/merlin.png"
    },
    {
        id: "m17",
        name: "Clochette\net l'expédition féérique",
        age: "38",
        info: "https://www.filmspourenfants.net/clochette-et-lexpedition-feerique/",
        available: {"local": ""},
        image: "movies/clochette_expedition.png"
    },
    {
        id: "m18",
        name: "Clochette\net la créature légendaire",
        age: "84",
        info: "https://www.filmspourenfants.net/clochette-et-la-creature-legendaire/",
        available: {"local": ""},
        image: "movies/clochette_creature.png"
    },
    {
        id: "m19",
        name: "Clochette\net le tournoi des fées",
        age: "60",
        info: "https://www.filmspourenfants.net/clochette-et-le-tournoi-des-fees/",
        available: {},
        image: "movies/clochette_tournoi.png"
    },
    {
        id: "m20",
        name: "Clochette\net le secret des fées",
        age: "48",
        info: "https://www.filmspourenfants.net/clochette-et-le-secret-des-fees/",
        available: {"local": ""},
        image: "movies/clochette_secret.png"
    },
    {
        id: "m21",
        name: "La féé Clochette",
        age: "43",
        info: "https://www.filmspourenfants.net/la-fee-clochette/",
        available: {"local": ""},
        image: "movies/clochette.png"
    },
    {
        id: "m22",
        name: "Clochette\net la pierre de lune",
        age: "60",
        info: "https://www.filmspourenfants.net/clochette-et-la-pierre-de-lune/",
        available: {"local": ""},
        image: "movies/clochette_lune.png"
    },
    {
        id: "m23",
        name: "Clochette\net la fée pirate",
        age: "72",
        info: "https://www.filmspourenfants.net/clochette-et-la-fee-pirate/",
        available: {"local": ""},
        image: "movies/clochette_pirate.png"
    },
    {
        id: "m24",
        name: "Toy story",
        age: "43",
        info: "https://www.filmspourenfants.net/toy-story-1995/",
        available: {"local": ""},
        image: "movies/toy_story.png"
    },
    {
        id: "m25",
        name: "Les Octonauts,\net la ceinture de feu",
        age: "39",
        available: {"netflix": "https://www.netflix.com/title/81012130"},
        info: "https://www.filmspourenfants.net/les-octonauts/",
        image: "movies/octonauts-ceinture.png"
    },
    {
        id: "m26",
        name: "Les Octonauts,\net les grottes de Sac Actun",
        age: "39",
        available: {"netflix": "https://www.netflix.com/title/81009671"},
        info: "https://www.filmspourenfants.net/les-octonauts/",
        image: "movies/octonauts-grottes.png"
    },
    {
        id: "m27",
        name: "Les Octonauts,\net la grande barrière de corail",
        age: "39",
        available: {"netflix": "https://www.netflix.com/title/81012822"},
        info: "https://www.filmspourenfants.net/les-octonauts/",
        image: "movies/octonauts-corail.png"
    },
    {
        id: "m28",
        name: "Cars",
        age: "39",
        available: {"local": ""},
        info: "https://www.filmspourenfants.net/cars/",
        image: "movies/cars.png"
    },
    {
        id: "m29",
        name: "Planes",
        age: "39",
        available: {"local": ""},
        info: "https://www.filmspourenfants.net/planes/",
        image: "movies/planes.png"
    },
    {
        id: "m30",
        name: "Turbo",
        age: "43",
        available: {"local": ""},
        info: "https://www.filmspourenfants.net/turbo/",
        image: "movies/turbo.png"
    },
    {
        id: "m31",
        name: "Winnie l'ourson",
        age: "43",
        available: {"local": ""},
        info: "https://www.filmspourenfants.net/les-aventures-de-winnie-lourson/",
        image: "movies/winnie.png"
    },
];

function getAllContents() {
    return {
        series: getSeries(),
        movies: getMovies(),
        hiddenSeries: getHiddenSeries(),
        hiddenMovies: getHiddenMovies(),
    };
}

function getAge() {
    let birthDate = localStorage.getItem("child.birth");
    if(!birthDate) {
        birthDate = '2019-11-26'
        localStorage.setItem("child.birth", birthDate);
    }
    return getMonthDifference(new Date(birthDate), new Date());

    function getMonthDifference(startDate, endDate) {
        return (
            endDate.getMonth() -
            startDate.getMonth() +
            12 * (endDate.getFullYear() - startDate.getFullYear())
        );
    }
}

function sortByFavorite(c1, c2) {
    const favoriteC1 = localStorage.getItem(`favorite.${c1.id}`) || '0';
    const favoriteC2 = localStorage.getItem(`favorite.${c2.id}`) || '0';
    if(favoriteC1 === favoriteC2) {
        return c1.name > c2.name ? 1 : -1;
    }
    if(favoriteC1 > favoriteC2){
        return -1;
    }
    return 1;
}

function isVisible(contentId) {
    const contentVisibility = localStorage.getItem(`visibility.${contentId}`) || 'true';
    return contentVisibility === 'true';
}

function getContents(contents, showIsVisible = true){
    const age = getAge();
    return contents.filter((content) => content.age <= age
        && isVisible(content.id) === showIsVisible).sort(sortByFavorite);
}

function getSeries(){
    return getContents(series);
}

function getMovies(){
    return getContents(movies);
}

function getHiddenSeries(){
    return getContents(series, false);
}

function getHiddenMovies(){
    return getContents(movies, false);
}

function hasAvailable(availability) {
    return availability && Object.keys(availability).length;
}

function isAvailable(availability) {
    return hasAvailable(availability) && Object.values(availability)[0] !== '';
}


