export const revalidate = 30; // This page is statically generated at build time, but will be revalidated every 10 seconds.

const IncrementalStaticReg = () => {
  const generatedAt = new Date().toISOString();
   
  return (
    <div>Generated at: {generatedAt}</div>
  )
}

export default IncrementalStaticReg