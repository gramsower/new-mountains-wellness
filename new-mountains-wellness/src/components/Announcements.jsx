import React from "react";
import { Image, Box, Center } from '@chakra-ui/react';



export default function Announcements() {
  return (
    <>
      <Box w='100%' p={4} textStyle='h1' >
      <Box h='50px'></Box>
        <Center h='100px'>
          Announcements
        </Center>      
      </Box>
      <Box textStyle='p'>
        <Center w='100%' p={4}>
          <Image src='https://lh3.googleusercontent.com/rWWZuX8IYJNo5UlEaxQ91iD1s7YjN8ccUwQveOEAhEKwD1heNe7IRlcSPX3_0WExZjVAf6P-YH2qWou-gv4i6MNuTLVcYg22SX4NbzGqc9De7N4NJDVOCm-UInl81BOopz0PWYR7dzzSmlibYIgvtXgoSMEN3RK0vV5Ra-Be76fw82FVTUkYYwO-fRdqhsZIhU3tufoZH9yZPzjaH_rai3CeK0pv-YIEDOinfCgRrgZVlrWEGJsiBP0PYf3as9EZKTuH2SZQOjECGmP2LQd5rcI7j8ozNGc-X3splUn1k4cj6C7iXlgDQK9UvzoeTi8UFJa9t8UDh56xEt9gAWw7-SuXYzTSfQuUY2ZNy7LkiMkT7Nluedqctmuv9FzvZnBIQJ9L5ohEWNsG1UzgziDgiqZ-j5_b1SZzYDbgqGcraEf5nYXQB8MprwhGUtSnNJTvyZucpVGoWQKw9iRPHX85FbpQ9PPX21TRevDI7e2p09J2lO4bczRpWNiS4lV0xLX5iJ3O3RIto-J4My9Tm2ilkSk8LY71w6TSiNrZp_T0lJMywYU4S__3w19XjI6O-zZJKJ8fCMmz17Ggpb31h0SMvz2fbD9zmeL1EHR0V0L8A616s2yIb-hp5c6RiRL7UZ2z-lWUg1eeDxXoB2RylxGROPzhnI_ce1afzSv3_ribIa_NyNyvY88kduMHiuNzWqBhRED_8IenrM8BOSqcfWzICBi5lVtOuLWWkpUlXjFDloHkOS0k5fSJnZzSA7TUlRlHEIT0H1iCRjYI7YzaHYbaY3qmD5EMV-DR66ocmMwbtqWHRTCSggtVQBx8HKMw30dBER0k6sRxMvX1eb08USACZlXI_5WE37s4J5of8ckMpcqVi6m_8ZfAiP_Uf-aSbhFdFB3UnbP0d8tPhOd95VwFaXVKIs3ml2HlfYNrrSx4roZzhQ=w500-h500-s-no?authuser=0' alt='announcements' fallbackSrc='https:/via.placeholder.com/150' />
        </Center>
    </Box>
    </>
  );
};