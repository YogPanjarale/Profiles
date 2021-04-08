import type { NextApiRequest, NextApiResponse } from "next";
import firestore from "@services/firebase-admin";
import { ILink, IProfile } from "@type/types";

export const getUser = async (id: string | string[]) => {
  var result: IProfile = {
    title: "Not Fount",
    image: "/person.png",
    links: [],
    theme: "simple",
  };
  let { docs } = await firestore
    .collection("profile")
    .where("id", "==", id)
    .get();
  // console.log(docs.length)
  if (docs.length > 0) {
    let { title, theme, image } = docs[0].data();
    result.title = title;
    result.image = image;
    result.theme = theme ?? "simple";
    const links = await docs[0].ref.collection("links").orderBy("index").get();

    links.forEach((e) => {
      const link: ILink = e.data() as ILink;
      result.links.push(link);
    });
    // console.log("result found");
    // console.log(result)
    return result;
  } else {
    return result;
  }
};

export default async (req: NextApiRequest, res: NextApiResponse) => {
  const result = await getUser(req.query.user);
  res.json(result);
};
