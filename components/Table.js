import { useState, useEffect } from 'react'
import DataTable from 'datatables.net-dt';
import 'datatables.net-dt/css/jquery.dataTables.min.css'
import $ from 'jquery'

export default function Table(props){
    const {data, config} = props
    useEffect(() => {
        if(config != null ){
            $('#tsummary').DataTable(config)
        }
    }, [config])
    return (
        <table id="tsummary" className="datatablet"></table>
    )
}

// push ke repo rizki