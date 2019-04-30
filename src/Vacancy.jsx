import React, {Component} from 'react';
import PropTypes from 'prop-types';
import { getVacancyById } from './actions/vacancyActions';
import './index.css';
import { connect } from 'react-redux';

class Vacancy extends Component {
  
  
  componentWillMount() {
    this.props.getVacancyById(this.props.match.params.id);
  }
  
  componentWillReceiveProps(nextProps) { }
  
  render() {
    return (
        <>
          <div>
            {this.props.vacancy.city}
          </div>
          <div>
            {this.props.vacancy.description}
          </div>
          <div>
            {this.props.vacancy.phone}
          </div>
        </>

    )
  }
}

Vacancy.propTypes = {
  getVacancyById: PropTypes.func.isRequired,
  vacancy: PropTypes.object.isRequired
};

const mapStateToProps = (state) => ({
  vacancies: state.vacancies.items,
  vacancy: state.vacancies.item
});

export default connect(mapStateToProps, { getVacancyById })(Vacancy);