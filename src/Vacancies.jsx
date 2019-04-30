import React, {Component} from 'react';
import { Link } from "react-router-dom";
import './index.css';
import { connect } from 'react-redux';
import { loadVacancies } from './actions/vacancyActions'
import PropTypes from 'prop-types';
import { Image, Card, Button, Container, Col, Row, Badge } from 'react-bootstrap'

class Vacancies extends Component {
  componentWillMount() {
    this.props.loadVacancies();
    console.log(this.props)
  }
  

  render() {
    const vacanciesList = this.props.vacancies.map((data, i) => (
        <>
          <br/>
          <Card>
            <Card.Header>
              <Row>
                <Col md="11" xs="10">{data.city}</Col>
                <Col>
                  <Link to={`/vacancies/${data._id}`} >
                    <Image src="https://img.icons8.com/flat_round/64/000000/circled-chevron-right.png" className="image_arrow"/>
                  </Link>
                </Col>
              </Row>
            </Card.Header>
            <Card.Body>
              <Card.Text>
                <Container>
                  <Row>
                      <Card.Title>{data.vacancy}</Card.Title>
                  </Row>
                  <Row>
                    <Col md="5">
                      <Row  >
                        <Badge variant="secondary">Заработная плата: </Badge>
                      </Row>
                      <Row>
                        От {data.salary} бел.руб
                      </Row>
                    </Col>
                    <Col md="5">
                      <Row>
                        <Badge variant="info">Организация: </Badge>
                      </Row>
                      <Row>
                        {data.org}
                      </Row>
                    </Col>
                  </Row>
                </Container>
              </Card.Text>
            </Card.Body>
          </Card>
        </>

    ));
    
    return (
        <Container>
          <Row className="justify-content-lg-center">
            <Col lg="8" xs="12">
              {vacanciesList}
            </Col>
          </Row>
        </Container>
    )
  }
}


//<div>
//           <h2>Vacancies</h2>
//           <ul>
//             { vacanciesList.map((vacancy, i) => <li key={i}> <Link to={`/vacancies/${i}`}>{i}</Link></li>) }
//           </ul>
//         </div>


Vacancies.propTypes = {
  loadVacancies: PropTypes.func.isRequired,
  vacancies: PropTypes.array.isRequired
};

const mapStateToProps = (state) => ({
  vacancies: state.vacancies.items,
  vacancy: state.vacancies.item
});

export default connect(mapStateToProps, { loadVacancies })(Vacancies);