import React, { useEffect } from "react";
import "./App.scss";
import { get } from "./api";
import { IMeteor } from "../../server/types";

function App() {
  const [meteorsData, setMeteorsData] = React.useState<IMeteor[]>([]);
  console.log("meteorsData", meteorsData)

  const fetchData = async () => {
    const data: IMeteor[] = await get("");
    setMeteorsData(data ?? []);
  };

  useEffect(() => {
    // fetchData();
  }, []);

  return (
    <div className="App">
     
    </div>
  );
}

export default App;
