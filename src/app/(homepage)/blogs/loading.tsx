import Spinner from "@/components/Spinner";

function Loading() {
  return (
    <div className="flex  flex-col items-center justify-center gap-y-3">
      <p className="text-xl ">درحال بارگزاری اطلاعات ...</p>
      <Spinner/>
    </div>
  );
}

export default Loading;
