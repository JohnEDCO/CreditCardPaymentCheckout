# Requirements Dev
1. **Node**: v22.13.0 (last version).

2. **Java**: 19 (install java 19 and set the enviroment variables, both user and system, to the JAVA_HOME path.

   For example -> JAVA_HOME set C:\Program Files\Java\jdk-19 
   
5. **Android Studio**: Configure the ANDROID_HOME environment variable with the sdk path.
   
   For example: C:\Users\USER_PC\AppData\Local\Android\Sdk

# Getting Started

>**Note**: Make sure you have completed the [React Native - Environment Setup](https://reactnative.dev/docs/environment-setup) instructions till "Creating a new application" step, before proceeding.

## Step 1: Install Dependencies

First, Open the project with Visual Studio Code (VScode) from the _root_ of your React Native project run the following command **npm install**. This will install the project dependencies

## Step 2: Start the Metro Server

First, you will need to start **Metro**, the JavaScript _bundler_ that ships _with_ React Native.

To start Metro, run the following command from the _root_ of your React Native project:

```bash
# using npm
npm start

# OR using Yarn
yarn start
```

## Step 2: Start your Application

Let Metro Bundler run in its _own_ terminal. Open a _new_ terminal from the _root_ of your React Native project. Run the following command to start your _Android_ or _iOS_ app:

### For Android

```bash
# using npm
npm run android

# OR using Yarn
yarn android
```

### For iOS

```bash
# using npm
npm run ios

# OR using Yarn
yarn ios
```

If everything is set up _correctly_, you should see your new app running in your _Android Emulator_ or _iOS Simulator_ shortly provided you have set up your emulator/simulator correctly.

This is one way to run your app — you can also run it directly from within Android Studio and Xcode respectively.


# Unit Tests with Jest

File                      | % Stmts | % Branch | % Funcs | % Lines | Uncovered Line #s 
--------------------------|---------|----------|---------|---------|-------------------
All files                 |   92.68 |    86.79 |    90.9 |   92.56 |                   
 assets/icons             |     100 |      100 |     100 |     100 |                   
  credit_card.png         |     100 |      100 |     100 |     100 |                   
  credit_card_default.png |     100 |      100 |     100 |     100 |                   
  home.png                |     100 |      100 |     100 |     100 |                   
  master_card.png         |     100 |      100 |     100 |     100 |                   
  shopping_cart.png       |     100 |      100 |     100 |     100 |                  
  visa_card.png           |     100 |      100 |     100 |     100 |                   
 assets/images/products   |     100 |      100 |     100 |     100 |                  
  product1.png            |     100 |      100 |     100 |     100 |                  
  product10.png           |     100 |      100 |     100 |     100 |                  
  product2.png            |     100 |      100 |     100 |     100 |                  
  product3.png            |     100 |      100 |     100 |     100 |                  
  product4.png            |     100 |      100 |     100 |     100 |                  
  product5.png            |     100 |      100 |     100 |     100 |                  
  product6.png            |     100 |      100 |     100 |     100 |                  
  product7.png            |     100 |      100 |     100 |     100 |                  
  product8.png            |     100 |      100 |     100 |     100 |                  
  product9.png            |     100 |      100 |     100 |     100 |                  
 components/buttons       |   77.77 |    81.81 |     100 |   77.77 |                  
  ButtonDefault.js        |   77.77 |    81.81 |     100 |   77.77 | 21-26            
 components/inputs        |   88.88 |    82.35 |     100 |   88.88 |                  
  InputDefault.js         |   88.88 |    82.35 |     100 |   88.88 | 28,38            
 components/modals        |   85.71 |       90 |   66.66 |   85.71 |                  
  ModalDefault.js         |     100 |      100 |     100 |     100 |                  
  ModalDetailProduct.js   |   71.42 |       80 |      50 |   71.42 | 43,73            
  ModalLoading.js         |     100 |      100 |     100 |     100 |                  
 components/separators    |     100 |      100 |     100 |     100 |                  
  Separator.js            |     100 |      100 |     100 |     100 |                  
 services                 |     100 |      100 |     100 |     100 |                  
  paymentService.js       |     100 |      100 |     100 |     100 |                  
 styles                   |     100 |      100 |     100 |     100 |                  
  theme.js                |     100 |      100 |     100 |     100 |                  
 utils                    |   93.75 |    91.66 |     100 |   93.61 |                  
  staticData.js           |     100 |      100 |     100 |     100 |                  
  utils.js                |   92.68 |    91.66 |     100 |    92.5 | 50-52     
