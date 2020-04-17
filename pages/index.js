import Layout from '../components/layout';
import GridSectionfrom from '../components/grid_section'

export default function Index() {
  return (
    <div>
      <Layout>
        <h1>👋 Hello! My name is Andre</h1>
        <p className="lead">I design systems and experiences.</p>
      </Layout>
      <GridSectionfrom title="Case Studies"/>
    </div>
  );
}

// <h2>I am playing with <a href='https://nextjs.org/docs/getting-started'>next.js</a></h2>
// <div className='l-row'>
//   <div className='l-col u-bg-blue u-p-20'></div>
//   <div className='l-col u-bg-blue-10 u-p-20'></div>
//   <div className='l-col u-bg-blue-20 u-p-20'></div>
// </div>
