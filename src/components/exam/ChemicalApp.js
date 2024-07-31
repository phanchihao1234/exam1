import React, { useState } from 'react'
import { Container, Table } from 'reactstrap'
import { useDispatch, useSelector } from 'react-redux';
import ChemicalItem from './ChemicalItem';
import AddChemical from './AddChemical';
import { addChemical, deleteChemical } from '../redux/chemicalSlice';

export default function ChemicalApp() {

    const dispatch = useDispatch()
    const chemical = useSelector(state => state.chemical.chemical)
    console.log(chemical)

    const handle_add = (txtName, txtCT) => {
        dispatch(addChemical({ name: txtName, formula: txtCT }))
    }
    const handle_delte = (id) => {
        dispatch(deleteChemical({ id }))
    }


    return (
        <Container>
            <h1>Thông tin hợp chất hóa học </h1>
            <AddChemical handle_add={handle_add} />
            <Table hover>
                <thead>
                    <tr>
                        <th>
                            ID
                        </th>
                        <th>
                            Name
                        </th>
                        <th>
                            Formula
                        </th>
                        <th colSpan={2}>
                            action
                        </th>
                    </tr>
                </thead>
                <tbody>
                    {
                        chemical.map((item, index) =>
                            (<ChemicalItem item={item} index={index} handle_delte={handle_delte} />)
                        )
                    }

                </tbody>
            </Table>
        </Container>
    )
}