import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import { useSelector, useDispatch } from "react-redux";
import { setProducts } from "./store/reducers/productSlice";
import { setCategoriesList, setCategory } from "./store/reducers/categorySlice";
import { useEffect, useState } from "react";
import axios from "./lib/axios";

function App() {
  const products = useSelector((state) => state.products.items);
  const categories = useSelector((state) => state.category);
  const [catId, setCatId] = useState(-1);
  const dispatch = useDispatch();

  useEffect(() => {
    axios.get("products/categories").then((res) => {
      dispatch(setCategoriesList(res.data));
    });
  }, []);

  useEffect(() => {
    getProductsList();
  }, [categories.active]);

  const getProductsList = () => {
    let endpoint = "products";
    if (categories.active != -1)
      endpoint = `products/category/${categories.active}`;

    axios.get(endpoint).then((res) => {
      dispatch(setProducts(res.data));
    });
  };

  const handleReset = () => {
    setCatId(-1);
    dispatch(setCategory(-1));
  };

  return (
    <div>
      <div className="container p-4">
        <div className="d-flex align-items-center gap-2">
          <select
            className="form-control"
            value={catId}
            onChange={(e) => setCatId(e.target.value)}
          >
            <option value={-1}>All category</option>
            {categories.items.map((item) => (
              <option key={item} value={item}>
                {item}
              </option>
            ))}
          </select>

          <button
            className="btn btn-primary"
            onClick={() => dispatch(setCategory(catId))}
          >
            Search
          </button>
          <button className="btn btn-primary" onClick={() => handleReset()}>
            Reset
          </button>
        </div>

        <div className="py-4">
          <table className="table table-striped">
            <thead>
              <tr>
                <th>#</th>
                <th>Title</th>
                <th>Price</th>
                <th>Description</th>
                <th>Category</th>
              </tr>
            </thead>
            <tbody>
              {products.map((item) => (
                <tr key={item.id}>
                  <td>#{item.id}</td>
                  <td>{item.title}</td>
                  <td>{item.price}</td>
                  <td>{item.description}</td>
                  <td>{item.category}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default App;
