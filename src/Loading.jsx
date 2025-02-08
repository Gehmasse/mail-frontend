
export default function Loading() {
  return (
    <div className="flex flex-col gap-20 justify-center items-center h-screen">
      <div className="flex relative justify-center items-center">
        <div className="w-20 h-20 rounded-full border-[10px] border-blue-500 border-solid animate-spin border-t-transparent"></div>
      </div>
      <p className="text-lg">Loading...</p>
    </div>
  );
}
