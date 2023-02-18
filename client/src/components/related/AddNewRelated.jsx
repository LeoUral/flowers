/* eslint-disable default-case */
import React from 'react'
// import Package from '../server/Package';
// import InputString from '../InputString';
// import SelectString from '../SelectString';
import { URL_IMG_RELATED } from '../variables'
// import ModalAddPosition from '../ModalAddPosition';
// import SaveImage from '../SaveImage';
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

        // this.doChangeSelect = this.doChangeSelect.bind(this);
        // this.handleChangeFile = this.handleChangeFile.bind(this);
        // this.doChangeInputPosition = this.doChangeInputPosition.bind(this);
        // this.handleClickAdd = this.handleClickAdd.bind(this);
        // this.addNewPosition = this.addNewPosition.bind(this);
        // this.loadDataBase = this.loadDataBase.bind(this);

    }

    /**
    * Добавление и сохранение новой позиции по разделам
    * @param {*} collection 
    * @param {*} data 
    */
    // async addNewPosition(collection, data) {
    //     try {
    //         (async () => {
    //             switch (collection) {
    //                 case 'group':
    //                     await Package.createGroup(data)
    //                     await this.loadDataBase();
    //                     this.setState({ showModalAdd: false })
    //                     break;

    //                 case 'type':
    //                     await Package.createType(data)
    //                     await this.loadDataBase();
    //                     this.setState({ showModalAdd: false })
    //                     break;

    //                 case 'color':
    //                     await Package.createColor(data)
    //                     await this.loadDataBase();
    //                     this.setState({ showModalAdd: false })
    //                     break;

    //                 case 'units':
    //                     await Package.createUnits(data)
    //                     await this.loadDataBase();
    //                     this.setState({ showModalAdd: false })
    //                     break;

    //             }
    //         })()
    //     } catch (err) {
    //         console.log(`Ошибка записи позиции в базу`);
    //     }

    // }


    /**
   * открытие модалки - сохранение новой позицииs
   * @param {*} e 
   */
    // handleClickAdd(e) {
    //     this.setState({
    //         showModalAdd: true,
    //         dataSet: e.target.dataset.click,
    //     })

    // }

    /**
       * Добавление новой позиции
       * @param {*} e 
       */
    // doChangeInputPosition(e) {

    //     if (e.target.dataset.change === 'button_add') {
    //         console.log(`click ADD`); // test
    //         console.log(`collection::: `, this.state.dataSet);
    //         console.log(`VALUE::: `, this.state.dataValue);

    //         // *: Запустить добавление новой позиции
    //         this.addNewPosition(this.state.dataSet, this.state.dataValue)

    //     } else {
    //         this.setState({ dataValue: e.target.value })
    //     }


    // }


    /**
       * сохранение рисунка
       * @param {*} e 
       */
    // handleChangeFile(e) {
    //     console.log(`E >>>> `, e.target.files[0]);
    //     const file = e.target.files[0];
    //     try {
    //         (async () => {
    //             const formData = new FormData()
    //             formData.append('img', file)

    //             const data = await Package.createPhoto(formData);

    //             console.log(`FILE NAME:::: `, data);  // test
    //             let pack = this.state.package;
    //             pack.photo = data.fileName;
    //             this.setState({ package: pack });

    //         })()
    //     } catch (err) {
    //         console.log(`Ошибка загрузки фото: `, err);
    //     }

    // }


    /**
     * получаем выбранные данные
     * @param {*} obj 
     */
    // doChangeSelect(obj) {
    //     // console.log(obj); // test

    //     const key = obj.key
    //     let pack = this.state.package

    //     switch (key) {
    //         case 'group':
    //             pack.groupPackage = obj.text
    //             this.setState({ package: pack })
    //             break;

    //         case 'type':
    //             pack.typePackage = obj.text
    //             this.setState({ package: pack })
    //             break;

    //         case 'color':
    //             pack.colorPackage = obj.text
    //             this.setState({ package: pack })
    //             break;

    //         case 'units':
    //             pack.units = obj.text
    //             this.setState({ package: pack })
    //             break;

    //         case 'price':
    //             pack.pricePurchase = Number(obj.text)
    //             this.setState({ package: pack })
    //             break;

    //         case 'quantity':
    //             pack.quantity = Number(obj.text)
    //             this.setState({ package: pack })
    //             break;
    //     }
    // }


    /**
     * Загрузка данных по упаковке
     */
    async loadDataBase() {
        // this.setState({
        //     groupPackage: await Package.getOne('group'),
        //     typePackage: await Package.getOne('type'),
        //     colorPackage: await Package.getOne('color'),
        //     unitsPackage: await Package.getOne('units'),
        // })
    }

    async componentDidMount() {
        await this.loadDataBase();
    }

    render() {
        const srcImg = `${URL_IMG_RELATED}${this.state.related.photo}`
        return (
            <>
                <div>
                    ADD NEW RELATED

                    {/* {this.state.showModalAdd && <ModalAddPosition
                    nameHeader={this.state.dataSet}
                    doChange={this.doChangeInputPosition}
                    dataSet={this.state.dataSet}
                    doClickClose={() => { this.setState({ showModalAdd: false }) }}
                />} */}

                    {/* {this.state.show && <div className='new_flower' >
                    <div className='new_flower_box' >
                        <SelectString
                            title={'Группа упаковки:'}
                            placeholder={'Группа упаковки'}
                            keySelect={'group'}
                            arr={this.state.groupPackage}
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
                            title={'Тип упаковки:'}
                            placeholder={'Тип упаковки'}
                            keySelect={'type'}
                            arr={this.state.typePackage}
                            doChangeSelect={this.doChangeSelect}
                        />

                        <div className='new_flower_box_btn' >
                            <button
                                className='btn_panel btn_save'
                                data-click='type'
                                onClick={this.handleClickAdd}
                            >
                                + тип
                            </button>
                        </div>
                    </div>


                    <div className='new_flower_box' >
                        <SelectString
                            title={'Цвет:'}
                            placeholder={'цвет'}
                            keySelect={'color'}
                            arr={this.state.colorPackage}
                            doChangeSelect={this.doChangeSelect}
                        />
                        <div className='new_flower_box_btn' >
                            <button
                                className='btn_panel btn_save'
                                data-click='color'
                                onClick={this.handleClickAdd}
                            >
                                + цвет
                            </button>
                        </div>

                    </div>


                    <div className='new_flower_box' >
                        <SelectString
                            title={'Ед.изм:'}
                            placeholder={'ед.изм'}
                            keySelect={'units'}
                            arr={this.state.unitsPackage}
                            doChangeSelect={this.doChangeSelect}
                        />
                        <div className='new_flower_box_btn' >
                            <button
                                className='btn_panel btn_save'
                                data-click='units'
                                onClick={this.handleClickAdd}
                            >
                                + ед.изм
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
                                await savePackage(this.state.package);
                                this.props.newPackage()
                            }}
                        >
                            Добавить
                        </button>
                    </div>
                </div>} */}
                </div>
            </>
        )
    }
}