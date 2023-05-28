import { useState, useEffect } from 'react'
import DataTable from 'datatables.net-dt';
import 'datatables.net-dt/css/jquery.dataTables.min.css'
import $ from 'jquery'

export default function Table(props){
    const {data, config, el} = props
    useEffect(() => {
        if(config != null ){
            $(`#${el}`).DataTable(config)
        }
    }, [config])
    return (
        <table id={el} className="datatablet"></table>
    )
}