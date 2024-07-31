import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    chemical: [
        { id: 1, name: "Hyrdrochloric Acid", formula: "HCl" },
        { id: 2, name: "Sodium Chloride", formula: "NaCl" },
        { id: 3, name: "Sulfuric Acid", formula: "H2SO4" },
        { id: 4, name: "Ammonia", formula: "NH3" },
        { id: 5, name: "Ethanol", formula: "C2H5OH" },
    ]
}

const chemicalSlice = createSlice({
    name: "chemical",
    initialState,
    reducers: {
        addChemical(state, action) {
            const idMax = state.chemical.reduce((a, b) => (a, b.id), 0)
            state.chemical = [...state.chemical, { id: state.chemical.length > 0 ? 1 : idMax + 1, name: action.payload.name, formula: action.payload.ct }]
        },
        deleteChemical(state, action) {
            state.chemical = state.chemical.filter(item => item.id !== action.payload.id)
        }

    }
})

export const { addChemical, deleteChemical } = chemicalSlice.actions;
export default chemicalSlice.reducer