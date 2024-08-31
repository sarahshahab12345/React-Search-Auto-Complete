import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Box, TextField, Typography } from '@mui/material';

function AutoComplete() {
  const [data, setData] = useState([]);
  const [selectedUsers, setSelectedUsers] = useState([]);
  const [searchParam, setSearchParam] = useState('');

  const fetchData = async () => {
    let response = await axios.get('https://dummyjson.com/users');
    setData(response.data.users); 
  };

  const handleOnChange = () => {
    let users = data.filter(
      (e) =>
        e.firstName.toLowerCase().indexOf(searchParam.toLowerCase()) !== -1
    );
    setSelectedUsers([...users]);
  };

  useEffect(() => {
    fetchData();
  }, []);

  useEffect(() => {
    handleOnChange();
  }, [searchParam]);

  return (
    <Box
      display="flex"
      flexDirection="column"
      alignItems="center"
      justifyContent="center"
      minHeight="100vh" 
    >
      <Typography variant="h4" textAlign="center">
        API Search Auto Complete
      </Typography>
      <TextField
        value={searchParam}
        onChange={(e) => setSearchParam(e.target.value)} 
        sx={{ marginTop: 2, width: '300px' }} 
        placeholder="Search Here..."
      />
      {selectedUsers.map((e, i) => (
        <Typography key={i}>{e.firstName}</Typography>
      ))}
    </Box>
  );
}

export default AutoComplete;
