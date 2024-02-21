import Image from "next/image";
import styles from "./page.module.css";
import Form from "./ui/Form";
import { Button } from "@nextui-org/button";
import AddUserForm from "./ui/AddUserForm";
import ShowUsers from "./ui/ShowUsers";

export default function Home() {
  return (
    <main className={styles.main}>
      {/* <Form /> */}
      <AddUserForm />
      <ShowUsers/>
    </main>
  );
}
