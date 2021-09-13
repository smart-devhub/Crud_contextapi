import React from 'react'
import { Link } from 'react-router-dom'
import { Form,FormGroup,Label,Input,Button } from 'reactstrap'

const Edituser = () => {
    return (
        <Form>
            <FormGroup className="">
                <Label>Name:</Label>
                <Input type="text" placeholder="Enter Name..." />
               
            </FormGroup>
            <div className="mt-3">
            <Button type="submit" color="primary">Edit</Button>
            <Link to="/" className="btn btn-danger" style={{marginLeft:'10px'}}>Cancel</Link>
             </div>
        </Form>
    )
}

export default Edituser;
