'use client'

import {
  Card,
  Input,
  Checkbox,
  Button,
  Typography,
} from "@material-tailwind/react";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
 
export default function LoginComponent() {
  const router = useRouter()

  useEffect(() => {
    if(localStorage.getItem('userEmail'))
      router.push('/')
  })

  return (
     <Card placeholder={''} color="transparent" shadow={false}>
      <Typography placeholder={''} variant="h4" color="blue-gray">
        Login
      </Typography>
      <Typography placeholder={''} color="gray" className="mt-1 font-normal">
        Welcome back! We missed you.
      </Typography>
      <form className="mt-8 mb-2 w-80 max-w-screen-lg sm:w-96">
        <div className="mb-1 flex flex-col gap-6">
          <Typography placeholder={''} variant="h6" color="blue-gray" className="-mb-3">
            Your Email
          </Typography>
          <Input
            crossOrigin={''}
            size="lg"
            placeholder="name@mail.com"
            className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
            labelProps={{
              className: "before:content-none after:content-none",
            }}
          />
          <Typography placeholder={''} variant="h6" color="blue-gray" className="-mb-3">
            Password
          </Typography>
          <Input
            crossOrigin={''}
            type="password"
            size="lg"
            placeholder="********"
            className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
            labelProps={{
              className: "before:content-none after:content-none",
            }}
          />
        </div>
        <Checkbox
          crossOrigin={''}
          label={
            <Typography placeholder={''}
              variant="small"
              color="gray"
              className="flex items-center font-normal"
            >
              Remember me
            </Typography>
          }
          containerProps={{ className: "-ml-2.5" }}
        />
        <Button placeholder={''} className="mt-6" fullWidth>
          login
        </Button>
        <Typography placeholder={''} color="gray" className="mt-4 text-center font-normal">
          Already have an account?{" "}
          <a href="/auth/signup" className="font-medium text-gray-900">
            Sign In
          </a>
        </Typography>
      </form>
    </Card>
  );
}