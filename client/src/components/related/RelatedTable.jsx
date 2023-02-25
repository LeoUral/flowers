import React, { useState, useEffect } from 'react';
import parseDate from '../parseDate';


const RelatedTable = ({ related, handleClickRelated, handleClickDeleteRelated }) => {

    const [relatedAll, setRelatedAll] = useState([])

    useEffect(() => {
        setRelatedAll((related.filter(item => item.data.archive === false)).reverse())
    }, [related])

    return (
        <>
            <div> Сопутствующие товары на складе </div>
            <table className='table_all'>
                <thead className='table_all_head'>
                    <tr className='table_all_tr'>
                        <th className='table_all_th table_all_th_point'> п/п </th>
                        <th className='table_all_th'> Группа </th>
                        <th className='table_all_th'> Описание </th>
                        <th className='table_all_th'> Форма </th>
                        <th className='table_all_th'> Размер </th>
                        <th className='table_all_th'> Дата закупки </th>
                        <th className='table_all_th'> Цена закупа, руб. </th>
                        <th className='table_all_th'> Кол-во </th>
                        <th className='table_all_th'> Удалить </th>
                    </tr>
                </thead>
                <tbody className='table_all_body'>
                    {relatedAll && relatedAll.map((item, index) => {
                        return (
                            <React.Fragment key={index}>
                                <tr data-id={item._id} className='table_all_tr'  >
                                    <td
                                        className='table_all_td table_all_td_point table-hover table-point'
                                        onClick={() => { handleClickRelated(item._id) }}
                                    >
                                        {index + 1}
                                    </td>
                                    <td
                                        className='table_all_td table-point table-hover'
                                        onClick={() => { handleClickRelated(item._id) }}
                                    >
                                        {item.data.groupRelated}
                                    </td>
                                    <td
                                        className='table_all_td table-point table-hover'
                                        onClick={() => { handleClickRelated(item._id) }}
                                    >
                                        {item.data.descriptionRelated}
                                    </td>
                                    <td
                                        className='table_all_td table-point table-hover'
                                        onClick={() => { handleClickRelated(item._id) }}
                                    >
                                        {item.data.formRelated}
                                    </td>
                                    <td
                                        className='table_all_td table-point table-hover'
                                        onClick={() => { handleClickRelated(item._id) }}
                                    >
                                        {item.data.sizeRelated}
                                    </td>
                                    <td
                                        className='table_all_td table_all_td_point-flowers table-hover table-point'
                                        onClick={() => { handleClickRelated(item._id) }}
                                    >
                                        {parseDate(item.data.datePurchase)}
                                    </td>
                                    <td
                                        className='table_all_td table_all_td_point-flowers table-hover table-point'
                                        onClick={() => { handleClickRelated(item._id) }}
                                    >
                                        {item.data.pricePurchase}
                                    </td>
                                    <td
                                        className='table_all_td table_all_td_point-flowers table-hover table-point'
                                        onClick={() => { handleClickRelated(item._id) }}
                                    >
                                        {item.data.quantity}
                                    </td>

                                    <td
                                        className='table_all_td table_all_td_point-flowers table-point table-hover2'
                                        onClick={() => { handleClickDeleteRelated(item._id) }}
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

export default RelatedTable;