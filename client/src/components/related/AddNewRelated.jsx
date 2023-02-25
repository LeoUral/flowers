/* eslint-disable default-case */
import React from 'react'
import Related from '../server/Related'
import InputString from '../InputString';
import SelectString from '../SelectString';
import { URL_IMG_RELATED } from '../variables'
import ModalAddPosition from '../ModalAddPosition';
import SaveImage from '../SaveImage';
import saveRelated from './saveRelated';
// import savePackage from './savePackage';


export default class AddNewRelated extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            groupRelated: [],
            descriptionRelated: [],
            formRelated: [],
            sizeRelated: [],
            show: true,
            showModalAdd: false,
            dataSet: 'null', // collection
            dataValue: '', // value
            related: {
                groupRelated: '',
                descriptionRelated: '',
                formRelated: '',
                sizeRelated: '',
                quantity: 0,
                pricePurchase: 0,
                photo: '',
                datePurchase: new Date(),
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
                    case 'group':
                        await Related.createGroup(data)
                        await this.loadDataBase();
                        this.setState({ showModalAdd: false })
                        break;

                    case 'description':
                        await Related.createDescription(data)
                        await this.loadDataBase();
                        this.setState({ showModalAdd: false })
                        break;

                    case 'form':
                        await Related.createForm(data)
                        await this.loadDataBase();
                        this.setState({ showModalAdd: false })
                        break;

                    case 'size':
                        await Related.createSize(data)
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

                const data = await Related.createPhoto(formData);

                console.log(`FILE NAME:::: `, data);  // test
                let relat = this.state.related;
                relat.photo = data.fileName;
                this.setState({ related: relat });

            })()
        } catch (err) {
            console.log(`Ошибка загрузки фото: `, err);
        }

    }


    /**
     * получаем выбранные данные
     * @param {*} obj 
     */
    doChangeSelect(obj) {
        // console.log(obj); // test

        const key = obj.key
        let relat = this.state.related

        switch (key) {
            case 'group':
                relat.groupRelated = obj.text
                this.setState({ related: relat })
                break;

            case 'description':
                relat.descriptionRelated = obj.text
                this.setState({ related: relat })
                break;

            case 'form':
                relat.formRelated = obj.text
                this.setState({ related: relat })
                break;

            case 'size':
                relat.sizeRelated = obj.text
                this.setState({ related: relat })
                break;

            case 'price':
                relat.pricePurchase = Number(obj.text)
                this.setState({ related: relat })
                break;

            case 'quantity':
                relat.quantity = Number(obj.text)
                this.setState({ related: relat })
                break;
        }
    }


    /**
     * Загрузка данных по упаковке
     */
    async loadDataBase() {
        this.setState({
            groupRelated: await Related.getOne('group'),
            descriptionRelated: await Related.getOne('description'),
            formRelated: await Related.getOne('form'),
            sizeRelated: await Related.getOne('size'),
        })
    }

    async componentDidMount() {
        await this.loadDataBase();
    }

    render() {
        const srcImg = `${URL_IMG_RELATED}${this.state.related.photo}`
        return (
            <>
                <div>
                    {this.state.showModalAdd && <ModalAddPosition
                        nameHeader={this.state.dataSet}
                        doChange={this.doChangeInputPosition}
                        dataSet={this.state.dataSet}
                        doClickClose={() => { this.setState({ showModalAdd: false }) }}
                    />}

                    {this.state.show && <div className='new_flower' >
                        <div className='new_flower_box' >
                            <SelectString
                                title={'Группа сопутствующих товаров:'}
                                placeholder={'Группа сопутствующих тов'}
                                keySelect={'group'}
                                arr={this.state.groupRelated}
                                doChangeSelect={this.doChangeSelect}
                            />
                            <div className='new_flower_box_btn' >
                                <button
                                    className='btn_panel btn_save'
                                    data-click='group'
                                    onClick={this.handleClickAdd}
                                >
                                    + группа
                                </button>
                            </div>
                        </div>

                        <div className='new_flower_box' >
                            <SelectString
                                title={'Описание сопутствующих товаров:'}
                                placeholder={'описание'}
                                keySelect={'description'}
                                arr={this.state.descriptionRelated}
                                doChangeSelect={this.doChangeSelect}
                            />

                            <div className='new_flower_box_btn' >
                                <button
                                    className='btn_panel btn_save'
                                    data-click='description'
                                    onClick={this.handleClickAdd}
                                >
                                    + описание
                                </button>
                            </div>
                        </div>


                        <div className='new_flower_box' >
                            <SelectString
                                title={'Форма:'}
                                placeholder={'форма'}
                                keySelect={'form'}
                                arr={this.state.formRelated}
                                doChangeSelect={this.doChangeSelect}
                            />
                            <div className='new_flower_box_btn' >
                                <button
                                    className='btn_panel btn_save'
                                    data-click='form'
                                    onClick={this.handleClickAdd}
                                >
                                    + форма
                                </button>
                            </div>

                        </div>


                        <div className='new_flower_box' >
                            <SelectString
                                title={'Размер:'}
                                placeholder={'размер'}
                                keySelect={'size'}
                                arr={this.state.sizeRelated}
                                doChangeSelect={this.doChangeSelect}
                            />
                            <div className='new_flower_box_btn' >
                                <button
                                    className='btn_panel btn_save'
                                    data-click='size'
                                    onClick={this.handleClickAdd}
                                >
                                    + размер
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
                                    await saveRelated(this.state.related);
                                    this.props.newRealted()
                                }}
                            >
                                Добавить
                            </button>
                        </div>
                    </div>}
                </div>
            </>
        )
    }
}