# StudyWeb3Metamask
# 文档210401
- [web3js](https://web3js.readthedocs.io/en/v1.3.4/)
- [MetaMask](https://docs.metamask.io/)

# 以太坊中代币数量的计量单位

|        Unit         | Wei Value | Wei                       |
| :-----------------: | :-------: | :------------------------ |
|         wei         |   1wei    | 1                         |
|   Kwei (babbage)    |  1e3 wei  | 1,000                     |
|   Mwei (lovelace)   |  1e6 wei  | 1,000,000                 |
|   Gwei (shannon)    |  1e9 wei  | 1,000,000,000             |
| microether (szabo)  | 1e12 wei  | 1,000,000,000,000         |
| milliether (finney) | 1e15 wei  | 1,000,000,000,000,000     |
|        ether        | 1e18 wei  | 1,000,000,000,000,000,000 |

# 进制转换
- 十转十六 
  - web3.utils.fromDecimal(num);
- 十六转十 
  - web3.utils.toDecimal(hex);
  - web3.utils.toBN(hex).toString(); 大数
- wei转ether 
  - web3.utils.fromWei("1000000000000000000", 'ether') // 1 ether
- ether转wei 
  - web3.utils.toWei('1', 'ether') // 1000000000000000000 wei

# 转账
- web3.eth.sendTransaction(transactionObject [, callback])
```
参数：
    Object - 要发送的交易对象。
      from: String - 指定的发送者的地址。如果不指定，使用web3.eth.defaultAccount。
      to: String - （可选）交易消息的目标地址，如果是合约创建，则不填.
      value: Number|String|BigNumber - （可选）交易携带的货币量，以wei为单位。如果合约创建交易，则为初始的基金。
      gas: Number|String|BigNumber - （可选）默认是自动，交易可使用的gas，未使用的gas会退回。
      gasPrice: Number|String|BigNumber - （可选）默认是自动确定，交易的gas价格，默认是网络gas价格的平均值 。
      data: String - （可选）或者包含相关数据的字节字符串，如果是合约创建，则是初始化要用到的代码。
      nonce: Number - （可选）整数，使用此值，可以允许你覆盖你自己的相同nonce的，正在pending中的交易11。
    Function - 回调函数，用于支持异步的方式执行[async]。
返回值：
	String - 32字节的交易哈希串。用16进制表示
```

web3浏览器检查

```js
if (typeof window.ethereum !== 'undefined') {
    console.log('MetaMask is installed!');
}
```

web3js原生方法

```js
// 引入
//<script src="./node_modules/web3/dist/web3.min.js"></script>
async function get(){
    // 实例化web3
    window.web3 = new Web3(ethereum);
    var web3 = window.web3;
    // 请求用户授权 解决web3js无法直接唤起Meta Mask获取用户身份
    const enable = await ethereum.enable();
    console.log(enable,11)
    // 授权获取账户
    var accounts = await web3.eth.getAccounts();
    // web3.eth.getAccounts().then((e)=>{console.log(e)})
    // 取第一个账户
    var myAccount = accounts[0];
    console.log(myAccount, 1);
    // 返回指定地址账户的余额
    var balance = await web3.eth.getBalance(myAccount);
    console.log(balance, 2)
}
```



metamask 方法

```js
 async function getAccount() {
    // 授权获取账户
    const accounts = await ethereum.request({ method: 'eth_requestAccounts' });
    const myAccount = accounts[0];
    console.log(myAccount,1);
    // 返回指定地址账户的余额
    const balance = await ethereum.request({ method: 'eth_getBalance',params:[myAccount,"latest"],"id":1});
    console.log(balance,2);
 }
```

