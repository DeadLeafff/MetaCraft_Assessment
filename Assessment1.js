// Create a variable to hold your NFT's
let nftCollection = [];

// This function will take in some values as parameters, create an
// NFT object using the parameters passed to it for its metadata, 
// and store it in the variable above.
function mintNFT(name, description, owner, nftType, blockchain) {
  const nft = {
    name: name,
    description: description,
    owner: owner,
    nftType: nftType,
    blockchain: blockchain
  };
  nftCollection.push(nft);
}

// Create a "loop" that will go through an "array" of NFT's
// and print their metadata with console.log()
function listNFTs() {
  for (let i = 0; i < nftCollection.length; i++) {
    console.log("NFT : "+(i+1));
    console.log(`Name: ${nftCollection[i].name}`);
    console.log(`Description: ${nftCollection[i].description}`);
    console.log(`Owner: ${nftCollection[i].owner}`);
    console.log(`NFT Type: ${nftCollection[i].nftType}`);
    console.log(`Blockchain: ${nftCollection[i].blockchain}`);
    console.log("\n-------\n");
  }
}

// Print the total number of NFTs we have minted to the console
function getTotalSupply() {
  console.log(`Total NFTs: ${nftCollection.length}`);
}

// Call your functions below this line
mintNFT("Crypto 01", "A unique piece of digital art", "Milind", "Art", "Ethereum");
mintNFT("Crypto Collectible 123", "A collectible item", "Anurag", "Collectible", "Polygon");
mintNFT("Game Collector", "A collectible item in game", "Milind", "Virtual Currency", "Solana");

listNFTs();

getTotalSupply();
