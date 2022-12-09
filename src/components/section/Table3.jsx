import Table from 'react-bootstrap/Table';

function SmallExample(props) {
    console.log(props)
  return (
    <Table striped bordered hover size="sm">
      <tbody>
        <tr>
          <td width={"10%"}>id: {props.id}</td>
          <td width={"30%"}>name: {props.name}</td>
          <td width={"30%"}>lastName: {props.lastName}</td>
          <td width={"30%"}>age: {props.age}</td>
        </tr>
      </tbody>
    </Table>
  );
}

export default SmallExample;