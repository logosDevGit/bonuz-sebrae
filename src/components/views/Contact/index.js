import { useEffect } from "react";
import {Col, Input, Form, FormGroup, Row, Button} from "reactstrap"
import { useSearchParams } from "react-router-dom";

import './styles.css'
import Owl from '../../../assets/images/owlCoin.png'

const Contact = () => {
    let [searchParams, setSearchParams] = useSearchParams();
    let success = searchParams.get('success')


    const UR = [
        'AC',
        'AL',
        'AP',
        'AM',
        'BA',
        'CE',
        'ES',
        'GO',
        'MA',
        'MT',
        'MS',
        'MG',
        'PA',
        'PB',
        'PR',
        'PE',
        'PI',
        'RJ',
        'RN',
        'RS',
        'RO',
        'RR',
        'SC',
        'SP',
        'SE',
        'TO',
        'DF',
    ];

    useEffect(() => {
        if(success) {
            alert('email enviado com sucesso!')
            // window.location.href = '/'
        }
    },[success])

    return(
        <div className="contact wd-cont">
            <div className="component">
                <div className='owl-content'>
                    <img src={Owl} alt="coruja ao lado de uma pilha de moedas"/>
                    <h2>BNZs é a moeda virtual Bonuz</h2>
                    <p>Já sabe o que pedir? Acesse a plataforma, adquira BNZs. Cada BNZ custa R$ 2,00. E o melhor, o seu BNZ não expira!</p>
                </div>
                <Form className="card" action="https://www.bonuz.it/sebrae/mailer/index.php">
                    <h3>Entraremos em contato com você!</h3>
                    <p>Estamos prontos para te atender, informe seus dados e aguarde nosso contato.</p>
                    <FormGroup>
                        <Input type="text" name="name" placeholder="Nome"/>
                    </FormGroup>
                    <FormGroup>
                        <Input type="text" name="email" placeholder="E-mail"/>
                    </FormGroup>
                    <FormGroup>
                        <Input type="text" name="phone" placeholder="Telefone"/>
                    </FormGroup>
                    <Row>
                        <Col xs="4">
                            <FormGroup>
                                <Input type="select" name="UR" placeholder="Estado">
                                    <option value="">UR</option>
                                    {UR.map(option => {
                                        return <option key={option} value={option}>{option}</option>
                                    })}
                                </Input>
                            </FormGroup>
                        </Col>
                        <Col xs="8">
                            <FormGroup>
                                <Input type="city" placeholder="Cidade"/>
                            </FormGroup>
                        </Col>
                    </Row>
                    <FormGroup>
                        <Input
                        name="message"
                        placeholder="Mensagem"
                        type="textarea"
                        />
                    </FormGroup>
                    <Button className="btn btn-primary">Enviar</Button>
                </Form>
            </div>
        </div>
    )
}

export default Contact