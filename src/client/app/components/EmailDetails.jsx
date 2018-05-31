import React from 'react';
import {render} from 'react-dom';
import Select from 'react-select';
import emailConstants from '../constants/emailConstants';
import MailForm from './MailForm.jsx';
import MailModal from './MailModal.jsx';

class EmailDetails extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      emailSpace: emailConstants.space[0],
      mapi: false,
      activesync: false,
      share: false
    }

    this.handleSpaceChange = this.handleSpaceChange.bind(this);
    this.handleMapiCheck = this.handleMapiCheck.bind(this);
    this.handleActivesyncCheck = this.handleActivesyncCheck.bind(this);
    this.handleShareCheck = this.handleShareCheck.bind(this);
  }

  handleSpaceChange (emailSpace) {
    this.setState({emailSpace});
  }

  handleMapiCheck () {
  	this.setState({mapi: !this.state.mapi});
  }

  handleActivesyncCheck () {
  	this.setState({activesync: !this.state.activesync});
  }

  handleShareCheck () {
  	this.setState({share: !this.state.share});
  }

  render() {
  	const {emailSpace, mapi, activesync, share} = this.state;
  	const {hostNumber} = this.props;
  	const {emailPlans, emailPrices, space} = emailConstants;
  	let pricePlan = emailPrices[0];
  	let title = emailPlans[0];

  	if (mapi || activesync || share || emailSpace.value === 50) {
  		title = emailPlans[1];
      pricePlan = emailPrices[6];
  	} else {
  		pricePlan = emailPrices.find(plan => plan.size === emailSpace.value);
		}

  	let price = pricePlan.price * hostNumber.value;
    let benchPrice = pricePlan.benchPrice * hostNumber.value;
  	price = price.toLocaleString(window.navigator.language, {style:"currency", currency:"BRL", minimumFractionDigits:2});
    benchPrice = benchPrice.toLocaleString(window.navigator.language, {style:"currency", currency:"BRL", minimumFractionDigits:2});

    return(
    	<Frag>
	      <div className='row'>
	          <span className='input-text'>Cada conta precisará ter </span>
	          <Select
	            name='emailSpace'
	            value={emailSpace}
	            onChange={this.handleSpaceChange}
	            options={space}
	            className='select'
	            searchable={false}
	            clearable={false} />
	            <span className='input-text'>de espaço </span>
	       </div>
	       <div className='row row--checkbox'>
      		<legend className='col-form-legend col-sm-4'>Preciso também de</legend>
			<div className='col-sm-8'>
	          <div className='form-check'>
	            <input
	            	className='form-check-input'
	            	type='checkbox'
	            	name='mapi'
	            	id='mapi'
	            	checked={mapi}
	            	onClick={this.handleMapiCheck} />
	            <label className='form-check-label' htmlFor='mapi'>MAPI</label>
	          </div>
	          <div className='form-check'>
	            <input
	            	className='form-check-input'
	            	type='checkbox'
	            	name='activesync'
	            	id='activesync'
	            	checked={activesync}
	            	onClick={this.handleActivesyncCheck} />
	            <label className='form-check-label' htmlFor='activesync'>Active Sync</label>
	          </div>
	          <div className='form-check'>
	            <input
	            	className='form-check-input'
	            	type='checkbox'
	            	name='share'
	            	id='share'
	            	checked={share}
	            	onClick={this.handleShareCheck} />
	            <label className='form-check-label' htmlFor='share'>Compartilhamento de agenda entre contas</label>
	          </div>
	       	</div>
	      </div>
	      <div className='row row-result'>
	        {hostNumber.value === 1 ? (
	          <span className='h3'>A hospedagem do seu <em>e-mail</em> custará:<br/></span>
	        ) : (
	          <span className='h3'>A hospedagem do seus <em>e-mails</em> custará:<br/></span>
	        )}
	          <span className='h2'>{price}  por mês no plano {title}</span><br />
            ou em média {benchPrice} por mês em outras empresas
	      </div>
	      <div className='row form-inline'>

          {platform.value !== 'none' ? (
            <p><b>Quer ganhar até R$100 em créditos para hospedar seu site {platform.label} na Umbler?</b></p>
          ) : (
              <p><b>Quer ganhar até R$100 em créditos para hospedar seu site na Umbler?</b></p>
            )}

          <MailForm />

          </div>

          <MailModal />

          <RegisterModal />

          <p class="legal-text">Texto legal afirmando que trata-se de uma simulação e dando detalhes sobre os recursos específicos de cada plano, banco de dados, etc. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris porttitor mauris et accumsan sodales. Cras consequat, diam eget egestas volutpat, diam lacus bibendum quam, in posuere elit velit vel turpis. Ut sit amet nibh molestie, ullamcorper nunc ut, luctus dolor. Nulla scelerisque metus a lacus ultricies commodo. Etiam lacinia enim at malesuada hendrerit. Aliquam gravida, justo nec dignissim auctor, metus tortor tempor orci, at vestibulum sapien sem eu massa. Phasellus ac risus ex. In fermentum consequat ex id venenatis. Proin a suscipit urna, ac dapibus ipsum. </p>

          <p class="umbler-text"><span class="icon icon-umbler-logo icon-primary"></span> Umbler, Inc. © 2018</p>    

      </Frag>
    );
  }
}

export default EmailDetails;
