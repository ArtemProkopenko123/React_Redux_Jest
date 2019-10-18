import React from 'react';
import { FormGroup, FormControlLabel, Checkbox } from '@material-ui/core';
import './style.css'


const SelectDataStore = (props) => {
    const handleChange = (val, text)=>{
        console.log(val, text)
    }
    return (
        <div >
            <FormGroup row >
                <div className="SelectDataStoreWrap">

                <FormControlLabel
                    control={
                        <Checkbox  onChange={(e)=>handleChange(e.target.checked, 2)}  />
                    }
                    label="Context"
                />
                <FormControlLabel
                    control={
                        <Checkbox  onChange={(e)=>handleChange(e.target.checked, 3)} />
                    }
                    label="Redux Store"
                />
                </div>
            </FormGroup>
        </div>
    );
}

export default SelectDataStore;
