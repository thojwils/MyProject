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
    <div>
      <div>
        <h2>{postData.title}</h2>
        <div>
          <img
            // authoImage null when no img exists, how do we hanlde when user does not have authoImage
            src={urlFor(postData.authorImage).width(100).url()}
            alt={`Author: ${postData.name}`}
          />
          <h4>{postData.name}</h4>
        </div>
      </div>
      <img src={urlFor(postData.mainImage).width(200).url()} alt='' />
      <div>
        <PortableText value={postData.body} />
      </div>
    </div>
  );
}
