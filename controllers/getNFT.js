import NFT from "../db/models/NFT.js";

export const getNFTById = async (req, res) => {
  const nftId = req.params.id;

  try {
    const nft = await NFT.findOne({ nftId: nftId });

    if (!nft) {
      return res.status(404).json({ message: "NFT not found" });
    }

    return res.status(200).json(nft);
  } catch (error) {
    console.error("Error fetching NFT:", error);
    return res
      .status(500)
      .json({ message: "Internal server error", error: error.message });
  }
};

export const getNFTGallery = async (req, res) => {
  const userWalletAddress = req.params.wallet;

  try {
    const nfts = await NFT.find({ userWalletAddress });

    if (nfts.length === 0) {
      return res
        .status(404)
        .json({ message: "No NFTs found for this wallet address" });
    }

    return res.status(200).json(nfts);
  } catch (error) {
    console.error("Error fetching NFTs:", error);
    return res
      .status(500)
      .json({ message: "Internal server error", error: error.message });
  }
};
