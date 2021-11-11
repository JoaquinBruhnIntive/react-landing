import Hero from './hero/hero';
import Welcome from './welcome/welcome';
import Ideas from './ideas/ideas';
import Featured from './featured/featured';


const Index = () =>{
    return(
        <section>
            <Hero />
            <Welcome />
            <Ideas />
            <Featured />
        </section>
    )
}
export default Index