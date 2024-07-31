import React, { useState } from 'react'
import { Button, Input } from 'reactstrap'

export default function ChemicalItem(props) {

    const { item, index, handle_delte, handle_find } = props
    const [isEdit, setIsEdit] = useState({ id: "", flag: false })
    const [nameEdit, setNameEdit] = useState("")
    const [ctEdit, setCtEdit] = useState("")

    return (
        <>
            {
                <tr key={index}>
                    <td scope="row">
                        {item.id}
                    </td>
                    <td>
                        {item.name}
                    </td>
                    <td>
                        {item.formula}
                    </td>
                    <td>
                        <Button onClick={() => handle_delte(item.id)} color='danger'>X</Button>
                    </td>
                    <td>
                        <Button onClick={() => handle_find(item.id)} color='success'>Edit</Button>
                    </td>
                </tr>
            }

        </>
    )
}
