

import { useState } from "react"

const RewardPage = () => {
    const [plasticRemittedNum, setPlasticRemittedNum] = useState(0);
    const [prizeReward, setPrizeReward] = useState("");

    const handlePlasticRemit = (amount) => {
        setPlasticRemittedNum(amount);
        if (amount >= 500) {
            setPrizeReward("You've won a movie ticket");
        } else {
            setPrizeReward("null");
        }
    }
  return (
    <div>
        <h1>Plastic Reward Program</h1>
      <p>Remit your plastics to earn rewards.</p>

      <div>
        <label>Remitted Plastic Amount:</label>
        <input
          type="number"
          value={plasticRemittedNum}
          onChange={(event) => handlePlasticRemit(parseInt(event.target.value))}
        />
      </div>

      <div>
        <label>Reward: </label>
        <span>{prizeReward}</span>
      </div>
    </div>
  )
}

export default RewardPage