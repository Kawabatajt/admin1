import { Cardo, Syne, Urbanist } from "next/font/google";
import { Montserrat } from "next/font/google";
import { Inter } from "next/font/google";
import USERS from "./users.json";
const syne = Syne({ subsets: ["latin"], weight: "700" });
const montserrat = Montserrat({ subsets: ["latin"], weight: "400" });
const inter = Inter({ subsets: ["latin"], weight: "300" });
const UserCard = (props) => {
  return (
    <div className="card" key={props.user.id}>
      <div>
        <div>
          <div className="names">
            <h1 className={syne.className}>{props.user.firstName}</h1>
            <h2 className={syne.className}>{props.user.lastName}</h2>
          </div>
          <h3 className={montserrat.className}>Designer</h3>
        </div>
        <div className={inter.className}>
          <p>{props.user.phoneNumber}</p>
          <p>{props.user.email}</p>
          <p>{props.user.address}</p>
        </div>
      </div>
      <div className="card-right">
        <div className="logo"></div>
        <h1 className={montserrat.className}>{props.user.companyName}</h1>
        <h2 className={inter.className}>Tagline goes here</h2>
        <div className="qr-code"></div>
      </div>
    </div>
  );
};
export { UserCard };
