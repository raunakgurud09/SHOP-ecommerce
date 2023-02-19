import Router from 'next/router'
import Script from 'next/script'
import React, { useRef, useEffect, useState } from 'react'

// import { PAYPAL_CLIENT_ID } from '@/constants';
const PAYPAL_CLIENT_ID =
  'AbbUsLLfF4UtyHM735DnNQ9VNalTXm35VfLcTU2OFFsqIpsCl9Ok8iaUgfQTGDl1XyqEns24RaXkWG3l'

// import { useToast } from '@/contexts';
import CheckOutService from '@/services/checkout'

import styles from '@/styles/Checkout.module.css'

declare const window: Window &
  typeof globalThis & {
    paypal: any
  }

interface ErrorMsg {
  message: string
}

interface PaypalData {
  orderID: string
}

const CheckoutPaypal = () => {
  const [sdkReady, setSdkReady] = useState(false)
  const [amount, setAmount] = useState(0)

  const paypalButtonsRef = useRef<HTMLDivElement>(null)
  //   const { setToast } = useToast();

  useEffect(() => {
    if (window.paypal) {
      window.paypal
        .Buttons({
          createOrder: function () {
            return CheckOutService.createPaypalTransaction().then((data) => {
              return data.orderID
            })
          },
          onError: function (error: ErrorMsg) {
            // setToast('error', error.message);
          },
          onApprove: function (data: PaypalData) {
            return CheckOutService.capturePaypalTransaction(data.orderID).then(
              () => {
                //   setToast('success', 'Successfully transaction completed');
                Router.push('/orders')
              }
            )
          },
          style: {
            height: 45,
          },
        })
        .render(paypalButtonsRef.current)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [sdkReady])

  const handleLoad = () => {
    setSdkReady(true)
  }

  const handleChange = (e) => {
    setAmount(e.target.value)
  }

  return (
    <>
      <input type="text" onChange={handleChange} />
      <Script
        src={`https://www.paypal.com/sdk/js?client-id=${PAYPAL_CLIENT_ID}&currency=PHP`}
        onLoad={handleLoad}
      ></Script>
      <div className={styles.paypal} ref={paypalButtonsRef} />
    </>
  )
}

export default CheckoutPaypal
