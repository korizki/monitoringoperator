"use client"
import { useState, useEffect } from 'react'
import DataTables from 'datatables.net-dt'
import Script from 'next/script'
import Link from 'next/link'
import "datatables.net-dt/css/jquery.dataTables.min.css";
import $ from 'jquery'
import _ from 'lodash'

export default function Dashboard() {
    const [data, listData] = useState([
        {
            model: 'PC200',
            ready: 28,
            breakdown: 5,
            total_opt: 32,
            start_operasi: 28,
            no_operator: 0
        },
        {
            model: 'HD785',
            ready: 43,
            breakdown: 12,
            total_opt: 40,
            start_operasi: 33,
            no_operator: 10
        },
    ])
    const createTableSummary = data => {
        $('#tsummary').DataTable({
            destroy: true,
            data,
            columns: [
                {data: 'model', title: 'Unit Model'},
                {data: 'ready', title: 'Ready'},
                {data: 'breakdown', title: 'Breakdown'},
                {data: 'total_opt', title: 'Total Operator'},
                {data: 'start_operasi', title: 'Start Operasi'},
                {data: 'no_operator', title: 'No Operator'},
            ],
            columnDefs: [
                {
                    targets: [1,2,3,4,5],
                    className: "text-center"
                },
                {
                    targets: [5],
                    className: "text-[crimson]"
                },
            ]
        })
    }
    useEffect(() => {
       createTableSummary(data)
    }, [data])
    return (
        <>
            <Script src="https://cdn.datatables.net/v/dt/jq-3.6.0/dt-1.13.4/datatables.min.js" />
            <Link href="https://cdn.datatables.net/v/dt/jq-3.6.0/dt-1.13.4/datatables.min.css" />
            <div className="bg-[rgb(250,250,250)] px-10 py-10 flex gap-5">
                <div className="bg-white cursor-pointer p-5 flex-1 rounded-md shadow-sm">
                    <h1 className="flex justify-between align-center">
                        <span className="text-orange font-semibold"><i className="fa-solid fa-user-clock text-orange"></i> No Operator</span>
                        <span className="font-semibold text-xl text-orange">{data.length ? (_.sumBy(data, 'no_operator') / (_.sumBy(data, 'breakdown') + _.sumBy(data, 'ready') ) *100).toFixed(2) : 0}%</span>
                    </h1>
                    <div className="my-1 flex justify-between">
                        <div>
                            <p className="text-sub text-sm">Total Unit</p>
                            <h1>{_.sumBy(data, 'breakdown') + _.sumBy(data, 'ready')}</h1>
                        </div>
                        <div className="text-right">
                            <p className="text-sub text-sm"> No Operator</p>
                            <h1>{_.sumBy(data, 'no_operator')}</h1>
                        </div>
                    </div>
                </div>
                <div className="bg-white cursor-pointer p-5 flex-1 rounded-md shadow-sm">
                    <h1 className="flex justify-between align-center">
                        <span className="text-hijau font-semibold"><i className="fa-solid fa-circle-check text-hijau"></i> Ready</span>
                        <span className="font-semibold text-xl text-hijau">{data.length ? (_.sumBy(data, 'ready') / (_.sumBy(data, 'breakdown') + _.sumBy(data, 'ready') ) *100).toFixed(2) : 0}%</span>
                    </h1>
                    <div className="my-1 flex justify-between">
                        <div>
                            <p className="text-sub text-sm">Total All Unit</p>
                            <h1>{_.sumBy(data, 'breakdown') + _.sumBy(data, 'ready')}</h1>
                        </div>
                        <div className="text-right">
                            <p className="text-sub text-sm">Ready</p>
                            <h1>{_.sumBy(data, 'ready')}</h1>
                        </div>
                    </div>
                </div>
                <div className="bg-white cursor-pointer p-5 flex-1 rounded-md shadow-sm">
                    <h1 className="flex justify-between align-center">
                        <span className="text-merah font-semibold"><i className="fa-solid fa-triangle-exclamation text-merah"></i> Breakdown</span>
                        <span className="font-semibold text-xl text-merah">{data.length ? (_.sumBy(data, 'breakdown') / (_.sumBy(data, 'breakdown') + _.sumBy(data, 'ready') ) *100).toFixed(2) : 0}%</span>
                    </h1>
                    <div className="my-1 flex justify-between">
                        <div>
                            <p className="text-sub text-sm">Total All Unit</p>
                            <h1>{_.sumBy(data, 'breakdown') + _.sumBy(data, 'ready')}</h1>
                        </div>
                        <div className="text-right">
                            <p className="text-sub text-sm">Breakdown</p>
                            <h1>{_.sumBy(data, 'breakdown')}</h1>
                        </div>
                    </div>
                </div>
                <div className="bg-white cursor-pointer p-5 flex-1 rounded-md shadow-sm">
                    <h1 className="flex justify-between align-center">
                        <span className="text-biruhov font-semibold"><i className="fa-solid fa-clipboard-check text-biruhov"></i> Operator Status</span>
                        <span className="font-semibold text-xl text-biruhov">{data.length ? (_.sumBy(data, 'start_operasi') / _.sumBy(data, 'total_opt') *100).toFixed(2) : 0}%</span>
                    </h1>
                    <div className="my-1 flex justify-between">
                        <div>
                            <p className="text-sub text-sm">Total Operator</p>
                            <h1>{_.sumBy(data, 'total_opt')}</h1>
                        </div>
                        <div className="text-right">
                            <p className="text-sub text-sm">Start Operasi</p>
                            <h1>{_.sumBy(data, 'start_operasi')}</h1>
                        </div>
                    </div>
                </div>
            </div>
            <div className="mx-[5%]">
                <div className="">
                    <table id="tsummary"></table>
                </div>
            </div>
        </>
    )
}