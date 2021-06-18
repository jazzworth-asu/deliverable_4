function submitSignInForm() {

    signInFormIsValid = true

    resetSignInForm()

    //signin username
    let username = $("#signInInputUsername").val().trim()
    if (username.length == 0) {
        $('#signInInputUsernameRequired').removeClass('d-none')

        signInFormIsValid = false
    }

    //signin password
    let password = $("#signInpassword").val()
    if (password.length == 0) {
        $('#signInpasswordRequired').removeClass('d-none')

        signInFormIsValid = false
    }

    $('#signInForm').submit(function (e) {
        if (!signInFormIsValid) {
            e.preventDefault(); //prevents refresh or reload of form before validation
        }
    });

}

function resetSignInForm() {
    // Reset the classes for the errors in the form
    if (!$("#signInInputUsernameRequired").hasClass("d-none")) $("#signInInputUsernameRequired").addClass("d-none")
    if (!$("#signInpasswordRequired").hasClass("d-none")) $("#signInpasswordRequired").addClass("d-none")

}