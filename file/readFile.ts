import { promises as fs } from "fs";

const readFile = async (filename: string) => {
  try {
    const fileContents = await fs.readFile(filename);
    return JSON.parse(fileContents.toString());
  } catch (e) {
    return [];
  }
};

export default readFile;