import React from 'react'

export default class AddNewPackage extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            groupPackage: [],
            typePackage: [],
            colorPackage: [],
            units: [],
            photo: [],
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