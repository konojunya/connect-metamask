import WalletConnectProvider from '@walletconnect/web3-provider';
import type {NextPage} from 'next';
import {useCallback, useState} from 'react';
import Web3 from 'web3';
import {Button} from '../components/shared/Button';
import {Meta} from '../components/shared/Meta';
import {Stack} from '../components/shared/Stack';
import {Text} from '../components/shared/Text';
import {Typography} from '../styles/variables';

const provider = new WalletConnectProvider({
  infuraId: process.env.NEXT_PUBLIC_INFURA_ID,
});

const IndexPage: NextPage = () => {
  const [state, setState] = useState({
    connected: false,
    publicAddress: '',
    balance: '',
  });

  const handleDisConnect = useCallback(() => {
    provider.disconnect();
    setState({
      connected: false,
      publicAddress: '',
      balance: '',
    });
  }, []);

  const handleConnect = useCallback(() => {
    provider.enable().then(res => {
      const web3 = new Web3(provider as any);
      web3.eth.getBalance(res[0]).then(balance => {
        setState({
          connected: true,
          publicAddress: res[0].substring(0, 15),
          balance: web3.utils.fromWei(balance, 'ether').substring(0, 8),
        });
      });
    });
  }, []);

  return (
    <Meta>
      {state.connected ? (
        <Stack mobile={{gap: 16}}>
          <Text block typography={{mobile: Typography.Default_Normal_24}}>
            Your Account: {state.publicAddress}
          </Text>
          <Text block typography={{mobile: Typography.Default_Normal_24}}>
            Your Balances: {state.balance}ETH
          </Text>
          <Button color="secondary" onClick={handleDisConnect}>
            disconnect
          </Button>
        </Stack>
      ) : (
        <Stack mobile={{gap: 16}}>
          <Text>Plase connect your wallet</Text>
          <Button color="grad" onClick={handleConnect}>
            connect
          </Button>
        </Stack>
      )}
    </Meta>
  );
};

export default IndexPage;
