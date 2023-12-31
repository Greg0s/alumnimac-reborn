import Link from "next/link";
import { getExperiences } from "../utils/api";
import "../styles/experiencesList.scss";

export default async function ExperienceList() {
  let experiences = await getExperiences();

  // const filterdByRegion = (array) => {
  //   return array.filter(el => el.name.common.toLowerCase().includes(query))}

  return (
    <div className="experiences-list">
      {experiences &&
        experiences.map((experience) => (
          <div key={experience.id} className="experience">
            <Link href={`/experience/${experience.id}`}>
              <h3>{experience.attributes.position}</h3>
              <p>{experience.attributes.company}</p>
            </Link>
          </div>
        ))}
      {experiences && experiences.length === 0 && (
        // image : C de l'imac tombé par terre genre un vestige antique
        <p className="text-center">
          Il y a une bonne et une mauvaise nouvelle : Tu as trouvé le C de
          l'IMAC, mais il n'y a aucune expériences d'étudiants à afficher pour
          l'instant...
        </p>
      )}
    </div>
  );
}
