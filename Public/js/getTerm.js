// get Term js page

function getTerm(datetime) {
   /* Determine the academic term using the courses datetime.
    *
    *  Args:
    *      Required - datetime (str) - the datetime string when the course started
    *  Returns:
    *      JSON Object - {term: "21F", year: 2021}
    */
    var d = new Date(datetime);
    var y = d.getFullYear();
    var yy = JSON.stringify(d.getFullYear()).slice(2,4);
    var term;

    if ((d.getMonth() > 0) && (d.getMonth() < 6)) {
        term = yy+"S";
    } else {
        term = yy+"F";
    }
    return term;
}

/*
 * NOTE
 * ----
 * user_data = getUserData(); is called in firebase.auth().onAuthStateChanged() after logged in status is verified!
 *
 */
