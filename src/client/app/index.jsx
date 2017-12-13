import React from 'react';
import {render} from 'react-dom';

class App extends React.Component {
  render () {
    return (
	    <div className="container text-xs-center">
	      <div className="row">
	        <div className="col-sm-6 offset-sm-3">
	          <p>Quero hospedar 1 site ↓ para uso pessoal ↓<br/>
	            Programado(s) em PHP ↓ / Utilizando plataforma WordPress ↓<br/>
	            Em ambiente compartilhado ↓ (?)<br/>
	            Com 1 banco(s) de dados MySQL ↓<br/>
	            Espero receber até 1000 visitas por mês ↓ em cada um ↓ (d)eles</p>

	          <p><span className="h4">A hospedagem do seu <em>site</em> custará:</span><br/>
	          <span className="h2">R$6,00  por mês no plano Site Pro da Umbler</span><br/>
	          ou em média R$25,00 por mês em outras empresas </p>


	          <p><a href="#">Receba este resultado por email</a></p>

	          <p>Ganhe até R$100 em créditos para hospedar seu site WordPress na Umbler. 
	          Comece agora: <input type="text" name="email" /> <button>TESTAR GRÁTIS</button></p>

	          <p>Ainda com dúvidas? Fale com um especialista em hospedagem de sites <em>WordPress</em>.</p>

	          <p>Texto legal afirmando que trata-se de uma simulação e dando detalhes sobre os recursos específicos de cada plano, banco de dados, etc.</p>
	        </div>
	      </div>
	    </div>
    );
  }
}

render(<App/>, document.getElementById('app'));