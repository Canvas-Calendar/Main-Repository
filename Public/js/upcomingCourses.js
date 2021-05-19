//upcoming courses js page

function parseCourseData(user_data) {
    var active_courses = $("#active_courses");

    console.log("parsing Courses...");

    // $.each(user_data.courses, function (i, e) {
    //     var course_term = getTerm(e["start_at"]);
    //     var course_name = e["name"];
    //     var course_url = "https://udel.instructure.com/courses/"+e["course_id"];

    //     console.log(course_name);

    //     // let li = document.createElement('li');
    //     // let a = document.createElement('a');
    //     // li.setAttribute("class", "list-group-item");
    //     // a.setAttribute("style", "color: rgb(0, 0, 0);");
    //     // a.setAttribute("href", course_url);
    //     // a.innerTEXT = course_name;

    //     // li.appendChild(a);
    //     // active_courses.append(li);
    // });
}

/*
 * NOTE
 * ----
 * user_data = getUserData(); is called in firebase.auth().onAuthStateChanged() after logged in status is verified!
 *
 */
