// import Image from "next/image";
// import backgroundImage from "/Users/user/admin1/public/Shape.jpg";
// import { getImageProps } from "next/image";
import "./style.css";
import { UserCard } from "./UserCard.js";
import USERS from "./users.json";
export default function Home() {
  return (
    <div className="grid grid-cols-3 gap-4">
      {USERS.map((user) => (
        <UserCard user={user} />
      ))}
    </div>
  );
}
