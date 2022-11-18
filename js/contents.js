const series = [
    {
        name: "L'âne Trotro",
        age: "30",
        info: "https://www.filmspourenfants.net/lane-trotro/",
        available: {"netflix": "https://www.netflix.com/title/70234499"},
        image: "series/trotro.png"
    },
    {
        name: "Simon",
        age: "30",
        info: "https://www.filmspourenfants.net/simon/",
        available: {"netflix": "https://www.netflix.com/title/80227186"},
        image: "series/simon.png"
    },
    {
        name: "Puffin Rock",
        age: "30",
        info: "https://www.filmspourenfants.net/puffin-rock/",
        available: {"netflix": "https://www.netflix.com/title/80044965"},
        image: "series/puffin_rock.png"
    },
    {
        name: "Océan d'amour",
        age: "30",
        info: "https://www.filmspourenfants.net/ocean-damour/",
        available: {"netflix": "https://www.netflix.com/title/81095076"},
        image: "series/ocean_d_amour.png"
    },
    {
        name: "Llama Llama",
        age: "30",
        available: {"netflix": "https://www.netflix.com/title/80115338"},
        image: "series/llama.png"
    },
    {
        name: "Les Octonauts",
        age: "37",
        info: "https://www.filmspourenfants.net/les-octonauts/",
        available: {"netflix": "https://www.netflix.com/title/80020935"},
        image: "series/octonauts.png"
    },
];

const movies = [
    {
        name: "Mon voisin Totoro",
        age: "34",
        info: "https://www.filmspourenfants.net/mon-voisin-totoro/",
        available: {"netflix": "https://www.netflix.com/title/60032294"},
        image: "movies/totoro.png"
    },
    {
        name: "Kiki la petite sorcière",
        age: "35",
        info: "https://www.filmspourenfants.net/kiki-la-petite-sorciere/",
        available: {"netflix": "https://www.netflix.com/title/60027106"},
        image: "movies/kiki.png"
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
        series: series.filter((serie) => serie.age <= age),
        movies: movies.filter((movie) => movie.age <= age),
    };

    function getMonthDifference(startDate, endDate) {
        return (
            endDate.getMonth() -
            startDate.getMonth() +
            12 * (endDate.getFullYear() - startDate.getFullYear())
        );
    }
}
