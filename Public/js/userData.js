/*
 * TEDDY EDIT - Mission 1 - Let's get this Refresh Button working!
 * [tasks]
 * 1. Get Firebase related "User Details" for the currently logged in user
 * 2. Use those details to query the Firebase DB for user data
 * 3. Initialize the "UDCanvasAPI {udcanvas}" object
 * 4. Query the UDCanvasAPI and update the results in the Firebase DB
 */
function getUserData() {
    /* TASK 1 */
    var data = {};
    data.user_id = firebase.auth().currentUser.uid;

    /* TASK 2 */
    data.db_ref = firebase.database().ref('users/' + data.user_id);     /*   users / 4ZLvUhSElBgZe2eke6M6EE8P74l1   */
    data.db_ref.on('value', (snapshot) => {                             /*   using .on not .once - gets data at time of the event   */
        snapshot.forEach((childSnapshot) => {
            var childKey = childSnapshot.key;
            var childData = childSnapshot.val();
            data[childKey] = childData;
        });
    });
    return data;
}

var user_data;                  /*  Storing user_data globally after page loads and firebase is initialized   */

/*
 * NOTE
 * ----
 * user_data = getUserData(); is called in firebase.auth().onAuthStateChanged() after logged in status is verified!
 *
 */
