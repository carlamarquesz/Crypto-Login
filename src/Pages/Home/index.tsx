import React from 'react';

import * as style from './HomeStyle';  //Importa tudo (*) de style

export default function Home() {
  return <style.Container>
    <img src="https://imageup.me/images/a9dad55c-a6bd-4ff2-ae1c-eb774c788de4.png" width="200px" height="200px"></img>
    <style.Title>Crypto</style.Title>
    <style.Subtitle>O seu marktplace de NFTs no Brasil</style.Subtitle>
    <style.Input defaultValue={"Login"}/>
    <style.InputPassword defaultValue={"Senha"}/>
    <style.ContainerForgot>
      <style.TextForgot>Esqueceu sua senha? </style.TextForgot>
    </style.ContainerForgot>
    <style.ButtonLogin>Entrar</style.ButtonLogin>
    </style.Container>;
}
