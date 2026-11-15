
import { showEventData } from "@/lib/action";
import CorsoleEvent from "./CorsoleEvent";

const CorsoleCard = async () => {
  const showevent = await showEventData();

  return (
    <main>
      <CorsoleEvent showevent={showevent} />
    </main>
  );
};

export default CorsoleCard;