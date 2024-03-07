import Vakancies from "../../widgets/Vakansies/Vakancies";
import { useLocation } from "react-router-dom";

function VacancyPage() {
  const location = useLocation().search;
  const searchParams = new URLSearchParams(location);
  const tabId = searchParams.get("tabId");

  return (
    <>
      <Vakancies id={Number(tabId)} />
    </>
  );
}

export default VacancyPage;
