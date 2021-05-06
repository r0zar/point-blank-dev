import useStore from '@/helpers/store'
import dynamic from 'next/dynamic'
import Home from './home'

// Step 2 - update Box components
const Box = dynamic(() => import('@/components/canvas/Box'), {
  ssr: false,
})

const Page = ({ title }) => {
  useStore.setState({ title })
  return (
    <>
      <Home />
    </>
  )
}

export default Page

export async function getStaticProps() {
  return {
    props: {
      title: 'Index',
    },
  }
}
