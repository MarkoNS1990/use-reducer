import React ,{useContext} from 'react'
import { NumberContext } from './App'

function Number() {

    const value = useContext(NumberContext)
    console.log(value)

    return (
        <div>
            {value && value?.map(user=><li key={user.id}>{user.name}</li>)}
        </div>
    )
}

export default Number
