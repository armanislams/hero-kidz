// 'use server'

// import { collections, dbConnect } from "@/lib/dbConnect"
// import { ObjectId } from "mongodb"

// export const getProducts = async () => {
//     const products = await dbConnect(collections.PRODUCTS).find().toArray()
//     return products
// }
// export const getSingleProducts = async (id) => {
//     // if (id.length != 24) {
//     //     return {}
//     // }
//     if (!id || typeof id !== "string" || id.length !== 24) {
//       return {};
//     }
//     const query = {
//         _id: new ObjectId(id)
//     }
//     const product = await dbConnect(collections.PRODUCTS).findOne(query)
//     return product || {}
// }

"use server";

import { collections, dbConnect } from "@/lib/dbConnect";
import { ObjectId } from "mongodb";

export const getProducts = async () => {
  const products = await dbConnect(collections.PRODUCTS).find().toArray();

  return products.map((product) => ({
    ...product,
    _id: product._id.toString(),
  }));
};

export const getSingleProducts = async (id) => {
  if (!id || id.length !== 24) {
    return null;
  }

  const query = {
    _id: new ObjectId(id),
  };

  const product = await dbConnect(collections.PRODUCTS).findOne(query);

  if (product) {
    return {
      ...product,
      _id: product._id.toString(),
    };
  }

  return null;
};

