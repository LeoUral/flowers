import Flowers from '../server/Flowers';

/**
 * Добавление в базу новой позиции цветка
 * @param {Object} flower Объект с данными по цветку
 */
const saveFlower = async (flower) => {
    try {
        (async () => {
            const result = await Flowers.createFlower(flower);
            console.log(`RESULT:::: `, result); // test
        })()
    } catch (err) {
        console.log(`Ошибка добавление позиции цветка в базу: `, err);
    }

}

export default saveFlower;