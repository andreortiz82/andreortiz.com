import Layout from '../components/layout';

export default function Index() {
  return (
    <div>
      <Layout>
        <h1>👋 Hello! My name is Andre.</h1>
        <h2>Design Systems and User Experience. Currently working at Reify Health.</h2>

        <div className='row'>
          <div className='bg-red'></div>
          <div className='bg-blue'></div>
          <div className='bg-green'></div>
        </div>
      </Layout>
    </div>
  );
}
