/**
 * Videos Database can be added here.
 * You can add videos of your wish with different attributes
 * */
import { v4 as uuid } from "uuid";

export const videos = [
  {
    _id: uuid(),
    title:
      "The Insane Logistics of Formula 1",
    description:
      "Formula One freight moves by land, air and sea to five continents in nine months. With 22 events separated by less than a week or two — Check how the teams manages to do it.",
    creator: {
      profile:
        "https://res.cloudinary.com/hellbat/image/upload/v1663302451/Tunneltube%28alexa%29%20video%20library/formula_profile_to4lwy.jpg",
      name: "Formula 1",
    },
    views: "10M",
    category: "Formula 1",
    videoID: "6OLVFa8YRfM",
    thumbnail:
      "https://res.cloudinary.com/hellbat/image/upload/v1663312177/Tunneltube%28alexa%29%20video%20library/formula_thum1_vod7bo.jpg",
  },
  {
    _id: uuid(),
    title: "Building E-Commerce Cloud Infra for Millions",
    description:
      "Subhash talks about their journey from SEO optimization to building a Shopify challenger over the last decade and how their team is surmounting challenges of extremely low latency page loads of shops on slow mobile internet connections across the globe! ",
    creator: {
      profile:
        "https://res.cloudinary.com/hellbat/image/upload/v1663303015/Tunneltube%28alexa%29%20video%20library/scaler_profile_zyr9ei.jpg",
      name: "Tech Pod",
    },
    views: "27K",
    category: "Tech",
    videoID: "a5kKRtMmhzQ",
    thumbnail:
      "https://res.cloudinary.com/hellbat/image/upload/v1663312178/Tunneltube%28alexa%29%20video%20library/ecom_thumb_lkxhau.jpg",
  },
  {
    _id: uuid(),
    title: "The Working of UPI Payment Decoded",
    description:
      "UPI or unified payments interface is a real-time, single-window payment programme developed by the National Payments Corporation of India. In layman terms, UPI is a payment interface that allows you to transfer payments in real-time from one bank account to another. ",
    creator: {
      profile:
        "https://res.cloudinary.com/hellbat/image/upload/v1663313155/Tunneltube%28alexa%29%20video%20library/decoded_pp_vsjkkm.jpg",
      name: "Decoded",
    },
    views: "100K",
    category: "Tech",
    videoID: "V6cN8VIss0c",
    thumbnail:
      "https://res.cloudinary.com/hellbat/image/upload/v1663312181/Tunneltube%28alexa%29%20video%20library/upi_thumb_iussj5.jpg",
  },
  {
    _id: uuid(),
    title: "How Formula 1 is Filmed (Technical Masterpiece)",
    description:
      "Drones, Cameras and a Helicopter. The sport uses dozens of cameras to broadcast the action, from the track, in the air and even from inside the cars. Let's dig deeper",
    creator: {
      profile:
      "https://res.cloudinary.com/hellbat/image/upload/v1663302451/Tunneltube%28alexa%29%20video%20library/formula_profile_to4lwy.jpg",  
      name: "Formula 1",
    },
    views: "10M",
    category: "Formula 1",
    videoID: "78wxrEbuHFA",
    thumbnail:
      "https://res.cloudinary.com/hellbat/image/upload/v1663312430/Tunneltube%28alexa%29%20video%20library/formula_film_thumb_ekcw2y.jpg",
  },
  {
    _id: uuid(),
    title: "Software: More than Just Cool Apps",
    description:
      "We often think software is only about creating dating apps or funny emoticons, but in this talk, entrepreneur Jimmy Chen encourages us to see software as a tool that changes the world.",
    creator: {
      profile:
        "https://res.cloudinary.com/hellbat/image/upload/v1663313156/Tunneltube%28alexa%29%20video%20library/ted_pp_asnuu5.jpg",
      name: "Ted Talks",
    },
    views: "12Mk",
    category: "Tech",
    videoID: "lVlrgHIQkBM",
    thumbnail:
      "https://res.cloudinary.com/hellbat/image/upload/v1663312968/Tunneltube%28alexa%29%20video%20library/software_thumb_ilmoao.jpg",
  },
  {
    _id: uuid(),
    title: "BNPL - Buy Now Pay Later - Product Strategy ",
    description:
      "BNPL - Buy Now Pay Later platforms like Affirm, Klarna, Afterpay grew really fast to unicorns and are now seeing significant decline, with some of them down as low as 80-90%. What are these BNPL products? What is their Product Strategy? Why did the big banks did not catch up to this trend yet and What is their future.",
    creator: {
      profile:
        "https://res.cloudinary.com/hellbat/image/upload/v1663313152/Tunneltube%28alexa%29%20video%20library/product_pp_oqsstd.jpg",
      name: "Product Breakdown",
    },
    views: "40K",
    category: "Product",
    videoID: "qBjK3E7svao",
    thumbnail:
      "https://res.cloudinary.com/hellbat/image/upload/v1663312970/Tunneltube%28alexa%29%20video%20library/bnpl_thumb_wlrk8z.jpg",
  },
  {
    _id: uuid(),
    title: "Ads in Taxi (Taxi Ads) - Product Strategy",
    description:
      "Uber/Lyft and other ride hailing companies are getting into OOH (Out of home ads) with the digital ads outside the car (top of the car) and inside the car. What is this product? Why is Uber/Lyft doing this? Whats their product strategy and whats its future. ",
    creator: {
      profile:
        "https://res.cloudinary.com/hellbat/image/upload/v1663313152/Tunneltube%28alexa%29%20video%20library/product_pp_oqsstd.jpg",
      name: "Product Breakdown",
    },
    views: "1M",
    category: "Product",
    videoID: "E59Y5fl3n9I",
    thumbnail:
      "https://res.cloudinary.com/hellbat/image/upload/v1663312971/Tunneltube%28alexa%29%20video%20library/taxi_thumb_kdwt9g.jpg",
  },
  {
    _id: uuid(),
    title: "How Covid affects developers in big tech | Parody",
    description:
      "Funny takedown on covid impact in companies",
    creator: {
      profile:
        "https://res.cloudinary.com/hellbat/image/upload/v1663313153/Tunneltube%28alexa%29%20video%20library/joma_pp_cdcbym.jpg",
      name: "Joma tech",
    },
    views: "124K",
    category: "Humour",
    videoID: "vT3GUKuAzIs",
    thumbnail:
      "https://res.cloudinary.com/hellbat/image/upload/v1663312973/Tunneltube%28alexa%29%20video%20library/covid_thumb_g44vzo.jpg",
  },
  {
    _id: uuid(),
    title: "How to make $1M a year in your 20s...| Parody",
    description:
      "You don't really need a description for this video",
    creator: {
      profile:
        "https://res.cloudinary.com/hellbat/image/upload/v1663313153/Tunneltube%28alexa%29%20video%20library/joma_pp_cdcbym.jpg",
      name: "Joma Tech",
    },
    views: "1.7M",
    category: "Humour",
    videoID: "CK_BCMA9yoY",
    thumbnail:
      "https://res.cloudinary.com/hellbat/image/upload/v1663312975/Tunneltube%28alexa%29%20video%20library/million_thumb_jnutya.jpg",
  },
];