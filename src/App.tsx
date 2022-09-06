import React, { useEffect, useState } from "react";
import Body from "./components/body";
import Display from "./components/display";
import Keypad from "./components/keypad";
import Button from "./components/button";
import "./App.css";
import Logo from "./components/logo";
import Mascote from "./components/mascote";
import Header from "./components/header";
import Solar from "./components/solar";

const btnValues = [
  "C",
  "+-",
  "%",
  "/",
  7,
  8,
  9,
  "X",
  4,
  5,
  6,
  "-",
  1,
  2,
  3,
  "+",
  0,
  ".",
  "=",
];

function App() {
  const [calculadora, setCalculadora] = useState({
    sign: "",
    num: 0,
    res: 0,
  });

  const math = (a: number, b: number, sign: string) =>
    sign === "+" ? a + b : sign === "-" ? a - b : sign === "X" ? a * b : a / b;

  const Calcular = () => {
    if (calculadora.sign && calculadora.sign) {
      setCalculadora({
        ...calculadora,
        res:
          calculadora.num === 0 && calculadora.sign === "/"
            ? 0
            : math(
                Number(calculadora.res),
                Number(calculadora.num),
                calculadora.sign
              ),
        sign: "",
        num: 0,
      });
    }
  };

  const DisplayNumero = (e: any) => {
    const Value = e.target.innerHTML;
    setCalculadora({
      ...calculadora,
      sign: calculadora.sign,
      num:
        calculadora.num === 0 && Value === "0"
          ? "0"
          : calculadora.num % 1 === 0
          ? Number(calculadora.num + Value)
          : calculadora.num + Value,
      res: !calculadora.sign ? 0 : calculadora.res,
    });
  };

  const ResetarCalculadora = () => {
    setCalculadora({
      ...calculadora,
      sign: "",
      num: 0,
      res: 0,
    });
  };

  const Operacao = (e: any) => {
    const Op = e.target.innerHTML;

    setCalculadora({
      ...calculadora,
      sign: Op,
      num: 0,
      res:
        !calculadora.res && calculadora.num ? calculadora.num : calculadora.res,
    });
  };

  const InverterNumero = () => {
    setCalculadora({
      ...calculadora,
      num: calculadora.num ? calculadora.num * -1 : 0,
      res: calculadora.res ? calculadora.res * -1 : 0,
      sign: "",
    });
  };

  const PorcentagemNumero = () => {
    let num = calculadora.num ? parseFloat(calculadora.num.toString()) : 0;
    let res = calculadora.res ? parseFloat(calculadora.res.toString()) : 0;

    setCalculadora({
      ...calculadora,
      num: (num /= Math.pow(100, 1)),
      res: (res /= Math.pow(100, 1)),
      sign: "",
    });
  };

  useEffect(() => {
    if (calculadora.num.toString().length == 9) {
      alert("aqui");
    }
  }, [calculadora]);

  return (
    <Body>
      <Header>
        <Logo>
        </Logo>
        <Mascote>
        </Mascote>
        <span className="versao">12 Digits</span>
        <Solar>
        </Solar>
      </Header>
      <Display>
        {calculadora.num ? calculadora.num : calculadora.res}
      </Display>
      <Keypad>
      {
        btnValues.map((btn, i) => {
          return (
            <Button
                key={i}
                className={
                  btn === "=" ? "equals" : btn === 0 || btn === "." || btn === 1 || btn === 2 || btn === 3 || btn === 4 || btn === 5 || btn === 6 || btn === 7 || btn === 8 || btn === 9 ? "num" : "btn"}
                value={btn}
                onClick={
                  btn === 'C'
                  ? ResetarCalculadora 
                  : btn === "/" || btn === "X" || btn === "-" || btn === "+" 
                  ? Operacao 
                  : btn === '=' 
                  ? Calcular 
                  : btn === "+-"
                  ? InverterNumero
                  : btn === "%"
                  ? PorcentagemNumero
                  : DisplayNumero
                }
              />
            );
          })
        }

     </Keypad>
    
    </Body>
  );
}

export default App;
