//refresh button js page

//Refresh Button ________________________________________
$("#refresh-btn").on("click", function (e) {
    e.preventDefault();
    var DELAY = 5000;
    var spinner  = $(this);
    /* TASK 3 */
    var udcanvas = new UDCanvasAPI(user_data.api_key);
    /* (async() => {
     *     console.log("waiting for variable");
     *     while(!user_data.hasOwnProperty("api_key")) // define the condition as you like
     *         await new Promise(resolve => setTimeout(resolve, 1000));
     *     console.log("variable is defined");
     *     udcanvas = new UDCanvasAPI(user_data.api_key);
     * })(); */

    /* TASK 4 */
    $(spinner).buttonLoader('start');
    $(function() {
        function upload_courses() {
            var courses = udcanvas.getCourses();
            user_data.db_ref.update({
                courses: courses
            }).then(function() {
                console.log('Updated UDCanvas course in firebase DB');
                $(spinner).buttonLoader('stop');
            });
        };
        window.setTimeout(upload_courses, DELAY); // 5 seconds
    });
});
