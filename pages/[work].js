import Layout from '../components/layout';
import { useRouter } from 'next/router'

export default function Work() {
  const router = useRouter()
  const { work } = router.query
  return (
    <div>
      <Layout>
      <h2>{ work }</h2>
      </Layout>
    </div>
  );
}
