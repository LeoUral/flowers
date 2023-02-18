import Package from '../server/Package';



const savePackage = async (pack) => {
    try {
        (async () => {

            if (
                !pack.groupPackage ||
                !pack.typePackage ||
                !pack.colorPackage ||
                !pack.units ||
                !pack.pricePurchase ||
                !pack.quantity
            ) {
                console.log(`ERROR: Не все данные введены!!!`);
                throw new Error('Не все данные введены!!!')
            }

            const result = await Package.createPackage(pack);
            console.log(`RESULT::::> `, result); // test
        })()
    } catch (err) {
        console.log(`Ошибка добавление позиции цветка в базу: `, err);
    }

}

export default savePackage;