import joi from "joi";

export const NFTSchema = joi.object({
  nftId: joi.string().required(),
  nftName: joi.string().required(),
  nftDescription: joi.string().required(),
  nftLogo: joi.string().required(),
  userWalletAddress: joi.string().required(),
});
