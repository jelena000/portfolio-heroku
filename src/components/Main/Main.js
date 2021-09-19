import React, { Component } from 'react'
import ReactPlayer from 'react-player'
import DribbleCards from '../DribbleCards/Cards';
import ilu1 from '../../assets/cover.svg'


const data = [
    {
        id : 1,
        title: 'Rental Bikes',
        backgroundClass : 'code-image',
        langs: ['react', 'css','scss','js', 'bootstrap'],
    },
    {
        id : 2,
        title: 'Blogs',
        backgroundClass : 'blogs-image',
        langs: ['react', 'css', 'materialize',],
    },
    {
        id : 3,
        title: 'Memory Game',
        backgroundClass : 'calendar-image',
        langs: ['react', 'css'],
  
    },
    {
        id : 4,
        title: 'Converter',
        backgroundClass : 'converter-image',
        langs: ['react', 'css'],
    },
    {
        id : 5,
        title: 'Moja Bašta',
        backgroundClass : 'nameti-image',
        langs: ['wordpress', 'css'],
    },
    {
        id : 6,
        title: 'Mountains',
        backgroundClass : 'timeline-image',
        langs: ['php', 'mysql','js','html', 'css'],
    }
  ];

export default class Main extends Component {
    render() {
        return (
            <div className="home-root">
                <div className="home-main" style={{ paddingTop: 100}}>
                    <div className="main-banner">
                        <img src={ilu1}  style={{width: 444, height: 444}} />
                    </div>
                    <div style={{backgroundColor: '#c4e9ee', paddingBottom: 100, paddingTop: 20}}>
                        <div className="container" >
                            <DribbleCards  data={data} history={this.props.history} />
                        </div>
                    </div>
                    <div className="main-content" >
                        <div className="container" style={{paddingTop: 122, paddingBottom: 100 }}>
                            <div style={{marginBottom: 70}}>
                                <h2>All in one video</h2>
                            </div>
                            <div style={{position: 'relative'}}>
                                <iframe src="https://player.vimeo.com/video/574284914?badge=0&amp;autopause=0&amp;autoplay=1&amp;loop=0&amp;player_id=0&amp;app_id=58479"  style={{width: '100%', height: 700}}  frameborder="0" allow="autoplay; fullscreen; picture-in-picture" allowfullscreen  title="videofinal.mp4"></iframe>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
