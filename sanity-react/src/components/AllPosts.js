// src/components/AllPosts.js

import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import client from "../client.js";

export default function AllPosts() {
  const [allPostsData, setAllPosts] = useState(null);

  useEffect(() => {
    client
      .fetch(
        `*[_type == "post"]{
        title,
        slug,
        mainImage{
          asset->{
          _id,
          url
        }
      }
    }`
      )
      .then((data) => setAllPosts(data))
      .catch(console.error);
  }, []);

  return (
    <div className='from-gray-400 bg-indigo-100 min-h-screen p-12'>
      <div className='container mx-auto'>
        <h2 className='text-5xl flex justify-center cursive'>
          Web Dev Journey
        </h2>
        <h3 className='text-lg text-gray-700 flex justify-center mb-12'>
          Tech Resource Repository. Feel free to blog about topics of interest.
        </h3>
        <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-8 place-content-center'>
          {allPostsData &&
            allPostsData.map((post, index) => (
              <Link to={"/" + post.slug.current} key={post.slug.current}>
                <div>
                  <span key={index}>
                    <img
                      className='rounded-t-lg'
                      src={post.mainImage.asset.url}
                      alt=''
                    />
                    <span>
                      <h2
                        className='text-center text-2xl text-indigo-900 leading-tight uppercase font-bold px-10 py-10
                         bg-indigo-300 bg-opacity-80 rounded-b-lg hover:text-white cursive'>
                        {post.title}
                      </h2>
                    </span>
                  </span>
                </div>
              </Link>
            ))}
        </div>
      </div>
    </div>
  );
}
