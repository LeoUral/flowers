import Flowers from '../server/Flowers';

/**
 * Получаем массив производителей цветов
 * @returns 
 */
const getManufacturer = async () => {
    try {
        return (async () => {
            const result = await Flowers.getManufacturer();
            return result;
        })()
    } catch (err) {
        console.log(`ERROR: `, err);
        return ({ error: err })
    }
}

export default getManufacturer;