// import React from 'react';
// import './ContactUs.css';

// const ContactUs=()=> {
//   return (
//     <div>
//     <h1>ContactUs</h1>
//     <input className="first" type="text" placeholder="First name" />
//    <input className="last" type="text" placeholder="Last name" />
//    <input className="phone" type="text" placeholder="Phone" />
//    <input className="email" type="text" placeholder="Email" />
//    <input className="massege" type="text" placeholder="Massege" />
//    <input className="send" type="button" value="Send" />
//     </div>

//   )
// }
import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';

export default function FormPropsTextFields() {
	return (
		<Box
			component="form"
			sx={{
				'& .MuiTextField-root': { m: 1, width: '25ch' },
				maxWidth: 600,
				margin: 'auto',
        paddingTop: '100px',
			}}
			noValidate
			autoComplete="off"
		>
			<div>
				<TextField
					First
					name
					id="standard-required"
					label="First name"
					defaultValue="Michal"
					variant="standard"
				/>
				<TextField
					Last
					name
					id="standard-disabled"
					label="Last name"
					defaultValue="Cohen"
					variant="standard"
				/>
				{/* <TextField
          id="standard-password-input"
          label="Password"
          type="password"
          autoComplete="current-password"
          variant="standard"
        /> */}
				<TextField
					id="standard-read-only-input"
					label="Read Only"
					defaultValue="Hello World"
					InputProps={{
						readOnly: true,
					}}
					variant="standard"
				/>
				<TextField
					id="standard-number"
					label="Number"
					type="number"
					InputLabelProps={{
						shrink: true,
					}}
					variant="standard"
				/>
				<TextField
					id="standard-search"
					label="Search field"
					type="search"
					variant="standard"
				/>
				<TextField
					id="standard-helperText"
					label="Helper text"
					defaultValue="Default Value"
					helperText="Some important text"
					variant="standard"
				/>
			</div>
		</Box>
	);
}

// export default ContactUs
