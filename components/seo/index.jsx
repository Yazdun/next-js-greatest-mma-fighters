import React from 'react'
import { NextSeo } from 'next-seo'

export const SEO = ({
  title = 'MMA Fighters',
  desc = 'Greatest MMA fighters of all time',
}) => {
  return (
    <NextSeo
      title={title}
      description={desc}
      additionalLinkTags={[{ rel: 'icon', href: '/favicon.ico' }]}
      openGraph={{
        title: title,
        description: desc,
        locale: 'en_us',
        site_name: 'MMA Fighters',
      }}
    />
  )
}
