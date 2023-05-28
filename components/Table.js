import { useState, useEffect } from 'react'
import 'datatables.net'
import $ from 'jquery'

export default function Table(props){
    const {data, config} = props
    useEffect(() => {
        if(config != null ){
            $('#tsummary').DataTable(config)
        }
    }, [config])
    return (
        <table id="tsummary"></table>
    )
}

// push ke repo rizki