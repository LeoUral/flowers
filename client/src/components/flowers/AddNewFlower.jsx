/* eslint-disable default-case */
import React from 'react';
import InputString from '../InputString';
import SelectString from '../SelectString';
import getNameFlowers from './getNameFlowers'
import getManufacturer from './getManufacturer'
import getGrowth from './getGrowth'
import getGrade from './getGrade'


export default class AddNewFlower extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: [],
            manufacturer: [],
            grade: [],
            growth: [],
            imageFlower: [],
            flower: {
                name: '',
                manufacturer: '',
                grade: '',
                growth: '',
                imageFlower: '',
                datePurchase: new Date(),
                pricePurchase: 0,
                quantity: 0,
            }
        }
        this.getName = this.getName.bind(this)
        this.getManufacturerFlower = this.getManufacturerFlower.bind(this);
        this.getGrowthFlower = this.getGrowthFlower.bind(this);

        this.doChangeSelect = this.doChangeSelect.bind(this);
    }

    /**
     * Загружаем массив названия цветов из DB
     * @returns {Array} Массив названий
     */
    async getName() {
        try {
            return (async () => {
                const result = await getNameFlowers();
                console.log(`RESULT:::::: `, result); // test

                return result
            })()
        } catch (err) {
            console.log(`ERROR: `, err);
        }
    }

    /**
     * Загружаем массив производителей цветов из DB
     * @returns {Array} Массив названий
     */
    async getManufacturerFlower() {
        try {
            return (async () => {
                const result = await getManufacturer()
                console.log(`RESULT:::::: `, result); // test

                return result
            })()
        } catch (err) {
            console.log(`ERROR: `, err);
        }
    }

    /**
     * Загружаем массив ростовки цветов
     * @returns 
     */
    async getGrowthFlower() {
        try {
            return (async () => {
                const result = await getGrowth()
                console.log(`RESULT:::::: `, result); // test

                return result
            })()
        } catch (err) {
            console.log(`ERROR: `, err);
        }
    }

    /**
     * Получаем сорта цветов
     * @returns 
     */
    async getGradeFlower() {
        try {
            return (async () => {
                const result = await getGrade()
                console.log(`RESULT:::::: `, result); // test

                return result
            })()
        } catch (err) {
            console.log(`ERROR: `, err);
        }
    }


    /**
     * (props) Получаем выбранные данные цветка из массива 
     * @param {Object} obj props from SelectString
     */
    doChangeSelect(obj) {
        console.log(obj); // test

        const key = obj.key
        let flower = this.state.flower

        switch (key) {
            case 'name':
                flower.name = obj.text
                this.setState({ flower: flower })
                setTimeout(() => { console.log(this.state); })
                break;

            case 'manufacturer':
                flower.manufacturer = obj.text
                this.setState({ flower: flower })
                setTimeout(() => { console.log(this.state); })
                break;

            case 'grade':
                flower.grade = obj.text
                this.setState({ flower: flower })
                setTimeout(() => { console.log(this.state); })
                break;

            case 'growth':
                flower.growth = obj.text
                this.setState({ flower: flower })
                setTimeout(() => { console.log(this.state); })
                break;

            case 'price':
                flower.pricePurchase = Number(obj.text)
                this.setState({ flower: flower })
                setTimeout(() => { console.log(this.state); })
                break;

            case 'quantity':
                flower.quantity = Number(obj.text)
                this.setState({ flower: flower })
                setTimeout(() => { console.log(this.state); })
                break;
        }
    }

    async componentDidMount() {
        this.setState({
            name: await this.getName(),
            manufacturer: await this.getManufacturerFlower(),
            grade: await this.getGradeFlower(),
            growth: await this.getGrowthFlower(),
        })

    }

    render() {
        return (
            <>
                <div className='new_flower' >
                    <div className='new_flower_box' >
                        <SelectString
                            title={'Название цветка:'}
                            keySelect={'name'}
                            arr={this.state.name}
                            doChangeSelect={this.doChangeSelect}
                        />
                    </div>
                    <div className='new_flower_box' >
                        <SelectString
                            title={'Производитель:'}
                            keySelect={'manufacturer'}
                            arr={this.state.manufacturer}
                            doChangeSelect={this.doChangeSelect}
                        />
                    </div>
                    <div className='new_flower_box' >
                        <SelectString
                            title={'Сорт:'}
                            keySelect={'grade'}
                            arr={this.state.grade}
                            doChangeSelect={this.doChangeSelect}
                        />
                    </div>
                    <div className='new_flower_box' >
                        <SelectString
                            title={'Рост:'}
                            keySelect={'growth'}
                            arr={this.state.growth}
                            doChangeSelect={this.doChangeSelect}
                        />
                    </div>
                    <div className='new_flower_box' >
                        <InputString
                            title={'Цена закупки'}
                            placeholder={'цена'}
                            keyInput={'price'}
                            doChangeSelect={this.doChangeSelect}
                        />
                    </div>
                    <div className='new_flower_box' >
                        <InputString
                            title={'Кол-во'}
                            placeholder={'кол-во'}
                            keyInput={'quantity'}
                            doChangeSelect={this.doChangeSelect}
                        />
                    </div>

                </div>
            </>
        )
    }
}