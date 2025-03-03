import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { SquareArrowOutUpRight } from "lucide-react"
import { Badge } from "@/components/ui/badge"

interface IResources {
  title: string;
  link: string;
  type: string;
  certification: string[];
  languages: string[];
  level: string;
  price: string;
}

const Resource = ({ resource }: {resource: IResources}) => {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-3xl">{resource.title}</CardTitle>
        <CardDescription>Card Description</CardDescription>
      </CardHeader>

      <CardContent>
        <Badge variant="outline" className="m-1">type: {resource.type}</Badge>
        <Badge variant="outline" className="m-1">Certification: {resource.certification.join(', ')}</Badge>
        <Badge variant="outline" className="m-1">Level: {resource.level}</Badge>
        <Badge variant="outline" className="m-1">Price: {resource.price}</Badge>
        <Badge variant="outline" className="m-1">Languages: {resource.languages.join(', ')}</Badge>
      </CardContent>

      <CardFooter>
        <Button asChild>
          <a href={resource.link} target="_blank" rel="noopener noreferrer">
            <SquareArrowOutUpRight /> Visit resource
          </a>
        </Button>
      </CardFooter>
    </Card>
  );
}

export default Resource;