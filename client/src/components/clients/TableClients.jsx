import React, { useEffect, useState } from 'react'


const TableClients = ({ clients }) => {

    const [arr, setArr] = useState({})

    useEffect(() => {
        setArr(clients)
    }, [clients]);

    return (
        <>
            <table className='table_all' >
                <thead className='table_all_head' >
                    <tr className='table_all_tr' >
                        <th className='table_all_th table_all_th_point' >
                            п/п
                        </th>
                        <th className='table_all_th' >
                            login
                        </th>
                        <th className='table_all_th' >
                            phone
                        </th>
                        <th className='table_all_th' >
                            name
                        </th>
                        <th className='table_all_th' >
                            surname
                        </th>
                        <th className='table_all_th' >
                            patron
                        </th>
                        <th className='table_all_th' >
                            gender
                        </th>

                    </tr>
                </thead>
                <tbody className='table_all_body' >
                    {arr?.length && arr.map((item, index) => {
                        return (
                            <React.Fragment key={index}>
                                <tr className='table_all_tr' >
                                    <td className='table_all_td table_all_td_point' >
                                        {index + 1}
                                    </td>
                                    <td className='table_all_td' >
                                        {item.login}
                                    </td>
                                    <td className='table_all_td' >
                                        {item.phone}
                                    </td>
                                    <td className='table_all_td' >
                                        {item.name}
                                    </td>
                                    <td className='table_all_td' >
                                        {item.surname}
                                    </td>
                                    <td className='table_all_td' >
                                        {item.patron}
                                    </td>
                                    <td className='table_all_td' >
                                        {item.gender}
                                    </td>

                                </tr>

                            </React.Fragment>
                        )
                    })
                    }
                </tbody>
            </table>
        </>
    )
}

export default TableClients