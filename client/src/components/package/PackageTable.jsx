import React, { useState, useEffect } from 'react';
import parseDate from '../parseDate';


const PackageTable = ({ pack, handleClickPack, handleClickDeletePack }) => {

    const [packAll, setPackAll] = useState([])

    useEffect(() => {
        setPackAll((pack.filter(item => item.data.archive === false)).reverse())
    }, [pack])

    return (
        <>
            <div> Упаковка на складе </div>
            <table className='table_all'>
                <thead className='table_all_head'>
                    <tr className='table_all_tr'>
                        <th className='table_all_th table_all_th_point'> п/п </th>
                        <th className='table_all_th'> Группа </th>
                        <th className='table_all_th'> Тип </th>
                        <th className='table_all_th'> Цвет </th>
                        <th className='table_all_th'> Ед.изм </th>
                        <th className='table_all_th'> Дата закупки </th>
                        <th className='table_all_th'> Цена закупа, руб. </th>
                        <th className='table_all_th'> Кол-во </th>
                        <th className='table_all_th'> Удалить </th>
                    </tr>
                </thead>
                <tbody className='table_all_body'>
                    {packAll && packAll.map((item, index) => {
                        return (
                            <React.Fragment key={index}>
                                <tr data-id={item._id} className='table_all_tr'  >
                                    <td
                                        className='table_all_td table_all_td_point table-hover table-point'
                                        onClick={() => { handleClickPack(item._id) }}
                                    >
                                        {index + 1}
                                    </td>
                                    <td
                                        className='table_all_td table-point table-hover'
                                        onClick={() => { handleClickPack(item._id) }}
                                    >
                                        {item.data.groupPackage}
                                    </td>
                                    <td
                                        className='table_all_td table-point table-hover'
                                        onClick={() => { handleClickPack(item._id) }}
                                    >
                                        {item.data.typePackage}
                                    </td>
                                    <td
                                        className='table_all_td table-point table-hover'
                                        onClick={() => { handleClickPack(item._id) }}
                                    >
                                        {item.data.colorPackage}
                                    </td>
                                    <td
                                        className='table_all_td table-point table-hover'
                                        onClick={() => { handleClickPack(item._id) }}
                                    >
                                        {item.data.units}
                                    </td>
                                    <td
                                        className='table_all_td table_all_td_point-flowers table-hover table-point'
                                        onClick={() => { handleClickPack(item._id) }}
                                    >
                                        {parseDate(item.data.datePurchase)}
                                    </td>
                                    <td
                                        className='table_all_td table_all_td_point-flowers table-hover table-point'
                                        onClick={() => { handleClickPack(item._id) }}
                                    >
                                        {item.data.pricePurchase}
                                    </td>
                                    <td
                                        className='table_all_td table_all_td_point-flowers table-hover table-point'
                                        onClick={() => { handleClickPack(item._id) }}
                                    >
                                        {item.data.quantity}
                                    </td>

                                    <td
                                        className='table_all_td table_all_td_point-flowers table-point table-hover2'
                                        onClick={() => { handleClickDeletePack(item._id) }}
                                    >
                                        &#10008;
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

export default PackageTable;