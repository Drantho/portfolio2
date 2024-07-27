import React from 'react'
import Page from '@/components/Page'
import { useRouter } from 'next/router'
import { data } from '@/data/data'

const type = () => {
    const router = useRouter();
    const { type } = router.query;
  return (
    <Page>
        <h1>{type}</h1>
    </Page>
  )
}

export default type