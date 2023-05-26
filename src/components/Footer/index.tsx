import './styles.scss'

export const Footer = () => {
    return(
        <footer>
            <div className="footer-container">
                <div className='content'> 
                    <div className='about'>
                        <h3>Sobre nós</h3>
                        <p>CONHEÇA</p>
                        <p>COMO COMPRAR</p>
                        <p>INDICAÇAO E DESCONTO</p>
                    </div>
                    <div className='util'>
                        <h3>INFORMAÇÕES ÚTEIS</h3>
                        <p>FALE CONOSCO</p>
                        <p>DÚVIDAS</p>
                        <p>PRAZOS DE ENTREGA</p>
                        <p>FORMAS DE PAGAMENTO</p>
                        <p>POLÍTICA DE PRIVACIDADE</p>
                        <p>TROCAS E DEVOLUÇÕES</p>
                    </div>

                    <div></div>
                </div>

                <div className='payment-methods'>
                    <h3>FORMAS DE PAGAMENTO</h3>
                </div>
            </div>
        </footer>
    )
}