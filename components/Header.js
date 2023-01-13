import React from 'react'
import Image from 'next/image'

const Header = () => {
  return (
    <div>
        <header class="text-gray-600 body-font">
  <div class="container mx-auto p-5 max-w-[1100px] my-auto ml-80 items-center">
    <span class="mx-auto "><Image src="/logo.png" alt="" width={600} height={250} /></span>
  </div>
</header>
    </div>
  )
}

export default Header