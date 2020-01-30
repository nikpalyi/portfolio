import React from 'react';

import Card from '../components/Card';

import hungry from '../assets/images/hungry1.png';
import videoplayer from '../assets/images/video.png';
import comment from '../assets/images/comment1.png';
import color from '../assets/images/color1.png';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';

class Carousel extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [
        {
          id: 0,
          title: 'Hungry',
          subTitle: 'Restaurant search built in React',
          imgSrc: hungry,
          link: 'https://nikpalyi.github.io/restaurant-search-react-app/',
          selected: false
        },
        {
          id: 1,
          title: 'Video Player',
          subTitle: 'built in React',
          imgSrc: videoplayer,
          link: 'https://nikpalyi.github.io/video-player-react/',
          selected: false
        },
        {
          id: 2,
          title: 'Commenting App',
          subTitle: 'built in React',
          imgSrc: comment,
          link: 'https://nikpalyi.github.io/commenting-app/',
          selected: false
        },
        {
          id: 3,
          title: 'Random Color Picker',
          subTitle: 'built in React',
          imgSrc: color,
          link: 'https://nikpalyi.github.io/color-picker-react/',
          selected: false
        }
      ]
    };
  }

  handleCardClick = (id, card) => {
    let items = [...this.state.items];

    items[id].selected = items[id].selected ? false : true;

    items.forEach(item => {
      if (item.id !== id) {
        item.selected = false;
      }
    });

    this.setState({
      items
    });
  };

  makeItems = items => {
    return items.map(item => {
      return (
        <Card
          item={item}
          click={e => this.handleCardClick(item.id, e)}
          key={item.id}
        />
      );
    });
  };

  render() {
    return (
      <Container fluid={true}>
        <Row className='justify-content-around'>
          {this.makeItems(this.state.items)}
        </Row>
      </Container>
    );
  }
}

export default Carousel;
