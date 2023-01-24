const Info = ({title}) =>{
    return(
        <section className="info info-slide-1">
            <div className="info-container">
                <article className="info-container__text-box">
                    <h1>{title}</h1>
                    <p>
                        <strong>Tecno Store</strong>
                        Tienda Online de Argentina
                        <p>Aqui encontraras todos los productos importados al mejor precio</p>
                    </p>
                    <button className="button-primary">Comprar</button>
                </article>
            </div>
        </section>
    )
}
export default Info