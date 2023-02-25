import Related from '../server/Related'


const saveRelated = async (relat) => {
    try {
        (async () => {

            if (
                !relat.groupRelated ||
                !relat.descriptionRelated ||
                !relat.formRelated ||
                !relat.sizeRelated ||
                !relat.pricePurchase ||
                !relat.quantity
            ) {
                console.log(relat);
                console.log(`ERROR: Не все данные введены!!!`);
                throw new Error('Не все данные введены!!!')
            }

            const result = await Related.create(relat);
            console.log(`RESULT::::> `, result); // test
        })()
    } catch (err) {
        console.log(`Ошибка добавление позиции цветка в базу: `, err);
    }

}

export default saveRelated;