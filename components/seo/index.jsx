import React from 'react'
import { NextSeo } from 'next-seo'

export const SEO = ({
  title = 'MMA Fighters',
  desc = 'Greatest MMA fighters fo all time',
}) => {
  return (
    <NextSeo
      title={title}
      description={desc}
      additionalLinkTags={[{ rel: 'icon', href: '/favicon.ico' }]}
      openGraph={{
        url: '',
        title: title,
        description: desc,
        locale: 'en_us',
        images: [
          {
            url: '',
            width: 1200,
            height: 630,
            alt: title,
            type: 'image/jpeg',
          },
        ],
        site_name: 'MMA Fighters',
      }}
      twitter={{
        handle: '@Yazdun',
        site: '@Yazdun',
        cardType: 'summary_large_image',
      }}
    />
  )
}
