import  React, {useEffect, useState} from 'react';
import TextField from '@mui/material/TextField';
import { Container, Paper } from '@material-ui/core';
import { Button, Table } from '@mui/material';
import Image from "material-ui-image";


export default function ListLesson() {
    const[ListLesson, setListLesson]=useState([])

  useEffect(()=> {
      const urlOnline = `https://web-service-back-end-group-3-cnpm.onrender.com/get-all-list-course/get-list-lesson?id=1`;
      const url = `http://localhost:8081/get-list-lesson?id=1`;
    fetch(url)
        .then(res => res.json())
        .then((result) => {
            setListLesson(result);
            console.log(ListLesson);
        }
    )
  },[])
    const [content, setContent] = useState('')

  return (
    <Container>
        <form>
            <h1 style={{color:"blue"}}>List Lesson</h1>
            {ListLesson.map((w,index)=>{
            return  <Table border="1px" style={{whiteSpace: "normal", wordWrap: "break-word", marginTop:"50px"}}>
                <tr>
                    <td width="500px">
                        <TextField id="outlined-basic" inputProps={{min: 0, style: { textAlign: 'center'}}} label="Desctiption" variant="outlined" width="400px" fullWidth
                        value={w.name}
                        />
                    </td>
                    <td>
                    <TextField inputProps={{min: 0, style: { textAlign: 'center', fontWeight: 'bold'}}} disabled="disabled" fullWidth value={w.content} ></TextField>
                    </td>
                </tr>
            </Table>
                        
            },
            
            )}
        </form>
    </Container>
  
  );
}
