
export function isValidName(name: string): boolean {
    // Allows letters, spaces, and common punctuation in names.
    const re = /^[a-zA-Z]+(([' ,. -][a-zA-Z ])?[a-zA-Z]*)*$/;
    return re.test(String(name).toLowerCase());
}

export function isValidEmail(email: string): boolean {
    // A standard email validation regex.
    const re = new RegExp(/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/);
    return re.test(String(email).toLowerCase());
}

export function isSanitized(input: string): boolean {
    // Prevents common XSS attack vectors by checking for forbidden characters.
    const re = new RegExp("[<>{}\\[\\]\\\\;]");
    return !re.test(input);
}
