import React from 'react';
import {render} from 'react-dom';
import Select from 'react-select';
import constants from '../constants';

class AppDetails extends React.Component {
  render() {
    return(
      <div>
        Programado em Node.JS, Outra linguagem.
        Preciso de 1, 2, 3 ... 20 instância(s)/contâiner(s)
        Com 0 (opção default), 1, 2, 3, 4, 5, mais de 5 bancos de dados MongoDB, MySQL, SQL Server
      </div>
    );
  }
}

export default AppDetails;
