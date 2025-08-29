import fs from "fs";
import path from "path";
import resources from "../data/resources";
import { LANGUAGES } from "../data/tags/language";

const languageMap = Object.fromEntries(
  LANGUAGES.map(lang => [lang.value, lang.label])
);

function formatLanguages(langCodes: string[]): string {
  return langCodes
    .map(code => languageMap[code] || code)
    .sort((a, b) => a.localeCompare(b))
    .join(", ");
}

function formatResource(resource: (typeof resources)[number]): string {
  const languages = formatLanguages(resource.language || []);
  const types = resource.types?.map(t => t[0].toUpperCase() + t.slice(1)).join(", ");
  const price = resource.price?.[0].toUpperCase() + resource.price.slice(1);

  const badges = [
    `![price](https://img.shields.io/badge/price-${encodeURIComponent(price)}-green)`,
    types ? `![type](http://img.shields.io/badge/type-${encodeURIComponent(types)}-blue)` : "",
    `![languages](https://img.shields.io/badge/languages-${encodeURIComponent(languages)}-yellow)`,
  ]
    .filter(Boolean)
    .join(" ");

  return `### [${resource.title}](${resource.link})\n\n${badges}\n`;
}

export function generateMarkdown(): string {
  return resources.map(formatResource).join("\n\n");
}

export function generateReadme() {
  const markdown = `# Awesome Learning Resources\n\n${generateMarkdown()}\n`;
  fs.writeFileSync(path.join(process.cwd(), "README.md"), markdown);
  console.log("✅ README.md updated successfully.");
}

generateReadme();