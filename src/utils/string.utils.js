export const toCamalCase = (value) => {
    const str_value = String(value)
    let new_value = ""

    for(let i = 0; i < str_value.length; i++) {
        if (str_value[i] == " ") {
            new_value += "_"
        } else {
            new_value += str_value[i].toLowerCase()
        }

    }

    return new_value
}

export const getFileName = (value) => {
    const lastBackSlash = value.lastIndexOf("\\") + 1
    return value.substring(lastBackSlash)
}