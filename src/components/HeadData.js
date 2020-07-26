import React from "react"
import Helmet from "react-helmet"

export default function HeadData() {
  return (
    <Helmet>
      {/*Primary Meta Tags*/}
      <title>Gustaf Halvardsson | Computer Science student @ KTH</title>
      <meta
        name="title"
        content="Gustaf Halvardsson | Computer Science student @ KTH"
      />
      <meta charSet="utf-8" />

      <link rel="canonical" href="http://halco.se/" />
      <link rel="canonical" href="https://halco.se/#" />
      <meta
        name="description"
        content="Best described by my curiosity for new areas and technologies which is why I’ve done everything from Machine Learning to Animations with mainly technology start-ups as clients."
      />

      {/*Open Graph / Facebook*/}
      <meta property="og:type" content="website" />
      <meta property="og:url" content="https://halco.se/" />
      <meta
        property="og:title"
        content="Gustaf Halvardsson | Computer Science student @ KTH"
      />
      <meta
        property="og:description"
        content="Best described by my curiosity for new areas and technologies which is why I’ve done everything from Machine Learning to Animations with mainly technology start-ups as clients."
      />
      <meta property="og:image" content="https://halco.se/" />

      {/*Twitter*/}
      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:url" content="https://halco.se/" />
      <meta
        property="twitter:title"
        content="Gustaf Halvardsson | Computer Science student @ KTH"
      />
      <meta
        property="twitter:description"
        content="Best described by my curiosity for new areas and technologies which is why I’ve done everything from Machine Learning to Animations with mainly technology start-ups as clients."
      />
      <meta property="twitter:image" content="https://halco.se/" />
    </Helmet>
  )
}
