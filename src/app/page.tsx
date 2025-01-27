import { ReactElement } from 'react'
import Image from 'next/image'

const Page = (): ReactElement => {
    return (
        <div className="flex flex-col items-center content-center -rotate-[30deg]">
            <Image
                src="/images/under-construction.png"
                width={500}
                height={500}
                alt="Site web under construction"
            />
            <div className="text-4xl">Website under construction...</div>
        </div>
    )
}

export default Page

//ftp.abottin.dev.  0	CNAME	abottin.dev.

//www.abottin.dev.  0	  A	    213.186.33.5
