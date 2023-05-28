'use client'
import { useState, useEffect } from 'react'
import Script from 'next/script'
import Link from 'next/link'
import $ from 'jquery'
import _ from 'lodash'
import Footer from '@/components/Footer'
import dynamic from 'next/dynamic'
const Table = dynamic(() => import('@/components/Table'), {ssr: false}) 

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
    const [tConfig, setTConfig] = useState(null)
    const [detailSum, setDetailSum] = useState('No Operator')
    useEffect(() => {
        setTConfig({
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
    }, [data])
    return (
        <>
            <div className="py-2 pt-6 px-8 bg-slate-100 flex items-center lg:justify-between ">
                <img src="./ppa.png" width="200px"/>
                <div className="text-xs text-slate-400 text-right">Data per tanggal 
                    <p className=" text-lg"><strong className="text-cyan-700">{new Date().toLocaleDateString('fr-CA')}</strong></p>
                </div>
            </div>
            <div className="flex flex-col bg-slate-100 gap-5 px-5 py-5 lg:flex-row lg:px-10">
                <div 
                    title="Click for detail" 
                    className="bg-white cursor-pointer p-5 flex-1 rounded-md shadow-sm hover:translate-y-[-0.2em]"
                    onClick={() => setDetailSum('No Operator')}
                >
                    <h1 className="flex justify-between align-center">
                        <span className="text-orange-400 font-semibold"><i className="fa-solid fa-user-clock text-orange-400"></i> No Operator</span>
                        <span className="font-semibold text-xl text-orange-400">{data.length ? (_.sumBy(data, 'no_operator') / (_.sumBy(data, 'breakdown') + _.sumBy(data, 'ready') ) *100).toFixed(2) : 0}%</span>
                    </h1>
                    <div className="my-1 flex justify-between">
                        <div>
                            <p className="text-slate-400 text-sm">Total Unit</p>
                            <h1 className="font-semibold">{_.sumBy(data, 'breakdown') + _.sumBy(data, 'ready')}</h1>
                        </div>
                        <div className="text-right">
                            <p className="text-slate-400 text-sm"> No Operator</p>
                            <h1 className="font-semibold">{_.sumBy(data, 'no_operator')}</h1>
                        </div>
                    </div>
                    <div className="flex justify-end text-sm mt-3 underline" >
                        <a>Detail</a>
                    </div>
                </div>
                <div 
                    title="Click for detail"
                    onClick={() => setDetailSum('Ready')}
                    className="bg-white cursor-pointer p-5 flex-1 rounded-md shadow-sm hover:translate-y-[-0.2em]">
                    <h1 className="flex justify-between align-center">
                        <span className="text-emerald-500 font-semibold"><i className="fa-solid fa-circle-check text-emerald-500"></i> Ready</span>
                        <span className="font-semibold text-xl text-emerald-500">{data.length ? (_.sumBy(data, 'ready') / (_.sumBy(data, 'breakdown') + _.sumBy(data, 'ready') ) *100).toFixed(2) : 0}%</span>
                    </h1>
                    <div title="Click for detail" className="my-1 flex justify-between">
                        <div>
                            <p className="text-slate-400 text-sm">Total All Unit</p>
                            <h1 className="font-semibold">{_.sumBy(data, 'breakdown') + _.sumBy(data, 'ready')}</h1>
                        </div>
                        <div className="text-right">
                            <p className="text-slate-400 text-sm">Ready</p>
                            <h1 className="font-semibold">{_.sumBy(data, 'ready')}</h1>
                        </div>
                    </div>
                    <div className="flex justify-end text-sm mt-3 underline" >
                        <a>Detail</a>
                    </div>
                </div>
                <div 
                    title="Click for detail" 
                    onClick={() => setDetailSum('Breakdown')}
                    className="bg-white cursor-pointer p-5 flex-1 rounded-md shadow-sm hover:translate-y-[-0.2em]"
                >
                    <h1 className="flex justify-between align-center">
                        <span className="text-rose-500 font-semibold"><i className="fa-solid fa-triangle-exclamation text-rose-500"></i> Breakdown</span>
                        <span className="font-semibold text-xl text-rose-500">{data.length ? (_.sumBy(data, 'breakdown') / (_.sumBy(data, 'breakdown') + _.sumBy(data, 'ready') ) *100).toFixed(2) : 0}%</span>
                    </h1>
                    <div className="my-1 flex justify-between">
                        <div>
                            <p className="text-slate-400 text-sm">Total All Unit</p>
                            <h1 className="font-semibold">{_.sumBy(data, 'breakdown') + _.sumBy(data, 'ready')}</h1>
                        </div>
                        <div className="text-right">
                            <p className="text-slate-400 text-sm">Breakdown</p>
                            <h1 className="font-semibold">{_.sumBy(data, 'breakdown')}</h1>
                        </div>
                    </div>
                    <div className="flex justify-end text-sm mt-3 underline" >
                        <a>Detail</a>
                    </div>
                </div>
                <div 
                    title="Click for detail" 
                    onClick={() => setDetailSum('Operator Status')}
                    className="bg-white cursor-pointer p-5 flex-1 rounded-md shadow-sm hover:translate-y-[-0.2em]"
                >
                    <h1 className="flex justify-between align-center">
                        <span className="text-sky-600 font-semibold"><i className="fa-solid fa-clipboard-check text-sky-600"></i> Operator Status</span>
                        <span className="font-semibold text-xl text-sky-600">{data.length ? (_.sumBy(data, 'start_operasi') / _.sumBy(data, 'total_opt') *100).toFixed(2) : 0}%</span>
                    </h1>
                    <div className="my-1 flex justify-between">
                        <div>
                            <p className="text-slate-400 text-sm">Total Operator</p>
                            <h1 className="font-semibold">{_.sumBy(data, 'total_opt')}</h1>
                        </div>
                        <div className="text-right">
                            <p className="text-slate-400 text-sm">Start Operasi</p>
                            <h1 className="font-semibold">{_.sumBy(data, 'start_operasi')}</h1>
                        </div>
                    </div>
                    <div className="flex justify-end text-sm mt-3 underline">
                        <a>Detail</a>
                    </div>
                </div>
            </div>
            <div className="p-10">
                <h1 className="text-xl"><i className="fa-solid fa-book"></i> Detail  <span className="text-biru">{detailSum}</span></h1>
            </div>
            <div className="p-10">
                <h1 className="text-xl"><i className="fa-solid fa-clipboard-list"></i> List Model </h1>
                <div className="w-100 ">
                    <Table data={data} config={tConfig}/>
                </div>
            </div> 
            <Footer />
        </>
    )
}