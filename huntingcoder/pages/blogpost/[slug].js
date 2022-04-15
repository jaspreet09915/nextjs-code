import React from 'react'
import { useRouter } from 'next/router' 
// dynamic route in nextjs
const slug = () => {
    const router = useRouter();
    const {slug} = router.query;
  return (
    <div>{slug}</div>
  )
};

export default slug