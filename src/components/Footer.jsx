function Footer() {

    const ano = new Date().getFullYear();

    return (
        <footer className="rodape">
        <p>© Desenvolvido por React + JSON Server.</p>

        <span>Todos os direitos reservados - Jeyfferson Vicente {ano}</span>
        </footer>
    );
}

export default Footer;