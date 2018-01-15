import React from 'react';
import {render} from 'react-dom';
import Select from 'react-select';
import constants from '../constants';

class EmailDetails extends React.Component {
  render() {
    return(
      <div>
        Cada conta precisará ter 1Gb, 2Gb, 5Gb, 10Gb, 20Gb, 25Gb, 50Gb de espaço
        Preciso também ☐ MAPI, ☐ ActiveSync, ☑ Compartilhamento de agenda entre contas
      </div>
    );
  }
}

export default EmailDetails;
