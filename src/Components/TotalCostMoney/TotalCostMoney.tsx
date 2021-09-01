interface TotalCostMoneyProps {
  totalCost: number;
}
const TotalCostMoney: React.FC<TotalCostMoneyProps> = ({ totalCost }) => {
  return (
    <div className="money-bag">
      {totalCost}
      <img className="bells" src="./img/bells.png" alt="bells money bag" />
    </div>
  );
};

export default TotalCostMoney;
