import React, { useState } from 'react'
import { Button, Input, Label, } from 'reactstrap'

export default function AddChemical(props) {

    const [txtName, setTxtName] = useState("")
    const [txtCT, setTxtCT] = useState("")
    console.log(txtName)
    console.log(txtCT)
    const { handle_add } = props

    return (
        <>
            <h1>Form add</h1>
            <Input value={txtName} placeholder='Ten chat hoa hoc' onChange={(e) => setTxtName(e.target.value)} />
            <Input value={txtCT} placeholder='CT Hoa Hoc toi yeu' onChange={(e) => setTxtCT(e.target.value)} />
            <Button color='primary' onClick={() => (
                handle_add(txtName, txtCT),
                setTxtCT(""),
                setTxtName("")
            )
            }>add</Button >


            {/* <Label >
                Name:
            </Label>
            <Input
                placeholder="Nhập tên chất hóa học"
                type="text"
                value={txtName}
                onChange={(e) => setTxtName(e.target.value)}
            />
            <Label >
                CT hóa học:
            </Label>
            <Input
                placeholder="Nhập CT chất hóa học"
                type="text"
                value={txtCT}
                onChange={(e) => setTxtCT(e.target.value)}
            />
            <Button color="primary" onClick={handle_add(txtName, txtCT)}>
                Do Something
            </Button> */}

        </>
    )
}
