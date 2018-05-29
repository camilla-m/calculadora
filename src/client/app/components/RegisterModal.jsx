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
    this.setState({
      modal: !this.state.modal
    });
  }
  
  render() {
    let modalClass = this.state.modal ? 'modal fade in' : 'modal fade';
    return (
      <Frag>
        <p><a href='#' onClick={this.openCloseModalRegister}>Dúvidas? Entre em contato conosco!</a></p>
        <Modal
          isOpen={this.state.modal}
          onRequestClose={this.openCloseModalRegister}
          className='mail-modal-content'>
          <div className='modal-header'>
            <button type='button' className='close' data-dismiss='modal' aria-label='Close' onClick={this.openCloseModalRegister}>
              <span className='icon icon-close'></span>
            </button>
            <h4 className='modal-title'>Fale com nossos especialistas</h4>
          </div>
          <p className='form-text text-muted'>* Campos obrigatórios</p>
          <form action="https://formspree.io/tessis@umbler.com" method="POST">
            <div className='row'>
              <div className='form-group col-sm-12'>
                <label htmlFor='name'>Nome*</label>
                <input type='text' className='form-control' name='name' id='nameRegister' placeholder='Seu nome' />
              </div>
            </div>
            <div className='row'>
              <div className='form-group col-sm-12'>
                <label htmlFor='email'>E-mail*</label>
                <input type='email' className='form-control' name='email' id='emailRegister' placeholder='Seu e-mail' />
              </div>
            </div>
            <div className='row'>
              <div className='form-group col-sm-12'>
                <label htmlFor='telephone'>Telefone*</label>
                <input type='text' className='form-control' name='telephone' id='telephone' placeholder='Telefone' />
              </div>
            </div>
            <div className='row'>
              <div className='form-group col-sm-12'>
                <label htmlFor='issue'>Assunto</label>
                <input type='text' className='form-control' name='issue' id='issue' placeholder='Assunto' />
              </div>
            </div>
            <div className='row'>
              <div className='form-group col-sm-12'>
                <label htmlFor='message'>Mensagem</label>
                <input type='textarea' className='form-control' name='message' id='message' placeholder='Mensagem' />
              </div>
            </div>
            <div className='row'>
              <div className='form-group col-sm-12'>
                <button className='btn btn-primary' type='submit'>Enviar</button>
              </div>
            </div>
            <input type="hidden" name="_next" value="http://quanto.nodegirlscode.org" />
            <input type="hidden" name="_language" value="pt-BR" />
          </form>
        </Modal>
      </Frag>
    );
  }
}

export default RegisterModal;
