import React from 'react'
import AddNewRelated from './AddNewRelated';
import RelatedServer from '../server/Related';
import RelatedTable from './RelatedTable';
import ModalRelated from './ModalRelated';

export default class Related extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            related: [],
            showRelated: false,
            relatedData: {},
        }
        this.doClickRelated = this.doClickRelated.bind(this);
        this.closeModal = this.closeModal.bind(this);
        this.doDeleteRelated = this.doDeleteRelated.bind(this);
    }

    /**
   * Закрытие модалки
   */
    closeModal() {
        this.setState({ showRelated: false })
    }

    /**
     * Помещаем в архив выбранную позицию
     * @param {*} e 
     */
    async doDeleteRelated(e) {
        (async () => {
            console.log(`DELETE :::::: `, e); // test
            const resultDel = await RelatedServer.deletePackOne(e)

            console.log(`server: `, resultDel); // test
            await this.getAllRelated()
        })()

    }

    /**
     * Получение позиции в таблице
     * @param {*} e 
     */
    doClickRelated(e) {
        console.log(`CLICK::::: `, e); // test
        const resultRelated = this.state.related.filter(item => item._id === e)
        console.log(resultRelated[0]); // test
        this.setState({
            relatedData: resultRelated[0],
            showRelated: true,
        })
    }

    /**
     * Получить с базы все сопутствующие товары
     */
    async getAllRelated() {
        try {
            (async () => {
                // *: Получить с базы все сопутствующие товары для формирования таблицы
                const resultAllRelated = await RelatedServer.getAll();
                this.setState({ related: resultAllRelated.result });

                setTimeout(() => { console.log(`RELATED:::: `, this.state.related); }) // test
            })()
        } catch (err) {
            console.log(`Ошибка процедуры при добавления новых сопутствующих товаров: `, err);
        }
    }

    async componentDidMount() {
        await this.getAllRelated();
    }

    render() {
        return (
            <>
                <div>
                    RELATED COMPONENT
                    <AddNewRelated
                        newRealted={this.getAllRelated}
                    />
                    <RelatedTable
                        related={this.state.related}
                        handleClickRelated={this.doClickRelated}
                        handleClickDeleteRelated={this.doDeleteRelated}
                    />

                    {this.state.showRelated &&
                        <ModalRelated
                            textHeader={'HEADER'}
                            textFooter={'FOOTER'}
                            closeModal={this.closeModal}
                            relatedData={this.state.relatedData}
                        />}
                </div>
            </>
        )
    }
}