

"use client";

import { Box, Button, Stack, TextField } from '@mui/material';
import React from 'react';
import { formSubmission} from './action';
import { useRouter } from 'next/navigation';

export default function Page() {
  const router =  useRouter()
  return (
    <Box>

     <Stack direction={'row'} sx={{justifyContent:'space-between',padding:2}}>
       <h1>Server Action Form</h1>
      <Button sx={{maxHeight:'50px'}} size='small' variant='contained' onClick={()=>(router.push('/'))}>  Go to Home</Button>
     </Stack>
      <form action={formSubmission}>
        <TextField
          name="name"
          label="Name"
          variant="outlined"
          fullWidth
          required
        />
        <Button type="submit" variant="contained" color="primary" sx={{ mt: 2 }}>
          Submit
        </Button>
      </form>
    </Box>
  );
}



// "use client";

// import { Box, Button, TextField } from '@mui/material';
// import React, { useState } from 'react';
// import { formSubmition } from './action';

// const Page = () => {
//   const [data, setData] = useState('');


//   const handleSubmit = async (e: React.FormEvent) => {
//     e.preventDefault();
//     const res = await formSubmition({ name: data });
//   };

  
//   return (
//     <Box>
//       <h1>Server Action Page</h1>


//       <form onSubmit={handleSubmit}>

//         <TextField
//           label="Name"
//           variant="outlined"
//           fullWidth
//           required
//           value={data}
//           onChange={(e) => setData(e.target.value)}
//         />


//         <Button type="submit" variant="contained" color="primary">
//           Submit
//         </Button>


//       </form>

//     </Box>
//   );
// };

// export default Page;


