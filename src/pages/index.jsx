import useStore from '@/helpers/store'

const Page = ({ title }) => {
  useStore.setState({ title })
  return <>Hello World</>
}

export default Page

export async function getStaticProps() {
  return {
    props: {
      title: 'Index',
    },
  }
}
