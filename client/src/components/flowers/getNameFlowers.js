import Flowers from '../server/Flowers';

/**
 * Получаем массив названий цветов
 * @returns 
 */
const getNameFlowers = async () => {
    try {
        return (async () => {
            const result = await Flowers.getName();
            return result;
        })()
    } catch (err) {
        console.log(`ERROR: `, err);
        return ({ error: err })
    }
}

export default getNameFlowers;