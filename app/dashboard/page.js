'use client'
import { useState, useEffect } from 'react'
import $ from 'jquery'
import _ from 'lodash'
import Footer from '@/components/Footer'
import dynamic from 'next/dynamic'
const Table = dynamic(() => import('@/components/Table'), { ssr: false })

export default function Dashboard() {
    const [res, setRes] = useState({
        "code": 200,
        "status": "OK",
        "data": {
            "population": 614,
            "totalOpration": 339,
            "totalStanby": 261,
            "totalBreakDown": 5,
            "detailOpration": [
                {
                    "model": "CAT773",
                    "total": 1,
                    "detailUnit": [
                        {
                            "codeNumber": "C573007AMM",
                            "abc_type": "OB02",
                            "abc_activity": "Overburden",
                            "abc_sub_activity": "Hauling"
                        }
                    ]
                },
                {
                    "model": "D155A-6",
                    "total": 13,
                    "detailUnit": [
                        {
                            "codeNumber": "D1502",
                            "abc_type": "OB03",
                            "abc_activity": "Overburden",
                            "abc_sub_activity": "Dozing"
                        },
                        {
                            "codeNumber": "D1515",
                            "abc_type": "OB03",
                            "abc_activity": "Overburden",
                            "abc_sub_activity": "Dozing"
                        },
                        {
                            "codeNumber": "D1518",
                            "abc_type": "OB03",
                            "abc_activity": "Overburden",
                            "abc_sub_activity": "Dozing"
                        },
                        {
                            "codeNumber": "D1520",
                            "abc_type": "OB03",
                            "abc_activity": "Overburden",
                            "abc_sub_activity": "Dozing"
                        },
                        {
                            "codeNumber": "D1521",
                            "abc_type": "OB03",
                            "abc_activity": "Overburden",
                            "abc_sub_activity": "Dozing"
                        },
                        {
                            "codeNumber": "D1533",
                            "abc_type": "OB03",
                            "abc_activity": "Overburden",
                            "abc_sub_activity": "Dozing"
                        },
                        {
                            "codeNumber": "D1534",
                            "abc_type": "OB03",
                            "abc_activity": "Overburden",
                            "abc_sub_activity": "Dozing"
                        },
                        {
                            "codeNumber": "D1535",
                            "abc_type": "OB03",
                            "abc_activity": "Overburden",
                            "abc_sub_activity": "Dozing"
                        },
                        {
                            "codeNumber": "D1536",
                            "abc_type": "OB03",
                            "abc_activity": "Overburden",
                            "abc_sub_activity": "Dozing"
                        },
                        {
                            "codeNumber": "D1538",
                            "abc_type": "OB03",
                            "abc_activity": "Overburden",
                            "abc_sub_activity": "Dozing"
                        },
                        {
                            "codeNumber": "D1543",
                            "abc_type": "OB03",
                            "abc_activity": "Overburden",
                            "abc_sub_activity": "Dozing"
                        },
                        {
                            "codeNumber": "D1555",
                            "abc_type": "OB03",
                            "abc_activity": "Overburden",
                            "abc_sub_activity": "Dozing"
                        },
                        {
                            "codeNumber": "D5109AMM",
                            "abc_type": "OB03",
                            "abc_activity": "Overburden",
                            "abc_sub_activity": "Dozing"
                        }
                    ]
                },
                {
                    "model": "D85ESS-2",
                    "total": 19,
                    "detailUnit": [
                        {
                            "codeNumber": "D85104",
                            "abc_type": "OB03",
                            "abc_activity": "Overburden",
                            "abc_sub_activity": "Dozing"
                        },
                        {
                            "codeNumber": "D85106",
                            "abc_type": "OB03",
                            "abc_activity": "Overburden",
                            "abc_sub_activity": "Dozing"
                        },
                        {
                            "codeNumber": "D85126",
                            "abc_type": "OB03",
                            "abc_activity": "Overburden",
                            "abc_sub_activity": "Dozing"
                        },
                        {
                            "codeNumber": "D85128",
                            "abc_type": "OB03",
                            "abc_activity": "Overburden",
                            "abc_sub_activity": "Dozing"
                        },
                        {
                            "codeNumber": "D85146",
                            "abc_type": "OB03",
                            "abc_activity": "Overburden",
                            "abc_sub_activity": "Dozing"
                        },
                        {
                            "codeNumber": "D85147",
                            "abc_type": "OB03",
                            "abc_activity": "Overburden",
                            "abc_sub_activity": "Dozing"
                        },
                        {
                            "codeNumber": "D85151",
                            "abc_type": "OB03",
                            "abc_activity": "Overburden",
                            "abc_sub_activity": "Dozing"
                        },
                        {
                            "codeNumber": "D8550",
                            "abc_type": "OB03",
                            "abc_activity": "Overburden",
                            "abc_sub_activity": "Dozing"
                        },
                        {
                            "codeNumber": "D8553",
                            "abc_type": "OB03",
                            "abc_activity": "Overburden",
                            "abc_sub_activity": "Dozing"
                        },
                        {
                            "codeNumber": "D8564",
                            "abc_type": "OB03",
                            "abc_activity": "Overburden",
                            "abc_sub_activity": "Dozing"
                        },
                        {
                            "codeNumber": "D8582",
                            "abc_type": "OB03",
                            "abc_activity": "Overburden",
                            "abc_sub_activity": "Dozing"
                        },
                        {
                            "codeNumber": "D8583",
                            "abc_type": "OB03",
                            "abc_activity": "Overburden",
                            "abc_sub_activity": "Dozing"
                        },
                        {
                            "codeNumber": "D8585",
                            "abc_type": "OB03",
                            "abc_activity": "Overburden",
                            "abc_sub_activity": "Dozing"
                        },
                        {
                            "codeNumber": "D8588",
                            "abc_type": "OB03",
                            "abc_activity": "Overburden",
                            "abc_sub_activity": "Dozing"
                        },
                        {
                            "codeNumber": "D8589",
                            "abc_type": "OB03",
                            "abc_activity": "Overburden",
                            "abc_sub_activity": "Dozing"
                        },
                        {
                            "codeNumber": "D8591",
                            "abc_type": "OB03",
                            "abc_activity": "Overburden",
                            "abc_sub_activity": "Dozing"
                        },
                        {
                            "codeNumber": "D8592",
                            "abc_type": "OB03",
                            "abc_activity": "Overburden",
                            "abc_sub_activity": "Dozing"
                        },
                        {
                            "codeNumber": "D8593",
                            "abc_type": "OB03",
                            "abc_activity": "Overburden",
                            "abc_sub_activity": "Dozing"
                        },
                        {
                            "codeNumber": "D8594",
                            "abc_type": "OB03",
                            "abc_activity": "Overburden",
                            "abc_sub_activity": "Dozing"
                        }
                    ]
                },
                {
                    "model": "AXOR 2528CX",
                    "total": 24,
                    "detailUnit": [
                        {
                            "codeNumber": "DA25007",
                            "abc_type": "OB02",
                            "abc_activity": "Overburden",
                            "abc_sub_activity": "Hauling"
                        },
                        {
                            "codeNumber": "DA25009",
                            "abc_type": "OB02",
                            "abc_activity": "Overburden",
                            "abc_sub_activity": "Hauling"
                        },
                        {
                            "codeNumber": "DA25010",
                            "abc_type": "OB02",
                            "abc_activity": "Overburden",
                            "abc_sub_activity": "Hauling"
                        },
                        {
                            "codeNumber": "DA25070",
                            "abc_type": "OB02",
                            "abc_activity": "Overburden",
                            "abc_sub_activity": "Hauling"
                        },
                        {
                            "codeNumber": "DA25071",
                            "abc_type": "OB02",
                            "abc_activity": "Overburden",
                            "abc_sub_activity": "Hauling"
                        },
                        {
                            "codeNumber": "DA25072",
                            "abc_type": "OB02",
                            "abc_activity": "Overburden",
                            "abc_sub_activity": "Hauling"
                        },
                        {
                            "codeNumber": "DA25074",
                            "abc_type": "OB02",
                            "abc_activity": "Overburden",
                            "abc_sub_activity": "Hauling"
                        },
                        {
                            "codeNumber": "DA25076",
                            "abc_type": "OB02",
                            "abc_activity": "Overburden",
                            "abc_sub_activity": "Hauling"
                        },
                        {
                            "codeNumber": "DA25077",
                            "abc_type": "OB02",
                            "abc_activity": "Overburden",
                            "abc_sub_activity": "Hauling"
                        },
                        {
                            "codeNumber": "DA25079",
                            "abc_type": "OB02",
                            "abc_activity": "Overburden",
                            "abc_sub_activity": "Hauling"
                        },
                        {
                            "codeNumber": "DA25080",
                            "abc_type": "OB02",
                            "abc_activity": "Overburden",
                            "abc_sub_activity": "Hauling"
                        },
                        {
                            "codeNumber": "DA25081",
                            "abc_type": "OB02",
                            "abc_activity": "Overburden",
                            "abc_sub_activity": "Hauling"
                        },
                        {
                            "codeNumber": "DA25082",
                            "abc_type": "OB02",
                            "abc_activity": "Overburden",
                            "abc_sub_activity": "Hauling"
                        },
                        {
                            "codeNumber": "DA25083",
                            "abc_type": "OB02",
                            "abc_activity": "Overburden",
                            "abc_sub_activity": "Hauling"
                        },
                        {
                            "codeNumber": "DA25084",
                            "abc_type": "OB02",
                            "abc_activity": "Overburden",
                            "abc_sub_activity": "Hauling"
                        },
                        {
                            "codeNumber": "DA25085",
                            "abc_type": "",
                            "abc_activity": null,
                            "abc_sub_activity": null
                        },
                        {
                            "codeNumber": "DA25088",
                            "abc_type": "",
                            "abc_activity": null,
                            "abc_sub_activity": null
                        },
                        {
                            "codeNumber": "DA25089",
                            "abc_type": "",
                            "abc_activity": null,
                            "abc_sub_activity": null
                        },
                        {
                            "codeNumber": "DA25090",
                            "abc_type": "",
                            "abc_activity": null,
                            "abc_sub_activity": null
                        },
                        {
                            "codeNumber": "DA25091",
                            "abc_type": "",
                            "abc_activity": null,
                            "abc_sub_activity": null
                        },
                        {
                            "codeNumber": "DA25092",
                            "abc_type": "",
                            "abc_activity": null,
                            "abc_sub_activity": null
                        },
                        {
                            "codeNumber": "DA25094",
                            "abc_type": "",
                            "abc_activity": null,
                            "abc_sub_activity": null
                        },
                        {
                            "codeNumber": "DA25096",
                            "abc_type": "OB02",
                            "abc_activity": "Overburden",
                            "abc_sub_activity": "Hauling"
                        },
                        {
                            "codeNumber": "DA25097",
                            "abc_type": "OB02",
                            "abc_activity": "Overburden",
                            "abc_sub_activity": "Hauling"
                        }
                    ]
                },
                {
                    "model": "AROCS 48X45K",
                    "total": 2,
                    "detailUnit": [
                        {
                            "codeNumber": "DA4853",
                            "abc_type": "CH02",
                            "abc_activity": "Coal Hauling",
                            "abc_sub_activity": "Hauling"
                        },
                        {
                            "codeNumber": "DA4854",
                            "abc_type": "CH02",
                            "abc_activity": "Coal Hauling",
                            "abc_sub_activity": "Hauling"
                        }
                    ]
                },
                {
                    "model": "FMX400 6X4 400HP",
                    "total": 14,
                    "detailUnit": [
                        {
                            "codeNumber": "DT4001",
                            "abc_type": "OB02",
                            "abc_activity": "Overburden",
                            "abc_sub_activity": "Hauling"
                        },
                        {
                            "codeNumber": "DT4002",
                            "abc_type": "OB02",
                            "abc_activity": "Overburden",
                            "abc_sub_activity": "Hauling"
                        },
                        {
                            "codeNumber": "DT4003",
                            "abc_type": "OB02",
                            "abc_activity": "Overburden",
                            "abc_sub_activity": "Hauling"
                        },
                        {
                            "codeNumber": "DT4005",
                            "abc_type": "OB02",
                            "abc_activity": "Overburden",
                            "abc_sub_activity": "Hauling"
                        },
                        {
                            "codeNumber": "DT4006",
                            "abc_type": "OB02",
                            "abc_activity": "Overburden",
                            "abc_sub_activity": "Hauling"
                        },
                        {
                            "codeNumber": "DT4009",
                            "abc_type": "OB02",
                            "abc_activity": "Overburden",
                            "abc_sub_activity": "Hauling"
                        },
                        {
                            "codeNumber": "DT4010",
                            "abc_type": "OB02",
                            "abc_activity": "Overburden",
                            "abc_sub_activity": "Hauling"
                        },
                        {
                            "codeNumber": "DT40106",
                            "abc_type": "OB02",
                            "abc_activity": "Overburden",
                            "abc_sub_activity": "Hauling"
                        },
                        {
                            "codeNumber": "DT40107",
                            "abc_type": "OB02",
                            "abc_activity": "Overburden",
                            "abc_sub_activity": "Hauling"
                        },
                        {
                            "codeNumber": "DT4012",
                            "abc_type": "OB02",
                            "abc_activity": "Overburden",
                            "abc_sub_activity": "Hauling"
                        },
                        {
                            "codeNumber": "DT4039",
                            "abc_type": "OB02",
                            "abc_activity": "Overburden",
                            "abc_sub_activity": "Hauling"
                        },
                        {
                            "codeNumber": "DT4054",
                            "abc_type": "OB02",
                            "abc_activity": "Overburden",
                            "abc_sub_activity": "Hauling"
                        },
                        {
                            "codeNumber": "DT4056",
                            "abc_type": "OB02",
                            "abc_activity": "Overburden",
                            "abc_sub_activity": "Hauling"
                        },
                        {
                            "codeNumber": "DT4057",
                            "abc_type": "OB02",
                            "abc_activity": "Overburden",
                            "abc_sub_activity": "Hauling"
                        }
                    ]
                },
                {
                    "model": "P410B8X4HZ",
                    "total": 23,
                    "detailUnit": [
                        {
                            "codeNumber": "DT41106",
                            "abc_type": "CH02",
                            "abc_activity": "Coal Hauling",
                            "abc_sub_activity": "Hauling"
                        },
                        {
                            "codeNumber": "DT41107",
                            "abc_type": "CH02",
                            "abc_activity": "Coal Hauling",
                            "abc_sub_activity": "Hauling"
                        },
                        {
                            "codeNumber": "DT41110",
                            "abc_type": "CH02",
                            "abc_activity": "Coal Hauling",
                            "abc_sub_activity": "Hauling"
                        },
                        {
                            "codeNumber": "DT41112",
                            "abc_type": "CH02",
                            "abc_activity": "Coal Hauling",
                            "abc_sub_activity": "Hauling"
                        },
                        {
                            "codeNumber": "DT41113",
                            "abc_type": "CH02",
                            "abc_activity": "Coal Hauling",
                            "abc_sub_activity": "Hauling"
                        },
                        {
                            "codeNumber": "DT41114",
                            "abc_type": "CH02",
                            "abc_activity": "Coal Hauling",
                            "abc_sub_activity": "Hauling"
                        },
                        {
                            "codeNumber": "DT41115",
                            "abc_type": "CH02",
                            "abc_activity": "Coal Hauling",
                            "abc_sub_activity": "Hauling"
                        },
                        {
                            "codeNumber": "DT41116",
                            "abc_type": "CH02",
                            "abc_activity": "Coal Hauling",
                            "abc_sub_activity": "Hauling"
                        },
                        {
                            "codeNumber": "DT41117",
                            "abc_type": "CH02",
                            "abc_activity": "Coal Hauling",
                            "abc_sub_activity": "Hauling"
                        },
                        {
                            "codeNumber": "DT41118",
                            "abc_type": "CH02",
                            "abc_activity": "Coal Hauling",
                            "abc_sub_activity": "Hauling"
                        },
                        {
                            "codeNumber": "DT41119",
                            "abc_type": "CH02",
                            "abc_activity": "Coal Hauling",
                            "abc_sub_activity": "Hauling"
                        },
                        {
                            "codeNumber": "DT41120",
                            "abc_type": "CH02",
                            "abc_activity": "Coal Hauling",
                            "abc_sub_activity": "Hauling"
                        },
                        {
                            "codeNumber": "DT41121",
                            "abc_type": "CH02",
                            "abc_activity": "Coal Hauling",
                            "abc_sub_activity": "Hauling"
                        },
                        {
                            "codeNumber": "DT4181",
                            "abc_type": "CH02",
                            "abc_activity": "Coal Hauling",
                            "abc_sub_activity": "Hauling"
                        },
                        {
                            "codeNumber": "DT4183",
                            "abc_type": "CH02",
                            "abc_activity": "Coal Hauling",
                            "abc_sub_activity": "Hauling"
                        },
                        {
                            "codeNumber": "DT4184",
                            "abc_type": "CH02",
                            "abc_activity": "Coal Hauling",
                            "abc_sub_activity": "Hauling"
                        },
                        {
                            "codeNumber": "DT4186",
                            "abc_type": "CH02",
                            "abc_activity": "Coal Hauling",
                            "abc_sub_activity": "Hauling"
                        },
                        {
                            "codeNumber": "DT4187",
                            "abc_type": "CH02",
                            "abc_activity": "Coal Hauling",
                            "abc_sub_activity": "Hauling"
                        },
                        {
                            "codeNumber": "DT4189",
                            "abc_type": "CH02",
                            "abc_activity": "Coal Hauling",
                            "abc_sub_activity": "Hauling"
                        },
                        {
                            "codeNumber": "DT4190",
                            "abc_type": "CH02",
                            "abc_activity": "Coal Hauling",
                            "abc_sub_activity": "Hauling"
                        },
                        {
                            "codeNumber": "DT4191",
                            "abc_type": "CH02",
                            "abc_activity": "Coal Hauling",
                            "abc_sub_activity": "Hauling"
                        },
                        {
                            "codeNumber": "DT4192",
                            "abc_type": "CH02",
                            "abc_activity": "Coal Hauling",
                            "abc_sub_activity": "Hauling"
                        },
                        {
                            "codeNumber": "DT4193",
                            "abc_type": "CH02",
                            "abc_activity": "Coal Hauling",
                            "abc_sub_activity": "Hauling"
                        }
                    ]
                },
                {
                    "model": "FMX440 8X4FR",
                    "total": 10,
                    "detailUnit": [
                        {
                            "codeNumber": "DT4443",
                            "abc_type": "CH02",
                            "abc_activity": "Coal Hauling",
                            "abc_sub_activity": "Hauling"
                        },
                        {
                            "codeNumber": "DT4444",
                            "abc_type": "CH02",
                            "abc_activity": "Coal Hauling",
                            "abc_sub_activity": "Hauling"
                        },
                        {
                            "codeNumber": "DT4446",
                            "abc_type": "CH02",
                            "abc_activity": "Coal Hauling",
                            "abc_sub_activity": "Hauling"
                        },
                        {
                            "codeNumber": "DT4447",
                            "abc_type": "CH02",
                            "abc_activity": "Coal Hauling",
                            "abc_sub_activity": "Hauling"
                        },
                        {
                            "codeNumber": "DT4448",
                            "abc_type": "CH02",
                            "abc_activity": "Coal Hauling",
                            "abc_sub_activity": "Hauling"
                        },
                        {
                            "codeNumber": "DT4450",
                            "abc_type": "CH02",
                            "abc_activity": "Coal Hauling",
                            "abc_sub_activity": "Hauling"
                        },
                        {
                            "codeNumber": "DT4451",
                            "abc_type": "CH02",
                            "abc_activity": "Coal Hauling",
                            "abc_sub_activity": "Hauling"
                        },
                        {
                            "codeNumber": "DT4462",
                            "abc_type": "CH02",
                            "abc_activity": "Coal Hauling",
                            "abc_sub_activity": "Hauling"
                        },
                        {
                            "codeNumber": "DT4463",
                            "abc_type": "CH02",
                            "abc_activity": "Coal Hauling",
                            "abc_sub_activity": "Hauling"
                        },
                        {
                            "codeNumber": "DT4465",
                            "abc_type": "CH02",
                            "abc_activity": "Coal Hauling",
                            "abc_sub_activity": "Hauling"
                        }
                    ]
                },
                {
                    "model": "P460B8X4HZ",
                    "total": 8,
                    "detailUnit": [
                        {
                            "codeNumber": "DT4603",
                            "abc_type": "CH02",
                            "abc_activity": "Coal Hauling",
                            "abc_sub_activity": "Hauling"
                        },
                        {
                            "codeNumber": "DT4604",
                            "abc_type": "CH02",
                            "abc_activity": "Coal Hauling",
                            "abc_sub_activity": "Hauling"
                        },
                        {
                            "codeNumber": "DT4605",
                            "abc_type": "CH02",
                            "abc_activity": "Coal Hauling",
                            "abc_sub_activity": "Hauling"
                        },
                        {
                            "codeNumber": "DT4607",
                            "abc_type": "CH02",
                            "abc_activity": "Coal Hauling",
                            "abc_sub_activity": "Hauling"
                        },
                        {
                            "codeNumber": "DT4608",
                            "abc_type": "CH02",
                            "abc_activity": "Coal Hauling",
                            "abc_sub_activity": "Hauling"
                        },
                        {
                            "codeNumber": "DT4609",
                            "abc_type": "CH02",
                            "abc_activity": "Coal Hauling",
                            "abc_sub_activity": "Hauling"
                        },
                        {
                            "codeNumber": "DT4610",
                            "abc_type": "CH02",
                            "abc_activity": "Coal Hauling",
                            "abc_sub_activity": "Hauling"
                        },
                        {
                            "codeNumber": "DT4611",
                            "abc_type": "CH02",
                            "abc_activity": "Coal Hauling",
                            "abc_sub_activity": "Hauling"
                        }
                    ]
                },
                {
                    "model": "PC1250-8R",
                    "total": 4,
                    "detailUnit": [
                        {
                            "codeNumber": "E1211",
                            "abc_type": "OB01",
                            "abc_activity": "Overburden",
                            "abc_sub_activity": "Loading"
                        },
                        {
                            "codeNumber": "E1221",
                            "abc_type": "OB01",
                            "abc_activity": "Overburden",
                            "abc_sub_activity": "Loading"
                        },
                        {
                            "codeNumber": "E1223",
                            "abc_type": "OB01",
                            "abc_activity": "Overburden",
                            "abc_sub_activity": "Loading"
                        },
                        {
                            "codeNumber": "E1225",
                            "abc_type": "CG01",
                            "abc_activity": "Coal Getting",
                            "abc_sub_activity": "Loading"
                        }
                    ]
                },
                {
                    "model": "PC2000-8",
                    "total": 19,
                    "detailUnit": [
                        {
                            "codeNumber": "E2008",
                            "abc_type": "OB01",
                            "abc_activity": "Overburden",
                            "abc_sub_activity": "Loading"
                        },
                        {
                            "codeNumber": "E2013",
                            "abc_type": "OB01",
                            "abc_activity": "Overburden",
                            "abc_sub_activity": "Loading"
                        },
                        {
                            "codeNumber": "E2014",
                            "abc_type": "OB01",
                            "abc_activity": "Overburden",
                            "abc_sub_activity": "Loading"
                        },
                        {
                            "codeNumber": "E2015",
                            "abc_type": "OB01",
                            "abc_activity": "Overburden",
                            "abc_sub_activity": "Loading"
                        },
                        {
                            "codeNumber": "E2017",
                            "abc_type": "OB01",
                            "abc_activity": "Overburden",
                            "abc_sub_activity": "Loading"
                        },
                        {
                            "codeNumber": "E2019",
                            "abc_type": "OB01",
                            "abc_activity": "Overburden",
                            "abc_sub_activity": "Loading"
                        },
                        {
                            "codeNumber": "E2021",
                            "abc_type": "OB01",
                            "abc_activity": "Overburden",
                            "abc_sub_activity": "Loading"
                        },
                        {
                            "codeNumber": "E2022",
                            "abc_type": "OB01",
                            "abc_activity": "Overburden",
                            "abc_sub_activity": "Loading"
                        },
                        {
                            "codeNumber": "E2023",
                            "abc_type": "OB01",
                            "abc_activity": "Overburden",
                            "abc_sub_activity": "Loading"
                        },
                        {
                            "codeNumber": "E2024",
                            "abc_type": "OB01",
                            "abc_activity": "Overburden",
                            "abc_sub_activity": "Loading"
                        },
                        {
                            "codeNumber": "E2027",
                            "abc_type": "OB01",
                            "abc_activity": "Overburden",
                            "abc_sub_activity": "Loading"
                        },
                        {
                            "codeNumber": "E2029",
                            "abc_type": "OB01",
                            "abc_activity": "Overburden",
                            "abc_sub_activity": "Loading"
                        },
                        {
                            "codeNumber": "E2031",
                            "abc_type": "OB01",
                            "abc_activity": "Overburden",
                            "abc_sub_activity": "Loading"
                        },
                        {
                            "codeNumber": "E2033",
                            "abc_type": "OB01",
                            "abc_activity": "Overburden",
                            "abc_sub_activity": "Loading"
                        },
                        {
                            "codeNumber": "E2035",
                            "abc_type": "OB01",
                            "abc_activity": "Overburden",
                            "abc_sub_activity": "Loading"
                        },
                        {
                            "codeNumber": "E2036",
                            "abc_type": "OB01",
                            "abc_activity": "Overburden",
                            "abc_sub_activity": "Loading"
                        },
                        {
                            "codeNumber": "E2040",
                            "abc_type": "OB01",
                            "abc_activity": "Overburden",
                            "abc_sub_activity": "Loading"
                        },
                        {
                            "codeNumber": "E2047",
                            "abc_type": "OB01",
                            "abc_activity": "Overburden",
                            "abc_sub_activity": "Loading"
                        },
                        {
                            "codeNumber": "E2049",
                            "abc_type": "OB01",
                            "abc_activity": "Overburden",
                            "abc_sub_activity": "Loading"
                        }
                    ]
                },
                {
                    "model": "PC210-10MO",
                    "total": 14,
                    "detailUnit": [
                        {
                            "codeNumber": "E2101",
                            "abc_type": "CG11",
                            "abc_activity": "Coal Getting",
                            "abc_sub_activity": "Support"
                        },
                        {
                            "codeNumber": "E2156",
                            "abc_type": "OB11",
                            "abc_activity": "Overburden",
                            "abc_sub_activity": "Support"
                        },
                        {
                            "codeNumber": "E2158",
                            "abc_type": "OB11",
                            "abc_activity": "Overburden",
                            "abc_sub_activity": "Support"
                        },
                        {
                            "codeNumber": "E2159",
                            "abc_type": "CG11",
                            "abc_activity": "Coal Getting",
                            "abc_sub_activity": "Support"
                        },
                        {
                            "codeNumber": "E2160",
                            "abc_type": "OB11",
                            "abc_activity": "Overburden",
                            "abc_sub_activity": "Support"
                        },
                        {
                            "codeNumber": "E2161",
                            "abc_type": "OB11",
                            "abc_activity": "Overburden",
                            "abc_sub_activity": "Support"
                        },
                        {
                            "codeNumber": "E2162",
                            "abc_type": "OB11",
                            "abc_activity": "Overburden",
                            "abc_sub_activity": "Support"
                        },
                        {
                            "codeNumber": "E2163",
                            "abc_type": "OB11",
                            "abc_activity": "Overburden",
                            "abc_sub_activity": "Support"
                        },
                        {
                            "codeNumber": "E2167",
                            "abc_type": "OB11",
                            "abc_activity": "Overburden",
                            "abc_sub_activity": "Support"
                        },
                        {
                            "codeNumber": "E2169",
                            "abc_type": "OB11",
                            "abc_activity": "Overburden",
                            "abc_sub_activity": "Support"
                        },
                        {
                            "codeNumber": "E2170",
                            "abc_type": "OB11",
                            "abc_activity": "Overburden",
                            "abc_sub_activity": "Support"
                        },
                        {
                            "codeNumber": "E2181",
                            "abc_type": "OB11",
                            "abc_activity": "Overburden",
                            "abc_sub_activity": "Support"
                        },
                        {
                            "codeNumber": "E293",
                            "abc_type": "OB11",
                            "abc_activity": "Overburden",
                            "abc_sub_activity": "Support"
                        },
                        {
                            "codeNumber": "E295",
                            "abc_type": "OB11",
                            "abc_activity": "Overburden",
                            "abc_sub_activity": "Support"
                        }
                    ]
                },
                {
                    "model": "PC200-8MO",
                    "total": 2,
                    "detailUnit": [
                        {
                            "codeNumber": "E2157",
                            "abc_type": "OB11",
                            "abc_activity": "Overburden",
                            "abc_sub_activity": "Support"
                        },
                        {
                            "codeNumber": "E253",
                            "abc_type": "OB11",
                            "abc_activity": "Overburden",
                            "abc_sub_activity": "Support"
                        }
                    ]
                },
                {
                    "model": "PC300-8MO",
                    "total": 7,
                    "detailUnit": [
                        {
                            "codeNumber": "E330",
                            "abc_type": "OB11",
                            "abc_activity": "Overburden",
                            "abc_sub_activity": "Support"
                        },
                        {
                            "codeNumber": "E334",
                            "abc_type": "OB11",
                            "abc_activity": "Overburden",
                            "abc_sub_activity": "Support"
                        },
                        {
                            "codeNumber": "E342",
                            "abc_type": "OB11",
                            "abc_activity": "Overburden",
                            "abc_sub_activity": "Support"
                        },
                        {
                            "codeNumber": "E343",
                            "abc_type": "OB11",
                            "abc_activity": "Overburden",
                            "abc_sub_activity": "Support"
                        },
                        {
                            "codeNumber": "E345",
                            "abc_type": "OB11",
                            "abc_activity": "Overburden",
                            "abc_sub_activity": "Support"
                        },
                        {
                            "codeNumber": "EH3601",
                            "abc_type": "OB11",
                            "abc_activity": "Overburden",
                            "abc_sub_activity": "Support"
                        },
                        {
                            "codeNumber": "EH3602",
                            "abc_type": "OB11",
                            "abc_activity": "Overburden",
                            "abc_sub_activity": "Support"
                        }
                    ]
                },
                {
                    "model": "PC400LCSE-8",
                    "total": 3,
                    "detailUnit": [
                        {
                            "codeNumber": "E408",
                            "abc_type": "OB01",
                            "abc_activity": "Overburden",
                            "abc_sub_activity": "Loading"
                        },
                        {
                            "codeNumber": "E410",
                            "abc_type": "OB01",
                            "abc_activity": "Overburden",
                            "abc_sub_activity": "Loading"
                        },
                        {
                            "codeNumber": "E425",
                            "abc_type": "OB01",
                            "abc_activity": "Overburden",
                            "abc_sub_activity": "Loading"
                        }
                    ]
                },
                {
                    "model": "PC500LC-10R",
                    "total": 5,
                    "detailUnit": [
                        {
                            "codeNumber": "E501",
                            "abc_type": "CG01",
                            "abc_activity": "Coal Getting",
                            "abc_sub_activity": "Loading"
                        },
                        {
                            "codeNumber": "E513",
                            "abc_type": "CG01",
                            "abc_activity": "Coal Getting",
                            "abc_sub_activity": "Loading"
                        },
                        {
                            "codeNumber": "E526",
                            "abc_type": "DW15",
                            "abc_activity": "Daywork",
                            "abc_sub_activity": "Rom"
                        },
                        {
                            "codeNumber": "E534",
                            "abc_type": "OB01",
                            "abc_activity": "Overburden",
                            "abc_sub_activity": "Loading"
                        },
                        {
                            "codeNumber": "E535",
                            "abc_type": "OB01",
                            "abc_activity": "Overburden",
                            "abc_sub_activity": "Loading"
                        }
                    ]
                },
                {
                    "model": "PC850-8R1",
                    "total": 3,
                    "detailUnit": [
                        {
                            "codeNumber": "E8502",
                            "abc_type": "CG01",
                            "abc_activity": "Coal Getting",
                            "abc_sub_activity": "Loading"
                        },
                        {
                            "codeNumber": "E8507",
                            "abc_type": "CG01",
                            "abc_activity": "Coal Getting",
                            "abc_sub_activity": "Loading"
                        },
                        {
                            "codeNumber": "E8510",
                            "abc_type": "CG01",
                            "abc_activity": "Coal Getting",
                            "abc_sub_activity": "Loading"
                        }
                    ]
                },
                {
                    "model": "GD825A-2",
                    "total": 11,
                    "detailUnit": [
                        {
                            "codeNumber": "G5808AMM",
                            "abc_type": "OB06",
                            "abc_activity": "Overburden",
                            "abc_sub_activity": "Road Maintenance"
                        },
                        {
                            "codeNumber": "GD805",
                            "abc_type": "OB06",
                            "abc_activity": "Overburden",
                            "abc_sub_activity": "Road Maintenance"
                        },
                        {
                            "codeNumber": "GD810",
                            "abc_type": "OB06",
                            "abc_activity": "Overburden",
                            "abc_sub_activity": "Road Maintenance"
                        },
                        {
                            "codeNumber": "GD811",
                            "abc_type": "OB06",
                            "abc_activity": "Overburden",
                            "abc_sub_activity": "Road Maintenance"
                        },
                        {
                            "codeNumber": "GD814",
                            "abc_type": "OB06",
                            "abc_activity": "Overburden",
                            "abc_sub_activity": "Road Maintenance"
                        },
                        {
                            "codeNumber": "GD815",
                            "abc_type": "OB06",
                            "abc_activity": "Overburden",
                            "abc_sub_activity": "Road Maintenance"
                        },
                        {
                            "codeNumber": "GD823",
                            "abc_type": "OB06",
                            "abc_activity": "Overburden",
                            "abc_sub_activity": "Road Maintenance"
                        },
                        {
                            "codeNumber": "GD824",
                            "abc_type": "OB06",
                            "abc_activity": "Overburden",
                            "abc_sub_activity": "Road Maintenance"
                        },
                        {
                            "codeNumber": "GD830",
                            "abc_type": "OB06",
                            "abc_activity": "Overburden",
                            "abc_sub_activity": "Road Maintenance"
                        },
                        {
                            "codeNumber": "GD839",
                            "abc_type": "OB06",
                            "abc_activity": "Overburden",
                            "abc_sub_activity": "Road Maintenance"
                        },
                        {
                            "codeNumber": "GD841",
                            "abc_type": "OB11",
                            "abc_activity": "Overburden",
                            "abc_sub_activity": "Support"
                        }
                    ]
                },
                {
                    "model": "GD705A-5",
                    "total": 1,
                    "detailUnit": [
                        {
                            "codeNumber": "GD709",
                            "abc_type": "HR06",
                            "abc_activity": "Haul Road Maintenance",
                            "abc_sub_activity": "Road Maintenance"
                        }
                    ]
                },
                {
                    "model": "GD755-5R",
                    "total": 3,
                    "detailUnit": [
                        {
                            "codeNumber": "GD7503",
                            "abc_type": "OB06",
                            "abc_activity": "Overburden",
                            "abc_sub_activity": "Road Maintenance"
                        },
                        {
                            "codeNumber": "GD7505",
                            "abc_type": "OB06",
                            "abc_activity": "Overburden",
                            "abc_sub_activity": "Road Maintenance"
                        },
                        {
                            "codeNumber": "GD7516",
                            "abc_type": "OB06",
                            "abc_activity": "Overburden",
                            "abc_sub_activity": "Road Maintenance"
                        }
                    ]
                },
                {
                    "model": "HD465-7R",
                    "total": 5,
                    "detailUnit": [
                        {
                            "codeNumber": "H54005AMM",
                            "abc_type": "OB02",
                            "abc_activity": "Overburden",
                            "abc_sub_activity": "Hauling"
                        },
                        {
                            "codeNumber": "H54013AMM",
                            "abc_type": "OB02",
                            "abc_activity": "Overburden",
                            "abc_sub_activity": "Hauling"
                        },
                        {
                            "codeNumber": "H54014AMM",
                            "abc_type": "OB02",
                            "abc_activity": "Overburden",
                            "abc_sub_activity": "Hauling"
                        },
                        {
                            "codeNumber": "WH54601AMM",
                            "abc_type": "OB11",
                            "abc_activity": "Overburden",
                            "abc_sub_activity": "Support"
                        },
                        {
                            "codeNumber": "WH54602AMM",
                            "abc_type": "OB11",
                            "abc_activity": "Overburden",
                            "abc_sub_activity": "Support"
                        }
                    ]
                },
                {
                    "model": "HD785-7",
                    "total": 143,
                    "detailUnit": [
                        {
                            "codeNumber": "H57083AMM",
                            "abc_type": "OB02",
                            "abc_activity": "Overburden",
                            "abc_sub_activity": "Hauling"
                        },
                        {
                            "codeNumber": "H57084AMM",
                            "abc_type": "OB02",
                            "abc_activity": "Overburden",
                            "abc_sub_activity": "Hauling"
                        },
                        {
                            "codeNumber": "H57086AMM",
                            "abc_type": "OB02",
                            "abc_activity": "Overburden",
                            "abc_sub_activity": "Hauling"
                        },
                        {
                            "codeNumber": "H57087AMM",
                            "abc_type": "OB02",
                            "abc_activity": "Overburden",
                            "abc_sub_activity": "Hauling"
                        },
                        {
                            "codeNumber": "H57090AMM",
                            "abc_type": "OB02",
                            "abc_activity": "Overburden",
                            "abc_sub_activity": "Hauling"
                        },
                        {
                            "codeNumber": "H57091AMM",
                            "abc_type": "OB01",
                            "abc_activity": "Overburden",
                            "abc_sub_activity": "Loading"
                        },
                        {
                            "codeNumber": "H57092AMM",
                            "abc_type": "OB01",
                            "abc_activity": "Overburden",
                            "abc_sub_activity": "Loading"
                        },
                        {
                            "codeNumber": "H57094AMM",
                            "abc_type": "OB01",
                            "abc_activity": "Overburden",
                            "abc_sub_activity": "Loading"
                        },
                        {
                            "codeNumber": "H57096AMM",
                            "abc_type": "OB01",
                            "abc_activity": "Overburden",
                            "abc_sub_activity": "Loading"
                        },
                        {
                            "codeNumber": "H57097AMM",
                            "abc_type": "OB01",
                            "abc_activity": "Overburden",
                            "abc_sub_activity": "Loading"
                        },
                        {
                            "codeNumber": "H57098AMM",
                            "abc_type": "OB01",
                            "abc_activity": "Overburden",
                            "abc_sub_activity": "Loading"
                        },
                        {
                            "codeNumber": "H57099AMM",
                            "abc_type": "OB01",
                            "abc_activity": "Overburden",
                            "abc_sub_activity": "Loading"
                        },
                        {
                            "codeNumber": "H57138AMM",
                            "abc_type": "OB01",
                            "abc_activity": "Overburden",
                            "abc_sub_activity": "Loading"
                        },
                        {
                            "codeNumber": "H57140AMM",
                            "abc_type": "OB01",
                            "abc_activity": "Overburden",
                            "abc_sub_activity": "Loading"
                        },
                        {
                            "codeNumber": "H57141AMM",
                            "abc_type": "OB01",
                            "abc_activity": "Overburden",
                            "abc_sub_activity": "Loading"
                        },
                        {
                            "codeNumber": "H57145AMM",
                            "abc_type": "OB01",
                            "abc_activity": "Overburden",
                            "abc_sub_activity": "Loading"
                        },
                        {
                            "codeNumber": "H57148AMM",
                            "abc_type": "OB01",
                            "abc_activity": "Overburden",
                            "abc_sub_activity": "Loading"
                        },
                        {
                            "codeNumber": "HD7801",
                            "abc_type": "OB02",
                            "abc_activity": "Overburden",
                            "abc_sub_activity": "Hauling"
                        },
                        {
                            "codeNumber": "HD7806",
                            "abc_type": "OB02",
                            "abc_activity": "Overburden",
                            "abc_sub_activity": "Hauling"
                        },
                        {
                            "codeNumber": "HD78102",
                            "abc_type": "OB02",
                            "abc_activity": "Overburden",
                            "abc_sub_activity": "Hauling"
                        },
                        {
                            "codeNumber": "HD78104",
                            "abc_type": "OB02",
                            "abc_activity": "Overburden",
                            "abc_sub_activity": "Hauling"
                        },
                        {
                            "codeNumber": "HD78105",
                            "abc_type": "OB02",
                            "abc_activity": "Overburden",
                            "abc_sub_activity": "Hauling"
                        },
                        {
                            "codeNumber": "HD78106",
                            "abc_type": "OB02",
                            "abc_activity": "Overburden",
                            "abc_sub_activity": "Hauling"
                        },
                        {
                            "codeNumber": "HD78107",
                            "abc_type": "OB02",
                            "abc_activity": "Overburden",
                            "abc_sub_activity": "Hauling"
                        },
                        {
                            "codeNumber": "HD78108",
                            "abc_type": "OB02",
                            "abc_activity": "Overburden",
                            "abc_sub_activity": "Hauling"
                        },
                        {
                            "codeNumber": "HD78112",
                            "abc_type": "OB02",
                            "abc_activity": "Overburden",
                            "abc_sub_activity": "Hauling"
                        },
                        {
                            "codeNumber": "HD78113",
                            "abc_type": "OB02",
                            "abc_activity": "Overburden",
                            "abc_sub_activity": "Hauling"
                        },
                        {
                            "codeNumber": "HD78115",
                            "abc_type": "OB02",
                            "abc_activity": "Overburden",
                            "abc_sub_activity": "Hauling"
                        },
                        {
                            "codeNumber": "HD78116",
                            "abc_type": "OB02",
                            "abc_activity": "Overburden",
                            "abc_sub_activity": "Hauling"
                        },
                        {
                            "codeNumber": "HD7812",
                            "abc_type": "OB02",
                            "abc_activity": "Overburden",
                            "abc_sub_activity": "Hauling"
                        },
                        {
                            "codeNumber": "HD78124",
                            "abc_type": "OB02",
                            "abc_activity": "Overburden",
                            "abc_sub_activity": "Hauling"
                        },
                        {
                            "codeNumber": "HD78129",
                            "abc_type": "OB02",
                            "abc_activity": "Overburden",
                            "abc_sub_activity": "Hauling"
                        },
                        {
                            "codeNumber": "HD78130",
                            "abc_type": "CG01",
                            "abc_activity": "Coal Getting",
                            "abc_sub_activity": "Loading"
                        },
                        {
                            "codeNumber": "HD78131",
                            "abc_type": "CG01",
                            "abc_activity": "Coal Getting",
                            "abc_sub_activity": "Loading"
                        },
                        {
                            "codeNumber": "HD78133",
                            "abc_type": "CG02",
                            "abc_activity": "Coal Getting",
                            "abc_sub_activity": "Hauling"
                        },
                        {
                            "codeNumber": "HD78134",
                            "abc_type": "CG02",
                            "abc_activity": "Coal Getting",
                            "abc_sub_activity": "Hauling"
                        },
                        {
                            "codeNumber": "HD78135",
                            "abc_type": "CG02",
                            "abc_activity": "Coal Getting",
                            "abc_sub_activity": "Hauling"
                        },
                        {
                            "codeNumber": "HD78137",
                            "abc_type": "CG02",
                            "abc_activity": "Coal Getting",
                            "abc_sub_activity": "Hauling"
                        },
                        {
                            "codeNumber": "HD78140",
                            "abc_type": "CG02",
                            "abc_activity": "Coal Getting",
                            "abc_sub_activity": "Hauling"
                        },
                        {
                            "codeNumber": "HD78142",
                            "abc_type": "CG02",
                            "abc_activity": "Coal Getting",
                            "abc_sub_activity": "Hauling"
                        },
                        {
                            "codeNumber": "HD78143",
                            "abc_type": "CG02",
                            "abc_activity": "Coal Getting",
                            "abc_sub_activity": "Hauling"
                        },
                        {
                            "codeNumber": "HD78144",
                            "abc_type": "CG02",
                            "abc_activity": "Coal Getting",
                            "abc_sub_activity": "Hauling"
                        },
                        {
                            "codeNumber": "HD78145",
                            "abc_type": "CG02",
                            "abc_activity": "Coal Getting",
                            "abc_sub_activity": "Hauling"
                        },
                        {
                            "codeNumber": "HD78146",
                            "abc_type": "CG02",
                            "abc_activity": "Coal Getting",
                            "abc_sub_activity": "Hauling"
                        },
                        {
                            "codeNumber": "HD78147",
                            "abc_type": "OB02",
                            "abc_activity": "Overburden",
                            "abc_sub_activity": "Hauling"
                        },
                        {
                            "codeNumber": "HD78148",
                            "abc_type": "OB02",
                            "abc_activity": "Overburden",
                            "abc_sub_activity": "Hauling"
                        },
                        {
                            "codeNumber": "HD78149",
                            "abc_type": "OB02",
                            "abc_activity": "Overburden",
                            "abc_sub_activity": "Hauling"
                        },
                        {
                            "codeNumber": "HD78150",
                            "abc_type": "OB02",
                            "abc_activity": "Overburden",
                            "abc_sub_activity": "Hauling"
                        },
                        {
                            "codeNumber": "HD78151",
                            "abc_type": "OB02",
                            "abc_activity": "Overburden",
                            "abc_sub_activity": "Hauling"
                        },
                        {
                            "codeNumber": "HD78152",
                            "abc_type": "OB02",
                            "abc_activity": "Overburden",
                            "abc_sub_activity": "Hauling"
                        },
                        {
                            "codeNumber": "HD78154",
                            "abc_type": "OB02",
                            "abc_activity": "Overburden",
                            "abc_sub_activity": "Hauling"
                        },
                        {
                            "codeNumber": "HD78157",
                            "abc_type": "OB02",
                            "abc_activity": "Overburden",
                            "abc_sub_activity": "Hauling"
                        },
                        {
                            "codeNumber": "HD78158",
                            "abc_type": "OB02",
                            "abc_activity": "Overburden",
                            "abc_sub_activity": "Hauling"
                        },
                        {
                            "codeNumber": "HD78159",
                            "abc_type": "OB02",
                            "abc_activity": "Overburden",
                            "abc_sub_activity": "Hauling"
                        },
                        {
                            "codeNumber": "HD78160",
                            "abc_type": "OB02",
                            "abc_activity": "Overburden",
                            "abc_sub_activity": "Hauling"
                        },
                        {
                            "codeNumber": "HD78163",
                            "abc_type": "OB02",
                            "abc_activity": "Overburden",
                            "abc_sub_activity": "Hauling"
                        },
                        {
                            "codeNumber": "HD78165",
                            "abc_type": "OB02",
                            "abc_activity": "Overburden",
                            "abc_sub_activity": "Hauling"
                        },
                        {
                            "codeNumber": "HD78166",
                            "abc_type": "OB02",
                            "abc_activity": "Overburden",
                            "abc_sub_activity": "Hauling"
                        },
                        {
                            "codeNumber": "HD78168",
                            "abc_type": "OB02",
                            "abc_activity": "Overburden",
                            "abc_sub_activity": "Hauling"
                        },
                        {
                            "codeNumber": "HD78169",
                            "abc_type": "OB02",
                            "abc_activity": "Overburden",
                            "abc_sub_activity": "Hauling"
                        },
                        {
                            "codeNumber": "HD78170",
                            "abc_type": "OB02",
                            "abc_activity": "Overburden",
                            "abc_sub_activity": "Hauling"
                        },
                        {
                            "codeNumber": "HD78171",
                            "abc_type": "OB02",
                            "abc_activity": "Overburden",
                            "abc_sub_activity": "Hauling"
                        },
                        {
                            "codeNumber": "HD78173",
                            "abc_type": "OB02",
                            "abc_activity": "Overburden",
                            "abc_sub_activity": "Hauling"
                        },
                        {
                            "codeNumber": "HD78175",
                            "abc_type": "OB02",
                            "abc_activity": "Overburden",
                            "abc_sub_activity": "Hauling"
                        },
                        {
                            "codeNumber": "HD78176",
                            "abc_type": "OB02",
                            "abc_activity": "Overburden",
                            "abc_sub_activity": "Hauling"
                        },
                        {
                            "codeNumber": "HD78177",
                            "abc_type": "OB02",
                            "abc_activity": "Overburden",
                            "abc_sub_activity": "Hauling"
                        },
                        {
                            "codeNumber": "HD78178",
                            "abc_type": "OB02",
                            "abc_activity": "Overburden",
                            "abc_sub_activity": "Hauling"
                        },
                        {
                            "codeNumber": "HD78180",
                            "abc_type": "OB02",
                            "abc_activity": "Overburden",
                            "abc_sub_activity": "Hauling"
                        },
                        {
                            "codeNumber": "HD78181",
                            "abc_type": "OB02",
                            "abc_activity": "Overburden",
                            "abc_sub_activity": "Hauling"
                        },
                        {
                            "codeNumber": "HD78183",
                            "abc_type": "OB02",
                            "abc_activity": "Overburden",
                            "abc_sub_activity": "Hauling"
                        },
                        {
                            "codeNumber": "HD78186",
                            "abc_type": "OB02",
                            "abc_activity": "Overburden",
                            "abc_sub_activity": "Hauling"
                        },
                        {
                            "codeNumber": "HD78191",
                            "abc_type": "OB02",
                            "abc_activity": "Overburden",
                            "abc_sub_activity": "Hauling"
                        },
                        {
                            "codeNumber": "HD78203",
                            "abc_type": "OB02",
                            "abc_activity": "Overburden",
                            "abc_sub_activity": "Hauling"
                        },
                        {
                            "codeNumber": "HD78205",
                            "abc_type": "OB02",
                            "abc_activity": "Overburden",
                            "abc_sub_activity": "Hauling"
                        },
                        {
                            "codeNumber": "HD78216",
                            "abc_type": "OB02",
                            "abc_activity": "Overburden",
                            "abc_sub_activity": "Hauling"
                        },
                        {
                            "codeNumber": "HD78228",
                            "abc_type": "OB02",
                            "abc_activity": "Overburden",
                            "abc_sub_activity": "Hauling"
                        },
                        {
                            "codeNumber": "HD7823",
                            "abc_type": "OB02",
                            "abc_activity": "Overburden",
                            "abc_sub_activity": "Hauling"
                        },
                        {
                            "codeNumber": "HD78239",
                            "abc_type": "OB02",
                            "abc_activity": "Overburden",
                            "abc_sub_activity": "Hauling"
                        },
                        {
                            "codeNumber": "HD7824",
                            "abc_type": "OB02",
                            "abc_activity": "Overburden",
                            "abc_sub_activity": "Hauling"
                        },
                        {
                            "codeNumber": "HD78242",
                            "abc_type": "OB02",
                            "abc_activity": "Overburden",
                            "abc_sub_activity": "Hauling"
                        },
                        {
                            "codeNumber": "HD78243",
                            "abc_type": "OB02",
                            "abc_activity": "Overburden",
                            "abc_sub_activity": "Hauling"
                        },
                        {
                            "codeNumber": "HD78244",
                            "abc_type": "OB02",
                            "abc_activity": "Overburden",
                            "abc_sub_activity": "Hauling"
                        },
                        {
                            "codeNumber": "HD78248",
                            "abc_type": "OB02",
                            "abc_activity": "Overburden",
                            "abc_sub_activity": "Hauling"
                        },
                        {
                            "codeNumber": "HD78252",
                            "abc_type": "OB02",
                            "abc_activity": "Overburden",
                            "abc_sub_activity": "Hauling"
                        },
                        {
                            "codeNumber": "HD78253",
                            "abc_type": "OB02",
                            "abc_activity": "Overburden",
                            "abc_sub_activity": "Hauling"
                        },
                        {
                            "codeNumber": "HD78255",
                            "abc_type": "OB02",
                            "abc_activity": "Overburden",
                            "abc_sub_activity": "Hauling"
                        },
                        {
                            "codeNumber": "HD78256",
                            "abc_type": "OB02",
                            "abc_activity": "Overburden",
                            "abc_sub_activity": "Hauling"
                        },
                        {
                            "codeNumber": "HD7826",
                            "abc_type": "OB02",
                            "abc_activity": "Overburden",
                            "abc_sub_activity": "Hauling"
                        },
                        {
                            "codeNumber": "HD78260",
                            "abc_type": "OB02",
                            "abc_activity": "Overburden",
                            "abc_sub_activity": "Hauling"
                        },
                        {
                            "codeNumber": "HD78262",
                            "abc_type": "OB02",
                            "abc_activity": "Overburden",
                            "abc_sub_activity": "Hauling"
                        },
                        {
                            "codeNumber": "HD78263",
                            "abc_type": "OB02",
                            "abc_activity": "Overburden",
                            "abc_sub_activity": "Hauling"
                        },
                        {
                            "codeNumber": "HD78265",
                            "abc_type": "OB02",
                            "abc_activity": "Overburden",
                            "abc_sub_activity": "Hauling"
                        },
                        {
                            "codeNumber": "HD78266",
                            "abc_type": "OB02",
                            "abc_activity": "Overburden",
                            "abc_sub_activity": "Hauling"
                        },
                        {
                            "codeNumber": "HD78269",
                            "abc_type": "OB02",
                            "abc_activity": "Overburden",
                            "abc_sub_activity": "Hauling"
                        },
                        {
                            "codeNumber": "HD7827",
                            "abc_type": "OB02",
                            "abc_activity": "Overburden",
                            "abc_sub_activity": "Hauling"
                        },
                        {
                            "codeNumber": "HD78270",
                            "abc_type": "OB02",
                            "abc_activity": "Overburden",
                            "abc_sub_activity": "Hauling"
                        },
                        {
                            "codeNumber": "HD78272",
                            "abc_type": "OB02",
                            "abc_activity": "Overburden",
                            "abc_sub_activity": "Hauling"
                        },
                        {
                            "codeNumber": "HD78276",
                            "abc_type": "OB02",
                            "abc_activity": "Overburden",
                            "abc_sub_activity": "Hauling"
                        },
                        {
                            "codeNumber": "HD78277",
                            "abc_type": "OB02",
                            "abc_activity": "Overburden",
                            "abc_sub_activity": "Hauling"
                        },
                        {
                            "codeNumber": "HD7828",
                            "abc_type": "OB02",
                            "abc_activity": "Overburden",
                            "abc_sub_activity": "Hauling"
                        },
                        {
                            "codeNumber": "HD7833",
                            "abc_type": "OB02",
                            "abc_activity": "Overburden",
                            "abc_sub_activity": "Hauling"
                        },
                        {
                            "codeNumber": "HD7834",
                            "abc_type": "OB02",
                            "abc_activity": "Overburden",
                            "abc_sub_activity": "Hauling"
                        },
                        {
                            "codeNumber": "HD7836",
                            "abc_type": "OB02",
                            "abc_activity": "Overburden",
                            "abc_sub_activity": "Hauling"
                        },
                        {
                            "codeNumber": "HD7837",
                            "abc_type": "OB02",
                            "abc_activity": "Overburden",
                            "abc_sub_activity": "Hauling"
                        },
                        {
                            "codeNumber": "HD7841",
                            "abc_type": "OB02",
                            "abc_activity": "Overburden",
                            "abc_sub_activity": "Hauling"
                        },
                        {
                            "codeNumber": "HD7842",
                            "abc_type": "OB02",
                            "abc_activity": "Overburden",
                            "abc_sub_activity": "Hauling"
                        },
                        {
                            "codeNumber": "HD78420",
                            "abc_type": "OB02",
                            "abc_activity": "Overburden",
                            "abc_sub_activity": "Hauling"
                        },
                        {
                            "codeNumber": "HD78421",
                            "abc_type": "OB02",
                            "abc_activity": "Overburden",
                            "abc_sub_activity": "Hauling"
                        },
                        {
                            "codeNumber": "HD78426",
                            "abc_type": "OB02",
                            "abc_activity": "Overburden",
                            "abc_sub_activity": "Hauling"
                        },
                        {
                            "codeNumber": "HD78428",
                            "abc_type": "OB02",
                            "abc_activity": "Overburden",
                            "abc_sub_activity": "Hauling"
                        },
                        {
                            "codeNumber": "HD78429",
                            "abc_type": "OB02",
                            "abc_activity": "Overburden",
                            "abc_sub_activity": "Hauling"
                        },
                        {
                            "codeNumber": "HD7843",
                            "abc_type": "OB02",
                            "abc_activity": "Overburden",
                            "abc_sub_activity": "Hauling"
                        },
                        {
                            "codeNumber": "HD78430",
                            "abc_type": "OB02",
                            "abc_activity": "Overburden",
                            "abc_sub_activity": "Hauling"
                        },
                        {
                            "codeNumber": "HD78435",
                            "abc_type": "OB02",
                            "abc_activity": "Overburden",
                            "abc_sub_activity": "Hauling"
                        },
                        {
                            "codeNumber": "HD78436",
                            "abc_type": "OB02",
                            "abc_activity": "Overburden",
                            "abc_sub_activity": "Hauling"
                        },
                        {
                            "codeNumber": "HD78437",
                            "abc_type": "OB02",
                            "abc_activity": "Overburden",
                            "abc_sub_activity": "Hauling"
                        },
                        {
                            "codeNumber": "HD78438",
                            "abc_type": "OB02",
                            "abc_activity": "Overburden",
                            "abc_sub_activity": "Hauling"
                        },
                        {
                            "codeNumber": "HD78439",
                            "abc_type": "OB02",
                            "abc_activity": "Overburden",
                            "abc_sub_activity": "Hauling"
                        },
                        {
                            "codeNumber": "HD78451",
                            "abc_type": "OB02",
                            "abc_activity": "Overburden",
                            "abc_sub_activity": "Hauling"
                        },
                        {
                            "codeNumber": "HD78453",
                            "abc_type": "OB02",
                            "abc_activity": "Overburden",
                            "abc_sub_activity": "Hauling"
                        },
                        {
                            "codeNumber": "HD78459",
                            "abc_type": "OB02",
                            "abc_activity": "Overburden",
                            "abc_sub_activity": "Hauling"
                        },
                        {
                            "codeNumber": "HD7860",
                            "abc_type": "OB02",
                            "abc_activity": "Overburden",
                            "abc_sub_activity": "Hauling"
                        },
                        {
                            "codeNumber": "HD7867",
                            "abc_type": "OB02",
                            "abc_activity": "Overburden",
                            "abc_sub_activity": "Hauling"
                        },
                        {
                            "codeNumber": "HD7869",
                            "abc_type": "OB02",
                            "abc_activity": "Overburden",
                            "abc_sub_activity": "Hauling"
                        },
                        {
                            "codeNumber": "HD7871",
                            "abc_type": "OB02",
                            "abc_activity": "Overburden",
                            "abc_sub_activity": "Hauling"
                        },
                        {
                            "codeNumber": "HD7872",
                            "abc_type": "OB02",
                            "abc_activity": "Overburden",
                            "abc_sub_activity": "Hauling"
                        },
                        {
                            "codeNumber": "HD7874",
                            "abc_type": "OB02",
                            "abc_activity": "Overburden",
                            "abc_sub_activity": "Hauling"
                        },
                        {
                            "codeNumber": "HD7877",
                            "abc_type": "OB02",
                            "abc_activity": "Overburden",
                            "abc_sub_activity": "Hauling"
                        },
                        {
                            "codeNumber": "HD7878",
                            "abc_type": "OB02",
                            "abc_activity": "Overburden",
                            "abc_sub_activity": "Hauling"
                        },
                        {
                            "codeNumber": "HD7880",
                            "abc_type": "OB02",
                            "abc_activity": "Overburden",
                            "abc_sub_activity": "Hauling"
                        },
                        {
                            "codeNumber": "HD7884",
                            "abc_type": "OB02",
                            "abc_activity": "Overburden",
                            "abc_sub_activity": "Hauling"
                        },
                        {
                            "codeNumber": "HD7885",
                            "abc_type": "OB02",
                            "abc_activity": "Overburden",
                            "abc_sub_activity": "Hauling"
                        },
                        {
                            "codeNumber": "HD7886",
                            "abc_type": "OB02",
                            "abc_activity": "Overburden",
                            "abc_sub_activity": "Hauling"
                        },
                        {
                            "codeNumber": "HD7887",
                            "abc_type": "OB02",
                            "abc_activity": "Overburden",
                            "abc_sub_activity": "Hauling"
                        },
                        {
                            "codeNumber": "HD7890",
                            "abc_type": "OB02",
                            "abc_activity": "Overburden",
                            "abc_sub_activity": "Hauling"
                        },
                        {
                            "codeNumber": "HD7891",
                            "abc_type": "OB02",
                            "abc_activity": "Overburden",
                            "abc_sub_activity": "Hauling"
                        },
                        {
                            "codeNumber": "HD7893",
                            "abc_type": "OB02",
                            "abc_activity": "Overburden",
                            "abc_sub_activity": "Hauling"
                        },
                        {
                            "codeNumber": "HD7894",
                            "abc_type": "OB02",
                            "abc_activity": "Overburden",
                            "abc_sub_activity": "Hauling"
                        },
                        {
                            "codeNumber": "HD7895",
                            "abc_type": "OB02",
                            "abc_activity": "Overburden",
                            "abc_sub_activity": "Hauling"
                        },
                        {
                            "codeNumber": "HD7896",
                            "abc_type": "OB02",
                            "abc_activity": "Overburden",
                            "abc_sub_activity": "Hauling"
                        },
                        {
                            "codeNumber": "HD7897",
                            "abc_type": "OB02",
                            "abc_activity": "Overburden",
                            "abc_sub_activity": "Hauling"
                        },
                        {
                            "codeNumber": "HD7898",
                            "abc_type": "OB02",
                            "abc_activity": "Overburden",
                            "abc_sub_activity": "Hauling"
                        },
                        {
                            "codeNumber": "HD7899",
                            "abc_type": "OB02",
                            "abc_activity": "Overburden",
                            "abc_sub_activity": "Hauling"
                        }
                    ]
                },
                {
                    "model": "SV526D",
                    "total": 5,
                    "detailUnit": [
                        {
                            "codeNumber": "VS04",
                            "abc_type": "HR06",
                            "abc_activity": "Haul Road Maintenance",
                            "abc_sub_activity": "Road Maintenance"
                        },
                        {
                            "codeNumber": "VS05",
                            "abc_type": "HR06",
                            "abc_activity": "Haul Road Maintenance",
                            "abc_sub_activity": "Road Maintenance"
                        },
                        {
                            "codeNumber": "VS09",
                            "abc_type": "HR06",
                            "abc_activity": "Haul Road Maintenance",
                            "abc_sub_activity": "Road Maintenance"
                        },
                        {
                            "codeNumber": "VS10",
                            "abc_type": "OB11",
                            "abc_activity": "Overburden",
                            "abc_sub_activity": "Support"
                        },
                        {
                            "codeNumber": "VS33",
                            "abc_type": "OB11",
                            "abc_activity": "Overburden",
                            "abc_sub_activity": "Support"
                        }
                    ]
                }
            ],
            "detailStandby": [
                {
                    "model": "P380CB6X4EHZ",
                    "total": 7,
                    "detailUnit": [
                        {
                            "codeNumber": "CT02",
                            "abc_type": "PL02",
                            "abc_activity": "Plant",
                            "abc_sub_activity": "Support"
                        },
                        {
                            "codeNumber": "CT3802",
                            "abc_type": "PL02",
                            "abc_activity": "Plant",
                            "abc_sub_activity": "Support"
                        },
                        {
                            "codeNumber": "CT3806",
                            "abc_type": "PL02",
                            "abc_activity": "Plant",
                            "abc_sub_activity": "Support"
                        },
                        {
                            "codeNumber": "CT3807",
                            "abc_type": "PL02",
                            "abc_activity": "Plant",
                            "abc_sub_activity": "Support"
                        },
                        {
                            "codeNumber": "CT3811",
                            "abc_type": "PL02",
                            "abc_activity": "Plant",
                            "abc_sub_activity": "Support"
                        },
                        {
                            "codeNumber": "CT3814",
                            "abc_type": "PL02",
                            "abc_activity": "Plant",
                            "abc_sub_activity": "Support"
                        },
                        {
                            "codeNumber": "RCT-07",
                            "abc_type": "OB11",
                            "abc_activity": "Overburden",
                            "abc_sub_activity": "Support"
                        }
                    ]
                },
                {
                    "model": "D155A-6",
                    "total": 17,
                    "detailUnit": [
                        {
                            "codeNumber": "D1505",
                            "abc_type": "OB03",
                            "abc_activity": "Overburden",
                            "abc_sub_activity": "Dozing"
                        },
                        {
                            "codeNumber": "D1507",
                            "abc_type": "OB03",
                            "abc_activity": "Overburden",
                            "abc_sub_activity": "Dozing"
                        },
                        {
                            "codeNumber": "D1508",
                            "abc_type": "OB03",
                            "abc_activity": "Overburden",
                            "abc_sub_activity": "Dozing"
                        },
                        {
                            "codeNumber": "D1509",
                            "abc_type": "OB03",
                            "abc_activity": "Overburden",
                            "abc_sub_activity": "Dozing"
                        },
                        {
                            "codeNumber": "D1510",
                            "abc_type": "OB03",
                            "abc_activity": "Overburden",
                            "abc_sub_activity": "Dozing"
                        },
                        {
                            "codeNumber": "D1511",
                            "abc_type": "OB03",
                            "abc_activity": "Overburden",
                            "abc_sub_activity": "Dozing"
                        },
                        {
                            "codeNumber": "D1512",
                            "abc_type": "OB03",
                            "abc_activity": "Overburden",
                            "abc_sub_activity": "Dozing"
                        },
                        {
                            "codeNumber": "D1513",
                            "abc_type": "OB03",
                            "abc_activity": "Overburden",
                            "abc_sub_activity": "Dozing"
                        },
                        {
                            "codeNumber": "D1514",
                            "abc_type": "OB03",
                            "abc_activity": "Overburden",
                            "abc_sub_activity": "Dozing"
                        },
                        {
                            "codeNumber": "D1517",
                            "abc_type": "OB03",
                            "abc_activity": "Overburden",
                            "abc_sub_activity": "Dozing"
                        },
                        {
                            "codeNumber": "D1519",
                            "abc_type": "OB03",
                            "abc_activity": "Overburden",
                            "abc_sub_activity": "Dozing"
                        },
                        {
                            "codeNumber": "D1530",
                            "abc_type": "OB03",
                            "abc_activity": "Overburden",
                            "abc_sub_activity": "Dozing"
                        },
                        {
                            "codeNumber": "D1532",
                            "abc_type": "OB03",
                            "abc_activity": "Overburden",
                            "abc_sub_activity": "Dozing"
                        },
                        {
                            "codeNumber": "D1539",
                            "abc_type": "OB03",
                            "abc_activity": "Overburden",
                            "abc_sub_activity": "Dozing"
                        },
                        {
                            "codeNumber": "D1554",
                            "abc_type": "OB03",
                            "abc_activity": "Overburden",
                            "abc_sub_activity": "Dozing"
                        },
                        {
                            "codeNumber": "D1557",
                            "abc_type": "OB03",
                            "abc_activity": "Overburden",
                            "abc_sub_activity": "Dozing"
                        },
                        {
                            "codeNumber": "D1558",
                            "abc_type": "OB03",
                            "abc_activity": "Overburden",
                            "abc_sub_activity": "Dozing"
                        }
                    ]
                },
                {
                    "model": "D85ESS-2",
                    "total": 24,
                    "detailUnit": [
                        {
                            "codeNumber": "D5825AMM",
                            "abc_type": "OB03",
                            "abc_activity": "Overburden",
                            "abc_sub_activity": "Dozing"
                        },
                        {
                            "codeNumber": "D85105",
                            "abc_type": "OB03",
                            "abc_activity": "Overburden",
                            "abc_sub_activity": "Dozing"
                        },
                        {
                            "codeNumber": "D85107",
                            "abc_type": "OB03",
                            "abc_activity": "Overburden",
                            "abc_sub_activity": "Dozing"
                        },
                        {
                            "codeNumber": "D85125",
                            "abc_type": "OB03",
                            "abc_activity": "Overburden",
                            "abc_sub_activity": "Dozing"
                        },
                        {
                            "codeNumber": "D85129",
                            "abc_type": "OB03",
                            "abc_activity": "Overburden",
                            "abc_sub_activity": "Dozing"
                        },
                        {
                            "codeNumber": "D85130",
                            "abc_type": "OB03",
                            "abc_activity": "Overburden",
                            "abc_sub_activity": "Dozing"
                        },
                        {
                            "codeNumber": "D85148",
                            "abc_type": "OB03",
                            "abc_activity": "Overburden",
                            "abc_sub_activity": "Dozing"
                        },
                        {
                            "codeNumber": "D85150",
                            "abc_type": "OB03",
                            "abc_activity": "Overburden",
                            "abc_sub_activity": "Dozing"
                        },
                        {
                            "codeNumber": "D85152",
                            "abc_type": "OB03",
                            "abc_activity": "Overburden",
                            "abc_sub_activity": "Dozing"
                        },
                        {
                            "codeNumber": "D85153",
                            "abc_type": "OB03",
                            "abc_activity": "Overburden",
                            "abc_sub_activity": "Dozing"
                        },
                        {
                            "codeNumber": "D8536",
                            "abc_type": "OB03",
                            "abc_activity": "Overburden",
                            "abc_sub_activity": "Dozing"
                        },
                        {
                            "codeNumber": "D8545",
                            "abc_type": "OB03",
                            "abc_activity": "Overburden",
                            "abc_sub_activity": "Dozing"
                        },
                        {
                            "codeNumber": "D8546",
                            "abc_type": "OB03",
                            "abc_activity": "Overburden",
                            "abc_sub_activity": "Dozing"
                        },
                        {
                            "codeNumber": "D8551",
                            "abc_type": "OB03",
                            "abc_activity": "Overburden",
                            "abc_sub_activity": "Dozing"
                        },
                        {
                            "codeNumber": "D8558",
                            "abc_type": "OB03",
                            "abc_activity": "Overburden",
                            "abc_sub_activity": "Dozing"
                        },
                        {
                            "codeNumber": "D8559",
                            "abc_type": "OB03",
                            "abc_activity": "Overburden",
                            "abc_sub_activity": "Dozing"
                        },
                        {
                            "codeNumber": "D8561",
                            "abc_type": "OB03",
                            "abc_activity": "Overburden",
                            "abc_sub_activity": "Dozing"
                        },
                        {
                            "codeNumber": "D8563",
                            "abc_type": "OB03",
                            "abc_activity": "Overburden",
                            "abc_sub_activity": "Dozing"
                        },
                        {
                            "codeNumber": "D8568",
                            "abc_type": "OB03",
                            "abc_activity": "Overburden",
                            "abc_sub_activity": "Dozing"
                        },
                        {
                            "codeNumber": "D8584",
                            "abc_type": "OB03",
                            "abc_activity": "Overburden",
                            "abc_sub_activity": "Dozing"
                        },
                        {
                            "codeNumber": "D8595",
                            "abc_type": "OB03",
                            "abc_activity": "Overburden",
                            "abc_sub_activity": "Dozing"
                        },
                        {
                            "codeNumber": "D8596",
                            "abc_type": "OB03",
                            "abc_activity": "Overburden",
                            "abc_sub_activity": "Dozing"
                        },
                        {
                            "codeNumber": "D8597",
                            "abc_type": "OB03",
                            "abc_activity": "Overburden",
                            "abc_sub_activity": "Dozing"
                        },
                        {
                            "codeNumber": "D8598",
                            "abc_type": "OB03",
                            "abc_activity": "Overburden",
                            "abc_sub_activity": "Dozing"
                        }
                    ]
                },
                {
                    "model": "AXOR 2528CX",
                    "total": 14,
                    "detailUnit": [
                        {
                            "codeNumber": "DA25001",
                            "abc_type": "OB02",
                            "abc_activity": "Overburden",
                            "abc_sub_activity": "Hauling"
                        },
                        {
                            "codeNumber": "DA25002",
                            "abc_type": "OB02",
                            "abc_activity": "Overburden",
                            "abc_sub_activity": "Hauling"
                        },
                        {
                            "codeNumber": "DA25003",
                            "abc_type": "OB02",
                            "abc_activity": "Overburden",
                            "abc_sub_activity": "Hauling"
                        },
                        {
                            "codeNumber": "DA25004",
                            "abc_type": "OB02",
                            "abc_activity": "Overburden",
                            "abc_sub_activity": "Hauling"
                        },
                        {
                            "codeNumber": "DA25005",
                            "abc_type": "OB02",
                            "abc_activity": "Overburden",
                            "abc_sub_activity": "Hauling"
                        },
                        {
                            "codeNumber": "DA25006",
                            "abc_type": "OB02",
                            "abc_activity": "Overburden",
                            "abc_sub_activity": "Hauling"
                        },
                        {
                            "codeNumber": "DA25008",
                            "abc_type": "OB02",
                            "abc_activity": "Overburden",
                            "abc_sub_activity": "Hauling"
                        },
                        {
                            "codeNumber": "DA25073",
                            "abc_type": "OB02",
                            "abc_activity": "Overburden",
                            "abc_sub_activity": "Hauling"
                        },
                        {
                            "codeNumber": "DA25075",
                            "abc_type": "OB02",
                            "abc_activity": "Overburden",
                            "abc_sub_activity": "Hauling"
                        },
                        {
                            "codeNumber": "DA25078",
                            "abc_type": "OB02",
                            "abc_activity": "Overburden",
                            "abc_sub_activity": "Hauling"
                        },
                        {
                            "codeNumber": "DA25086",
                            "abc_type": "",
                            "abc_activity": null,
                            "abc_sub_activity": null
                        },
                        {
                            "codeNumber": "DA25087",
                            "abc_type": "",
                            "abc_activity": null,
                            "abc_sub_activity": null
                        },
                        {
                            "codeNumber": "DA25093",
                            "abc_type": "",
                            "abc_activity": null,
                            "abc_sub_activity": null
                        },
                        {
                            "codeNumber": "DA25095",
                            "abc_type": "OB02",
                            "abc_activity": "Overburden",
                            "abc_sub_activity": "Hauling"
                        }
                    ]
                },
                {
                    "model": "AROCS 48X45K",
                    "total": 2,
                    "detailUnit": [
                        {
                            "codeNumber": "DA4855",
                            "abc_type": "CH02",
                            "abc_activity": "Coal Hauling",
                            "abc_sub_activity": "Hauling"
                        },
                        {
                            "codeNumber": "DA4856",
                            "abc_type": "CH02",
                            "abc_activity": "Coal Hauling",
                            "abc_sub_activity": "Hauling"
                        }
                    ]
                },
                {
                    "model": "FMX400 6X4 400HP",
                    "total": 11,
                    "detailUnit": [
                        {
                            "codeNumber": "DT4004",
                            "abc_type": "OB02",
                            "abc_activity": "Overburden",
                            "abc_sub_activity": "Hauling"
                        },
                        {
                            "codeNumber": "DT4007",
                            "abc_type": "OB02",
                            "abc_activity": "Overburden",
                            "abc_sub_activity": "Hauling"
                        },
                        {
                            "codeNumber": "DT4008",
                            "abc_type": "OB02",
                            "abc_activity": "Overburden",
                            "abc_sub_activity": "Hauling"
                        },
                        {
                            "codeNumber": "DT40104",
                            "abc_type": "OB02",
                            "abc_activity": "Overburden",
                            "abc_sub_activity": "Hauling"
                        },
                        {
                            "codeNumber": "DT40105",
                            "abc_type": "OB02",
                            "abc_activity": "Overburden",
                            "abc_sub_activity": "Hauling"
                        },
                        {
                            "codeNumber": "DT4011",
                            "abc_type": "OB02",
                            "abc_activity": "Overburden",
                            "abc_sub_activity": "Hauling"
                        },
                        {
                            "codeNumber": "DT4038",
                            "abc_type": "OB02",
                            "abc_activity": "Overburden",
                            "abc_sub_activity": "Hauling"
                        },
                        {
                            "codeNumber": "DT4053",
                            "abc_type": "OB02",
                            "abc_activity": "Overburden",
                            "abc_sub_activity": "Hauling"
                        },
                        {
                            "codeNumber": "DT4055",
                            "abc_type": "OB02",
                            "abc_activity": "Overburden",
                            "abc_sub_activity": "Hauling"
                        },
                        {
                            "codeNumber": "DT4058",
                            "abc_type": "OB02",
                            "abc_activity": "Overburden",
                            "abc_sub_activity": "Hauling"
                        },
                        {
                            "codeNumber": "DT4059",
                            "abc_type": "OB02",
                            "abc_activity": "Overburden",
                            "abc_sub_activity": "Hauling"
                        }
                    ]
                },
                {
                    "model": "P410B8X4HZ",
                    "total": 5,
                    "detailUnit": [
                        {
                            "codeNumber": "DT41108",
                            "abc_type": "CH02",
                            "abc_activity": "Coal Hauling",
                            "abc_sub_activity": "Hauling"
                        },
                        {
                            "codeNumber": "DT41109",
                            "abc_type": "CH02",
                            "abc_activity": "Coal Hauling",
                            "abc_sub_activity": "Hauling"
                        },
                        {
                            "codeNumber": "DT41111",
                            "abc_type": "CH02",
                            "abc_activity": "Coal Hauling",
                            "abc_sub_activity": "Hauling"
                        },
                        {
                            "codeNumber": "DT4182",
                            "abc_type": "CH02",
                            "abc_activity": "Coal Hauling",
                            "abc_sub_activity": "Hauling"
                        },
                        {
                            "codeNumber": "DT4188",
                            "abc_type": "CH02",
                            "abc_activity": "Coal Hauling",
                            "abc_sub_activity": "Hauling"
                        }
                    ]
                },
                {
                    "model": "P410CB8X4EHZ",
                    "total": 2,
                    "detailUnit": [
                        {
                            "codeNumber": "DT4151",
                            "abc_type": "CH02",
                            "abc_activity": "Coal Hauling",
                            "abc_sub_activity": "Hauling"
                        },
                        {
                            "codeNumber": "DT4152",
                            "abc_type": "CH02",
                            "abc_activity": "Coal Hauling",
                            "abc_sub_activity": "Hauling"
                        }
                    ]
                },
                {
                    "model": "FMX440 8X4FR",
                    "total": 4,
                    "detailUnit": [
                        {
                            "codeNumber": "DT4442",
                            "abc_type": "CH02",
                            "abc_activity": "Coal Hauling",
                            "abc_sub_activity": "Hauling"
                        },
                        {
                            "codeNumber": "DT4445",
                            "abc_type": "CH02",
                            "abc_activity": "Coal Hauling",
                            "abc_sub_activity": "Hauling"
                        },
                        {
                            "codeNumber": "DT4449",
                            "abc_type": "CH02",
                            "abc_activity": "Coal Hauling",
                            "abc_sub_activity": "Hauling"
                        },
                        {
                            "codeNumber": "DT4464",
                            "abc_type": "CH02",
                            "abc_activity": "Coal Hauling",
                            "abc_sub_activity": "Hauling"
                        }
                    ]
                },
                {
                    "model": "P460B8X4HZ",
                    "total": 4,
                    "detailUnit": [
                        {
                            "codeNumber": "DT4601",
                            "abc_type": "CH02",
                            "abc_activity": "Coal Hauling",
                            "abc_sub_activity": "Hauling"
                        },
                        {
                            "codeNumber": "DT4602",
                            "abc_type": "CH02",
                            "abc_activity": "Coal Hauling",
                            "abc_sub_activity": "Hauling"
                        },
                        {
                            "codeNumber": "DT4606",
                            "abc_type": "CH02",
                            "abc_activity": "Coal Hauling",
                            "abc_sub_activity": "Hauling"
                        },
                        {
                            "codeNumber": "WT4621",
                            "abc_type": "OB11",
                            "abc_activity": "Overburden",
                            "abc_sub_activity": "Support"
                        }
                    ]
                },
                {
                    "model": "FM350PD",
                    "total": 8,
                    "detailUnit": [
                        {
                            "codeNumber": "DTB601",
                            "abc_type": "PA11",
                            "abc_activity": "PPAA",
                            "abc_sub_activity": "Support"
                        },
                        {
                            "codeNumber": "DTB602",
                            "abc_type": "PA11",
                            "abc_activity": "PPAA",
                            "abc_sub_activity": "Support"
                        },
                        {
                            "codeNumber": "DTB603",
                            "abc_type": "PA11",
                            "abc_activity": "PPAA",
                            "abc_sub_activity": "Support"
                        },
                        {
                            "codeNumber": "DTB604",
                            "abc_type": "PA11",
                            "abc_activity": "PPAA",
                            "abc_sub_activity": "Support"
                        },
                        {
                            "codeNumber": "DTB605",
                            "abc_type": "PA11",
                            "abc_activity": "PPAA",
                            "abc_sub_activity": "Support"
                        },
                        {
                            "codeNumber": "DTB606",
                            "abc_type": "PA11",
                            "abc_activity": "PPAA",
                            "abc_sub_activity": "Support"
                        },
                        {
                            "codeNumber": "DTB607",
                            "abc_type": "PA11",
                            "abc_activity": "PPAA",
                            "abc_sub_activity": "Support"
                        },
                        {
                            "codeNumber": "DTB608",
                            "abc_type": "PA11",
                            "abc_activity": "PPAA",
                            "abc_sub_activity": "Support"
                        }
                    ]
                },
                {
                    "model": "PC1250-8R",
                    "total": 3,
                    "detailUnit": [
                        {
                            "codeNumber": "E1208",
                            "abc_type": "OB01",
                            "abc_activity": "Overburden",
                            "abc_sub_activity": "Loading"
                        },
                        {
                            "codeNumber": "E1210",
                            "abc_type": "OB01",
                            "abc_activity": "Overburden",
                            "abc_sub_activity": "Loading"
                        },
                        {
                            "codeNumber": "E1237",
                            "abc_type": "CG01",
                            "abc_activity": "Coal Getting",
                            "abc_sub_activity": "Loading"
                        }
                    ]
                },
                {
                    "model": "PC2000-8",
                    "total": 12,
                    "detailUnit": [
                        {
                            "codeNumber": "E2006",
                            "abc_type": "OB01",
                            "abc_activity": "Overburden",
                            "abc_sub_activity": "Loading"
                        },
                        {
                            "codeNumber": "E2007",
                            "abc_type": "OB01",
                            "abc_activity": "Overburden",
                            "abc_sub_activity": "Loading"
                        },
                        {
                            "codeNumber": "E2009",
                            "abc_type": "CG01",
                            "abc_activity": "Coal Getting",
                            "abc_sub_activity": "Loading"
                        },
                        {
                            "codeNumber": "E2011",
                            "abc_type": "OB01",
                            "abc_activity": "Overburden",
                            "abc_sub_activity": "Loading"
                        },
                        {
                            "codeNumber": "E2012",
                            "abc_type": "OB01",
                            "abc_activity": "Overburden",
                            "abc_sub_activity": "Loading"
                        },
                        {
                            "codeNumber": "E2018",
                            "abc_type": "OB01",
                            "abc_activity": "Overburden",
                            "abc_sub_activity": "Loading"
                        },
                        {
                            "codeNumber": "E2020",
                            "abc_type": "CG01",
                            "abc_activity": "Coal Getting",
                            "abc_sub_activity": "Loading"
                        },
                        {
                            "codeNumber": "E2028",
                            "abc_type": "OB01",
                            "abc_activity": "Overburden",
                            "abc_sub_activity": "Loading"
                        },
                        {
                            "codeNumber": "E2030",
                            "abc_type": "OB01",
                            "abc_activity": "Overburden",
                            "abc_sub_activity": "Loading"
                        },
                        {
                            "codeNumber": "E2037",
                            "abc_type": "OB01",
                            "abc_activity": "Overburden",
                            "abc_sub_activity": "Loading"
                        },
                        {
                            "codeNumber": "E2048",
                            "abc_type": "OB01",
                            "abc_activity": "Overburden",
                            "abc_sub_activity": "Loading"
                        },
                        {
                            "codeNumber": "E2052",
                            "abc_type": "OB01",
                            "abc_activity": "Overburden",
                            "abc_sub_activity": "Loading"
                        }
                    ]
                },
                {
                    "model": "PC210-10MO",
                    "total": 10,
                    "detailUnit": [
                        {
                            "codeNumber": "E2102",
                            "abc_type": "OB11",
                            "abc_activity": "Overburden",
                            "abc_sub_activity": "Support"
                        },
                        {
                            "codeNumber": "E2168",
                            "abc_type": "OB11",
                            "abc_activity": "Overburden",
                            "abc_sub_activity": "Support"
                        },
                        {
                            "codeNumber": "E2171",
                            "abc_type": "OB11",
                            "abc_activity": "Overburden",
                            "abc_sub_activity": "Support"
                        },
                        {
                            "codeNumber": "E2172",
                            "abc_type": "OB11",
                            "abc_activity": "Overburden",
                            "abc_sub_activity": "Support"
                        },
                        {
                            "codeNumber": "E2180",
                            "abc_type": "OB11",
                            "abc_activity": "Overburden",
                            "abc_sub_activity": "Support"
                        },
                        {
                            "codeNumber": "E2184",
                            "abc_type": "OB11",
                            "abc_activity": "Overburden",
                            "abc_sub_activity": "Support"
                        },
                        {
                            "codeNumber": "E294",
                            "abc_type": "CG11",
                            "abc_activity": "Coal Getting",
                            "abc_sub_activity": "Support"
                        },
                        {
                            "codeNumber": "E296",
                            "abc_type": "OB11",
                            "abc_activity": "Overburden",
                            "abc_sub_activity": "Support"
                        },
                        {
                            "codeNumber": "E297",
                            "abc_type": "OB11",
                            "abc_activity": "Overburden",
                            "abc_sub_activity": "Support"
                        },
                        {
                            "codeNumber": "E298",
                            "abc_type": "OB11",
                            "abc_activity": "Overburden",
                            "abc_sub_activity": "Support"
                        }
                    ]
                },
                {
                    "model": "PC200-8MO",
                    "total": 10,
                    "detailUnit": [
                        {
                            "codeNumber": "E238",
                            "abc_type": "OB11",
                            "abc_activity": "Overburden",
                            "abc_sub_activity": "Support"
                        },
                        {
                            "codeNumber": "E241",
                            "abc_type": "OB06",
                            "abc_activity": "Overburden",
                            "abc_sub_activity": "Road Maintenance"
                        },
                        {
                            "codeNumber": "E243",
                            "abc_type": "PA11",
                            "abc_activity": "PPAA",
                            "abc_sub_activity": "Support"
                        },
                        {
                            "codeNumber": "E250",
                            "abc_type": "OB11",
                            "abc_activity": "Overburden",
                            "abc_sub_activity": "Support"
                        },
                        {
                            "codeNumber": "E258",
                            "abc_type": "PA11",
                            "abc_activity": "PPAA",
                            "abc_sub_activity": "Support"
                        },
                        {
                            "codeNumber": "E259 ",
                            "abc_type": "",
                            "abc_activity": null,
                            "abc_sub_activity": null
                        },
                        {
                            "codeNumber": "E261",
                            "abc_type": "CG11",
                            "abc_activity": "Coal Getting",
                            "abc_sub_activity": "Support"
                        },
                        {
                            "codeNumber": "E262",
                            "abc_type": "CG11",
                            "abc_activity": "Coal Getting",
                            "abc_sub_activity": "Support"
                        },
                        {
                            "codeNumber": "E263",
                            "abc_type": "CG11",
                            "abc_activity": "Coal Getting",
                            "abc_sub_activity": "Support"
                        },
                        {
                            "codeNumber": "E289",
                            "abc_type": "OB11",
                            "abc_activity": "Overburden",
                            "abc_sub_activity": "Support"
                        }
                    ]
                },
                {
                    "model": "PC300-8MO",
                    "total": 4,
                    "detailUnit": [
                        {
                            "codeNumber": "E314",
                            "abc_type": "CG01",
                            "abc_activity": "Coal Getting",
                            "abc_sub_activity": "Loading"
                        },
                        {
                            "codeNumber": "E316",
                            "abc_type": "OB11",
                            "abc_activity": "Overburden",
                            "abc_sub_activity": "Support"
                        },
                        {
                            "codeNumber": "E332",
                            "abc_type": "OB11",
                            "abc_activity": "Overburden",
                            "abc_sub_activity": "Support"
                        },
                        {
                            "codeNumber": "E346",
                            "abc_type": "OB11",
                            "abc_activity": "Overburden",
                            "abc_sub_activity": "Support"
                        }
                    ]
                },
                {
                    "model": "PC400LCSE-8",
                    "total": 2,
                    "detailUnit": [
                        {
                            "codeNumber": "E407",
                            "abc_type": "OB01",
                            "abc_activity": "Overburden",
                            "abc_sub_activity": "Loading"
                        },
                        {
                            "codeNumber": "E411",
                            "abc_type": "OB01",
                            "abc_activity": "Overburden",
                            "abc_sub_activity": "Loading"
                        }
                    ]
                },
                {
                    "model": "PC500LC-10R",
                    "total": 8,
                    "detailUnit": [
                        {
                            "codeNumber": "E511",
                            "abc_type": "CG01",
                            "abc_activity": "Coal Getting",
                            "abc_sub_activity": "Loading"
                        },
                        {
                            "codeNumber": "E514",
                            "abc_type": "DW15",
                            "abc_activity": "Daywork",
                            "abc_sub_activity": "Rom"
                        },
                        {
                            "codeNumber": "E515",
                            "abc_type": "DW15",
                            "abc_activity": "Daywork",
                            "abc_sub_activity": "Rom"
                        },
                        {
                            "codeNumber": "E516",
                            "abc_type": "DW15",
                            "abc_activity": "Daywork",
                            "abc_sub_activity": "Rom"
                        },
                        {
                            "codeNumber": "E524",
                            "abc_type": "CG01",
                            "abc_activity": "Coal Getting",
                            "abc_sub_activity": "Loading"
                        },
                        {
                            "codeNumber": "E531",
                            "abc_type": "CG01",
                            "abc_activity": "Coal Getting",
                            "abc_sub_activity": "Loading"
                        },
                        {
                            "codeNumber": "E533",
                            "abc_type": "OB01",
                            "abc_activity": "Overburden",
                            "abc_sub_activity": "Loading"
                        },
                        {
                            "codeNumber": "E537",
                            "abc_type": "OB01",
                            "abc_activity": "Overburden",
                            "abc_sub_activity": "Loading"
                        }
                    ]
                },
                {
                    "model": "PC850-8R1",
                    "total": 5,
                    "detailUnit": [
                        {
                            "codeNumber": "E8501",
                            "abc_type": "CG01",
                            "abc_activity": "Coal Getting",
                            "abc_sub_activity": "Loading"
                        },
                        {
                            "codeNumber": "E8505",
                            "abc_type": "CG01",
                            "abc_activity": "Coal Getting",
                            "abc_sub_activity": "Loading"
                        },
                        {
                            "codeNumber": "E8508",
                            "abc_type": "CG01",
                            "abc_activity": "Coal Getting",
                            "abc_sub_activity": "Loading"
                        },
                        {
                            "codeNumber": "E8509",
                            "abc_type": "CG01",
                            "abc_activity": "Coal Getting",
                            "abc_sub_activity": "Loading"
                        },
                        {
                            "codeNumber": "E8511",
                            "abc_type": "CG01",
                            "abc_activity": "Coal Getting",
                            "abc_sub_activity": "Loading"
                        }
                    ]
                },
                {
                    "model": "GD705A-5",
                    "total": 4,
                    "detailUnit": [
                        {
                            "codeNumber": "GD705",
                            "abc_type": "PA11",
                            "abc_activity": "PPAA",
                            "abc_sub_activity": "Support"
                        },
                        {
                            "codeNumber": "GD710",
                            "abc_type": "HR06",
                            "abc_activity": "Haul Road Maintenance",
                            "abc_sub_activity": "Road Maintenance"
                        },
                        {
                            "codeNumber": "GD716",
                            "abc_type": "HR06",
                            "abc_activity": "Haul Road Maintenance",
                            "abc_sub_activity": "Road Maintenance"
                        },
                        {
                            "codeNumber": "GD717",
                            "abc_type": "HR06",
                            "abc_activity": "Haul Road Maintenance",
                            "abc_sub_activity": "Road Maintenance"
                        }
                    ]
                },
                {
                    "model": "GD755-5R",
                    "total": 2,
                    "detailUnit": [
                        {
                            "codeNumber": "GD7501",
                            "abc_type": "OB06",
                            "abc_activity": "Overburden",
                            "abc_sub_activity": "Road Maintenance"
                        },
                        {
                            "codeNumber": "GD7517",
                            "abc_type": "HR06",
                            "abc_activity": "Haul Road Maintenance",
                            "abc_sub_activity": "Road Maintenance"
                        }
                    ]
                },
                {
                    "model": "GD825A-2",
                    "total": 6,
                    "detailUnit": [
                        {
                            "codeNumber": "GD804",
                            "abc_type": "OB06",
                            "abc_activity": "Overburden",
                            "abc_sub_activity": "Road Maintenance"
                        },
                        {
                            "codeNumber": "GD806",
                            "abc_type": "OB06",
                            "abc_activity": "Overburden",
                            "abc_sub_activity": "Road Maintenance"
                        },
                        {
                            "codeNumber": "GD808",
                            "abc_type": "OB06",
                            "abc_activity": "Overburden",
                            "abc_sub_activity": "Road Maintenance"
                        },
                        {
                            "codeNumber": "GD818",
                            "abc_type": "OB06",
                            "abc_activity": "Overburden",
                            "abc_sub_activity": "Road Maintenance"
                        },
                        {
                            "codeNumber": "GD819",
                            "abc_type": "OB06",
                            "abc_activity": "Overburden",
                            "abc_sub_activity": "Road Maintenance"
                        },
                        {
                            "codeNumber": "GD825",
                            "abc_type": "OB06",
                            "abc_activity": "Overburden",
                            "abc_sub_activity": "Road Maintenance"
                        }
                    ]
                },
                {
                    "model": "HD465-7R",
                    "total": 1,
                    "detailUnit": [
                        {
                            "codeNumber": "H54011AMM",
                            "abc_type": "OB02",
                            "abc_activity": "Overburden",
                            "abc_sub_activity": "Hauling"
                        }
                    ]
                },
                {
                    "model": "HD785-7",
                    "total": 94,
                    "detailUnit": [
                        {
                            "codeNumber": "H57085AMM",
                            "abc_type": "OB02",
                            "abc_activity": "Overburden",
                            "abc_sub_activity": "Hauling"
                        },
                        {
                            "codeNumber": "H57088AMM",
                            "abc_type": "OB02",
                            "abc_activity": "Overburden",
                            "abc_sub_activity": "Hauling"
                        },
                        {
                            "codeNumber": "H57089AMM",
                            "abc_type": "OB02",
                            "abc_activity": "Overburden",
                            "abc_sub_activity": "Hauling"
                        },
                        {
                            "codeNumber": "H57093AMM",
                            "abc_type": "OB01",
                            "abc_activity": "Overburden",
                            "abc_sub_activity": "Loading"
                        },
                        {
                            "codeNumber": "H57095AMM",
                            "abc_type": "OB01",
                            "abc_activity": "Overburden",
                            "abc_sub_activity": "Loading"
                        },
                        {
                            "codeNumber": "H57139AMM",
                            "abc_type": "OB01",
                            "abc_activity": "Overburden",
                            "abc_sub_activity": "Loading"
                        },
                        {
                            "codeNumber": "H57142AMM",
                            "abc_type": "OB01",
                            "abc_activity": "Overburden",
                            "abc_sub_activity": "Loading"
                        },
                        {
                            "codeNumber": "H57143AMM",
                            "abc_type": "OB01",
                            "abc_activity": "Overburden",
                            "abc_sub_activity": "Loading"
                        },
                        {
                            "codeNumber": "H57144AMM",
                            "abc_type": "OB01",
                            "abc_activity": "Overburden",
                            "abc_sub_activity": "Loading"
                        },
                        {
                            "codeNumber": "H57146AMM",
                            "abc_type": "OB01",
                            "abc_activity": "Overburden",
                            "abc_sub_activity": "Loading"
                        },
                        {
                            "codeNumber": "H57147AMM",
                            "abc_type": "OB01",
                            "abc_activity": "Overburden",
                            "abc_sub_activity": "Loading"
                        },
                        {
                            "codeNumber": "HD7802",
                            "abc_type": "OB02",
                            "abc_activity": "Overburden",
                            "abc_sub_activity": "Hauling"
                        },
                        {
                            "codeNumber": "HD7803",
                            "abc_type": "OB02",
                            "abc_activity": "Overburden",
                            "abc_sub_activity": "Hauling"
                        },
                        {
                            "codeNumber": "HD7804",
                            "abc_type": "OB02",
                            "abc_activity": "Overburden",
                            "abc_sub_activity": "Hauling"
                        },
                        {
                            "codeNumber": "HD7805",
                            "abc_type": "PA11",
                            "abc_activity": "PPAA",
                            "abc_sub_activity": "Support"
                        },
                        {
                            "codeNumber": "HD7807",
                            "abc_type": "OB02",
                            "abc_activity": "Overburden",
                            "abc_sub_activity": "Hauling"
                        },
                        {
                            "codeNumber": "HD7810",
                            "abc_type": "OB02",
                            "abc_activity": "Overburden",
                            "abc_sub_activity": "Hauling"
                        },
                        {
                            "codeNumber": "HD78103",
                            "abc_type": "OB02",
                            "abc_activity": "Overburden",
                            "abc_sub_activity": "Hauling"
                        },
                        {
                            "codeNumber": "HD78109",
                            "abc_type": "OB02",
                            "abc_activity": "Overburden",
                            "abc_sub_activity": "Hauling"
                        },
                        {
                            "codeNumber": "HD7811",
                            "abc_type": "OB02",
                            "abc_activity": "Overburden",
                            "abc_sub_activity": "Hauling"
                        },
                        {
                            "codeNumber": "HD78111",
                            "abc_type": "OB02",
                            "abc_activity": "Overburden",
                            "abc_sub_activity": "Hauling"
                        },
                        {
                            "codeNumber": "HD78114",
                            "abc_type": "OB02",
                            "abc_activity": "Overburden",
                            "abc_sub_activity": "Hauling"
                        },
                        {
                            "codeNumber": "HD78117",
                            "abc_type": "OB02",
                            "abc_activity": "Overburden",
                            "abc_sub_activity": "Hauling"
                        },
                        {
                            "codeNumber": "HD78125",
                            "abc_type": "OB02",
                            "abc_activity": "Overburden",
                            "abc_sub_activity": "Hauling"
                        },
                        {
                            "codeNumber": "HD78126",
                            "abc_type": "OB02",
                            "abc_activity": "Overburden",
                            "abc_sub_activity": "Hauling"
                        },
                        {
                            "codeNumber": "HD78127",
                            "abc_type": "OB02",
                            "abc_activity": "Overburden",
                            "abc_sub_activity": "Hauling"
                        },
                        {
                            "codeNumber": "HD78128",
                            "abc_type": "OB02",
                            "abc_activity": "Overburden",
                            "abc_sub_activity": "Hauling"
                        },
                        {
                            "codeNumber": "HD78136",
                            "abc_type": "CG02",
                            "abc_activity": "Coal Getting",
                            "abc_sub_activity": "Hauling"
                        },
                        {
                            "codeNumber": "HD78138",
                            "abc_type": "CG02",
                            "abc_activity": "Coal Getting",
                            "abc_sub_activity": "Hauling"
                        },
                        {
                            "codeNumber": "HD78139",
                            "abc_type": "CG02",
                            "abc_activity": "Coal Getting",
                            "abc_sub_activity": "Hauling"
                        },
                        {
                            "codeNumber": "HD78141",
                            "abc_type": "CG02",
                            "abc_activity": "Coal Getting",
                            "abc_sub_activity": "Hauling"
                        },
                        {
                            "codeNumber": "HD78153",
                            "abc_type": "OB02",
                            "abc_activity": "Overburden",
                            "abc_sub_activity": "Hauling"
                        },
                        {
                            "codeNumber": "HD78161",
                            "abc_type": "OB02",
                            "abc_activity": "Overburden",
                            "abc_sub_activity": "Hauling"
                        },
                        {
                            "codeNumber": "HD78167",
                            "abc_type": "OB02",
                            "abc_activity": "Overburden",
                            "abc_sub_activity": "Hauling"
                        },
                        {
                            "codeNumber": "HD78174",
                            "abc_type": "OB02",
                            "abc_activity": "Overburden",
                            "abc_sub_activity": "Hauling"
                        },
                        {
                            "codeNumber": "HD78179",
                            "abc_type": "OB02",
                            "abc_activity": "Overburden",
                            "abc_sub_activity": "Hauling"
                        },
                        {
                            "codeNumber": "HD78182",
                            "abc_type": "OB02",
                            "abc_activity": "Overburden",
                            "abc_sub_activity": "Hauling"
                        },
                        {
                            "codeNumber": "HD78184",
                            "abc_type": "OB02",
                            "abc_activity": "Overburden",
                            "abc_sub_activity": "Hauling"
                        },
                        {
                            "codeNumber": "HD78187",
                            "abc_type": "OB02",
                            "abc_activity": "Overburden",
                            "abc_sub_activity": "Hauling"
                        },
                        {
                            "codeNumber": "HD78189",
                            "abc_type": "OB02",
                            "abc_activity": "Overburden",
                            "abc_sub_activity": "Hauling"
                        },
                        {
                            "codeNumber": "HD78204",
                            "abc_type": "OB02",
                            "abc_activity": "Overburden",
                            "abc_sub_activity": "Hauling"
                        },
                        {
                            "codeNumber": "HD78217",
                            "abc_type": "OB02",
                            "abc_activity": "Overburden",
                            "abc_sub_activity": "Hauling"
                        },
                        {
                            "codeNumber": "HD78227",
                            "abc_type": "OB02",
                            "abc_activity": "Overburden",
                            "abc_sub_activity": "Hauling"
                        },
                        {
                            "codeNumber": "HD78229",
                            "abc_type": "OB02",
                            "abc_activity": "Overburden",
                            "abc_sub_activity": "Hauling"
                        },
                        {
                            "codeNumber": "HD78230",
                            "abc_type": "OB02",
                            "abc_activity": "Overburden",
                            "abc_sub_activity": "Hauling"
                        },
                        {
                            "codeNumber": "HD78237",
                            "abc_type": "OB02",
                            "abc_activity": "Overburden",
                            "abc_sub_activity": "Hauling"
                        },
                        {
                            "codeNumber": "HD78240",
                            "abc_type": "OB02",
                            "abc_activity": "Overburden",
                            "abc_sub_activity": "Hauling"
                        },
                        {
                            "codeNumber": "HD78241",
                            "abc_type": "OB02",
                            "abc_activity": "Overburden",
                            "abc_sub_activity": "Hauling"
                        },
                        {
                            "codeNumber": "HD78245",
                            "abc_type": "OB02",
                            "abc_activity": "Overburden",
                            "abc_sub_activity": "Hauling"
                        },
                        {
                            "codeNumber": "HD78246",
                            "abc_type": "OB02",
                            "abc_activity": "Overburden",
                            "abc_sub_activity": "Hauling"
                        },
                        {
                            "codeNumber": "HD78247",
                            "abc_type": "OB02",
                            "abc_activity": "Overburden",
                            "abc_sub_activity": "Hauling"
                        },
                        {
                            "codeNumber": "HD78249",
                            "abc_type": "OB02",
                            "abc_activity": "Overburden",
                            "abc_sub_activity": "Hauling"
                        },
                        {
                            "codeNumber": "HD78250",
                            "abc_type": "OB02",
                            "abc_activity": "Overburden",
                            "abc_sub_activity": "Hauling"
                        },
                        {
                            "codeNumber": "HD78251",
                            "abc_type": "OB02",
                            "abc_activity": "Overburden",
                            "abc_sub_activity": "Hauling"
                        },
                        {
                            "codeNumber": "HD78254",
                            "abc_type": "OB02",
                            "abc_activity": "Overburden",
                            "abc_sub_activity": "Hauling"
                        },
                        {
                            "codeNumber": "HD78257",
                            "abc_type": "OB02",
                            "abc_activity": "Overburden",
                            "abc_sub_activity": "Hauling"
                        },
                        {
                            "codeNumber": "HD78258",
                            "abc_type": "OB02",
                            "abc_activity": "Overburden",
                            "abc_sub_activity": "Hauling"
                        },
                        {
                            "codeNumber": "HD78259",
                            "abc_type": "OB02",
                            "abc_activity": "Overburden",
                            "abc_sub_activity": "Hauling"
                        },
                        {
                            "codeNumber": "HD78261",
                            "abc_type": "OB02",
                            "abc_activity": "Overburden",
                            "abc_sub_activity": "Hauling"
                        },
                        {
                            "codeNumber": "HD78264",
                            "abc_type": "OB02",
                            "abc_activity": "Overburden",
                            "abc_sub_activity": "Hauling"
                        },
                        {
                            "codeNumber": "HD78267",
                            "abc_type": "OB02",
                            "abc_activity": "Overburden",
                            "abc_sub_activity": "Hauling"
                        },
                        {
                            "codeNumber": "HD78268",
                            "abc_type": "OB02",
                            "abc_activity": "Overburden",
                            "abc_sub_activity": "Hauling"
                        },
                        {
                            "codeNumber": "HD78271",
                            "abc_type": "OB02",
                            "abc_activity": "Overburden",
                            "abc_sub_activity": "Hauling"
                        },
                        {
                            "codeNumber": "HD7830",
                            "abc_type": "OB02",
                            "abc_activity": "Overburden",
                            "abc_sub_activity": "Hauling"
                        },
                        {
                            "codeNumber": "HD7831",
                            "abc_type": "OB02",
                            "abc_activity": "Overburden",
                            "abc_sub_activity": "Hauling"
                        },
                        {
                            "codeNumber": "HD7832",
                            "abc_type": "OB02",
                            "abc_activity": "Overburden",
                            "abc_sub_activity": "Hauling"
                        },
                        {
                            "codeNumber": "HD7835",
                            "abc_type": "OB02",
                            "abc_activity": "Overburden",
                            "abc_sub_activity": "Hauling"
                        },
                        {
                            "codeNumber": "HD7838",
                            "abc_type": "OB02",
                            "abc_activity": "Overburden",
                            "abc_sub_activity": "Hauling"
                        },
                        {
                            "codeNumber": "HD7839",
                            "abc_type": "OB02",
                            "abc_activity": "Overburden",
                            "abc_sub_activity": "Hauling"
                        },
                        {
                            "codeNumber": "HD7840",
                            "abc_type": "OB02",
                            "abc_activity": "Overburden",
                            "abc_sub_activity": "Hauling"
                        },
                        {
                            "codeNumber": "HD78419",
                            "abc_type": "OB02",
                            "abc_activity": "Overburden",
                            "abc_sub_activity": "Hauling"
                        },
                        {
                            "codeNumber": "HD78422",
                            "abc_type": "OB02",
                            "abc_activity": "Overburden",
                            "abc_sub_activity": "Hauling"
                        },
                        {
                            "codeNumber": "HD78423",
                            "abc_type": "OB02",
                            "abc_activity": "Overburden",
                            "abc_sub_activity": "Hauling"
                        },
                        {
                            "codeNumber": "HD78424",
                            "abc_type": "OB02",
                            "abc_activity": "Overburden",
                            "abc_sub_activity": "Hauling"
                        },
                        {
                            "codeNumber": "HD78425",
                            "abc_type": "OB02",
                            "abc_activity": "Overburden",
                            "abc_sub_activity": "Hauling"
                        },
                        {
                            "codeNumber": "HD78427",
                            "abc_type": "OB02",
                            "abc_activity": "Overburden",
                            "abc_sub_activity": "Hauling"
                        },
                        {
                            "codeNumber": "HD78431",
                            "abc_type": "OB02",
                            "abc_activity": "Overburden",
                            "abc_sub_activity": "Hauling"
                        },
                        {
                            "codeNumber": "HD7844",
                            "abc_type": "OB02",
                            "abc_activity": "Overburden",
                            "abc_sub_activity": "Hauling"
                        },
                        {
                            "codeNumber": "HD7845",
                            "abc_type": "OB02",
                            "abc_activity": "Overburden",
                            "abc_sub_activity": "Hauling"
                        },
                        {
                            "codeNumber": "HD78452",
                            "abc_type": "OB02",
                            "abc_activity": "Overburden",
                            "abc_sub_activity": "Hauling"
                        },
                        {
                            "codeNumber": "HD78458",
                            "abc_type": "OB02",
                            "abc_activity": "Overburden",
                            "abc_sub_activity": "Hauling"
                        },
                        {
                            "codeNumber": "HD7846",
                            "abc_type": "OB02",
                            "abc_activity": "Overburden",
                            "abc_sub_activity": "Hauling"
                        },
                        {
                            "codeNumber": "HD78460",
                            "abc_type": "OB02",
                            "abc_activity": "Overburden",
                            "abc_sub_activity": "Hauling"
                        },
                        {
                            "codeNumber": "HD7847",
                            "abc_type": "OB02",
                            "abc_activity": "Overburden",
                            "abc_sub_activity": "Hauling"
                        },
                        {
                            "codeNumber": "HD7861",
                            "abc_type": "OB02",
                            "abc_activity": "Overburden",
                            "abc_sub_activity": "Hauling"
                        },
                        {
                            "codeNumber": "HD7865",
                            "abc_type": "OB02",
                            "abc_activity": "Overburden",
                            "abc_sub_activity": "Hauling"
                        },
                        {
                            "codeNumber": "HD7866",
                            "abc_type": "OB02",
                            "abc_activity": "Overburden",
                            "abc_sub_activity": "Hauling"
                        },
                        {
                            "codeNumber": "HD7868",
                            "abc_type": "OB02",
                            "abc_activity": "Overburden",
                            "abc_sub_activity": "Hauling"
                        },
                        {
                            "codeNumber": "HD7870",
                            "abc_type": "OB02",
                            "abc_activity": "Overburden",
                            "abc_sub_activity": "Hauling"
                        },
                        {
                            "codeNumber": "HD7873",
                            "abc_type": "OB02",
                            "abc_activity": "Overburden",
                            "abc_sub_activity": "Hauling"
                        },
                        {
                            "codeNumber": "HD7875",
                            "abc_type": "OB02",
                            "abc_activity": "Overburden",
                            "abc_sub_activity": "Hauling"
                        },
                        {
                            "codeNumber": "HD7876",
                            "abc_type": "OB02",
                            "abc_activity": "Overburden",
                            "abc_sub_activity": "Hauling"
                        },
                        {
                            "codeNumber": "HD7879",
                            "abc_type": "OB02",
                            "abc_activity": "Overburden",
                            "abc_sub_activity": "Hauling"
                        },
                        {
                            "codeNumber": "HD7892",
                            "abc_type": "OB02",
                            "abc_activity": "Overburden",
                            "abc_sub_activity": "Hauling"
                        }
                    ]
                },
                {
                    "model": "SV526D",
                    "total": 2,
                    "detailUnit": [
                        {
                            "codeNumber": "VS32",
                            "abc_type": "HR06",
                            "abc_activity": "Haul Road Maintenance",
                            "abc_sub_activity": "Road Maintenance"
                        },
                        {
                            "codeNumber": "VS34",
                            "abc_type": "HR06",
                            "abc_activity": "Haul Road Maintenance",
                            "abc_sub_activity": "Road Maintenance"
                        }
                    ]
                }
            ],
            "detailBreakDown": [
                {
                    "model": "D155A-6",
                    "total": 1,
                    "detailUnit": [
                        {
                            "codeNumber": "D1504",
                            "abc_type": "OB03",
                            "abc_activity": "Overburden",
                            "abc_sub_activity": "Dozing"
                        }
                    ]
                },
                {
                    "model": "P410CB8X4EHZ",
                    "total": 1,
                    "detailUnit": [
                        {
                            "codeNumber": "DT4154",
                            "abc_type": "CH02",
                            "abc_activity": "Coal Hauling",
                            "abc_sub_activity": "Hauling"
                        }
                    ]
                },
                {
                    "model": "HD785-7",
                    "total": 3,
                    "detailUnit": [
                        {
                            "codeNumber": "HD78132",
                            "abc_type": "CG02",
                            "abc_activity": "Coal Getting",
                            "abc_sub_activity": "Hauling"
                        },
                        {
                            "codeNumber": "HD78188",
                            "abc_type": "OB02",
                            "abc_activity": "Overburden",
                            "abc_sub_activity": "Hauling"
                        },
                        {
                            "codeNumber": "HD78190",
                            "abc_type": "OB02",
                            "abc_activity": "Overburden",
                            "abc_sub_activity": "Hauling"
                        }
                    ]
                }
            ]
        }
    })
    const [listData, setListData] = useState([])
    const [tConfig, setTConfig] = useState(null)
    const [detailSum, setDetailSum] = useState('No Operator')
    const processData = allData => {
        const { detailBreakDown, detailOpration, detailStandby, population, totalBreakdown, totalOpration, totalStanby } = allData
        // membuat array baru penampung all data 
        let newArr = []
        detailBreakDown.length && detailBreakDown.forEach(it => newArr.push({...it, status: 'Breakdown'}))
        detailStandby.length && detailStandby.forEach(it => newArr.push({...it, status: 'Standby'}))
        detailOpration.length && detailOpration.forEach(it => newArr.push({...it, status: 'Ready'}))
        // get list model
        let listModel = _.uniq(_.map(newArr, 'model'))
        // create new list converted data
        let dataAllModel = listModel.map(model => {
            let filteredDataByModel = newArr.filter(it => it.model == model)
            // get list detail unit berdasarkan status
            function getListUnit(data){
                return data.length > 0 ? data[0].detailUnit : []
            }
            let listBreakdown = getListUnit(filteredDataByModel.filter(it => it.status == 'Breakdown')) 
            let listStandby = getListUnit(filteredDataByModel.filter(it => it.status == 'Standby'))
            let listOperasi = getListUnit(filteredDataByModel.filter(it => it.status == 'Ready'))
            let total_opt = listOperasi.length
            return {
                model,
                ready: listOperasi.length + listStandby.length,
                breakdown: listBreakdown.length,
                listBreakdown, 
                total_opt,
                start_operasi: listOperasi.length,
                listOperasi,
                no_operator: listStandby.length,
                listStandby
            }
        })
        setListData(dataAllModel)
        console.log(dataAllModel)
    }
    const getDataFromAPI = () => {
        processData(res.data)
    }
    useEffect(() => {
        // konfigurasi datatable list model
        setTConfig({
            destroy: true,
            data: listData,
            columns: [
                { data: 'model', title: 'Unit Model' },
                { data: 'ready', title: 'Ready' },
                { data: 'breakdown', title: 'Breakdown' },
                { data: 'total_opt', title: 'Total Operator' },
                { data: 'start_operasi', title: 'Start Operasi' },
                { data: 'no_operator', title: 'No Operator' },
            ],
            order: [[5,'desc']],
            columnDefs: [
                {
                    targets: [1, 2, 3, 4, 5],
                    className: "text-center"
                },
                {
                    targets: [5],
                    className: "text-[crimson]"
                },
            ]
        })
    }, [listData])
    // first load 
    useEffect(() => {
        getDataFromAPI()
    }, [])
    return (
        <>
            <div className="py-2 pt-6 px-8 bg-slate-100 flex items-center lg:justify-between ">
                <img src="./ppa.png" width="200px" />
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
                        <span className="font-semibold text-xl text-orange-400">{listData.length ? (_.sumBy(listData, 'no_operator') / (_.sumBy(listData, 'breakdown') + _.sumBy(listData, 'ready')) * 100).toFixed(2) : 0}%</span>
                    </h1>
                    <div className="my-1 flex justify-between">
                        <div>
                            <p className="text-slate-400 text-sm">Total Unit</p>
                            <h1 className="font-semibold">{_.sumBy(listData, 'breakdown') + _.sumBy(listData, 'ready')}</h1>
                        </div>
                        <div className="text-right">
                            <p className="text-slate-400 text-sm"> No Operator</p>
                            <h1 className="font-semibold">{_.sumBy(listData, 'no_operator')}</h1>
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
                        <span className="font-semibold text-xl text-emerald-500">{listData.length ? (_.sumBy(listData, 'ready') / (_.sumBy(listData, 'breakdown') + _.sumBy(listData, 'ready')) * 100).toFixed(2) : 0}%</span>
                    </h1>
                    <div title="Click for detail" className="my-1 flex justify-between">
                        <div>
                            <p className="text-slate-400 text-sm">Total All Unit</p>
                            <h1 className="font-semibold">{_.sumBy(listData, 'breakdown') + _.sumBy(listData, 'ready')}</h1>
                        </div>
                        <div className="text-right">
                            <p className="text-slate-400 text-sm">Ready</p>
                            <h1 className="font-semibold">{_.sumBy(listData, 'ready')}</h1>
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
                        <span className="font-semibold text-xl text-rose-500">{listData.length ? (_.sumBy(listData, 'breakdown') / (_.sumBy(listData, 'breakdown') + _.sumBy(listData, 'ready')) * 100).toFixed(2) : 0}%</span>
                    </h1>
                    <div className="my-1 flex justify-between">
                        <div>
                            <p className="text-slate-400 text-sm">Total All Unit</p>
                            <h1 className="font-semibold">{_.sumBy(listData, 'breakdown') + _.sumBy(listData, 'ready')}</h1>
                        </div>
                        <div className="text-right">
                            <p className="text-slate-400 text-sm">Breakdown</p>
                            <h1 className="font-semibold">{_.sumBy(listData, 'breakdown')}</h1>
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
                        <span className="text-sky-600 font-semibold"><i className="fa-solid fa-clipboard-check text-sky-600"></i> Standby</span>
                        <span className="font-semibold text-xl text-sky-600">{listData.length ? (_.sumBy(listData, 'no_operator') / _.sumBy(listData, 'ready') * 100).toFixed(2) : 0}%</span>
                    </h1>
                    <div className="my-1 flex justify-between">
                        <div>
                            <p className="text-slate-400 text-sm">Total All Unit</p>
                            <h1 className="font-semibold">{_.sumBy(listData, 'breakdown') + _.sumBy(listData, 'ready')}</h1>
                        </div>
                        <div className="text-right">
                            <p className="text-slate-400 text-sm">Standby</p>
                            <h1 className="font-semibold">{_.sumBy(listData, 'no_operator')}</h1>
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
                    <Table data={listData} config={tConfig} />
                </div>
            </div>
            <Footer />
        </>
    )
}