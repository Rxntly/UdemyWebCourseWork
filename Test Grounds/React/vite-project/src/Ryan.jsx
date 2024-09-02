// export default function Yum(props) {
//    console.log(props);
//    return <h1>Yummy Chicken {props.person}</h1>
// }

export default function DoubleDice() {
   const num1 = Math.floor(Math.random() * 3) + 1;
   const num2 = Math.floor(Math.random() * 3) + 1;
   const styles = { color: num1 === num2 ? "green" : "red" };

   return (
      <div className="DoubleDice" style={styles}>
         <h2>Double Dice Game</h2>
         <p>Dice 1: {num1}</p>
         <p>Dice 2: {num2}</p>
         {num1 === num2 ? (
            <h4>You win!</h4>
         ) : (
            <h4>You lost!</h4>
         )}
      </div>
   );
}