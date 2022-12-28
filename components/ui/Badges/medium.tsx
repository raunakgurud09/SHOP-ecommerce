
export default function MediumBadge({num=0}) {
  return (
    <>
      <div className="px-2  text-xs bg-red-800 rounded-full float-right  dark:bg-pink-400">
        {num}
      </div>
    </>
  );
}
