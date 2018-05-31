import React from 'react';
import { render } from 'react-dom';
import Select from 'react-select';
import MailForm from './MailForm.jsx';
import MailModal from './MailModal.jsx';
import RegisterModal from './RegisterModal.jsx';
import siteConstants from '../constants/siteConstants';

function calcVisits(period, visits, complement, hostNumber) {
  const result = (complement === 'each') ? ((period * visits) * hostNumber)
    : ((period * visits) / hostNumber);
  return result;
}

function calcDatabase(database, databaseNumber, finalVisits, hostSelectedOption) {
  let result;
  if (database === 'sql') {
    result = databaseNumber * siteConstants.extraSitePrices.sql;
  } else {
    if (databaseNumber > 25 || finalVisits >= 120000 || hostSelectedOption === 'store') {
      result = siteConstants.extraSitePrices.mysql2;
    } else {
      result = siteConstants.extraSitePrices.mysql1;
    }
  }
  if (finalVisits === 1000) {
    result = siteConstants.extraSitePrices.mysql2;
  }
  return result;
}

class SiteResults extends React.Component {
  render() {
    const { hostSelectedOption, hostNumber, platform, environment, databaseNumber, database, period, complement, visits } = this.props;
    let umblerPlan = 0;
    let finalVisits = calcVisits(period.value, visits, complement.value, hostNumber.value);
    let databasePrice = calcDatabase(database.value, databaseNumber, finalVisits, hostSelectedOption.value);
    let branchDatabasePrice = databaseNumber > 1 ? databaseNumber * 10 : 0;

    if (hostNumber.value >= 10 || environment.value === 'dedicated' || finalVisits >= 180000) {
      if (finalVisits < 360000 || hostNumber.value < 150) {
        umblerPlan = 1;
      }
      if (finalVisits >= 360000 && finalVisits < 540000 || hostNumber.value === 150) {
        umblerPlan = 2;
      }
      if (finalVisits >= 540000 && finalVisits < 780000 || hostNumber.value === 200) {
        umblerPlan = 3;
      }
      if (finalVisits >= 780000 && finalVisits < 900000 || hostNumber.value === 250) {
        umblerPlan = 4;
      }
      if (finalVisits >= 900000 || hostNumber.value >= 300) {
        umblerPlan = 5;
      }
    } else {
      umblerPlan = 0;
    }

    let hostPrice = siteConstants.sitePlans[umblerPlan].price;
    let title = siteConstants.sitePlans[umblerPlan].title;
    let price = umblerPlan === 0 ? (hostPrice * hostNumber.value) + databasePrice
      : hostPrice + databasePrice;
    let benchPrice = umblerPlan === 0 ? (siteConstants.sitePlans[umblerPlan].benchPrice * hostNumber.value) + branchDatabasePrice
      : siteConstants.sitePlans[umblerPlan].benchPrice + branchDatabasePrice;
    price = price.toLocaleString(window.navigator.language, { style: "currency", currency: "BRL", minimumFractionDigits: 2 });
    benchPrice = benchPrice.toLocaleString(window.navigator.language, { style: "currency", currency: "BRL", minimumFractionDigits: 2 });

    return (
      <Frag>
        <div className='row row-result'>
          {hostNumber.value === 1 ? (
            <span className='h4'>A hospedagem do seu <em>site</em> custará:<br /></span>
          ) : (
              <span className='h4'>A hospedagem do seus <em>sites</em> custará:<br /></span>
            )}

          <span className='h3'>{price}  por mês no plano {title}</span><br />
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

export default SiteResults;
