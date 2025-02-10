import Spinner from "@/components/Spinner";
import { Suspense } from "react";
import CardsWrapper from "./_component/CarsWrapper";
import PostsTable from "./posts/_/components/PostsTable";

async function Profile() {
  return (
    <div>
      <Suspense fallback={<Spinner />}>
        <CardsWrapper />
      </Suspense>
      <Suspense fallback={<Spinner />}>
        <PostsTable query="sort=latest&limit=5" />{" "}
      </Suspense>
    </div>
  );
}

export default Profile;
