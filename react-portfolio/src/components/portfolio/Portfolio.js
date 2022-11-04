import React from 'react'
import './Portfolio.css'
import IMG1 from '../../assets/portfolio1.jpg'
import IMG2 from '../../assets/portfolio2.jpg'
import IMG3 from '../../assets/portfolio3.jpg'
import IMG4 from '../../assets/portfolio4.jpg'
import IMG5 from '../../assets/portfolio5.png'
import IMG6 from '../../assets/portfolio6.jpg'


const data = [
  {
    id: 1,
    image: IMG1,
    title: 'Spotify',
    github: 'https://github.com/buulxh/spotify',
    demo: 'https://spotify-app-react.herokuapp.com/'
  },
  {
    id: 2,
    image: IMG2,
    title: 'Fire chat vue',
    github: 'https://github.com/buulxh/firechat_vue_app',
    demo: 'https://vue-firebase-chat.herokuapp.com/'
  },
  {
    id: 3,
    image: IMG3,
    title: 'Vue weather app',
    github: 'https://github.com/buulxh/vue_weather_app',
    demo: 'https://cloud-vue-weather.herokuapp.com/'
  },
  {
    id: 4,
    image: IMG4,
    title: 'Contact app',
    github: 'https://github.com/buulxh/react_redux/tree/main/contact_app',
    demo: 'https://contact-manager-app-react.herokuapp.com/'
  },
  {
    id: 5,
    image: IMG5,
    title: 'Redux app',
    github: 'https://github.com/buulxh/react_redux/tree/main/redux_app',
    demo: 'https://redux-app-react.herokuapp.com/'
  },
  {
    id: 6,
    image: IMG6,
    title: 'Website react',
    github: 'https://github.com/buulxh/website_react',
    demo: 'https://website-app-react.herokuapp.com/'
  },
]

const Portfolio = () => {
  return (
    <section id='portfolio'>
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>
      <div className='container portfolio__container'>
        {
          data.map(({id, image, title, github, demo}) => {
            return (
              <article key={id} className='portfolio__item'>
                <div className='portfolio__item-image'>
                  <img src={image} alt={title}/>
                </div>
                <h3>{title}</h3>
                <div className='portfolio__item-cta'>
                  <a href={github} className='btn _blank'>Github</a>
                  <a href={demo} className='btn btn-primary _blank'>Live Demo</a>
                </div>
              </article>
            )
          })
        }
      </div>
    </section>
  )
}

export default Portfolio
