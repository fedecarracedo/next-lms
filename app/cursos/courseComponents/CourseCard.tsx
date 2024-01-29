'use client'

import {
    Card,
    CardHeader,
    CardBody,
    CardFooter,
    Typography,
    Button,
  } from "@material-tailwind/react";
  import { useRouter } from 'next/navigation'
   
  export default function CourseCard(props: {name: string, description: string, id: number}) {
    const router = useRouter()
    return (
      <Card placeholder={''} className="mt-12 w-96 ml-4">
        <CardHeader placeholder={''} color="blue-gray" className="relative h-56">
          <img
            src="https://images.unsplash.com/photo-1540553016722-983e48a2cd10?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80"
            alt="card-image"
          />
        </CardHeader>
        <CardBody placeholder={''}>
          <Typography placeholder={''} variant="h5" color="blue-gray" className="mb-2">
            {props.name}
          </Typography>
          <Typography placeholder={''}>
            {props.description}
          </Typography>
        </CardBody>
        <CardFooter placeholder={''} className="pt-0">
          <Button onClick={() => router.push(`/cursos/${props.id}/lecciones?courseId=${props.id}`)} placeholder={''}>Read More</Button>
        </CardFooter>
      </Card>
    );
  }