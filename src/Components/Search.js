import { ProductCard } from "./ProductCard";
import useSearch from "../api/useSearchApi";
import { ExclamationCircleFilled } from "@ant-design/icons";
import { useDispatch } from "react-redux";
import { addToCart } from "../redux/cartSlice";
export const Search = () => {
  const { Data, error, setSearchQuery, SearchQuery } = useSearch();
  const dispatch = useDispatch();
  if (error)
    return (
      <>
        <h3>No matching Item</h3>
        <ExclamationCircleFilled style={{ color: "red", fontSize: "24px" }} />
      </>
    );

  return (
    <div>
      <input
        type="text"
        placeholder="Search for a product..."
        value={SearchQuery}
        className="search"
        onChange={(e) => setSearchQuery(e.target.value)}
      />
      <ul>
        {Data.map((item, index) => {
          return (
            <li key={index}>
              <ProductCard
                key={`${index}-${item.id}`}
                product={item}
              ></ProductCard>
            </li>
          );
        })}
      </ul>
    </div>
  );
};
