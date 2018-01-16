import React from 'react';
import {render} from 'react-dom';
import mainConstants from './constants/mainConstants';
import siteConstants from './constants/siteConstants';
import FirstInput from './components/FirstInput.jsx';
import SiteDetails from './components/SiteDetails.jsx';
import EmailDetails from './components/EmailDetails.jsx';
import AppDetails from './components/AppDetails.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      hostOptions: mainConstants.hostOptions,
      hostSelectedOption: mainConstants.hostOptions[0],
      purposeSelectedOption: siteConstants.purposeOptions[0],
      hostNumber: mainConstants.hostNumbers[0]
    }

    this.handleHostTypeChange = this.handleHostTypeChange.bind(this);
    this.handleHostNumberChange = this.handleHostNumberChange.bind(this);
    this.handlePurposeChange = this.handlePurposeChange.bind(this);
  }

  handleHostTypeChange (hostSelectedOption) {
    this.setState({hostSelectedOption});
  }

  handlePurposeChange (purposeSelectedOption) {
    this.setState({purposeSelectedOption});
  }

  handleHostNumberChange (hostNumber) {
    let updatedHostOption = hostNumber.value != 1 ? mainConstants.pluralHostOptions.find(item => item.value === this.state.hostSelectedOption.value)
                                                  : mainConstants.hostOptions.find(item => item.value === this.state.hostSelectedOption.value);
    this.setState({
      hostNumber: hostNumber,
      hostOptions: hostNumber.value != 1 ? mainConstants.pluralHostOptions : mainConstants.hostOptions,
      hostSelectedOption: updatedHostOption
    });
  }

  render() {
    const {hostOptions, hostSelectedOption, purposeSelectedOption, hostNumber} = this.state;
    return (
	    <div className='container text-xs-center'>
	      <div className='row'>
	        <div className='col-sm-6 offset-sm-3'>
            <FirstInput {...this.state}
              handleHostTypeChange={this.handleHostTypeChange}
              handleHostNumberChange={this.handleHostNumberChange}
              handlePurposeChange={this.handlePurposeChange} />

            {(hostSelectedOption.value === 'site' || hostSelectedOption.value === 'store') && (
              <SiteDetails {...this.state} />
            )}

            {hostSelectedOption.value === 'email' && (
              <EmailDetails {...this.state} />
            )}

            {hostSelectedOption.value === 'app' && (
              <AppDetails {...this.state} />
            )}
	        </div>
	      </div>
	    </div>
    );
  }
}

render(<App/>, document.getElementById('app'));
