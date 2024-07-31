import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    chemicals: localStorage.getItem("list") ? JSON.parse(localStorage.getItem("list")) : [
        { id: 1, name: "Hyrdrochloric Acid", formula: "HCl" },
        { id: 2, name: "Sodium Chloride", formula: "NaCl" },
        { id: 3, name: "Sulfuric Acid", formula: "H2SO4" },
        { id: 4, name: "Ammonia", formula: "NH3" },
        { id: 5, name: "Ethanol", formula: "C2H5OH" },
    ]
}

const chemicalSlice = createSlice({
    name: "chemicals",
    initialState,
    reducers: {
        addChemical(state, action) {
            const idMax = state.chemicals.reduce((a, b) => (a, b.id), 0)
            state.chemicals = [...state.chemicals, { id: state.chemicals.length < 0 ? 1 : idMax + 1, name: action.payload.name, formula: action.payload.formula }]
            localStorage.setItem("list", JSON.stringify(state.chemicals));
        },
        deleteChemical(state, action) {
            state.chemicals = state.chemicals.filter(item => item.id !== action.payload.id)
            localStorage.setItem("list", JSON.stringify(state.chemicals));
        },
        findById(state, action) {
            const data = state.chemicals.map(item => item.id === action.payload.id);
            return data
        },

    }
})

export const { addChemical, deleteChemical, findById } = chemicalSlice.actions;
export default chemicalSlice.reducer