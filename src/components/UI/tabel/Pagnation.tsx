import { useEffect, useState } from "react";
import ReactPaginate from "react-paginate";
import { useSearchParams } from "react-router-dom";
import "./Table.scss";

interface Props {
  perPage: number;
  total: number;
}
const PaginatedItems: React.FC<Props> = ({ perPage, total }) => {
  // We start with an empty list of items.
  const [pageCount, setPageCount] = useState(0);
  // Here we use item offsets; we could also use page offsets
  // following the API or data you're working with.
  const [itemOffset, setItemOffset] = useState(0);
  const [searchParams, setSearchParams] = useSearchParams();

  useEffect(() => {
    // Fetch items from another resources.
    setPageCount(Math.ceil(total / perPage));
  }, [itemOffset, perPage]);

  // Invoke when user click to request another page.
  const handlePageClick = (event: any) => {
    const newOffset = (event.selected * perPage) % total;
    searchParams.set("page", `${Number(event.selected + 1)}`);
    setSearchParams(searchParams);
    setItemOffset(newOffset);
  };

  return (
    <div className="mt-5">
      <ReactPaginate
        nextLabel=">"
        onPageChange={handlePageClick}
        pageRangeDisplayed={2}
        marginPagesDisplayed={1}
        pageCount={pageCount}
        previousLabel="<"
        pageClassName="page-item"
        pageLinkClassName="page-link"
        previousClassName="page-item"
        previousLinkClassName="page-link"
        nextClassName="page-item"
        nextLinkClassName="page-link"
        breakLabel="..."
        breakClassName="page-item"
        breakLinkClassName="page-link"
        containerClassName="pagination"
        activeClassName="active"
        renderOnZeroPageCount={null}
        initialPage={
          Number(searchParams.get("page"))
            ? Number(searchParams.get("page")) - 1
            : 0
        }
      />
    </div>
  );
};

export default PaginatedItems;
