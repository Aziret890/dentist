import { useLocation } from "react-router-dom";
import Price from "../../widgets/Price/Price";

function PricePage() {
  const location = useLocation().search;
  const searchParams = new URLSearchParams(location);
  const tabId = searchParams.get("tabId");
  return (
    <>
      <Price id={Number(tabId)} />
    </>
  );
}

export default PricePage;
