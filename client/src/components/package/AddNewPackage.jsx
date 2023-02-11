import React from 'react'
import Package from '../server/Package';

export default class AddNewPackage extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            groupPackage: [],
            typePackage: [],
            colorPackage: [],
            unitsPackage: [],
            photoPackage: [],
            package: {
                groupPackage: [],
                typePackage: [],
                colorPackage: [],
                units: [],
                quantity: 0,
                pricePurchase: 0,
                photo: '',
                datePurchase: new Date(),
                archive: false,
            }
        }
        this.loadDataBase = this.loadDataBase.bind(this)

    }

    /**
     * Загрузка данных по упаковке
     */
    async loadDataBase() {
        this.setState({
            groupPackage: await Package.getOne('group'),
            typePackage: await Package.getOne('type'),
            colorPackage: await Package.getOne('color'),
            unitsPackage: await Package.getOne('units'),
        })
    }

    async componentDidMount() {
        await this.loadDataBase();
    }

    render() {
        return (
            <>
                <div>
                    ADD NEW PACKAGE
                </div>
            </>
        )
    }
}