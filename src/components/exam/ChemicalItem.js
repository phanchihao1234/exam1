import React from 'react'
import { Button } from 'reactstrap'

export default function ChemicalItem(props) {

    const { item, index, handle_delte } = props
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
                        <Button color='success'>Edit</Button>
                    </td>
                </tr>
            }

        </>
    )
}
