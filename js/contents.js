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
        image: "movies/ella-oscar-hoo.png"
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
        name: "Arrietty,\n le petit monde des chapardeurs ",
        age: "48",
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
        age: "40",
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
        age: "40",
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
        age: "48",
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
        age: "72",
        info: "https://www.filmspourenfants.net/toy-story-1995/",
        available: {"local": ""},
        image: "movies/toy_story.png"
    },
];

function getContents() {
    return {
        series: getSeries(),
        movies: getMovies(),
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

function sortContents(c1, c2){
    const visibilityC1 = isVisible(c1.id);
    const visibilityC2 = isVisible(c2.id);
    if(visibilityC1 === visibilityC2) {
        return sortByFavorite(c1, c2);
    } else {
        if(visibilityC1){
            return -1;
        }
        return 1;
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

function getSeries(){
    const age = getAge();
    return series.filter((serie) => serie.age < age).sort(sortContents);
}

function getMovies(){
    const age = getAge();
    return movies.filter((movie) => movie.age < age).sort(sortContents);
}

function isVisible(contentId) {
    const contentVisibility = localStorage.getItem(`visibility.${contentId}`) || 'true';
    if(contentVisibility === 'true'){
        return true;
    }
    return false;
}

function hasAvailable(availability) {
    return availability && Object.keys(availability).length;
}

function isAvailable(availability) {
    return hasAvailable(availability) && Object.values(availability)[0] !== '';
}


