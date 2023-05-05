import React, {useState, useEffect} from 'react';
import DataTable from 'react-data-table-component';
import axios from 'axios';

const Home = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios.get('http://localhost/ayesha/')
      .then(response => {
        setData(response.data);
      })
      .catch(error => {
        console.log(error);
      });
  }, []);

  const columns = [
    { selector: "uname", name: "Name", sortable: true },
    { selector: "age", name: "DOB/Age", sortable: true },
    { selector: "sex", name: "Sex", sortable: true },
    { selector: "mobile", name: "Mobile", sortable: true },
    { selector: "idtype", name: "IDtype", sortable: true },
    { selector: "id", name: "ID", sortable: true },
    { selector: "guardian", name: "Guardian", sortable: true },
    { selector: "address", name: "Address", sortable: true },
    { selector: "nationality", name: "Nationality", sortable: true },
  ];
  

  return (
    <DataTable
      title="Data"
      columns={columns}
      data={data}
      pagination={true}
      selectableRows={true}
    />
  );
};

export default Home;
