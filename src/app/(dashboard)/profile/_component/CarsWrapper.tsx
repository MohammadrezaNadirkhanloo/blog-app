import fetchDataCardDashboard from "@/services/dataDashboard";
import CardCustom from "./CardCustom";

async function CardsWrapper() {
  const data = await fetchDataCardDashboard();

  const { numberOfPosts, numberOfUsers, numberOfComments } = data ?? {
    numberOfPosts: 0,
    numberOfUsers: 0,
    numberOfComments: 0,
  };
  return (
    <div className="grid gap-8 md:grid-cols-3 mb-8">
      <CardCustom title="کاربران" value={numberOfUsers} type="users" />
      <CardCustom title="پست ها" value={numberOfPosts} type="posts" />
      <CardCustom title="نظرات" value={numberOfComments} type="comments" />
    </div>
  );
}

export default CardsWrapper;
