import React from "react";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";

export default function Table() {
  const { isPending, error, data } = useQuery({
    queryKey: ["repoData"],
    queryFn: fetchBitcoinPrice,
  });

  async function fetchBitcoinPrice() {
    try {
      const response = await axios.get(
        "https://jsonplaceholder.typicode.com/todos/1"
      );
      console.log("data", response.data);
      return response.data;
    } catch (error) {
      throw new Error("Error fetching Bitcoin price data");
    }
  }

  if (isPending) {
    return <span>Loading...</span>;
  }

  if (error) {
    return <span>Error: {error.message}</span>;
  }

  return (
    <div>
      <p>Title:{data.title} </p>
      <p>ID: {data.userId}</p>
    </div>
  );
}
