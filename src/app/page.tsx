'use client'

import { getBucketFiles } from '@/api/bucket'
import Image from 'next/image'
import { ReactElement, useEffect, useState } from 'react'

const IMGGIX_PREFIX = `https://antoinebottin-gcp.imgix.net/`

const Page = (): ReactElement => {
    const [files, setFiles] = useState<string[]>([])

    const fetchData = async () => {
        const data = await getBucketFiles()
        setFiles(data)
    }

    useEffect(() => {
        fetchData()
    }, [])

    return (
        <div className="flex flex-col items-center content-center">
            <h2 className="mb-10">Website under construction</h2>
            {files && files.length > 0 ? (
                <div className="flex mx-5 gap-x-4 flex-wrap">
                    {files.map((name, idx) => {
                        return (
                            <Image
                                key={idx}
                                src={`${IMGGIX_PREFIX}${name}`}
                                alt={name}
                                width={300}
                                height={300}
                            />
                        )
                    })}
                </div>
            ) : (
                <div>Loading</div>
            )}
        </div>
    )
}

export default Page
