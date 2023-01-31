import React from 'react'
import AddNewFlower from './AddNewFlower';
import Flower from '../server/Flowers'
import FlowersTable from './FlowersTable';
import ModalCutFlower from './ModalCutFlower';


export default class Flowers extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            cut: [],
            showCut: false,
            cutDataFlower: {},
        }

        this.getAllCutFlowers = this.getAllCutFlowers.bind(this);
        this.doClickCut = this.doClickCut.bind(this);
        this.doDeleteCut = this.doDeleteCut.bind(this);
        this.closeModal = this.closeModal.bind(this);
    }
    /**
     * Закрытие модалки
     */
    closeModal() {
        this.setState({ showCut: false })
    }

    /**
     * Помещаем в архив выбранную срезку
     * @param {*} e 
     */
    async doDeleteCut(e) {
        (async () => {
            console.log(`DELETE :::::: `, e); // test
            const resultDel = await Flower.deleteCutOne(e)

            console.log(`server: `, resultDel); // test
            await this.getAllCutFlowers()
        })()

    }

    /**
     * Выбор позиции срезки в таблице
     * @param {*} e 
     */
    doClickCut(e) {
        console.log(`CLICK::::: `, e); // test
        const resultCut = this.state.cut.filter(item => item._id === e)

        this.setState({
            cutDataFlower: resultCut[0],
            showCut: true,
        })
    }

    /**
     * Получаем всю срезку, которая есть в базе
     * @returns {Array} 
     */
    async getAllCutFlowers() {
        try {
            (async () => {
                // *: Получить с базы всю срезку для формирования таблицы
                const resultAllCut = await Flower.getAllCut();
                this.setState({ cut: resultAllCut.result });

                setTimeout(() => { console.log(`CUT:::: `, this.state.cut); }) // test
            })()
        } catch (err) {
            console.log(`Ошибка процедуры при добавления нового цветка в срезку: `, err);
        }
    }

    async componentDidMount() {
        await this.getAllCutFlowers();
    }

    render() {
        return (
            <>
                <div>
                    FLOWERS COMPONENT
                    <AddNewFlower
                        newFlower={this.getAllCutFlowers}
                    />
                    <FlowersTable
                        cut={this.state.cut}
                        handleClickCut={this.doClickCut}
                        handleClickDeleteCut={this.doDeleteCut}
                    />

                    {this.state.showCut && <ModalCutFlower
                        textHeader={'HEADER'}
                        textFooter={'FOOTER'}
                        closeModal={this.closeModal}
                        cutDataFlower={this.state.cutDataFlower}
                    />}
                </div>
            </>
        )
    }
}