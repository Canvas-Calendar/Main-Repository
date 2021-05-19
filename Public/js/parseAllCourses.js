//parse all courses js page

function parseAllCourses(user_data) {
    var active_courses = $("#active_courses");

    console.log("parsing Course Data...");

    $.each(user_data["courses"], function (i, e) {
        var course_term = getTerm(e["start_at"]);
        var course_name = e["name"];
        var course_url = "https://udel.instructure.com/courses/"+e["course_id"];

        console.log(course_name);

        var li = document.createElement('li');
        var a = document.createElement('a');

        li.setAttribute("class", "list-group-item");
        a.setAttribute("style", "color: rgb(0, 0, 0);");
        a.setAttribute("href", course_url);
        a.innerHTML = e["name"];

        li.appendChild(a);
        active_courses.append(li);
    });
}

/*
 * NOTE
 * ----
 * user_data = getUserData(); is called in firebase.auth().onAuthStateChanged() after logged in status is verified!
 *
 */
