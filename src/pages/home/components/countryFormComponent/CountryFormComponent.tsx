import { FC } from 'react';
import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { ToastAction } from "@/components/ui/toast"
import './CountryFormComponent.css'
import { useNavigate } from 'react-router-dom';
import { SubmitHandler, useForm, } from 'react-hook-form';
import { useToast } from '@/hooks/use-toast';

const CountryFormComponent: FC = () => {
  const navigate = useNavigate();
  const { register, handleSubmit } = useForm();
  const { toast } = useToast()

  const handleClick = () => {
    navigate(`/`);
  }

  const onSubmit: SubmitHandler<any> = () => {
    toast({
      variant: "destructive",
      title: "Uh oh! Something went wrong.",
      description: "Backend implementation is not already.",
      action: <ToastAction altText="Try latter">Try again</ToastAction>,
    })
  }

  return (
    <>
      <div className='main-container'>
        <div className='back-container'>
          <Button variant="secondary" onClick={handleClick}>Back</Button>
        </div>
        <div className='detail-container'>
          <form onSubmit={handleSubmit(onSubmit)}>
            <Card className="w-[350px]">
              <CardHeader>
                <CardTitle>Create Country</CardTitle>
                <CardDescription>Insert Data Country</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid w-full items-center gap-4">
                  <div className="flex flex-col space-y-1.5">
                    <Label htmlFor="name">Name</Label>
                    <Input id="name" {...register("name")} placeholder="Country Name" />
                  </div>
                  <div className="flex flex-col space-y-1.5">
                    <Label htmlFor="nativename">Native Name</Label>
                    <Input id="nativename" {...register("nativename")} placeholder="Native Name" />
                  </div>
                  <div className="flex flex-col space-y-1.5">
                    <Label htmlFor="population">Population</Label>
                    <Input id="population" {...register("population")} placeholder="Population" />
                  </div>
                  <div className="flex flex-col space-y-1.5">
                    <Label htmlFor="capital">Capital</Label>
                    <Input id="capital" {...register("capital")} placeholder="Capital" />
                  </div>
                  {/* <div className="flex flex-col space-y-1.5">
                    <Label htmlFor="framework">Framework</Label>
                    <Select>
                      <SelectTrigger id="framework">
                        <SelectValue placeholder="Select" />
                      </SelectTrigger>
                      <SelectContent position="popper">
                        <SelectItem value="next">Next.js</SelectItem>
                        <SelectItem value="sveltekit">SvelteKit</SelectItem>
                        <SelectItem value="astro">Astro</SelectItem>
                        <SelectItem value="nuxt">Nuxt.js</SelectItem>
                      </SelectContent>
                    </Select>
                  </div> */}
                </div>
              </CardContent>
              <CardFooter className="flex justify-between">
                <Button variant="outline">Cancel</Button>
                <Button type='submit'>Accept</Button>
              </CardFooter>
            </Card>
          </form>
        </div>
      </div>
    </>
  )
}

export default CountryFormComponent