import type { NextApiRequest, NextApiResponse } from 'next'
import { Storage } from '@google-cloud/storage'

const storage = new Storage()
const bucket = storage.bucket(process.env.GCS_BUCKET_NAME as string)

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse
) {
    // Ensure only GET requests are allowed
    if (req.method !== 'GET') {
        return res.status(405).json({ error: 'Method Not Allowed' }) // 405 for invalid method
    }

    try {
        const [files] = await bucket.getFiles() // Use Promises
        const fileNameArray = files.map((file) => file.name) || []

        return res.status(200).json(fileNameArray) // Ensure single response
    } catch (err) {
        console.error('Error fetching files:', err)
        return res.status(500).json({ error: 'Failed to retrieve files' }) // Return proper error message
    }
}
