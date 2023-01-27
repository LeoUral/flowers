import React, { useState, useEffect } from 'react';
import parseDate from '../parseDate';


const FlowersTable = ({ cut, handleClickCut, handleClickDeleteCut }) => {

    const [cutAll, setCutAll] = useState([])

    useEffect(() => {
        setCutAll((cut.filter(item => item.data.archive === false)).reverse())
    }, [cut])

    return (
        <>
            <div> Срезка на складе </div>
            <table className='table_all'>
                <thead className='table_all_head'>
                    <tr className='table_all_tr'>
                        <th className='table_all_th table_all_th_point'> п/п </th>
                        <th className='table_all_th'> Название </th>
                        <th className='table_all_th'> Производитель </th>
                        <th className='table_all_th'> Сорт </th>
                        <th className='table_all_th'> Рост </th>
                        <th className='table_all_th'> Дата закупки </th>
                        <th className='table_all_th'> Цена закупа, руб. </th>
                        <th className='table_all_th'> Кол-во, шт. </th>
                        <th className='table_all_th'> Удалить </th>
                    </tr>
                </thead>
                <tbody className='table_all_body'>
                    {cutAll && cutAll.map((item, index) => {
                        return (
                            <React.Fragment key={index}>
                                <tr data-id={item._id} className='table_all_tr'  >
                                    <td
                                        className='table_all_td table_all_td_point table-hover table-point'
                                        onClick={() => { handleClickCut(item._id) }}
                                    >
                                        {index + 1}
                                    </td>
                                    <td
                                        className='table_all_td table-point table-hover'
                                        onClick={() => { handleClickCut(item._id) }}
                                    >
                                        {item.data.name}
                                    </td>
                                    <td
                                        className='table_all_td table-point table-hover'
                                        onClick={() => { handleClickCut(item._id) }}
                                    >
                                        {item.data.manufacturer}
                                    </td>
                                    <td
                                        className='table_all_td table-point table-hover'
                                        onClick={() => { handleClickCut(item._id) }}
                                    >
                                        {item.data.grade}
                                    </td>
                                    <td
                                        className='table_all_td table-point table-hover'
                                        onClick={() => { handleClickCut(item._id) }}
                                    >
                                        {item.data.growth}
                                    </td>
                                    <td
                                        className='table_all_td table_all_td_point-flowers table-hover table-point'
                                        onClick={() => { handleClickCut(item._id) }}
                                    >
                                        {parseDate(item.data.datePurchase)}
                                    </td>
                                    <td
                                        className='table_all_td table_all_td_point-flowers table-hover table-point'
                                        onClick={() => { handleClickCut(item._id) }}
                                    >
                                        {item.data.pricePurchase}
                                    </td>
                                    <td
                                        className='table_all_td table_all_td_point-flowers table-hover table-point'
                                        onClick={() => { handleClickCut(item._id) }}
                                    >
                                        {item.data.quantity}
                                    </td>

                                    <td
                                        className='table_all_td table_all_td_point-flowers table-point table-hover2'
                                        onClick={() => { handleClickDeleteCut(item._id) }}
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

export default FlowersTable;