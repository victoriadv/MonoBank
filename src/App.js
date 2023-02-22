import React from "react";
import styled from "styled-components";

import Page from "./component/Page";
import Header from "./component/Header";
import Balance from "./component/Balance";
import Menu from "./component/Menu";
import Payment from "./component/Payment";

const START_BALANCE = 0;
const LIMIT_BALANCE = 100000;
const GET_MONEY = 1000;

const SALARY_AMOUNT = 35000;
const COURSE_PRICE = 16000;

export default function App() {
  const [balance, setBalance] = React.useState(START_BALANCE); //const getMoney = () => setBalance(balance + GET_MONEY);
  const getMoney = () => {
    setBalance(balance - GET_MONEY);
    setPayment([
      {
        name: "Зняття коштів",
        amount: GET_MONEY,
        type: "-"
      },
      ...payment
    ]);
  };

  React.useEffect(() => {
    // Перевірка на ліміт балансу
    if (balance > LIMIT_BALANCE) {
      alert(`Ваш ліміт балансу: ${LIMIT_BALANCE}`);
      setBalance(LIMIT_BALANCE);
    }

    // Перевірка на мінусовий баланс
    if (balance < 0) {
      alert(`Ви використали усі свої гроші. Поповніть картку`);
      setBalance(0);
    }
  }, [balance]);

  const [payment, setPayment] = React.useState([]);

  const getSalary = () => {
    setBalance(balance + SALARY_AMOUNT);
    setPayment([
      {
        name: "Зарплата",
        amount: SALARY_AMOUNT,
        type: "+"
      },
      ...payment
    ]);
  };

  const buyCourse = () => {
    setBalance(balance - COURSE_PRICE);
    setPayment([
      {
        name: "Оплата за курс",
        amount: COURSE_PRICE,
        type: "-"
      },
      ...payment
    ]);
  };

  // ВЕРСТКА ІНТЕРФЕЙСУ ==========================================

  const LOGIN = "admin";
  const PASSWORD = "1234";

  const [isLogged, setLogged] = React.useState(false);

  const doLogin = () => {
    const login = prompt("Ваш логін");
    const password = prompt("Ваш пароль");

    if (login === LOGIN && password === PASSWORD) {
      alert("Вхід виконано успішно!");
      setLogged(true);
    } else {
      if (login != LOGIN || password != PASSWORD) {
        alert("Невірний логін або пароль");
      }
    }
  };

  return (
    <Page>
      {}

      <Header name="MONOBANK" onClick={doLogin} />

      {isLogged && <Balance balance={balance} />}

      {isLogged && (
        <Menu
          config={[
            {
              name: "Зняти баланс",
              onClick: getMoney,
              img: "/icon/get.svg"
            },
            {
              name: "Отримати зарплату",
              onClick: getSalary,
              img: "/icon/another.svg"
            },
            {
              name: "Купити курс",
              onClick: buyCourse,
              img: "/icon/send.svg"
            }
          ]}
        />
      )}

      {isLogged && <Payment payment={payment} />}
      {isLogged === false && <NotLogged>Вам потрібно увійти</NotLogged>}
    </Page>
  );
}

const NotLogged = styled.div`
  padding: 100px 30px;
  background: #000;
  color: #fff;
  text-align: center;
  margin-top: 100px;
  border-top-left-radius: 30px;
  border-top-right-radius: 30px;
`;
