import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { SquareArrowOutUpRight } from "lucide-react"
import { Badge } from "@/components/ui/badge"

import { languages } from "@/data/tags"

interface IResources {
  title: string;
  link: string;
  languages: string[];
}

const Resource = ({ resource }: {resource: IResources}) => {
  const languagesFormatted = resource.languages.map((lang) => languages[lang]);

  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-3xl">{resource.title}</CardTitle>
      </CardHeader>

      <CardContent>
        <p>
          <small className="text-xs font-medium uppercase text-gray-500">
            languages
          </small>
        </p>
        {languagesFormatted.map((lang, id) => (
          <Badge key={`${lang}-${id}`} variant="outline" className="m-1 text-sm tracking-wide">
            {lang.nativeName}
          </Badge>
        ))}
        {/* <Badge variant="outline" className="m-1">Languages: {formatLanguages(resource.languages).join(', ')}</Badge> */}
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