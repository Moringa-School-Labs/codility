export const dynamic = "force-static"; // This page is statically generated at build time.

const StaticSiteGen = () => {
  return (
    <div>
      <h1>This is a statically generated site.</h1>
      <p>Content is generated at build time.</p>
    </div>
  )
}

export default StaticSiteGen