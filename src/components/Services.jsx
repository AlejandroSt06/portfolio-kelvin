import { UilCube,  UilArrowRight  } from '@iconscout/react-unicons'
import { Modal } from 'bootstrap'
import { useState } from 'react'
function ServicesSection(){
const [isModal,setModal] = useState(true)

function openModal(){
    setModal(true)
}

function closeModal(){
    setModal(false)
}

function ServiceCard(){
    return(

<div class="service-card pt-5">
<div>
<div className = "card-icon  mt-5 pt-5"><UilCube /></div>
  <div class="card-body">
    <h5 class="card-title">Modellatore <br></br> CAD</h5>

    <a className="service-btn" onClick={openModal}>View More <UilArrowRight/></a>
  </div>
  </div></div>
    )
}
function CardModal(){
console.log("hey")
return(
<div class="modal" >
<div class="modal-dialog">
  <div className="modal-content">
    <div className="modal-header">
      <h5 class="modal-title">Modal title</h5>
      <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
    </div>
    <div class="modal-body">
      <p>Modal body text goes here.</p>
    </div>
    <div class="modal-footer">
      <button type="button" class="btn btn-secondary" data-bs-dismiss="modal" onClick={closeModal}>Close</button>
      <button type="button" class="btn btn-primary">Save changes</button>
    </div>
  </div>
</div>
</div>
)

}

return (
<>
<section className = "services-section container pt-5">

{isModal && <closeModal/>}
</section>

</>
)
}

export default ServicesSection