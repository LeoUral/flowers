import Flowers from '../server/Flowers';

/**
 * Получаем массив ростовки цветов
 * @returns 
 */
const getGrowth = async () => {
    try {
        return (async () => {
            const result = await Flowers.getGrowth()
            return result;
        })()
    } catch (err) {
        console.log(`ERROR: `, err);
        return ({ error: err })
    }
}

export default getGrowth;