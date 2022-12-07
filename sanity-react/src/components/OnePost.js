// src/components/OnePost.js

import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import client from "../client.js";
import imageUrlBuilder from "@sanity/image-url";
import { PortableText } from "@portabletext/react";

const builder = imageUrlBuilder(client);
function urlFor(source) {
  return builder.image(source);
}

export default function OnePost() {
  const [postData, setPostData] = useState(null);
  const { slug } = useParams();

  useEffect(() => {
    client
      .fetch(
        `*[slug.current == $slug]{
          title,
          slug,
          mainImage{
            asset->{
              _id,
              url
             }
           },
         body,
        "name": author->name,
        "authorImage": author->image
       }`,
        { slug }
      )
      .then((data) => setPostData(data[0]))
      .catch(console.error);
  }, [slug]);

  if (!postData) return <div>Loading...</div>;

  return (
    <div className='bg-blue-100 px-8 py-8 mt-5'>
      <div className='max-w mx-auto bg-white rounded-xl shadow-md w-full py-4'>
        <h1 className='cursive text-center text-3xl md:text-6xl font-bold'>
          {postData.title}
        </h1>
        <div className=' grid md:flex items-center p-4 mx-auto'>
          <img
            className='flex-start'
            src={urlFor(postData.mainImage).width(800).url()}
            alt=''
          />
          <div className='flex-end'>
            <img
              // authoImage null when no img exists, how do we hanlde when user does not have authoImage
              className={
                postData.authorImage
                  ? "block p-4 mx-5 flex-grow justify-center w-full"
                  : "hidden"
              }
              src={urlFor(postData.authorImage).width(400).url()}
              alt={`Author: ${postData.name}`}
            />
            <h4 className='text-center font-bold block p-4 mx-5 flex-grow justify-center w-full text-2xl'>
              Written By: {postData.name}
            </h4>
          </div>
        </div>
      </div>
      <div className='max-w mx-auto my-5 bg-white rounded-xl shadow-md overflow-hidden'>
        <div className='px-5 my-5 text-center'>
          <PortableText value={postData.body} />
        </div>
      </div>
    </div>
  );
}
