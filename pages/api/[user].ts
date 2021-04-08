import type { NextApiRequest, NextApiResponse } from "next";
import firestore from "@services/firebase-admin";
import { ILink, IProfile } from "@type/types";

// export default (req: NextApiRequest, res: NextApiResponse) => {
//   const id = req.query.user;
//   //   res.json({"query":id})
//   var result: IProfile = {
//     title: "Not Fount",
//     image: "/person.png",
//     links: [],
//     theme: "simple",
//   };
//   firestore
//     .collection("profile")
//     .where("id", "==", id)
//     .get()
//     .then(({ docs }) => {
//       if (docs.length > 0) {
//         docs.map((doc) => {
//           const r = doc.data();
//           console.log(r);
//           result.title = r.title;
//           result.image = r.image;
//           result.theme = r.theme ?? "simple";
//           // console.log(result)
//           doc.ref
//             .collection("links")
//             .get()
//             .then((e) => {
//               if (e.docs.length > 0) {
//                 e.docs.map((e) => {
//                   let f = e.data();
//                   const {
//                     title,
//                     url,
//                   }: { title: string; url: string } = f as ILink;
//                   result.links.push({ title: title, url: url });
//                 });
//                 res.status(200).json(result);
//               } else {
//                 res.json(result);
//               }
//             });
//         });
//       } else {
//         res.status(200).json(result);
//       }
//       // res.status(200).json({ name: 'John Doe' })
//     })
//     .catch((error) => {
//       res.status(500).json({ error: error });
//     });
// };
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
    const links = await docs[0].ref.collection("links").get();
    links.forEach( (e) => {
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
