function submitJoinUsForm() {
  

    resetJoinUsForm() 

    // Username
    let username = $("#username").val().trim()
    if (username.length == 0) {
        $('#usernameRequired').removeClass('d-none')
    }
    if (username.length > 8) {
        $('#usernameLongerThanEightChar').removeClass('d-none')
    }

    // Email
    let email = $("#email").val().trim()
    if (email.length == 0) {
        $('#emailRequired').removeClass('d-none')
    }
    if (!validateEmail(email)) {
        $('#emailFormatRequired').removeClass('d-none')
    }

    // Password
    let password = $("#password").val()
    if (passwordIsLongerThanEightCharacters(password)) {
        $('#passwordLongerThanEightChar').removeClass('d-none')
    }
    if (!uppercaseExistsInPassword(password)) {
        $('#passwordUppercase').removeClass('d-none')
    }
    if (!lowercaseExistsInPassword(password)) {
        $('#passwordLowercase').removeClass('d-none')
    }
    if (!digitExistsInPassword(password)) {
        $('#passwordDigit').removeClass('d-none')
    }

    // First, middle, and last names
    let firstName = $("#firstName").val()
    let middleName = $("#middleName").val()
    let lastName = $("#lastName").val().trim()
    if (lastName.length === 0) {
        $('#lastNameRequired').removeClass('d-none')
    }

    // Gender
    let gender = $('#gender').val()
    if (gender.length === 0) {
        $('#genderRequired').removeClass('d-none')
    }

    // State
    let state = $('#state').val();
    if (state.length === 0) {
        $('#stateRequired').removeClass('d-none')
    }

    // Street address
    let streetAddress = $("#streetAddress").val()
    if (streetAddress.length === 0) {
        $('#streetAddressRequired').removeClass('d-none')
    }

    // City
    let city = $("#city").val()
    if (city.length === 0) {
        $('#cityRequired').removeClass('d-none')
    }

    // Zipcode
    let zipcode = $("#zipcode").val()
    if (zipcode.length === 0) {
        $('#zipCodeRequired').removeClass('d-none')
    }

    // Cell
    let tel = $("#tel").val()
    if (tel.length === 0) {
        $('#telRequired').removeClass('d-none')
    }

    // Country
    let country = $("#country").val()
    if (country.length === 0) {
        $('#countryRequired').removeClass('d-none')
    }

    // DoB
    let dob = $("#dob").val()
    if (dob.length === 0) {
        $('#dobRequired').removeClass('d-none')
    }

    // Member Organization
    let memberOrganization = $("#memberOrganization").val()


    $('#joinUsForm').submit(function (e){
        e.preventDefault(); //prevents refresh or reload of form before validation
    });
}

function resetJoinUsForm() {
    // Reset the classes for the errors in the form
    if (!$("#usernameRequired").hasClass("d-none")) $("#usernameRequired").addClass("d-none")
    if (!$("#usernameLongerThanEightChar").hasClass("d-none")) $("#usernameLongerThanEightChar").addClass("d-none")

    if (!$("#emailRequired").hasClass("d-none")) $("#emailRequired").addClass("d-none")
    if (!$("#emailFormatRequired").hasClass("d-none")) $("#emailFormatRequired").addClass("d-none")

    if (!$("#passwordLongerThanEightChar").hasClass("d-none")) $("#passwordLongerThanEightChar").addClass("d-none")
    if (!$("#passwordUppercase").hasClass("d-none")) $("#passwordUppercase").addClass("d-none")
    if (!$("#passwordLowercase").hasClass("d-none")) $("#passwordLowercase").addClass("d-none")
    if (!$("#passwordDigit").hasClass("d-none")) $("#passwordDigit").addClass("d-none")

    if (!$("#lastNameRequired").hasClass("d-none")) $("#lastNameRequired").addClass("d-none")

    if (!$("#genderRequired").hasClass("d-none")) $("#genderRequired").addClass("d-none")

    if (!$("#streetAddressRequired").hasClass("d-none")) $("#streetAddressRequired").addClass("d-none")

    if (!$("#cityRequired").hasClass("d-none")) $("#cityRequired").addClass("d-none")
    if (!$("#stateRequired").hasClass("d-none")) $("#stateRequired").addClass("d-none")
    if (!$("#zipCodeRequired").hasClass("d-none")) $("#zipCodeRequired").addClass("d-none")
    if (!$("#telRequired").hasClass("d-none")) $("#telRequired").addClass("d-none")
    if (!$("#countryRequired").hasClass("d-none")) $("#countryRequired").addClass("d-none")
    if (!$("#dobRequired").hasClass("d-none")) $("#dobRequired").addClass("d-none")
}