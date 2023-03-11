import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'
import { Box } from '@mui/material'
import Landing from '../components/Patient/Landing';
import { useEffect, useState } from 'react'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {

    // const [patient, setPatient] = useState(null)

    // useEffect(() => {
    //     const patient = localStorage.getItem('patient');
    //     if(patient){
    //         setPatient(JSON.parse(patient));
    //     }else{
    //         setPatient(false);
    //     }
    // }, [])

    return (<
        Box minWidth={'100vw'} >
        <
            Landing />
        <
        /Box>
        )
}