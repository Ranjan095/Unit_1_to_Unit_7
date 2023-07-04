/** @format */

function createArrayOfSize(n) {
  return new Array(n).fill(0);
}
// totalPages
// currentPage
// handlePageChange
function Pagination({ totalPages, currentPage, handlePageChange }) {
  console.log(createArrayOfSize(totalPages));

  let pages = createArrayOfSize(totalPages).map((_, a) => {
    return (
      <button
        key={Date.Now}
        data-testid="page-btn"
        onClick={() => handlePageChange(a + 1)}
        disabled={currentPage == a + 1}
        style={{
          backgroundColor: currentPage == a + 1 ? "teal" : "white",
          color: currentPage == a + 1 ? "white" : "black",
          border: "1px solid black",
        }}
      >
        {a + 1}
      </button>
    );
  });
  return <div>{pages}</div>;
}

export default Pagination;
