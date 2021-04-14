$(window).on('load', () => {
    new Vivus('stat-hranice', {duration: 200});
    
    universities.sort(function (a, b) {
        return a.founded - b.founded;
    });
    
    let map = document.getElementById("stat-hranice");
    let paths = map.getElementsByTagName("path");

    const changeOpacity = (founded) => {
        for (let u of universities) {
            if (u.founded === founded) {
                for (let p of paths) {
                    if (u.id == p.id) {
                        p.style.opacity = 1;
                        $("#university-table").append("<tr><td>" + u.name + "</td><td>" + u.founded + "</td></tr>");
                    }
                }
            }
        }
    }

    const time = (founded) => {
        if (founded < 2002) {
            $("#year").text(founded);
            setTimeout(() => {
                changeOpacity(founded);
                time(founded + 1)
            }, 50);
        }
    }

    for (let u of universities) {
        $("#university-table").append("<tr><td>" + u.name + "</td><td>" + u.founded + "</td></tr>");
    }

    $("#start-animation").on("click", () => {
        $("#university-table tbody tr").remove()
        for (let p of paths) {
            if (p.id !== "hranice") {
                p.style.opacity = 0;
            }
        }
        time(1345);
    });
});