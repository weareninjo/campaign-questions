import React, {useState}  from "react";
import { db } from "../firebase";

function Contact() {
  const [campaign, setCampaign] = useState("")
  const [campaignPick, setCampaignPick] = useState("")
  const [origin, setOrigin] = useState("")

  const handleSubmit = (e) => {
    e.preventDefault();

    db.collection("questions")
    .add({
      campaign: campaign,
      campaignPick: campaignPick,
      origin: origin
    })
    .then(() => {
      alert("Submitted campaign information")
    })
    .catch("We faced an error! Try again!")
  }

  return (
    <div className="App">
      <form onSubmit={handleSubmit}>
        <h3>Are you writing for a specific campaign</h3>
        <div>
          <select value={campaign} required="true" onChange={(e) => setCampaign(e.target.value)} >
            <option value="Yes">Yes</option>
            <option value="No">No</option>
        </select>
    </div>

        <h3>Pick the campaign</h3>
        <div>
          <select required="true" value={campaignPick} onChange={(e) => setCampaignPick(e.target.value)}>
            <option value="Kindness">Kindness</option>
            <option value="Strength">Strength</option>
        </select>
    </div>
        <h3>Story Origin</h3>
        <input placeholder="What's the story origin?" 
        required="true" 
        value={origin}
        onChange={(e) => setOrigin(e.target.value)}
        />
        <button type="submit" value="Submit">Submit</button>
      </form>
     
    </div>
  );
}

export default Contact;
