import sdk from "./1-initialize-sdk.js";
import { readFileSync } from "fs";

const editionDrop = sdk.getEditionDrop("0x125e9b19AA854138e403160427290626c0F6545d");

(async () => {
  try {
    await editionDrop.createBatch([
      {
        name: "ludwig supraphonic snare",
        description: "This NFT will give you access to DrumDAO!",
        image: readFileSync("scripts/assets/ludwig-supraphonic.png"),
      },
    ]);
    console.log("✅ Successfully created a new NFT in the drop!");
  } catch (error) {
    console.error("failed to create the new NFT", error);
  }
})();