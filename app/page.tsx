import styles from "./page.module.css";
import resources from '../data/resources';
import Resource from "@/components/Resource";

export default function Home() {

  return (
    <div className={styles.page}>
     <div className="flex flex-col center max-w-2xl mx-auto">
      {resources.map((resource) => (
        <div key={resource.title} className='m-2'>
          <Resource resource={resource} />
        </div>
      ))}
     </div>
    </div>
  );
}
