import React from 'react'
import Users from '../server/Users';
import check from '../server/doCheck'
import TableClients from './TableClients';

export default class Clients extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            clients: [],
        }

        this.getClients = this.getClients.bind(this);
    }

    async getClients() {
        try {
            return (async () => {
                const checked = await check()

                if (checked.session) {
                    return await Users.getClients();
                } else {
                    return { messageError: 'Ошибка ключа' }
                }
            })()
        } catch (err) {
            console.log(`Ошибка: `, err);
        }
    }

    async componentDidMount() {
        this.setState({ clients: await this.getClients() })
        setTimeout(() => {
            console.log(`CLIENTS::: `, this.state.clients) // test
        })

    }

    render() {
        return (
            <>
                <div>
                    <TableClients
                        clients={this.state.clients.clients}
                    />
                </div>
            </>
        )
    }
}