import React, { useState, useEffect, useMemo } from 'react'; // Error 0 fix
import { BoxProps } from './unknown';
import useWalletBalances from './unknown'; 
import WalletRow from './unknown'; 
import classes from './unknown'; //error 16 fix

interface WalletBalance {
    currency: string;
    amount: number;
    blockchain: string; //Error 10 fix
  }
  interface FormattedWalletBalance { //Error 2 (not fixed due to lack of information)
    currency: string;
    amount: number;
    formattedAmount: string; //Error 1 fix
    blockchain: string; //Error 10 carry-forward assuming error 2 is valid
  }
  
  class Datasource {
    url: string;
  
    constructor(url: string) {
      this.url = url;
    }
  
    async getPrices(): Promise<any> {
      const response = await fetch(this.url);
      if (!response.ok) {
        throw new Error("Failed to fetch prices");
      }
      return await response.json();
    }
  }
  
  //Error 3 fix 

  const WalletPage: React.FC<BoxProps> = (props: BoxProps) => {
    const { children, ...rest } = props;
    const balances = useWalletBalances();
      const [prices, setPrices] = useState([]); //Error 4 fix
  
    useEffect(() => {
      const datasource = new Datasource("https://interview.switcheo.com/prices.json");
      datasource.getPrices().then(fetchedPrices => { // Error 5 partial fix
        setPrices(fetchedPrices);
      }).catch(error => {
        console.error(error); // Error 6 fix
      });
    }, []);
  
      const getPriority = (blockchain: string): number => { //Error 7 fix
        switch (blockchain) {
          case 'Osmosis':
            return 100
          case 'Ethereum':
            return 50
          case 'Arbitrum':
            return 30
          case 'Zilliqa':
            return 20
          case 'Neo':
            return 20
          default:
            return -99
        }
      }
  
    const sortedBalances = useMemo(() => {
      return balances.filter((balance: WalletBalance) => {
            const balancePriority = getPriority(balance.blockchain);
            if (balancePriority > 0) { //error 8-9 fix
               if (balance.amount <= 0) {
                 return true;
               }
            }
            return false
          }).sort((lhs: WalletBalance, rhs: WalletBalance) => {
              const leftPriority = getPriority(lhs.blockchain);
            const rightPriority = getPriority(rhs.blockchain);
            if (leftPriority > rightPriority) {
              return -1;
            } else if (rightPriority > leftPriority) {
              return 1;
            }
            return 0; // error 11 fix
      });
    }, [balances]); //error 12 fix
  
    const formattedBalances : FormattedWalletBalance = sortedBalances.map((balance: WalletBalance) => { //error 13 not fixed due to lack of information and error 14 fix
      return {
        ...balance,
        formattedAmount: balance.amount.toFixed() // error 15 not fixed due to lack of informtion
      }
    })
  
    const rows = sortedBalances.map((balance: FormattedWalletBalance, index: number) => {
      const usdValue = prices[balance.currency] * balance.amount;
      return (
        <WalletRow 
          className={classes.row}
          key={index}
          amount={balance.amount}
          usdValue={usdValue}
          formattedAmount={balance.formattedAmount}
        />
      )
    })
  
    return (
      <div {...rest}>
        {rows}
      </div>
    )
  }