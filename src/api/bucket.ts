/**Get files from google cloud storage file */
export const getBucketFiles = async () => {
    try {
        const response = await fetch('/api/bucket')
        const files = await response.json()
        return files
    } catch (e) {
        console.log(e)
    }
}
