import React from 'react'
import AddNewPackage from './AddNewPackage';
import Package from '../server/Package.js';
import PackageTable from './PackageTable';
import ModalPackage from './ModalPackage';

export default class Pack extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            package: [],
            showPack: false,
            packData: {},
        }

        // this.getAllPackage = this.getAllPackage.bind(this);
        this.doClickPack = this.doClickPack.bind(this);
        this.doDeletePack = this.doDeletePack.bind(this);
        this.closeModal = this.closeModal.bind(this);
    }

    /**
    * Закрытие модалки
    */
    closeModal() {
        this.setState({ showCut: false })
    }

    /**
     * получаем всю упаковку
     * @returns {Array}
     */
    async getAllPackage() {
        try {
            (async () => {
                // *: Получить с базы всю упаковку для формирования таблицы
                const resultAllPack = await Package.getAll();
                this.setState({ package: resultAllPack.result });

                setTimeout(() => { console.log(`PACK:::: `, this.state.package); }) // test
            })()
        } catch (err) {
            console.log(`Ошибка процедуры при добавления новой упаковки: `, err);
        }
    }

    /**
        * Выбор позиции в таблице
        * @param {*} e 
        */
    doClickPack(e) {
        console.log(`CLICK::::: `, e); // test
        const resultPack = this.state.package.filter(item => item._id === e)
        console.log(resultPack[0]); // test
        this.setState({
            packData: resultPack[0],
            showCut: true,
        })
    }

    /**
    * Помещаем в архив выбранную упаковку
    * @param {*} e 
    */
    async doDeletePack(e) {
        (async () => {
            console.log(`DELETE :::::: `, e); // test
            const resultDel = await Package.deletePackOne(e)

            console.log(`server: `, resultDel); // test
            await this.getAllPackage()
        })()

    }


    async componentDidMount() {
        await this.getAllPackage();
    }

    render() {
        return (
            <>
                <div>
                    PACKAGE COMPONENT
                    <AddNewPackage
                        newPackage={this.getAllPackage}
                    />
                    <PackageTable
                        pack={this.state.package}
                        handleClickPack={this.doClickPack}
                        handleClickDeletePack={this.doDeletePack}
                    />

                    {this.state.showCut &&
                        <ModalPackage
                            textHeader={'HEADER'}
                            textFooter={'FOOTER'}
                            closeModal={this.closeModal}
                            packData={this.state.packData}
                        />}

                </div>

            </>
        )
    }
}