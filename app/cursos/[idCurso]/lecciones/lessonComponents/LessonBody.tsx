'use client'
import '../../lessonStyles.css'

export default function LessonBody({content}: {content: string}) {
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
            <p className="block font-sans text-lg antialiased font-normal leading-relaxed text-inherit mb-4 text-justify">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corrupti tenetur eum praesentium, quaerat dicta in labore, at velit doloremque quis, deleniti voluptatum laborum sapiente repellat. Voluptates perspiciatis est nihil harum!
                Rerum dolor optio eius possimus harum quia veniam necessitatibus facilis autem quod, enim sequi a, nemo voluptate exercitationem voluptatibus dolore? Iste laudantium modi nostrum provident in, voluptatibus recusandae fuga aliquid!
            </p>
        </div>
    )
}