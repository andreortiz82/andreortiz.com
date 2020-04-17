import Link from 'next/link';

const caseStudies = [{title: 'Project A', path: '/work/a', cover: 'https://placeimg.com/400/250/any/grayscale'},
                     {title: 'Project B', path: '/work/b', cover: 'https://placeimg.com/400/250/arch/grayscale'},
                     {title: 'Project C', path: '/work/c', cover: 'https://placeimg.com/400/250/nature/grayscale'},
                     {title: 'Project D', path: '/work/d', cover: 'https://placeimg.com/400/250/people/grayscale'},
                     {title: 'Project E', path: '/work/e', cover: 'https://placeimg.com/400/250/tech/grayscale'},
                     {title: 'Project F', path: '/work/f', cover: 'https://placeimg.com/400/250/arch/grayscale'}];

const WorkCard = (props) => (
  <div className="c-work-card">
    <div className="c-work-card__title">
      {props.title}
    </div>
    <div className="c-work-card__img">
      <img src={props.cover}/>
    </div>
  </div>
)

const GridSection = (props) => (
  <div className='c-grid-section'>
    <h2 className="c-grid-section__title">{props.title}</h2>
    <div className="c-grid-section__wrapper">
      <section className="c-grid-container">
        { caseStudies.map((item, index) => {
          return (<Link key={index} href={item.path}>
                    <article className="c-grid-container__item">
                      <WorkCard title={item.title} cover={item.cover}/>
                    </article>
                  </Link>)
        })}
      </section>
    </div>
  </div>
);

export default GridSection;
