import React from 'react';

class MailForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {emailValue: ''};

    this.handleInputChage = this.handleInputChage.bind(this);
    this.handleForm = this.handleForm.bind(this);
  }

  handleInputChage (e) {
    console.log(e.target.value);
    this.setState({emailValue: e.target.value});
  }

  handleForm () {
    let finalUrl = 'https://app.umbler.com/?email=' + this.state.emailValue;
    window.open(finalUrl);
  }

  render() {
    return (
      <p>Seu E-mail: <input type='text' name='email' className='form-control mr-2' onChange={this.handleInputChage} />
        <button className='btn btn-primary' onClick={this.handleForm}>TESTAR GRÁTIS</button>
      </p>
    );
  }
}

export default MailForm;


