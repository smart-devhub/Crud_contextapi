import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { Button, ListGroup,ListGroupItem } from 'reactstrap'
import { GlobalContext } from '../context/GlobalState'

const Userlist = () => {

    const {users}=useContext(GlobalContext)
    return (
        <div>
            <ListGroup className="mt-3">
                {users.map(user=>{
                    return(
                     <ListGroupItem style={{display:'flex', justifyContent:'space-between'}}>
                     <strong>{user.name}</strong>
                        <div className="ml-auto">
                         <Link to="/edit/1" className="btn btn-warning" style={{marginRight:'10px'}}>Edit</Link>
                         <Button color="danger">Delete</Button>
                        </div>
                     </ListGroupItem>
                    )

                })}
               
               
            </ListGroup>
        </div>
    )
}

export default Userlist
