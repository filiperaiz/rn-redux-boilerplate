# frontend-boilerplate-react-native

Este é um boilerplate para ser usado como base para projetos react-native

## Overview

PoC usando expo/react native para o aplicativo nativo usando webview

## Preparando o ambiente de desenvolvimento
Para facilitar a configuração do ambiente de desenvolvimento com react native e expo, é só seguir o tutorial abaixo, onde vai mostrar como configurar para um dos sistemas operacionais e configurar emuladores.
- [Link para o tutorial ](https://react-native.rocketseat.dev/)

#
#### Tutoriais de como gerar o build e enviar para stores
- [ios](https://youtu.be/LE4Mgkrf7Sk)
- [android](https://youtu.be/oBWBDaqNuws)

#
#### Para poder gerar o build da app, deve instalar o EAS (Expo Application Services)
```sh
npm install -g eas-cli 
```

#### Para gerar o arquivo de configuração EAS, caso não tenha
```sh
eas build:configure 
```

#### Para logar no ExpoDev e ter acesso ao dashboard e poder gerar build
```sh
eas login
```
#### Para gerar o build da aplicação
```sh
eas build
```

#### Sempre que for gerar um novo build atualizar as versões no arquivo app.json
```sh
"version": "1.0.0",
"ios": {
    "buildNumber": "1"
},
"android": {
    "versionCode": 1
}
```


#
## Deeplink - (Abrir o app a partir de um link externo)

#### Para testar em modo EXPO/dev
```sh
npx uri-scheme open {url_expo}/--/{page}/{param} --{plataforma}

ex: npx uri-scheme open exp://127.0.0.1:19000/--/webapp/https://app-native.com.br/rota --ios
```

#### Para testar  como deve funcionar com o app instalado  
```sh
npx uri-scheme open {schema}/--/{page}/{param} --{plataforma}

ex: npx uri-scheme open app-native://webapp/https://app-native.com.br/rota --ios
```

#
## 📝 License

Copyright ©
