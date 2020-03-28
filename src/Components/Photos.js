import React, { useState, useEffect } from 'react'
import calfood from '../Assets/calfood.png'
import calhome from '../Assets/calhome.png'
import calmeals from '../Assets/calmeals.png'
import calweight from '../Assets/calweights.png'
import calmenu from '../Assets/calmenu.png'
import dashboard from '../Assets/Dashboard.png'
import gameplay from '../Assets/Gameplay.png'
import addmap from '../Assets/AddMap.png'
import additems from '../Assets/additems.png'
import addlist from '../Assets/addlist.png'
import listermain from '../Assets/listermain.png'
import semain from '../Assets/semain.png'
import seadd from '../Assets/seadd.png'
import secard from '../Assets/secard.png'

const list = [listermain, addlist, additems]
const cal = [calhome, calfood, calweight, calmenu, calmeals]
const btl = [dashboard, addmap, gameplay]
const shut = [semain, seadd, secard ]

const Photos = ({ id, setPhotos }) => {
    const [project, setProject] = useState([])

    useEffect(() => {
        id === 'list' ?
        setProject(list)
        : id === 'cal' ?
        setProject(cal)
        : id === 'shut' ?
        setProject(shut)
        : setProject(btl)
    }, [id])

    const mappedPhotos = project.map(photo => {
        return (
            <img src={photo} alt='screenshot' style={style.photo}/>
        )
    })

    return (
        <div style={style.container}>
            <button style={style.button} onClick={() => setPhotos('')}>close photos</button>
            {mappedPhotos}
            <button style={style.button} onClick={() => setPhotos('')}>close photos</button>
        </div>
    )
}

export default Photos

let secondary = '#2FDA77'
let white = '#FFFFFF'

const style = {
    container: {
        display: 'flex',
        flexDirection: 'column'
    },
    photo: {
        width: '80%',
        margin: '0 auto',
        marginTop: 20
    },
    button: {
        width: 120,
        height: 20,
        background: secondary,
        fontSize: 16,
        border: 'none',     
        borderRadius: 15,
        color: white,
        marginTop: 20
    }
}