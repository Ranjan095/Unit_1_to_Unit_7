const SearchResults = (props) => {
    let {arrival,departure,duration,price}=props;
      return (
        // <h1>{arrival}</h1>
          <table>
            <tr>
            <th >DEPARTURE</th>
            <th >DURATION</th>
            <th >ARRIVAL</th>
            <th >PRICE</th>
          </tr >
            {/* add columnsheadings */}
            <tbody data-testid="flight-results">{
          //  map through the results and display as rows
          <tr>
            <td >{departure}</td>
            <td >{duration}</td>
            <td >{arrival}</td>
            <td >{price}</td>
          </tr>
         
            }</tbody>
          </table>
      );
    
  };
  export default SearchResults;
  