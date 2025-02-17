import NFT from "../db/models/NFT.js";
import { NFTSchema } from "../validator/validatorSchema.js";

export const storeNFT = async (req, res) => {
  const { error, value } = NFTSchema.validate(req.body);
  if (error) {
    return res.status(400).json({ message: error.details[0].message });
  }

  const { nftId, nftName, nftDescription, nftLogo, userWalletAddress } = value;

  try {
    const existingNFT = await NFT.findOne({ nftId });
    if (existingNFT) {
      return res
        .status(409)
        .json({ message: "NFT with this ID already exists" });
    }

    const nft = await NFT.create({
      nftId,
      nftName,
      nftDescription,
      nftLogo,
      userWalletAddress,
    });
    return res.status(201).json({ message: "NFT created successfully", nft });
  } catch (error) {
    console.error("Error creating NFT", error);
    return res
      .status(500)
      .json({ message: "Internal Server Error", error: error.message });
  }
};
