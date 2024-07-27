import React from 'react'
import Page from '@/components/Page'
import { useRouter } from 'next/router'

const project = () => {
    const router = useRouter()
    const { project } = router.query;
  return (
    <Page>
        <h1>{project}</h1>
    </Page>
  )
}

export default project