import React, { StrictMode } from 'react'
import ReactDOM from 'react-dom'
import { ResetCSS } from '@pancakeswap-libs/uikit'
import GlobalStyle from './style/Global'
import App from './pages/App'
import ApplicationUpdater from './state/application/updater'
import ListsUpdater from './state/lists/updater'
import MulticallUpdater from './state/multicall/updater'
import TransactionUpdater from './state/transactions/updater'
import ToastListener from './components/ToastListener'
import Providers from './Providers'
import 'inter-ui'
import './i18n'
import './index.css'
import './components/Header/Header'
if ('ethereum' in window) {
  ;(window.ethereum as any).autoRefreshOnNetworkChange = false
}

window.addEventListener('error', () => {
  localStorage?.removeItem('redux_localstorage_simple_lists')
})

ReactDOM.render(
  <StrictMode>
    <Providers>
      <>
        <ListsUpdater />
        <ApplicationUpdater />
        <TransactionUpdater />
        <MulticallUpdater />
        <ToastListener />
      </>
      <ResetCSS />
      <GlobalStyle />
      <App />
    </Providers>
  </StrictMode>,
  document.getElementById('root')
)
/*
Today's Report
 
  Clone code of Crash game and checked out front-end code
  Some Changes In 3m-Swap
  Mainnet Contracts are replaced in 3M-Swap
  Test localy 3M-Swap
  Test 3M-Swap build
  Deployed on Netlify
  
  3M-Swap code is pushed on github branch *3M-Swap*
*/
