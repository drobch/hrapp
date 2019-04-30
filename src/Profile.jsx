import React, {Component} from 'react';
import './index.css';
import {
  Row, Col,
  Image,
  Badge,
  Button
} from 'react-bootstrap'

class Profile extends Component {
  constructor(props) {
    super(props);
    
    this.state = {
      green: {
        color: 'green'
      }
    };
  };
  
  componentDidMount () {
    const {handle} = this.props.match.params;
    console.log(handle)
  }
  bgStyle() {
    if (this.state.active)
      return 'success';
    else return 'warning';
  }
  
  
  render() {
    return (
        <div>jgtyfgvj</div>
       /* <React.Fragment>
          <Panel bsStyle={this.bgStyle()}>
            <Panel.Heading>
              <Panel.Title>
              <span className="ad__title">
                Иванов Иван Иванович
              </span>
                <Badge>
                  1000 руб.
                </Badge>
              </Panel.Title>
            </Panel.Heading>
            <Panel.Body>
              <Row>
                <Col xs={6} md={6}>
                  <div>
                    <p><b>{this.state.place}</b></p>
                    <p >Город: <span style={this.state.green}> Минск</span></p>
                    <p >Телефон: +37525845562</p>
                    <p >Телефон: +37525845562</p>
                    <p >Email: dddrgh44@gmail.ru </p>
                  </div>
            
                </Col>
                <Col xs={6} md={6}>
                  <Image src="http://ccafrica.ca/wp-content/uploads/2015/11/blank-170x170.jpeg"
                         rounded />
            
                </Col>
          
              </Row>
          
              <div>
                <div>
                  <div><b>Цель:</b></div>
                  <p >
                    Замещение вакантной должности старшего специалиста юридической поддержки.
                  </p>
                </div>
                <div>
                  <div><b>Образование:</b></div>
                  <p>
                    2000-2005 г.,                   Московский государственный юридический институт, факультет «Правоведение», специальность «Юрисконсульт», диплом специалиста (дневное отделение).
                  </p>
                  <div><b>Опыт работы:</b></div>
                  Специалист юридического отдела март 2008 г. – январь 2011 г.,
                  <p>
                    Управление пенсионного фонда Южного района, г. Санкт-Петербург.
                  </p>
                  Старший специалист февраль 2011 г. – март 2013 г.,
                  <p>
                    Областной пенсионный фонд, г. Санкт-Петербург.
                  </p>
              
                  <b>Функциональные обязанности: </b>
                  <ul>
                    <li>руководство юридическим отделом;</li>
                    <li>координация районных управлений;</li>
                    <li>проведение консультаций;</li>
                    <li>разработка нормативной документации.</li>
                  </ul>
                  <div>
                    <b>Навыки:</b>
                    <ul>
                      <li>Знание ПК и офисных программ;</li>
                      <li>Опыт проведения семинаров;</li>
                      <li>Знание законодательной базы;</li>
                      <li>Опыт руководства отделом;</li>
                      <li>Высокие служебные достижения;</li>
                    </ul>
                  </div>
                </div>
                <hr/>
              </div>
              <span> </span>
              <Button bsStyle="success" href='/:id'>
                Прикрепить резюме
              </Button>
              <span> </span>
              <Button bsStyle="warning" href='/:id'>
                Сохранить
              </Button>
            </Panel.Body>
          </Panel>
    
    
    
        </React.Fragment>*/
    )
  }
}

export default Profile