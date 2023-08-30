import Banner from '../components/Banner'
import bannerImg from '../assets/BannerImg2.jpg'
import PopDown from '../components/PopDown'

const proposDatas = [{
  title : 'Fiabilité',
  content : 'Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements, et toutes les informations sont régulièrement vérifiées par nos équipes.'
},
{
  title : 'Respect',
  content : 'La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entrainera une exclusion de notre platforme.'
},
{
  title : 'Service',
  content : 'La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entrainera une exclusion de notre platforme.'
},
{
  title : 'Sécurité',
  content : 'La sécurité est la priorité de Kasa. Aussi bien pour nos hotes, que pour les voyageurs, chaque logement correspond aux critères de sécurité établis par nos services. En laissant une note aussi bien à l\'hote qu\'au locataire, cela permet a nos équipes  de vérifier que es standards sont bien respéctés. Nous organisons également des ateliers sur la sécurité domestique pour nos hotes'
}]

function APropos() {
  return (
    <main>
      <Banner image={bannerImg}/>
      <section>
        {proposDatas.map((propo) => (
            <PopDown key={propo.title} title={propo.title} contents={[propo.content]}/>
        ))}
    </section>
    </main>
  )
}

export default APropos
