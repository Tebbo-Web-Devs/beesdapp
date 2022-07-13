const contractAddress= "0xAD84D56BB6d39D78F0D25C7068020932b48f00C5";
// import {Abi} from './Abi';
//ipfs jason url = ipfs://bafybeiejgzbveiytwskwkmu6eg47zhd7bnh6v5nxpiyynthulfwsfsou4u
let chainId = 4;
// const button = document.getElementById("mint");

const Abi = [	
    {
    "inputs": [
        {
            "internalType": "address",
            "name": "to",
            "type": "address"
        }
    ],
    "name": "safeMint",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
}
]
async function Connect() {
    if(!window.ethereum){
        alert("Please install a Web3 wallet to use this site!")
    }
    const provider = new ethers.providers.Web3Provider(window.ethereum);
    const accounts = await provider.send("eth_requestAccounts", []);
    const signer = provider.getSigner(); 
    const contract = new ethers.Contract(contractAddress, Abi, provider);
    console.log("Account ", accounts[0]);
    console.log('contract ',contract);
}
// Connect();

function mint(){
    alert()
}




