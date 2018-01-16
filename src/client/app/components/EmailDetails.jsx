import React from 'react';
import {render} from 'react-dom';
import Select from 'react-select';
import emailConstants from '../constants/emailConstants';

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
  	let pricePlan = emailPrices[0].price;
  	let title = emailPlans[0];
  	if (mapi || activesync || share || emailSpace.value === 50) {
  		title = emailPlans[1];
  		pricePlan = emailPrices[6].price;
  	} else {
  		pricePlan = emailPrices.find(plan => plan.size === emailSpace.value);
  		pricePlan = pricePlan.price;
  	}
  	let price = pricePlan * hostNumber.value;
  	price = price.toLocaleString(window.navigator.language, {style:"currency", currency:"BRL", minimumFractionDigits:2});
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
	          <span className='h4'>A hospedagem do seu <em>e-mail</em> custará:<br/></span>
	        ) : (
	          <span className='h4'>A hospedagem do seus <em>e-mails</em> custará:<br/></span>
	        )}

	          <span className='h3'>{price}  por mês no plano {title}</span>
	      </div>
	      <div className='row'>
	        <p><a href='#'>Receba este resultado por e-mail</a></p>
	        <p>Ganhe até R$100 em créditos para hospedar seus e-mails na Umbler.</p>
	        <p>Comece agora: <input type='text' name='email' /> <button>TESTAR GRÁTIS</button></p>
	        <p>Ainda com dúvidas? Fale com um especialista em hospedagem de e=mails.</p>

	        <p>Texto legal afirmando que trata-se de uma simulação e dando detalhes sobre os recursos específicos de cada plano, banco de dados, etc.</p>
	      </div>
	    </Frag>
    );
  }
}

export default EmailDetails;
