import { useState } from "react";
import "./App.css";
import Bill from "./Bill";
import FriendService from "./FriendService";
import Service from "./Service";

function App() {
  const [bill, setBill] = useState("");
  console.log(bill);
  const [service, setService] = useState(0);
  const [friendService, setFriendService] = useState(0);

  console.log(bill);

  const handleBillChange = (value) => {
    setBill(value);
    console.log(value);
  };

  const handleServiceChange = (value) => {
    setService(value);
    console.log(service);
  };

  const handleFriendServiceChange = (value) => {
    setFriendService(value);
    console.log(friendService);
  };

  const finalBill =
    Number(bill) + ((bill * service) / 100 + (bill * friendService) / 100);

  /*
100 (10% = 10 + 20% = 20 >>>> 100 + 30 = 130)
*/

  const resetFields = (e) => {
    e.preventDefault();

    setBill("");
    setService(0);
    setFriendService(0);
  };

  return (
    <form onSubmit={resetFields}>
      <Bill onBillChange={handleBillChange} />
      <Service onSelectChange={handleServiceChange} />
      <FriendService onSelectChange={handleFriendServiceChange} />
      <p>You pay ${finalBill}</p>

      <button type="submit">Reset</button>
    </form>
  );
}

export default App;
