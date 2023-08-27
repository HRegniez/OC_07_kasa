import { useState} from 'react'
import arrow from '../assets/arrow.svg'
import '../Style/components/aPropos.css'

function Propo(props) {
    const title = props.title
    const content = props.content

    const [toggle, updateToggle] = useState(false)

    function click() {
        updateToggle(!toggle)
    }
    
    return (
        <article className='propo'>
            <figure className='propo_fig'><h2>{title}</h2><img src={arrow} onClick={click} alt="bouton pour plus de détails" /></figure>
            <figcaption className={`propo_caption ${toggle ? "" : "closed"}`}>{content}</figcaption>
            
        </article>   
    )
}

export default Propo
