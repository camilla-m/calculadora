import React from 'react';
import { render } from 'react-dom';
import Select from 'react-select';
import mainConstants from '../constants/mainConstants';
import siteConstants from '../constants/siteConstants';

class FirstInput extends React.Component {
  render() {
    const { hostSelectedOption, purposeSelectedOption, hostNumber, hostOptions } = this.props;
    return (
      <div className='row' class='boxes'>
        <h1 class='display-sm-4 mb-3'><span class="text-wordpress">QuantoCusta</span> Hospedar?me</h1>
        <div class="row spacerow">
            <p class='h5'>Na Umbler você tem facilidade, segurança e estabilidade. <br /> Agora poderá descobrir quanto irá economizar e qual o plano <br /> indicado para sua necessidade!</p>
        </div>
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
