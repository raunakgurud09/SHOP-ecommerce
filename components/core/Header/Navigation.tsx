import Link from 'next/link'
import Signature from '../../Icons/Signature'
import SmallNav from './SmallNav'
import ThemeSwitch from '../../ThemeSwitch'
import LogIn from '../../ui/Buttons/login-btn'
import { useUser } from 'hooks/user/useUser'
import { useEffect } from 'react'
import { Avatar } from '../../ui/Avatar/Avatar'
import { GetServerSideProps } from 'next'
import { fetcherSSR } from '@/lib/fetchSSR'
import DropDown from '../../ui/DropDown/DropDown'
import Image from '@/components/ui/Image'
import { IoMdCart } from 'react-icons/io'
import SmallBadge from '@/components/ui/Badges/Small'
import { AiFillHeart, AiOutlineHeart } from 'react-icons/ai'
import Container from '@/components/core/Layouts/Container'

export interface navList {
  name: string
  href: string
}

export interface navList extends Array<navList> {}

export const navLists = []

const Navigation = () => {
  // const { data: session } = useSession()
  const { data: currentUser } = useUser()
  useEffect(() => {
    return () => {}
  }, [currentUser])

  return (
    // <Container>
    <nav className=" flex  py-4 item-center select-none backdrop-blur  font-mono sticky top-0 z-50">
      <Link href="/" passHref>
        <h2 className="text-2xl font-bold">SHOP</h2>
      </Link>

      <div className="flex-1"></div>
      <div className="hidden md:flex items-center">
        <ul className="flex items-center space-x-2">
          {navLists.map(({ name, href }: any) => (
            <div
              key={name}
              className="px-4 py-1 rounded-md hover:bg-slate-500/10 opacity-70 hover:opacity-100  "
            >
              <Link href={href}>{name}</Link>
            </div>
          ))}
          <span className="w-px h-6 mx-6 bg-900"></span>
        </ul>
      </div>

      <div className="flex items-center space-x-6 text-300 md:space-x">
        <ThemeSwitch />
        <SmallBadge>
          <Link href="/cart" passHref>
            <IoMdCart size={30} />
          </Link>
        </SmallBadge>
        {/* <SmallBadge>
          <AiFillHeart size={30} color="red" />
        </SmallBadge> */}
        {!currentUser ? (
          <LogIn />
        ) : (
          <DropDown>
            {/* <Avatar h="50" w="50" letter={currentUser.name.charAt(0).toUpperCase()} image={currentUser.image} /> */}
            <Image
              src={currentUser.image}
              alt="avatar"
              width="40"
              height="40"
              className="h-10 w-10 rounded-full object-cover"
            />
          </DropDown>
        )}
        <SmallNav />
      </div>
    </nav>
    // </Container>
  )
}

export default Navigation


const getServerSideProps: GetServerSideProps = async (context) => {
  const fetcher = (url: string) => fetcherSSR(context.req, context.res, url)

  const url = 'http://localhost:5000/api/v1/user/profile'
  const [error, user] = await fetcher(url)
  if (error || !user) return { redirect: { statusCode: 307, destination: '/' } }

  // const result = getProps ? await getProps({ context, fetcher, user }) : {}
  // const props = (result as any).props || {}

  return { props: { user } }
}
