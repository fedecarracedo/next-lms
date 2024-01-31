'use client'
import React, { useEffect } from 'react'
import '../../lessonStyles.css'
import { obtenerContenidoLeccion } from '@/app/controllers/DatabaseController'

export default function LessonBody({lesson}: {lesson: number}) {
    const [lessonContent, setLessonContent] = React.useState<JSX.Element[]>([])
    useEffect(
        () => {
            setLessonContent(obtenerContenidoLeccion(lesson))
        }
    , [lesson])

    return (
        <div className="LessonBody pt-8 pl-20 pr-20">
            {lessonContent.map(elem => elem)}
            <div className='FillerBlock'>

            </div>
        </div>
    )
}