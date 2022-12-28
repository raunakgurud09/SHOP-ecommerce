import Link from 'next/link';

export default function Signature() {
  return (
    // eslint-disable-next-line @next/next/link-passhref
    //  className="flex items-center space-x-2 hover:cursor-pointer text-900"
    <Link href="/">
      <>
        <div className="flex items-center">
          <span className="z-10 font-serif text-4xl font-bold text-primary-700">
            R
          </span>
          <span className="-ml-[.6rem] mt-[0.9rem] font-serif text-[1.75rem] font-bold text-primary-500 z-0">
            G
          </span>
          {/* <span className="mt-1 text-xl font-medium">raunakgurud.com</span> */}
          {/* <span className="mt-1 text-xl font-medium">raunakgurud</span> */}
          <span className="mt-1 text-xl font-medium">raunak</span>
        </div>
      </>
    </Link>
  );
}
