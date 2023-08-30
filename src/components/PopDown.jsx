import { useState} from 'react'
import arrow from '../assets/arrow.svg'

function PopDown(props) {
    const {title, contents} = props
    console.log(contents)

    const [toggle, updateToggle] = useState(false)

    function click() {
        updateToggle(!toggle)
    }    



  return (
    <article className={`popdown ${toggle ? "active" : ""}`}>
        <div className='popdown_title'><h2>{title}</h2><img src={arrow} onClick={click} alt="bouton pour plus de détails" /></div>
        {contents.map(content => 
            <div key={content} className="popdown_detail">
                {content}
            </div>                    
        )
        }
    </article> 
  )
}

export default PopDown
