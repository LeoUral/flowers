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
                archive: false,
            }

        }

        this.doChangeSelect = this.doChangeSelect.bind(this);
        this.handleChangeFile = this.handleChangeFile.bind(this)
    }

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

    async componentDidMount() {
        this.setState({
            name: await getNameFlowers(),
            manufacturer: await getManufacturer(),
            grade: await getGrade(),
            growth: await getGrowth(),
        })
    }

    render() {
        const srcImg = `${URL_IMG_FLOWER}${this.state.flower.imageFlower}`
        console.log(`srcImg::: `, srcImg);
        return (
            <>
                <div className='new_flower' >
                    <div className='new_flower_box' >
                        <SelectString
                            title={'Название цветка:'}
                            placeholder={'название'}
                            keySelect={'name'}
                            arr={this.state.name}
                            doChangeSelect={this.doChangeSelect}
                        />
                    </div>
                    <div className='new_flower_box' >
                        <SelectString
                            title={'Производитель:'}
                            placeholder={'проиводитель'}
                            keySelect={'manufacturer'}
                            arr={this.state.manufacturer}
                            doChangeSelect={this.doChangeSelect}
                        />
                    </div>
                    <div className='new_flower_box' >
                        <SelectString
                            title={'Сорт:'}
                            placeholder={'сорт'}
                            keySelect={'grade'}
                            arr={this.state.grade}
                            doChangeSelect={this.doChangeSelect}
                        />
                    </div>
                    <div className='new_flower_box' >
                        <SelectString
                            title={'Рост:'}
                            placeholder={'рост'}
                            keySelect={'growth'}
                            arr={this.state.growth}
                            doChangeSelect={this.doChangeSelect}
                        />
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
                    <div className='new_flower_box' >
                        <form
                            ref='uploadForm'
                            id='uploadForm'
                            encType="multipart/form-data"
                        >
                            <input
                                className='input_file'
                                type='file'
                                name='img'
                                onChange={this.handleChangeFile}
                            />
                        </form>
                    </div>
                    <div className='new_flower_box_img' >
                        <img
                            className='img_flower'
                            src={srcImg}
                        />
                    </div>
                    <div className='new_flower_box' >
                        <button
                            className='btn_panel btn_save'
                            onClick={async () => { await saveFlower(this.state.flower) }}
                        >
                            Добавить
                        </button>
                    </div>
                </div>
            </>
        )
    }
}