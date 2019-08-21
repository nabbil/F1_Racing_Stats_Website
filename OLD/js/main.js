/* JavaScript Promise

A Promise is an object that represents the eventual completion 
or failure of an asynchronous operation.

A callback will halt execution until the event has finished 
A Promise will not halt execution 

Observables in Typescript work similar to a promise but have more utility 

*/

// let myFirstPromises = new Promise((resolve, reject) => {
//     // We will call resolve(...) when what we are doing asynchronously is successful 
//     // Also we will call reject if that failed
//     setTimeout(function () {
//         resolve('Success');
//     }, 3000)

// })

// myFirstPromises.then((SuccessMessage) => {
//     // Success Message
//     console.log("Congrats" + SuccessMessage)
// }).catch((FailMessage) => {
//     console.log("We don't have no grapes")
// })

// function myAsyncFunc(url) {
//     return new Promise((resolve, reject) => {
//         const xhttp = new XMLHttpRequest();
//         xhttp.open("GET", url);
//         xhttp.onload = () => resolve(xhttp.responseText)
//         xhttp.onerror = () => reject(xhttp.statusText);
//         console.log("Working on data ...")
//         xhttp.send()
//     })
// }


// // Working Example 
// console.log(myAsyncFunc('https://images.unsplash.com/photo-1542430134-78b46c598793?ixlib=rb-1.2.1&auto=format&fit=crop&w=1553&q=80').then(() => {
//     console.log("We have data now")
// }))

// // Non Working Example
// console.log(myAsyncFunc('http://madeuo.notreal').then(() => {
//         console.log("We have data now")
//     })
//     .catch(() => {
//         console.log('This Does Not Work Anymore')
//     }))

//switch statement 

// switch (new Date().getDay()) {
//     case 0:
//         day = "Sunday";
//         break;
//     case 1:
//         day = "Monday";
//         break;
//     case 2:
//         day = "Tuesday";
//         break;
//     case 3:
//         day = "Wednesday";
//         console.log(day)
//         break;
//     case 4:
//         day = "Thursday";
//         break;
//     case 5:
//         day = "Friday";
//         break;
//     case 6:
//         day = "Saturday";
// }


function changeColor() {
    $('body').css('background-color', 'red')
}

function onSubmit() {
    let name = $("#submit-form input[name=full-name]").val()
    console.log(name)
}

function dataChange() {
    let year = $("#change-form input[name=year]").val()

    $.get('https://ergast.com/api/f1/' + year + '/5/driverStandings.json', function (data) {
        console.log(data)
        let name = (data.MRData.StandingsTable.StandingsLists[0].DriverStandings[0].Driver.givenName)
        $("#DriveName").text(name)
    })
}