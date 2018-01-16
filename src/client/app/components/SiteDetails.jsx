import React from 'react';
import {render} from 'react-dom';
import Select from 'react-select';
import siteConstants from '../constants/siteConstants';
import SiteResults from './SiteResults.jsx';

class SiteDetails extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      programmingLanguage: siteConstants.programmingLanguages[0],
      platform: siteConstants.platforms[0],
      environment: siteConstants.environments[0],
      databaseNumber: 1,
      database: siteConstants.databases[0],
      period: siteConstants.periods[0],
      complement: siteConstants.complements[0],
      visits: 1000
    }

    this.handleProgrammingLanguageChange = this.handleProgrammingLanguageChange.bind(this);
    this.handlePlatformChange = this.handlePlatformChange.bind(this);
    this.handleEnvironmentChange = this.handleEnvironmentChange.bind(this);
    this.handleDatabaseNumberChange = this.handleDatabaseNumberChange.bind(this);
    this.handleDatabaseChange = this.handleDatabaseChange.bind(this);
    this.handlePeriodChange = this.handlePeriodChange.bind(this);
    this.handleComplementChange = this.handleComplementChange.bind(this);
    this.handleVisitsChange = this.handleVisitsChange.bind(this);
  }

  handleProgrammingLanguageChange (programmingLanguage) {
    this.setState({programmingLanguage});
  }
  handlePlatformChange (platform) {
    this.setState({platform});
  }
  handleEnvironmentChange (environment) {
    this.setState({environment});
  }
  handleDatabaseNumberChange (e) {
    let value = parseInt(e.target.value);
    this.setState({databaseNumber: value});
  }
  handleDatabaseChange (database) {
    this.setState({database});
  }
  handlePeriodChange (period) {
    this.setState({period});
  }
  handleComplementChange (complement) {
    this.setState({complement});
  }
  handleVisitsChange (e) {
    let value = parseInt(e.target.value);
    this.setState({visits: value});
  }


  render() {
    const {hostNumber} = this.props;
    const {programmingLanguage, platform, environment, databaseNumber, database, period, complement, visits} = this.state;
    return(
      <Frag>
        <div className='row'>
          {hostNumber.value === 1 ? (
            <span className='input-text'>Programado em</span>
          ) : (
            <span className='input-text'>Programados em</span>
          )}
          <Select
            name='programming-language'
            value={programmingLanguage}
            onChange={this.handleProgrammingLanguageChange}
            options={siteConstants.programmingLanguages}
            className='select'
            searchable={false}
            clearable={false} />
          <span className='input-text'>utilizando plataforma </span>
          <Select
            name='platform'
            value={platform}
            onChange={this.handlePlatformChange}
            options={siteConstants.platforms}
            className='select'
            searchable={false}
            clearable={false} />
        </div>
        <div className='row'>
          <span className='input-text'>em ambiente </span>
          <Select
            name='environment'
            value={environment}
            onChange={this.handleEnvironmentChange}
            options={siteConstants.environments}
            className='select'
            searchable={false}
            clearable={false} />
          <span className='input-text'>com </span>
          <input
            type='number'
            name='database-number'
            value={databaseNumber}
            min={1}
            max={50}
            onChange={this.handleDatabaseNumberChange}
            className='input-number input-number--database' />
          {databaseNumber < 2 ? (
            <span className='input-text'>banco de dados</span>
          ) : (
            <span className='input-text'>bancos de dados</span>
          )}
          <Select
            name='database'
            value={database}
            onChange={this.handleDatabaseChange}
            options={siteConstants.databases}
            className='select'
            searchable={false}
            clearable={false} />
        </div>
        <div className='row'>
          <span className='input-text'>Espero receber até </span>
          <input
            type='number'
            name='visits'
            value={visits}
            min={1}
            onChange={this.handleVisitsChange}
            className='input-number' />
          <span className='input-text'>visitas por </span>
          <Select
            name='period'
            value={period}
            onChange={this.handlePeriodChange}
            options={siteConstants.periods}
            className='select'
            searchable={false}
            clearable={false} />
          <span className='input-text'>em </span>
          <Select
            name='complement'
            value={complement}
            onChange={this.handleComplementChange}
            options={siteConstants.complements}
            className='select'
            searchable={false}
            clearable={false} />
        </div>
        <SiteResults {...this.state} {...this.props} />
      </Frag>
    );
  }
}

export default SiteDetails;
