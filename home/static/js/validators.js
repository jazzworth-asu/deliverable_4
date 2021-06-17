function validateEmail(email) {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}

function lowercaseExistsInPassword(password) {
    return (/[a-z]/.test(password))
}

function uppercaseExistsInPassword(password) {
    return (/[A-Z]/.test(password))
}

function digitExistsInPassword(password) {
    return (/[0-9]/.test(password))
}

function passwordIsLongerThanEightCharacters(password) {
    return password.length > 8
}