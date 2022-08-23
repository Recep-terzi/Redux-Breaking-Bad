import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  errorSelector,
  fetchAllQuotes,
  quotesSelector,
  statusSelector,
} from "../../redux/quotesSlice";
import Error from "../../components/Error/Error";
import Loading from "../../components/Loading/Loading";
import Item from "../Item/Item";

const Quotes = () => {
  const data = useSelector(quotesSelector);
  const status = useSelector(statusSelector);
  const error = useSelector(errorSelector);
  const dispatch = useDispatch();
  useEffect(() => {
    if (status === "idle") {
      dispatch(fetchAllQuotes());
    }
  }, [dispatch, status]);
  if (error) {
    return <Error message={error} />;
  }
  console.log(data);
  return (
    <div style={{ padding: 10 }}>
      <h1> Quotes </h1>
      {status === "loading" && <Loading />}
      {status === "succeeded" &&
        data.map((item) => <Item key={item.quote_id} item={item} />)}
      {status === "succeeded" && (
        <div
          className="quotes_info"
          style={{ padding: 30, textAlign: "center", fontWeight: "bold" }}
        >
          {data.length} quotes
        </div>
      )}
    </div>
  );
};

export default Quotes;
