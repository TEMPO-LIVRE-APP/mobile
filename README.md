# 🌍 Tempo Livre - Aplicativo Mobile

Uma solução tecnológica inovadora desenvolvida para enfrentar os eventos climáticos extremos que afetam milhões de brasileiros. O projeto combina inteligência artificial, sensores IoT, mapeamento colaborativo.

## 📋 Índice

- [Sobre o Projeto](#-sobre-o-projeto)
- [Vídeo de Demonstração](#-vídeo-de-demonstração)
- [Funcionalidades](#-funcionalidades)
- [Tecnologias Utilizadas](#-tecnologias-utilizadas)
- [Pré-requisitos](#-pré-requisitos)
- [Configuração do Ambiente](#️-configuração-do-ambiente)
- [Instalação](#-instalação)
- [Como Usar](#-como-usar)
- [Estrutura do Projeto](#-estrutura-do-projeto)
- [Contribuição](#-contribuição)
- [Licença](#-licença)
- [Desenvolvedores](#-desenvolvedores)
- [Links Úteis](#-links-úteis)

## 🎯 Sobre o Projeto

O **Tempo Livre** é uma aplicação mobile desenvolvida em React Native que visa fornecer uma solução completa para o enfrentamento de eventos climáticos extremos. O aplicativo oferece:

- Monitoramento em tempo real de condições climáticas
- Sistema de alertas para eventos extremos
- Mapeamento colaborativo de áreas de risco
- Interface intuitiva e acessível

## 📺 Vídeo de Demonstração

#### Link do [YouTube](https://youtu.be/ZGBm0UAyYyo)

## ⚡ Funcionalidades

- ✅ **Monitoramento Climático**: Acompanhamento em tempo real das condições meteorológicas
- ✅ **Alertas Inteligentes**: Notificações personalizadas para eventos climáticos extremos
- ✅ **Mapeamento Colaborativo**: Interface para visualização e contribuição de dados geográficos
- ✅ **Localização GPS**: Integração com serviços de geolocalização
- ✅ **Interface Responsiva**: Design adaptável para diferentes tamanhos de tela
- ✅ **Navegação Intuitiva**: Sistema de navegação fluido entre telas

## 🛠 Tecnologias Utilizadas

### Framework & Linguagens
- **[React Native](https://reactnative.dev/)** - Framework principal para desenvolvimento mobile
- **[TypeScript](https://www.typescriptlang.org/)** - Linguagem de programação
- **[Expo](https://expo.dev/)** - Plataforma de desenvolvimento e deployment

### Navegação & Interface
- **[React Navigation](https://reactnavigation.org/)** - Sistema de navegação
- **[Expo Linear Gradient](https://docs.expo.dev/versions/latest/sdk/linear-gradient/)** - Gradientes e efeitos visuais
- **[React Native Safe Area Context](https://github.com/th3rdwave/react-native-safe-area-context)** - Gerenciamento de áreas seguras

### Mapas & Localização
- **[React Native Maps](https://github.com/react-native-maps/react-native-maps)** - Integração com mapas
- **[Expo Location](https://docs.expo.dev/versions/latest/sdk/location/)** - Serviços de geolocalização

### Comunicação
- **[Axios](https://axios-http.com/)** - Cliente HTTP para requisições API

## 🔧 Pré-requisitos

Antes de começar, você vai precisar ter instalado em sua máquina:

- **[Node.js](https://nodejs.org/)** (versão 18 ou superior)
- **[npm](https://www.npmjs.com/)** ou **[Yarn](https://yarnpkg.com/)**
- **[Expo CLI](https://docs.expo.dev/get-started/installation/)**
- **[Git](https://git-scm.com/)**

### Para desenvolvimento mobile:
- **[Android Studio](https://developer.android.com/studio)** (para Android)
- **[Xcode](https://developer.apple.com/xcode/)** (para iOS - apenas macOS)

## ⚙️ Configuração do Ambiente

### 1. Instale o Expo CLI
```bash
npm install -g @expo/cli
```

### 2. Instale o Expo Go
Baixe o aplicativo **Expo Go** em seu dispositivo móvel:
- [Android - Google Play Store](https://play.google.com/store/apps/details?id=host.exp.exponent)
- [iOS - App Store](https://apps.apple.com/app/expo-go/id982107779)

### 3. Clone o Repositório
```bash
git clone https://github.com/TEMPO-LIVRE-APP/mobile.git
cd mobile
```

## 🚀 Instalação

### 1. Instale as Dependências
```bash
npm install
# ou
yarn install
```

### 2. Inicie o Projeto
```bash
# Inicia o servidor de desenvolvimento
npm start
# ou
expo start

# Para executar em plataforma específica
npm run android  # Android
npm run ios      # iOS
npm run web      # Web
```

### 3. Execute no Dispositivo
- Escaneie o QR Code com o aplicativo **Expo Go**
- Ou use um emulador Android/iOS

## 📱 Como Usar

### 1. Primeira Execução
Após instalar e executar o aplicativo:
- Permita acesso à localização quando solicitado
- Configure suas preferências de notificação
- Explore as funcionalidades principais

### 2. Navegação Principal
O aplicativo oferece navegação intuitiva entre as seguintes seções:
- **Home**: Dashboard principal com informações climáticas
- **Mapa**: Visualização geográfica de dados e alertas
- **Alertas**: Central de notificações e avisos
- **Perfil**: Configurações pessoais e preferências

### 3. Funcionalidades Principais
- **Monitoramento**: Acompanhe condições climáticas em tempo real
- **Alertas**: Receba notificações sobre eventos extremos
- **Mapeamento**: Contribua com dados colaborativos

## 📁 Estrutura do Projeto

```
mobile/
├── src/
│   ├── components/         # Componentes reutilizáveis
│   ├── screens/            # Telas da aplicação
│   ├── navigation/         # Configuração de navegação
│   ├── api/                # Serviços e APIs
│   ├── utils/              # Utilitários e helpers
│   └── types/              # Definições de tipos TypeScript
├── assets/
│   ├── images/            
│   └── icons/              
├── .gitignore
├── app.json                # Configuração do Expo
├── babel.config.js         # Configuração do Babel
├── package.json            # Dependências e scripts
├── tsconfig.json           # Configuração TypeScript
└── README.md
```

## 🤝 Contribuição

Contribuições são sempre bem-vindas! Para contribuir:

1. Faça um Fork do projeto
2. Crie uma branch para sua feature (`git checkout -b feature/AmazingFeature`)
3. Commit suas mudanças (`git commit -m 'Add some AmazingFeature'`)
4. Push para a branch (`git push origin feature/AmazingFeature`)
5. Abra um Pull Request

### Áreas que Precisam de Ajuda
- [ ] Implementação de novos recursos de mapeamento
- [ ] Melhoria da interface do usuário
- [ ] Otimização de performance
- [ ] Implementação de testes automatizados
- [ ] Documentação de componentes
- [ ] Acessibilidade e usabilidade

## 📄 Licença

Este projeto está sob a licença MIT. 
Veja o arquivo [LICENSE](LICENSE) para mais detalhes.
Ou acesse o site [https://opensource.org/license/mit](https://opensource.org/license/mit)

## 👨‍💻 Desenvolvedores

**Daniel Barros** - [LinkedIn](https://www.linkedin.com/in/danielbarros63/) - [GitHub](https://github.com/Barros263inf)

**Luccas Alencar** - [LinkedIn](https://www.linkedin.com/in/luccasalencar/) - [GitHub](https://github.com/LuccasAlencar)

**Link do Projeto**: [https://github.com/TEMPO-LIVRE-APP/mobile](https://github.com/TEMPO-LIVRE-APP/mobile)

---

## 🔗 Links Úteis

### Documentação Técnica
- [React Native Documentation](https://reactnative.dev/docs/getting-started)
- [Expo Documentation](https://docs.expo.dev/)
- [React Navigation Docs](https://reactnavigation.org/docs/getting-started)
- [TypeScript Documentation](https://www.typescriptlang.org/docs/)

### Tutoriais e Referências
- [React Native Tutorial](https://reactnative.dev/docs/tutorial)
- [Expo Getting Started](https://docs.expo.dev/get-started/introduction/)
- [React Native Maps Guide](https://github.com/react-native-maps/react-native-maps/blob/master/docs/installation.md)
- [Axios Documentation](https://axios-http.com/docs/intro)

### Ferramentas de Desenvolvimento
- [Expo Snack](https://snack.expo.dev/) - Playground online
- [React Native Debugger](https://github.com/jhen0409/react-native-debugger)
- [Flipper](https://fbflipper.com/) - Debugging platform

### Recursos de Design
- [React Native Elements](https://reactnativeelements.com/)
- [NativeBase](https://nativebase.io/)
- [Expo Icons](https://icons.expo.fyi/)

---

⭐ **Se este projeto foi útil para você, não esqueça de dar uma estrela!** ⭐

---