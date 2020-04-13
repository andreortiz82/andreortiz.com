import Layout from '../components/layout';

export default function Index() {
  return (
    <div>
      <Layout>
        <h1>👋 Hello! My name is Andre.</h1>
        <h2>I am playing with <a href='https://nextjs.org/docs/getting-started'>next.js</a></h2>

        <div className='row'>
          <div className='bg-red'></div>
          <div className='bg-blue'></div>
          <div className='bg-green'></div>
        </div>
      </Layout>
    </div>
  );
}
