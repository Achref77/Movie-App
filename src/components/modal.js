// import React, { useState } from 'react';
// import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

// const ModalExample = (props,{targetImgfilm},{targetName},{targetBoton}) => {
//   const {
//     buttonLabel,
//     className
//   } = props;

//   const [modal, setModal] = useState(false);
//   const [nestedModal, setNestedModal] = useState(false);
//   const [closeAll, setCloseAll] = useState(false);

//   const toggle = () => setModal(!modal);
//   const toggleNested = () => {
//     setNestedModal(!nestedModal);
//     setCloseAll(false);
//   }
//   const toggleAll = () => {
//     setNestedModal(!nestedModal);
//     setCloseAll(true);
//   }

//   return (
//     <div>
//       <Button onClick={toggle}>{buttonLabel}Ajouter</Button>
//       <Modal isOpen={modal} toggle={toggle} className={className}>      
//         <ModalHeader toggle={toggle}>film Préféré</ModalHeader>
//             <label for="name">imgfilm:</label>
//                <input class="ground"id="imgfilm"type="text" onChange={this.targetImgfilm}/>  
//             <label for="name">name:</label>
//                <input class="ground"id="name"type="text"onChange={this.targetName}/> 
//             <label for="name">boton:</label>
//                <input class="ground"id="boton"type="text"onChange={this.targetBoton}/> 
//         <ModalBody>

//           <br />
//           {/* <Button color="success" onClick={toggleNested}>Show Nested Modal</Button> */}
//           <Modal isOpen={nestedModal} toggle={toggleNested} onClosed={closeAll ? toggle : undefined}>
//             {/* <ModalHeader>Nested Modal title</ModalHeader> */}
//             {/* <ModalBody>Stuff and things</ModalBody> */}
//             {/* <ModalFooter> */}
//               <Button color="primary" onClick={toggleNested}>Done</Button>{' '}
//               <Button color="secondary" onClick={toggleAll}>All Done</Button>
//             {/* </ModalFooter> */}
//           </Modal>
//         </ModalBody>
//         <ModalFooter>

//           <Button color="secondary" onClick={toggle}>Cancel</Button>
//         </ModalFooter>
//       </Modal>
//     </div>
//   );
// }

// export default ModalExample;



import React from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

class ModalExample extends React.Component {
  constructor(props) {
    super(props);
    this.state = {


      modal: false
    };
    this.toggle = this.toggle.bind(this);
  }
  toggle() {
    this.setState(prevState => ({
      modal: !prevState.modal
    }));
  }

  handlechange = (event) => {
    this.setState({ [event.target.name]: event.target.value })
    // console.log(event.target.value)
    console.log(event.target.name)
  }


  render() {
    return (
      <div className="modal-container">

        <Button className="btn-secondary" color="danger" onClick={this.toggle} value="+">Ajouter{this.props.buttonLabel}</Button>
        <Modal isOpen={this.state.modal} fade={false} toggle={this.toggle} className={this.props.className}>
          <ModalHeader toggle={this.toggle}>Add new movie</ModalHeader>
          <ModalBody>

            <input class="ground" id="imgfilm" type="text" placeholder="imgfilm..." name="url" onChange={this.handlechange} />

            <input class="ground" id="name" type="text" placeholder="name..." name="name" onChange={this.handlechange} />

            <input class="ground" id="boton" type="text" placeholder="youtube..." name="youtube" onChange={this.handlechange} />

            <    input class="ground" id="rate" type="number" max="5" placeholder="rates..." name="rate" onChange={this.handlechange} />

          </ModalBody>
          <ModalFooter>
            {/* <Button color="primary" className="add-btn" onClick={() => this.props.add(this.state.addlist)} >validate</Button>{' '} */}
            <Button color="primary" className="add-btn" onClick={() => this.props.handleSubmit({ imgfilm: this.state.url, name: this.state.name, youtube: this.state.youtube, rate: this.state.rate })} >validate</Button>{' '}
            <Button color="secondary" className="add-btn" onClick={this.toggle}>Cancel</Button>
          </ModalFooter>
        </Modal>
      </div >

    );
  }
}
export default ModalExample;











