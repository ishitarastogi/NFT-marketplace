const ERC20Token = artifacts.require("ERC20Token");

//Dummy test

 contract("ERC20Token", () => {           
// it ("balance should be zero", async () => {
//     const volcanoToken= await VolcanoToken.deployed();
//     assert(volcanoToken.address !== '');
// })
const TOTAL_SUPPLY = 10000000000000000000000;
beforeEach(async function () {
    this.token = await ERC20Token.new( TOTAL_SUPPLY);
  });


  it('retrieve returns a value previously stored', async function () {
    // Use large integer comparisons
    const ERC20Token= await ERC20Token.deployed();

    const totalSupply= await this.token.totalSupply();
    assert(totalSupply.toNumber()===10000000000000000000000);
  });




// it ("correct symbol", async () => {
//     const volcanoToken= await VolcanoToken.deployed();
//     // const ownerAddress = await volcanoToken.owner();
//     const balance = await volcanoToken.balanceOf('0xcB7C09fEF1a308143D9bf328F2C33f33FaA46bC2');
//     assert(balance.toNumber()===0)
   
// })
});