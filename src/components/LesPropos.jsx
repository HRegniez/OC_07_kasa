import '../Style/components/aPropos.css'
import Propo from './Propo'
c

console.log(proposDatas)
function LesPropos() {
    
  return (
    <section>
        {proposDatas.map((propo) => (
            <Propo key={propo.title} title={propo.title} content={propo.content}/>
        ))}
    </section>
  )
}

export default LesPropos
