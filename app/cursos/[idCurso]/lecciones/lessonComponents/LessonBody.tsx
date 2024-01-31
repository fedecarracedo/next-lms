'use client'
import React, { useEffect } from 'react'
import '../../lessonStyles.css'
import { obtenerContenidoLeccion } from '@/app/controllers/DatabaseController'
import reactElementToJSXString from 'react-element-to-jsx-string'

export default function LessonBody({content, lesson}: {content: string, lesson: number}) {
    const [lessonContent, setLessonContent] = React.useState<JSX.Element[]>([])
    useEffect(() => {
        setLessonContent(obtenerContenidoLeccion(2))
    }, [])
    return (
        <div className="LessonBody pt-8 pl-20 pr-20">
            <h2 className="block font-sans text-4xl antialiased font-semibold leading-tight tracking-normal text-inherit pb-5 pl-0">
                Modelo Canva de negocios
            </h2>
            <p className="block font-sans text-lg antialiased font-normal leading-relaxed text-inherit text-justify">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis id facilis delectus illo, incidunt quidem itaque atque dolores nihil? A adipisci aliquid labore facere officia eveniet obcaecati iste ipsum consequatur!
            </p>
            <div className="VideoContainer">
                <video className="rounded-lg" controls>
                    <source src="https://docs.material-tailwind.com/demo.mp4" type="video/mp4" />
                    Your browser does not support the video tag.
                </video>
            </div>
            {lessonContent.map(elem => elem)}
            <div className='FillerBlock'>

            </div>
        </div>
    )
}