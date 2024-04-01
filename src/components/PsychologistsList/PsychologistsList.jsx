import { PsychologistsListItem } from "../PsychologistsListItem/PsychologistsListItem";

export const PsychologistsList = ({ psychologists }) => {
  return (
    <ul>
      {psychologists.map((item) => (
        <PsychologistsListItem psychologist={item} key={item.name} />
      ))}
    </ul>
  );
};
