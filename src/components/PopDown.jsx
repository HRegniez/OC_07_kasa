import { useState} from 'react'
import arrow from '../assets/arrow.svg'
import '../Style/components/popDown.css'

function PopDown(props) {
    const {title, contents} = props
    console.log(contents)

    const [toggle, updateToggle] = useState(false)

    function click() {
        updateToggle(!toggle)
    }    



  return (
    <article className={`popdown ${toggle ? "open" : ""}`}>
        <div className='popdown_title'><h2>{title}</h2><img src={arrow} onClick={click} alt="bouton pour plus de détails" /></div>
        <div className="popdown_detail">
            {contents.map(content => 
                (<div>{content}</div>)
            )
            }    
        </div>
        
    </article> 
  )
}

export default PopDown
