import styles from "./page.module.css";
import resources from '../data/resources';
import Resource from "@/components/Resource";

export default function Home() {

  return (
    <div className={styles.page}>
     <h1 className="text-2xl font-bold">Awesome learning resources</h1>

     <div className="flex flex-col center max-w-2xl mx-auto">
      {resources.map((resource) => (
        <div key={resource.title} className='m-2'>
          <Resource resource={resource} />
          {/* <h2>{resource.title}</h2>
          <a href={resource.link} target="_blank">Link</a>
          <p>Type: {resource.type}</p>
          <p>Certification: {resource.certification.join(', ')}</p>
          <p>Languages: {resource.languages.join(', ')}</p>
          <p>Level: {resource.level}</p>
          <p>LPrice: {resource.price}</p> */}
        </div>
      ))}
     </div>
    </div>
  );
}
