import { FC, useEffect, useState, SyntheticEvent } from 'react';
import { Badge } from "@/components/ui/badge"
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
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import './CountryFormComponent.css'
import { Country, Currency, Language } from '@/models';
import { useNavigate } from 'react-router-dom';

const CountryFormComponent: FC = () => {
  const [country, setCountry] = useState<Country | undefined>(undefined);
  const navigate = useNavigate();

  useEffect(() => {

  }, []);

  const handleClick = (event: SyntheticEvent) => {
    navigate(`/`);
  }

  return (
    <>
      <div className='main-container'>
        <div className='back-container'>
          <Button variant="secondary" onClick={handleClick}>Back</Button>
        </div>
        <div className='detail-container'>
          <Card className="w-[350px]">
            <CardHeader>
              <CardTitle>Create Country</CardTitle>
              <CardDescription>Insert Data Country</CardDescription>
            </CardHeader>
            <CardContent>
              <form>
                <div className="grid w-full items-center gap-4">
                  <div className="flex flex-col space-y-1.5">
                    <Label htmlFor="name">Name</Label>
                    <Input id="name" placeholder="Country Name" />
                  </div>
                  <div className="flex flex-col space-y-1.5">
                    <Label htmlFor="nativename">Native Name</Label>
                    <Input id="nativename" placeholder="Native Name" />
                  </div>
                  <div className="flex flex-col space-y-1.5">
                    <Label htmlFor="population">Population</Label>
                    <Input id="population" placeholder="Population" />
                  </div>
                  <div className="flex flex-col space-y-1.5">
                    <Label htmlFor="capital">Capital</Label>
                    <Input id="capital" placeholder="Capital" />
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
              </form>
            </CardContent>
            <CardFooter className="flex justify-between">
              <Button variant="outline">Cancel</Button>
              <Button>Accept</Button>
            </CardFooter>
          </Card>
        </div>
      </div>
    </>
  )
}

export default CountryFormComponent