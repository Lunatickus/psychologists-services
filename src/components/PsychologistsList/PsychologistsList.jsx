import { PsychologistsListItem } from "../PsychologistsListItem/PsychologistsListItem";
import { PsychologistsListStyled } from "./PsychologistsList.styled";

export const PsychologistsList = ({ psychologists }) => {
  return (
    <PsychologistsListStyled>
      {psychologists.map((item) => (
        <PsychologistsListItem psychologist={item} key={item.name} />
      ))}
    </PsychologistsListStyled>
  );
};
