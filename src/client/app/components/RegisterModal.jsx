import Modal from 'react-modal';
import React from 'react';

class RegisterModal extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      modal: false
    };

    this.openCloseModalRegister = this.openCloseModalRegister.bind(this);
  }

  openCloseModalRegister() {
    this.setState ({
      modal: !this.state.modal
    });
  }

  render() {
    let modalClass = this.state.modal ? 'modal fade in' : 'modal fade';
    return (
        <Modal
          isOpen={this.state.modal}
          onRequestClose={this.openCloseModal}
          className='mail-modal-content'>
          <div className='modal-header'>
            <button type='button' className='close' data-dismiss='modal' aria-label='Close' onClick={this.openCloseModal}>
              <span className='icon icon-close'></span>
            </button>
          </div>
          <p className='form-text text-muted'>* Campos obrigatórios</p>
          <div className='row'>
            <div className='form-group col-sm-12'>
              <label htmlFor='name'>Nome*</label>
              <input type='text' className='form-control' id='nameRegister' placeholder='Seu nome' />
            </div>
          </div>
          <div className='row'>
            <div className='form-group col-sm-12'>
              <label htmlFor='email'>E-mail*</label>
              <input type='email' className='form-control' id='emailRegister' placeholder='Seu e-mail' />
            </div>
          </div>
          <div className='row'>
            <div className='form-group col-sm-12'>
              <label htmlFor='telephone'>Telefone*</label>
              <input type='text' className='form-control' id='telephone' placeholder='Telefone' />
            </div>
          </div>
          <div className='row'>
            <div className='form-group col-sm-12'>
              <label htmlFor='issue'>Assunto</label>
              <input type='text' className='form-control' id='issue' placeholder='Assunto' />
            </div>
          </div>
          <div className='row'>
            <div className='form-group col-sm-12'>
              <label htmlFor='message'>Mensagem</label>
              <input type='textarea' className='form-control' id='message' placeholder='Mensagem' />
            </div>
          </div>
          <div className='row'>
            <div className='form-group col-sm-12'>
              <button className='btn btn-primary' type='submit'>Enviar</button>
            </div>
          </div>
        </Modal>
    );
  }
}

export default RegisterModal;
