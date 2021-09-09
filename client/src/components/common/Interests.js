// import { React, useState } from 'react'
// import { Alert, Button } from 'react-bootstrap'
// import { Link } from 'react-router-dom'

// const Interests = () => {



//   function AlertDismissible() {
//     const [show, setShow] = useState(false)
//     const [render, setRender] = useState(false)

//     return (
//       <div className="column is-one-quarter-desktop is-one-third-tablet">
//         <Link to={'/interests/'}>
//           <Alert show={show} variant="success">
//             <Alert.Heading>Welcome!</Alert.Heading>
//             <p>
//               This is charity 2.
//             </p>
//             <hr />
//             <div className="d-flex justify-content-end">
//               <Button onClick={() => setShow(false)} variant="outline-success">
//                 Close me!
//               </Button>
//             </div>
//           </Alert>

//           {!show && <Button onClick={() => setShow(true)}>Charities1</Button>}
//         </Link>
//       </div>
//     )
//   }
//   render(<AlertDismissible />)
// }

// export default Interests