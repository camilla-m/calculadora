import React from 'react';
import {render} from 'react-dom';
import Select from 'react-select';
import mainConstants from '../constants/mainConstants';
import siteConstants from '../constants/siteConstants';

class FirstInput extends React.Component {
  render() {
  	const {hostSelectedOption, purposeSelectedOption, hostNumber, hostOptions} = this.props;
    return (
      <div className='row'>
        <span className='input-text'>Quero hospedar</span>
        <Select
          name='host-number'
          value={hostNumber}
          onChange={this.props.handleHostNumberChange}
          options={mainConstants.hostNumbers}
          className='select'
          searchable={false}
          clearable={false} />
  		  <Select
  		    name='host-type'
  		    value={hostSelectedOption}
  		    onChange={this.props.handleHostTypeChange}
  		    options={hostOptions}
          className='select select-host-type'
          searchable={false}
          clearable={false} />
        {(hostSelectedOption.value === 'site' || hostSelectedOption.value === 'store') && (
          <Frag>
            <span className='input-text'>para</span>
            <Select
              name='purpose-type'
              value={purposeSelectedOption}
              onChange={this.props.handlePurposeChange}
              options={siteConstants.purposeOptions}
              className='select'
              searchable={false}
              clearable={false} />
          </Frag>
        )}
        
	  </div>
    );
  }
}

export default FirstInput;
