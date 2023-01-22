import Flowers from '../server/Flowers';

/**
 * Добавление в базу новой позиции цветка
 * @param {Object} flower Объект с данными по цветку
 */
const saveFlower = async (flower) => {
    try {
        (async () => {

            if (
                !flower.name ||
                !flower.manufacturer ||
                !flower.grade ||
                !flower.growth ||
                !flower.pricePurchase ||
                !flower.quantity
            ) {
                console.log(`ERROR: Не все данные введены!!!`);
                throw new Error('Не все данные введены!!!')
            }

            const result = await Flowers.createFlower(flower);
            console.log(`RESULT:::: `, result); // test
        })()
    } catch (err) {
        console.log(`Ошибка добавление позиции цветка в базу: `, err);
    }

}

export default saveFlower;