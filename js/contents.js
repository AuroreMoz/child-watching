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
        age: "37",
        info: "https://www.filmspourenfants.net/les-octonauts/",
        available: {"netflix": "https://www.netflix.com/title/80020935"},
        image: "series/octonauts.png"
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
        age: "35",
        info: "https://www.filmspourenfants.net/kiki-la-petite-sorciere/",
        available: {"netflix": "https://www.netflix.com/title/60027106"},
        image: "movies/kiki.png"
    },
    {
        id: "m3",
        name: "Arrietty,\n le petit monde des chapardeurs ",
        age: "36",
        info: "https://www.filmspourenfants.net/arrietty-le-petit-monde-des-chapardeurs/",
        available: {"netflix": "https://www.netflix.com/title/70216227"},
        image: "movies/arrietty.png"
    }
];

function getContents() {
    let birthDate = localStorage.getItem("child.birth");
    if(!birthDate) {
        birthDate = '2019-11-26'
        localStorage.setItem("child.birth", birthDate);
    }
    const age = getMonthDifference(new Date(birthDate), new Date());
    return {
        series: series.filter((serie) => serie.age < age).sort(sortContents),
        movies: movies.filter((movie) => movie.age < age).sort(sortContents),
    };

    function getMonthDifference(startDate, endDate) {
        return (
            endDate.getMonth() -
            startDate.getMonth() +
            12 * (endDate.getFullYear() - startDate.getFullYear())
        );
    }

    function sortContents(c1, c2) {
        const favoriteC1 = localStorage.getItem(`favorite.${c1.id}`) || 'false';
        const favoriteC2 = localStorage.getItem(`favorite.${c2.id}`) || 'false';
        if(favoriteC1 === favoriteC2) {
            return c1.name > c2.name ? 1 : -1;
        } else if(favoriteC1 === 'true'){
                return -1;
        }
        return 1;
    }
}
