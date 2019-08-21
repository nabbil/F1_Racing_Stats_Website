(function ($) {
    "use strict";




})(jQuery);



function onSubmit() {
    let name = $("#submit-form input[name=full-name]").val()
    console.log(name)
}

function dataChange() {
    let year = $("#change-form input[name=year]").val()
    let lap = $("#change-form input[name=lap]").val()

    $.get('https://ergast.com/api/f1/' + year + '/' + lap + '/driverStandings.json', function (data) {
        console.log(data)
        let first_name = (data.MRData.StandingsTable.StandingsLists[0].DriverStandings[0].Driver.givenName)
        let last_name = (data.MRData.StandingsTable.StandingsLists[0].DriverStandings[0].Driver.familyName)
        let position = (data.MRData.StandingsTable.StandingsLists[0].DriverStandings[0].position)
        let nationality = (data.MRData.StandingsTable.StandingsLists[0].DriverStandings[0].Driver.nationality)
        let points = (data.MRData.StandingsTable.StandingsLists[0].DriverStandings[0].points)
        let wins = (data.MRData.StandingsTable.StandingsLists[0].DriverStandings[0].wins)
        let sponsor = (data.MRData.StandingsTable.StandingsLists[0].DriverStandings[0].Constructors[0].constructorId)

        $("#DriveName").text(first_name + " " + last_name)
        $("#Position").text(position)
        $("#Nation").text(nationality)
        $("#Sponsor").text(sponsor)
        $("#Points").text(points)
        $("#Wins").text(wins)







    })
}