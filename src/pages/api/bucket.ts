import type { NextApiRequest, NextApiResponse } from 'next'

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse
) {
    try {
        const response = await fetch(
            `https://storage.googleapis.com/storage/v1/b/antoine-bottin-test-photo/o`,
            {
                headers: {
                    Authorization: `Bearer ${process.env.GOOGLE_AUTH}`,
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
