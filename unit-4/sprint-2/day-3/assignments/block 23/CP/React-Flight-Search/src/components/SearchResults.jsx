/** @format */

const SearchResults = (props) => {
  let data = props.newData;
  return (
    <table>
      <thead>
        <tr>
          <th>DEPARTURE</th>
          <th>dURATION</th>
          <th>ARRIVAL</th>
          <th>PRICE</th>
        </tr>
      </thead>
      {/* add columnsheadings */}
      <tbody data-testid="flight-results">
        {
          //  map through the results and display as rows
          data.map((ele)=><tr>
          <td>{ele.departure}</td>
          <td>{ele.duration}</td>
          <td>{ele.arrival}</td>
          <td>{ele.price}</td>
        </tr>)
        }
        
      </tbody>
      
    </table>
  );
};
export default SearchResults;
