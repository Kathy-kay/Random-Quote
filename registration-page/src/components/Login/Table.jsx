const Table = ({ data }) => {

    return ( 
        <div className="table">
            <h3>User Information</h3>

            <table>
                <tr>
                <th>First Name</th>
                <th>Last Name</th>
                <th>Phone Number</th>
                <th>Email Address</th>
                </tr>
                <tr>
                    <td>{data?.firstName}</td>
                    <td>{data?.lastName}</td>
                    <td>{data?.phoneNumber}</td>
                    <td>{data?.email}</td>
                </tr>
            </table>
            
        </div>
    );
}
 
export default Table;