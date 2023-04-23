import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

// import { B } from '@/components/wishlist';

import styles from './ProductCard.module.css';

interface Props {
  product: any;
}

const ProductCard = ({ product }: Props) => {
  return (
    <Link href={`/products/${product._id}`}>
      <a>
        <div>
          <div className={styles.productImgWrapper}>
            <Image src={product.imageURL} alt={product.name} width={500} height={500} />
            <div className={styles.wishlistButtonContainer}>
              {/* < productId={product._id} /> */}
            </div>
          </div>
          <div className={styles.productInfo}>
            <div className={styles.productName}>{product.name}</div>
            <div className={styles.productPrice}>{(product.price)}</div>
          </div>
        </div>
      </a>
    </Link>
  );
};

export default ProductCard;
