import portfolioList from './portfolioData'


import './portfolio.css'



const Portfolio = () =>{
    return(
        <section className="portfolio">
            {portfolioList.map((slide, index)=>{
                return(
                    <div className={portfolioList[index].class}>
                        <div>
                            <h3>{portfolioList[index].title}</h3>
                            <p>{portfolioList[index].date}</p>
                        </div>
                    </div>
                )
            })}
        </section>
    )
}
export default Portfolio