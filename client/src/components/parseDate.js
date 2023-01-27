/**
 * Парсит дату в ДД-ММ-ГГГГ
 * @param {*} dateOld Объект new Date()
 * @returns {String} ДД-ММ-ГГГГ
 */
const parseDate = (dateOld) => {

    let date = new Date(dateOld);

    const year = date.getFullYear()

    let month = date.getMonth() + 1
    if (month < 10) {
        month = `0${month}`
    }

    let day = date.getDate()
    if (day < 10) {
        day = `0${day}`
    }

    const newDate = `${day}-${month}-${year}`

    return newDate;
}

export default parseDate;