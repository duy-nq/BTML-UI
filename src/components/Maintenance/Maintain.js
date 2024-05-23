import React, { useEffect, useState } from "react";
import ALH from "../Basic/Header_AfterLogin";
import ALF from "../Basic/Footer_AfterLogin";
import ServiceProvider from "./Service_Provider";
import Button01 from "../Basic/Button_01";
import { useNavigate } from "react-router-dom";
import {v4 as uuid4} from "uuid";
import HeaderUpcoming from "../LandingPage/Header_Upcoming";
import RowMaintenance from "./Row_Maintenance";

export default function Maintenance() {
    const navigate = useNavigate()

    const [data, setData] = useState([])
    const [service_ac, setServiceAC] = useState('')
    const [isDisplayed, setDisplay] = useState(false)
    const [listOfServices, setListOfServices] = useState([])

    const apiDichVu = "http://localhost:8000/api/v1/dichvu";

    useEffect(() => {
        if (service_ac === '') {
            setDisplay(false)
        }
        else setDisplay(true)
    }, [service_ac])

    useEffect(() => {
        localStorage.setItem('sub', '')
    
        fetch(apiDichVu).then((res) => res.json()).then((data) => 
            {
                setListOfServices(data)
                console.log(data)
            }
        );
    },[])

    const getData = (childData) => {        
        const existingIndex = data.findIndex(item => item.sub === localStorage.getItem("sub"))

        data[existingIndex].Serial = childData.Serial
        data[existingIndex].Addon = childData.Addon
    }

    const changeTask = (childData) => {
        setServiceAC(childData)
    }
    
    const handleSubmit = () => {
        if (window.confirm('This action will end your working process and mark as finish! Are you sure?')) {
            console.log(data)
            navigate('/mechanic')
        }
        else {
            return;
        }
    }    

    const toDoList = [
        {
            "IdCT": 'doityourself',
            "IdDV": 1,
            "LoaiML": "Daikin 5AKD-1HW",
            "SoLuong": 2,
        },
        {
            "IdCT": 'idontcare',
            "IdDV": 2,
            "LoaiML": "LG S8C5-12KW",
            "SoLuong": 1,
        }
    ]

    useEffect(() => {
        const transformToDoList = () => {
            let transformedData = [];

            toDoList.forEach((item, index) => {
                let componentId = index + 1

                for (let i = 0; i < item.SoLuong; i++) {
                    transformedData.push({
                        IdCT: item.IdCT,
                        Serial: '',
                        Addon: [],
                        sub: componentId.toString()+'.'+(i+1).toString()
                    });
                }
            });

            return transformedData;
        };

        // Call the transformation function and set the state
        setData(transformToDoList());
    }, []);

    function getServiceById(id) {       
        for (let i = 0; i < listOfServices.length; i++) {
            if (listOfServices[i].IdDV === id) {
                return listOfServices[i].Ten;
            }
        }
    }

    const tdlRows = toDoList.map((item, index) => {
        const components = [];
        let componentId = index + 1

        for (let i = 0; i < item.SoLuong; i++) {
            const sub = '.' + (i+1).toString()

            components.push(
                <RowMaintenance
                    id={componentId.toString()+sub} // Convert to string if id is expected as a string
                    service={getServiceById(item.IdDV)}
                    ac={item.LoaiML}
                    action='Modify'
                    getTask={changeTask}
                    IdCT={item.IdCT}
                />
            );
        }
        
        return components;
    })
    
    return (
        <>
            <div style={{width: '100%', height: '100%', flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'center', gap: 54, display: 'inline-flex'}}>
                <ALH
                    f1='BACK TO WORKSPACE'
                    name='Pham Quoc Viet'
                />
                <div id='payment' style={{width: 'fit-content', height: '100%', flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'center', gap: 19, display: 'inline-flex'}}>

                <div style={{alignSelf: 'stretch', color: 'black', fontSize: 48, fontFamily: 'Inria Sans', fontWeight: '700', wordWrap: 'break-word'}}>To-do list</div>
                <div style={{flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'center', display: 'flex'}}>
                    <HeaderUpcoming
                        col_1='#'
                        col_2='SERVICE(S)'
                        col_3='AC TYPE'
                        col_4='ACTION'
                    />
                </div>
                <div style={{justifyContent: 'flex-start', alignItems: 'flex-start', display: 'inline-flex', flexDirection: 'column'}}>
                    {tdlRows}
                </div>
                </div>
                <ServiceProvider
                    task={service_ac === '' ? 'Please choose a task to continue' : service_ac}
                    func={getData}
                    show={isDisplayed}
                    preData={data}
                />
                <Button01
                    name='Done'
                    func={handleSubmit}
                />
                <ALF
                    content='Copyrights © 2024 duy-nq. All rights reserved'
                />  
            </div>
        </>
    );
}