import { useState } from 'react'
import { AiFillHeart, AiOutlineHeart } from 'react-icons/ai'

export default function Wishlist() {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [wishlist, setWishlist] = useState<boolean>(false)
  const handleWishlist = () => {
    wishlist ? setWishlist(false) : setWishlist(true)
  }
  return (
    <div onClick={handleWishlist}>
      {wishlist ? (
        <AiFillHeart size={20} color="red" />
      ) : (
        <AiOutlineHeart size={20} color="red" />
      )}
    </div>
  )
}
