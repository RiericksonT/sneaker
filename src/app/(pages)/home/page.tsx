import Slider from "@/components/slider/slider";
import styles from "./home.module.scss";
import Image from "next/image";
import { SneaKersService } from "@/services/http/sneakers/sneakers";

const getSneakers = async () => {
  const sneakers = await SneaKersService.getSneakers();
  return sneakers;
};

export default async function HomeSession() {
  const sneakers = await getSneakers();

  return (
    <div className={styles.homeContainer}>
      <Slider slide={sneakers} />
    </div>
  );
}
