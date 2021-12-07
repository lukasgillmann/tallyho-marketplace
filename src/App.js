import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";

import Layout from "./components/layout";
import Index from './pages/index';
import StakingBSW from './pages/staking/staking-bsw';
import Farms from './pages/farming/farms';
import Swap from './pages/swap/swap';
import ScamTokens from './pages/scamtokens/scamtokens';

import './App.css';
import './sass/style.scss'

const App = () => {
  return (
      <>
        <Router>
          <Layout>
            <Routes>
              <Route path='/' exact={true} element={<Index />} />
              <Route path='/pools/stake_bsw/' element={<StakingBSW isToken={false} isActive={true} />} />
              <Route path='/pools/stake_bsw/history' element={<StakingBSW isToken={false} isActive={false} />} />
              <Route path='/pools/stake_tokens/' element={<StakingBSW isToken={true} isActive={true} />} />
              <Route path='/pools/stake_tokens/history' element={<StakingBSW isToken={true} isActive={false} />} />
              <Route path='/farms' element={<Farms isLive={true} />} />
              <Route path='/farms/history' element={<Farms isLive={false} />} />
              <Route path='/swap' exact={true} element={<Swap/>} />
              <Route path='/scamtokens' exact={true} element={<ScamTokens/>} />
            </Routes>
          </Layout>
        </Router>
      </>
  );
}

export default App;
