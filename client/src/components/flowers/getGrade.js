import Flowers from '../server/Flowers';

/**
 * Получаем массив сортов цветов
 * @returns 
 */
const getGrade = async () => {
    try {
        return (async () => {
            const result = await Flowers.getGrade()
            return result;
        })()
    } catch (err) {
        console.log(`ERROR: `, err);
        return ({ error: err })
    }
}

export default getGrade;