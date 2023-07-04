/** @format */

function Pagination({ current, onChange, total }) {
  let arr = new Array(total).fill(0);
  console.log(current);

  return (
    <div data-testid="page-container">
      {arr.map((_, i) => (
        <button 
        style={{borderColor:current==i+1 && "red"}}
        key={i + 1} onClick={() => onChange(i + 1)}>
          {i + 1}
        </button>
      ))}
    </div>
  );
}

export default Pagination;
