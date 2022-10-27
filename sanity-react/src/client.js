import sanityClient from "@sanity/client";

const client = sanityClient({
  projectId: "o8vlb21m", // find this at manage.sanity.io or in your sanity.json
  dataset: "production", // this is from those question during 'sanity init'
  useCdn: true,
  apiVersion: "2022-09-25",
});

export default client;
