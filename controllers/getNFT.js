import NFT from "../db/models/NFT.js";

export const getNFTById = async (req, res) => {
  const nftId = req.params.id;

  try {
    const nft = await NFT.findOne({ nftId });
    if (!nft) {
      return res.status(401).json({ message: "NFT does not exist" });
    }

    return res.status(200).json(nft);
  } catch (error) {
    console.error("Error getting NFT", error);
    return res
      .status(500)
      .json({ message: "Internal server error", error: error.message });
  }
};

export const getNFTGallery = async(req,res) =>{
  
}
