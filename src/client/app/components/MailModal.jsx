import Modal from 'react-modal';
import React from 'react';

class MailModal extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      modal: false
    };

    this.openCloseModal = this.openCloseModal.bind(this);
  }

  openCloseModal() {
    this.setState ({
      modal: !this.state.modal
    });
  }

  render() {
    let modalClass = this.state.modal ? 'modal fade in' : 'modal fade';
    return (
      <Frag>
        <p><a href='#' onClick={this.openCloseModal}>Receba este resultado por e-mail</a></p>
        <Modal
          isOpen={this.state.modal}
          onRequestClose={this.openCloseModal}
          className='mail-modal-content'>
          <div className='modal-header'>
            <button type='button' className='close' data-dismiss='modal' aria-label='Close' onClick={this.openCloseModal}>
              <span className='icon icon-close'></span>
            </button>
            <h4 className='modal-title'>Receba este resultado por e-mail</h4>
          </div>
          <p className='form-text text-muted'>* Campos obrigatórios</p>
          <div className='row'>
            <div className='form-group col-sm-12'>
              <label htmlFor='name'>Nome*</label>
              <input type='text' className='form-control' id='name' placeholder='Seu nome' />
            </div>
          </div>
          <div className='row'>
            <div className='form-group col-sm-12'>
              <label htmlFor='email'>E-mail*</label>
              <input type='email' className='form-control' id='email' placeholder='Seu e-mail' />
            </div>
          </div>
          <div className='row'>
            <div className='form-group col-sm-12'>
              <label htmlFor='company'>Empresa*</label>
              <input type='text' className='form-control' id='company' placeholder='Nome da sua empresa' />
            </div>
          </div>
          <div className='row'>
            <div className='form-group col-sm-12'>
              <label htmlFor='jobName'>Cargo*</label>
              <input type='text' className='form-control' id='jobName' placeholder='Nome do cargo que você ocupa' />
            </div>
          </div>
          <div className='row'>
            <div className='form-group col-sm-12'>
              <label htmlFor='currentHost'>Hospedagem atual</label>
              <input type='text' className='form-control' id='currentHost' placeholder='Nome da sua hospedagem atual' />
            </div>
          </div>
          <div className='row'>
            <div className='form-group col-sm-12'>
              <button className='btn btn-primary' type='submit'>Enviar</button>
            </div>
          </div>
        </Modal>
      </Frag>
    );
  }
}

export default MailModal;
