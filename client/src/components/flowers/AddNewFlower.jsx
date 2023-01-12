import React from 'react';
import InputString from '../InputString';
import SelectString from '../SelectString';

export default class AddNewFlower extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            manufacturer: '',
            grade: '',
            growth: '',
            imageFlower: '',
        }

        this.doSendObjectText = this.doSendObjectText.bind(this);
    }

    doSendObjectText(obj) {
        console.log(obj);
    }


    async componentDidMount() {

    }

    render() {
        return (
            <>
                <div> AddNewFlower </div>
                <SelectString
                    title={'title Select'}
                    keySelect={'KEY SELECT'}
                />
            </>
        )
    }
}