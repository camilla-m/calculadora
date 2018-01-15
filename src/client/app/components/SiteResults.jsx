import React from 'react';
import {render} from 'react-dom';
import Select from 'react-select';
import constants from '../constants';

function calcVisits(period, visits, complement, hostNumber) {
  let result = (complement === 'each') ? ((period * visits) * hostNumber)
                                       : ((period * visits) / hostNumber);
  return result;
}

function calcDatabase(database, databaseNumber, finalVisits) {
  let result;
  if (database === 'sql') {
    result = databaseNumber * constants.extraSitePrices.sql;
  } else {
    let mysqlprice = databaseNumber <= 25 ? constants.extraSitePrices.mysql1
                                          : constants.extraSitePrices.mysql2;
    result = mysqlprice * databaseNumber;
  }
  return result;
}

class SiteResults extends React.Component {
  render() {
    const {hostNumber, platform, environment, databaseNumber, database, period, complement, visits} = this.props;
    let umblerPlan = 0;
    let finalVisits = calcVisits(period.value, visits, complement.value, hostNumber.value);
    let databasePrice = calcDatabase(database.value, databaseNumber, finalVisits);
    let branchDatabasePrice = databaseNumber > 1 ? databaseNumber * 10 : 0;

    if (hostNumber.value >= 10 || environment.value === 'dedicated' || finalVisits >= 180000) {
      if (finalVisits < 360000) {
        umblerPlan = 1;
      } else if (finalVisits >= 360000 && finalVisits < 540000) {
        umblerPlan = 2;
      } else if (finalVisits >= 540000 && finalVisits < 780000) {
        umblerPlan = 3;
      } else if (finalVisits >= 780000 && finalVisits < 900000) {
        umblerPlan = 4;
      } else if (finalVisits >= 900000) {
        umblerPlan = 5;
      }
    } else {
      umblerPlan = 0;
    }

    let hostPrice = constants.sitePlans[umblerPlan].price;
    let title = constants.sitePlans[umblerPlan].title;
    let price = hostPrice + databasePrice;
    let branchPrice = (constants.sitePlans[umblerPlan].branchPrice * hostNumber.value) + branchDatabasePrice;

    return(
      <Frag>
        <div className='row row-result'>
          {hostNumber.value === 1 ? (
            <span className='h4'>A hospedagem do seu <em>site</em> custará:<br/></span>
          ) : (
            <span className='h4'>A hospedagem do seus <em>sites</em> custará:<br/></span>
          )}

            <span className='h3'>R${price},00  por mês no plano {title}</span><br/>
            ou em média R${branchPrice},00 por mês em outras empresas
        </div>
        <div className='row'>
          <p><a href='#'>Receba este resultado por email</a></p>
          <p>Ganhe até R$100 em créditos para hospedar seu site {platform.label} na Umbler.
          Comece agora: <input type='text' name='email' /> <button>TESTAR GRÁTIS</button></p>

          <p>Ainda com dúvidas? Fale com um especialista em hospedagem de sites <em>{platform.label}</em>.</p>

          <p>Texto legal afirmando que trata-se de uma simulação e dando detalhes sobre os recursos específicos de cada plano, banco de dados, etc.</p>
        </div>
      </Frag>
    );
  }
}

export default SiteResults;
