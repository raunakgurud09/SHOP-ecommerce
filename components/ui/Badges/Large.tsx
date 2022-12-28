export default function LargeBadge({ children, num = 999 }: any) {
  return (
    <>
      <div className=" text-xs px-2   bg-red-800 float-right rounded-full  dark:bg-pink-400 z-10">
        {children}
        {num}+
      </div>
    </>
  )
}
