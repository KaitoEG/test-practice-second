import { useEffect, useState } from "react";
import "./App.css";
import {getProfiles} from "./lib/getProfiles";
import Profile from "./components/Profile";

function App() {
  const [profiles, setprofiles] = useState([]);
  useEffect(() => {
    async function fetchdata() {
      try {
        const response = await getProfiles("https://670023444da5bd2375534f92.mockapi.io/api/v/test");
        setprofiles(response);
        console.log(profiles);
      } catch (error) {
        console.log("Error al pedir");
      }
    }
    fetchdata();
  }, []);
  return (
  <>
    <section>
      {profiles.map((profile) => (
        <Profile key={profile.id} profile={profile}/>
      ))}
    </section>
  </>
  );
}

export default App;