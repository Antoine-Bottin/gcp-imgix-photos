import type { NextApiRequest, NextApiResponse } from 'next'

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse
) {
    try {
        // Call to google cloud storage / bucket and get what's in antoine-bottin-test-photo bucket
        const response = await fetch(
            `https://storage.googleapis.com/storage/v1/b/antoine-bottin-test-photo/o`,
            {
                headers: {
                    Authorization: `Bearer ${process.env.GOOGLE_AUTH}`,
                    //gcloud auth print-access-token     => command google cloud cli to have new token   this one is available an hour
                },
            }
        )

        if (!response.ok) {
            throw new Error(`Error: ${response.status} ${response.statusText}`)
        }

        const data = await response.json()
        res.status(200).json(data)
    } catch (error) {
        if (error instanceof Error) {
            res.status(500).json({ error: error.message })
        }
    }
}
