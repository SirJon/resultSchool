//start 11:24

//Создаю интерфейс для параметров функции
const PERCENT: number = 100;
const CREDIT_RATIO: number = 1.2;
const INSTALLMENT_FACTOR: number = 1;
interface totalPriceProps {
  price: number
  discount: number
  isInstallment: boolean
  months: number
}

const totalPrice = ({ price, discount, isInstallment, months }: totalPriceProps): number => {   //возвращаемое значение - number
  //возвращаем стоимость с учетом скидки и рассрочки
  return (price * ((PERCENT - discount) / PERCENT)) / months * (isInstallment ? INSTALLMENT_FACTOR : CREDIT_RATIO)
};

console.log(totalPrice({ price: 100000, discount: 25, isInstallment: true, months: 12 }))
console.log(totalPrice({ price: 100000, discount: 25, isInstallment: false, months: 12 }))

//end 11:34