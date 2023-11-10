import { getExperience } from "@/app/utils/api";
import { notFound } from "next/navigation";

export default async function ExperienceDetails({ params }) {
  const experience = await getExperience(params.id);

  if (!experience) notFound();

  return (
    <main>
      <div className="card">
        <h3>{experience.attributes.exp_title}</h3>
        <p>{experience.attributes.exp_description}</p>
      </div>
    </main>
  );
}