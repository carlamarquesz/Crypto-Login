import React from 'react';
import { Link } from 'react-router-dom';
import * as style from './HomeStyle';

export default function Home() {
  return (
    <style.Container>
      <img
        src="https://imageup.me/images/a9dad55c-a6bd-4ff2-ae1c-eb774c788de4.png"
        width="200px"
        height="200px"
      />
      <style.Title>Crypto</style.Title>
      <style.Subtitle>O seu marktplace de NFTs no Brasil</style.Subtitle>

      <style.Input placeholder={'login'} />
      <style.InputPassword placeholder={'senha'} />

      <style.ContainerForgot>
        <style.TextForgot>Esqueceu sua senha?</style.TextForgot>
      </style.ContainerForgot>
      <Link to="/feed">
        <style.ButtonLogin>Entrar</style.ButtonLogin>
      </Link>
      <style.Divisor></style.Divisor>
      <style.ButtonMetaMask>
        <style.ButtonInsideMetaMask>
          <h1>Entrar como MetaMask</h1>
          <img
            src="https://i.im.ge/2022/08/07/F8Htlq.MetaMask-Fox-1.png"
            width="20"
            height="20"
          ></img>
        </style.ButtonInsideMetaMask>
      </style.ButtonMetaMask>
    </style.Container>
  );
}
