/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable default-case */
import React from 'react';
import InputString from '../InputString';
import SelectString from '../SelectString';
import getNameFlowers from './getNameFlowers'
import getManufacturer from './getManufacturer'
import getGrowth from './getGrowth'
import getGrade from './getGrade'
import Flowers from '../server/Flowers';
import { URL_IMG_FLOWER } from '../variables'
import saveFlower from './saveFlower';
import ModalAddPosition from './ModalAddPosition';
import SaveImage from '../SaveImage';


export default class AddNewFlower extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            name: [],
            manufacturer: [],
            grade: [],
            growth: [],
            imageFlower: [],
            show: true,
            showModalAdd: false,
            dataSet: 'null', // collection
            dataValue: '', // value
            flower: {
                name: '',
                manufacturer: '',
                grade: '',
                growth: '',
                imageFlower: '',
                datePurchase: new Date(),
                pricePurchase: 0,
                quantity: 0,
                archive: false,
            }

        }

        this.doChangeSelect = this.doChangeSelect.bind(this);
        this.handleChangeFile = this.handleChangeFile.bind(this);
        this.doChangeInputPosition = this.doChangeInputPosition.bind(this);
        this.handleClickAdd = this.handleClickAdd.bind(this);
        this.addNewPosition = this.addNewPosition.bind(this);
        this.loadDataBase = this.loadDataBase.bind(this);
    }

    /**
     * Добавление и сохранение новой позиции по разделам
     * @param {*} collection 
     * @param {*} data 
     */
    async addNewPosition(collection, data) {
        try {
            (async () => {
                switch (collection) {
                    case 'name':
                        await Flowers.addName(data)
                        await this.loadDataBase();
                        this.setState({ showModalAdd: false })
                        break;

                    case 'manufacturer':
                        await Flowers.addManufacturer(data)
                        await this.loadDataBase();
                        this.setState({ showModalAdd: false })
                        break;

                    case 'grade':
                        await Flowers.addGrade(data)
                        await this.loadDataBase();
                        this.setState({ showModalAdd: false })
                        break;

                    case 'growth':
                        await Flowers.addGrowth(data)
                        await this.loadDataBase();
                        this.setState({ showModalAdd: false })
                        break;

                }
            })()
        } catch (err) {
            console.log(`Ошибка записи позиции в базу`);
        }

    }

    /**
     * открытие модалки - сохранение новой позицииs
     * @param {*} e 
     */
    handleClickAdd(e) {
        this.setState({
            showModalAdd: true,
            dataSet: e.target.dataset.click,
        })

    }

    /**
     * Добавление новой позиции
     * @param {*} e 
     */
    doChangeInputPosition(e) {

        if (e.target.dataset.change === 'button_add') {
            console.log(`click ADD`); // test
            console.log(`collection::: `, this.state.dataSet);
            console.log(`VALUE::: `, this.state.dataValue);

            // *: Запустить добавление новой позиции
            this.addNewPosition(this.state.dataSet, this.state.dataValue)

        } else {
            this.setState({ dataValue: e.target.value })
        }


    }

    /**
     * сохранение рисунка
     * @param {*} e 
     */
    handleChangeFile(e) {
        console.log(`E >>>> `, e.target.files[0]);
        const file = e.target.files[0];
        try {
            (async () => {
                const formData = new FormData()
                formData.append('img', file)

                const data = await Flowers.createPhoto(formData);

                console.log(`FILE NAME:::: `, data);  // test
                let flower = this.state.flower;
                flower.imageFlower = data.fileName;
                this.setState({ flower: flower });

            })()
        } catch (err) {
            console.log(`Ошибка загрузки фото: `, err);
        }

    }

    /**
     * (props) Получаем выбранные данные цветка из массива 
     * @param {Object} obj props from SelectString
     */
    doChangeSelect(obj) {
        // console.log(obj); // test

        const key = obj.key
        let flower = this.state.flower

        switch (key) {
            case 'name':
                flower.name = obj.text
                this.setState({ flower: flower })
                break;

            case 'manufacturer':
                flower.manufacturer = obj.text
                this.setState({ flower: flower })
                break;

            case 'grade':
                flower.grade = obj.text
                this.setState({ flower: flower })
                break;

            case 'growth':
                flower.growth = obj.text
                this.setState({ flower: flower })
                break;

            case 'price':
                flower.pricePurchase = Number(obj.text)
                this.setState({ flower: flower })
                break;

            case 'quantity':
                flower.quantity = Number(obj.text)
                this.setState({ flower: flower })
                break;
        }
    }

    /**
     * Загрузка позиций цветка, срезки
     */
    async loadDataBase() {
        this.setState({
            name: await getNameFlowers(),
            manufacturer: await getManufacturer(),
            grade: await getGrade(),
            growth: await getGrowth(),
        })
    }

    async componentDidMount() {
        await this.loadDataBase();
    }

    render() {
        const srcImg = `${URL_IMG_FLOWER}${this.state.flower.imageFlower}`
        // console.log(`srcImg::: `, srcImg); // test
        return (
            <>
                {this.state.showModalAdd && <ModalAddPosition
                    nameHeader={this.state.dataSet}
                    doChange={this.doChangeInputPosition}
                    dataSet={this.state.dataSet}
                    doClickClose={() => { this.setState({ showModalAdd: false }) }}
                />}

                {this.state.show && <div className='new_flower' >
                    <div className='new_flower_box' >
                        <SelectString
                            title={'Название цветка:'}
                            placeholder={'название'}
                            keySelect={'name'}
                            arr={this.state.name}
                            doChangeSelect={this.doChangeSelect}
                        />
                        <div className='new_flower_box_btn' >
                            <button
                                className='btn_panel btn_save'
                                data-click='name'
                                onClick={this.handleClickAdd}
                            >
                                + название
                            </button>
                        </div>
                    </div>

                    <div className='new_flower_box' >
                        <SelectString
                            title={'Производитель:'}
                            placeholder={'проиводитель'}
                            keySelect={'manufacturer'}
                            arr={this.state.manufacturer}
                            doChangeSelect={this.doChangeSelect}
                        />

                        <div className='new_flower_box_btn' >
                            <button
                                className='btn_panel btn_save'
                                data-click='manufacturer'
                                onClick={this.handleClickAdd}
                            >
                                + производитель
                            </button>
                        </div>
                    </div>


                    <div className='new_flower_box' >
                        <SelectString
                            title={'Сорт:'}
                            placeholder={'сорт'}
                            keySelect={'grade'}
                            arr={this.state.grade}
                            doChangeSelect={this.doChangeSelect}
                        />
                        <div className='new_flower_box_btn' >
                            <button
                                className='btn_panel btn_save'
                                data-click='grade'
                                onClick={this.handleClickAdd}
                            >
                                + сорт
                            </button>
                        </div>

                    </div>


                    <div className='new_flower_box' >
                        <SelectString
                            title={'Рост:'}
                            placeholder={'рост'}
                            keySelect={'growth'}
                            arr={this.state.growth}
                            doChangeSelect={this.doChangeSelect}
                        />
                        <div className='new_flower_box_btn' >
                            <button
                                className='btn_panel btn_save'
                                data-click='growth'
                                onClick={this.handleClickAdd}
                            >
                                + рост
                            </button>
                        </div>


                    </div>

                    <div className='new_flower_box' >
                        <InputString
                            title={'Цена закупки, руб.'}
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

                    <SaveImage
                        handleChangeFile={this.handleChangeFile}
                        srcImg={srcImg}
                    />

                    <div className='new_flower_box' >
                        <button
                            className='btn_panel btn_save'
                            onClick={async () => {
                                await saveFlower(this.state.flower)
                                this.props.newFlower()
                            }}
                        >
                            Добавить
                        </button>
                    </div>
                </div>}
            </>
        )
    }
}