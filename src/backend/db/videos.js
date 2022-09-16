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
      "https://res.cloudinary.com/hellbat/image/upload/v1663302449/Tunneltube%28alexa%29%20video%20library/formula_tumb_jwopem.webp",
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
      "https://i.ytimg.com/vi/a5kKRtMmhzQ/hqdefault.jpg?sqp=-oaymwEcCPYBEIoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLAxpUwEG6zMVDusQWOhfKqeqjZQkA",
  },
  {
    _id: uuid(),
    title: "The Working of UPI Payment",
    description:
      "UPI or unified payments interface is a real-time, single-window payment programme developed by the National Payments Corporation of India. In layman terms, UPI is a payment interface that allows you to transfer payments in real-time from one bank account to another. ",
    creator: {
      profile:
        "https://res.cloudinary.com/dj5aind8q/image/upload/v1648964280/Shuttle%20motion/olympics_profile_ybxkdh.jpg",
      name: "Decoded",
    },
    views: "100K",
    category: "Tech",
    videoID: "V6cN8VIss0c",
    thumbnail:
      "https://res.cloudinary.com/dj5aind8q/image/upload/v1648964202/Shuttle%20motion/Badminton-Gold_Medal-Match_vxdapm.jpg",
  },
  {
    _id: uuid(),
    title: "How Formula 1 is Filmed (Technical Masterpiece)",
    description:
      "Drones, Cameras and a Helicopter. The sport uses dozens of cameras to broadcast the action, from the track, in the air and even from inside the cars. Let's dig deeper",
    creator: {
      profile:
        "https://res.cloudinary.com/dj5aind8q/image/upload/v1648964280/Shuttle%20motion/visit-london_profile_dtdhnh.jpg",
      name: "Formula 1",
    },
    views: "10M",
    category: "Formula 1",
    videoID: "78wxrEbuHFA",
    thumbnail:
      "https://res.cloudinary.com/dj5aind8q/image/upload/v1648964201/Shuttle%20motion/BWF-Players-interview_oxdcrr.jpg",
  },
  {
    _id: uuid(),
    title: "Software: More than Just Cool Apps",
    description:
      "We often think software is only about creating dating apps or funny emoticons, but in this talk, entrepreneur Jimmy Chen encourages us to see software as a tool that changes the world.",
    creator: {
      profile:
        "https://res.cloudinary.com/dj5aind8q/image/upload/v1648964280/Shuttle%20motion/shuttle-amazing_profile_agfrdl.jpg",
      name: "Ted Talks",
    },
    views: "12Mk",
    category: "Tech",
    videoID: "lVlrgHIQkBM",
    thumbnail:
      "https://res.cloudinary.com/dj5aind8q/image/upload/v1648964201/Shuttle%20motion/Lin-Dan_-vs-Lee-Chong-Wei_bcytzb.jpg",
  },
  {
    _id: uuid(),
    title: "BNPL - Buy Now Pay Later - Product Strategy and its Future",
    description:
      "BNPL - Buy Now Pay Later platforms like Affirm, Klarna, Afterpay grew really fast to unicorns and are now seeing significant decline, with some of them down as low as 80-90%. What are these BNPL products? What is their Product Strategy? Why did the big banks did not catch up to this trend yet and What is their future.",
    creator: {
      profile:
        "https://res.cloudinary.com/dj5aind8q/image/upload/v1648964280/Shuttle%20motion/BG-badminton-academy_profile_eiloy7.jpg",
      name: "Product Breakdown",
    },
    views: "40K",
    category: "Product",
    videoID: "qBjK3E7svao",
    thumbnail:
      "https://res.cloudinary.com/dj5aind8q/image/upload/v1648964202/Shuttle%20motion/Basic-Badminton-Techniques_hivnsd.jpg",
  },
  {
    _id: uuid(),
    title: "Ads in Taxi (Taxi Ads) - Product Strategy",
    description:
      "Uber/Lyft and other ride hailing companies are getting into OOH (Out of home ads) with the digital ads outside the car (top of the car) and inside the car. What is this product? Why is Uber/Lyft doing this? Whats their product strategy and whats its future. ",
    creator: {
      profile:
        "https://res.cloudinary.com/dj5aind8q/image/upload/v1648964280/Shuttle%20motion/Nat-Weerasak_profile_buiamj.jpg",
      name: "Product Teardown",
    },
    views: "1M",
    category: "Product",
    videoID: "E59Y5fl3n9I",
    thumbnail:
      "https://res.cloudinary.com/dj5aind8q/image/upload/v1648964202/Shuttle%20motion/Basic-Badminton-for-Beginners_daokrx.png",
  },
  {
    _id: uuid(),
    title: "How coronavirus affects programmers in big tech companies | Parody",
    description:
      "Funny takedown on covid impact in companies",
    creator: {
      profile:
        "https://res.cloudinary.com/dj5aind8q/image/upload/v1648964280/Shuttle%20motion/badminton-family_profile_ay9k1s.jpg",
      name: "Joma tech",
    },
    views: "124K",
    category: "Humour",
    videoID: "vT3GUKuAzIs",
    thumbnail:
      "https://res.cloudinary.com/dj5aind8q/image/upload/v1648964202/Shuttle%20motion/10-Amazing-Badminton-Trickshots_vsoncm.jpg",
  },
  {
    _id: uuid(),
    title: "How to make $1M a year in your 20s...| Parody",
    description:
      "You don't really need a description for this video",
    creator: {
      profile:
        "https://res.cloudinary.com/dj5aind8q/image/upload/v1648964280/Shuttle%20motion/badminton-family_profile_ay9k1s.jpg",
      name: "Joma Tech",
    },
    views: "1.7M",
    category: "Humour",
    videoID: "CK_BCMA9yoY",
    thumbnail:
      "https://res.cloudinary.com/dj5aind8q/image/upload/v1648964201/Shuttle%20motion/Shots-biomechanics_bwn5wr.jpg",
  },
];