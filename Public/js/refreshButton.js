/*
 * TEDDY EDIT - Mission 1 - Let's get this Refresh Button working!
 * [tasks]
 * 1. Get Firebase related "User Details" for the currently logged in user
 * 2. Use those details to query the Firebase DB for user data
 * 3. Initialize the "UDCanvasAPI {udcanvas}" object
 * 4. Query the UDCanvasAPI and update the results in the Firebase DB
 */

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
