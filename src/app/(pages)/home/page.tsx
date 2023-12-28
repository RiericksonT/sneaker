"use client";

import Slider from "@/components/slider/slider";
import styles from "./home.module.scss";
import { SneaKersService } from "@/services/http/sneakers/sneakers";
import { useQuery } from "react-query";

export default function HomeSession() {
  const { data, isLoading, isError } = useQuery({
    queryKey: "sneakers",
    queryFn: async () => SneaKersService.getSneakers(),
  });

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (isError) {
    return <div>Error</div>;
  }

  if (data.length === 0) {
    return <div>No data</div>;
  } else {
    console.log(data);
    return (
      <div className={styles.homeContainer}>
        <Slider slide={data} />
      </div>
    );
  }
}
