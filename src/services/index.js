import { request, gql } from "graphql-request";
const graphqlAPI = process.env.REACT_APP_GRAPHCMS_API;

export const getProductIds = async () => {
  const query = gql`
    query {
      products {
        id
      }
    }
  `;
  const result = await request(graphqlAPI, query);
  return result.products.map((product) => ({
    params: {
      id: product.id,
    },
  }));
};
export const getProducts = async () => {
  const query = gql`
    query Products {
      products {
        image1 {
          url
        }
        image2 {
          url
        }
        image3 {
          url
        }
        id
        productName
      }
    }
  `;
  const result = await request(
    "https://api-ap-south-1.hygraph.com/v2/clff1o5m61jhz01te56nl9ub4/master",
    query
  );
  return result.products;
};
export const getProduct = async (id) => {
  const query = gql`
    query MyQuery($id: ID!) {
      product(where: { id: $id }) {
        description
        fat
        hsn
        id
        slug
        image1 {
          url
        }
        image2 {
          url
        }
        image3 {
          url
        }
        image4 {
          url
        }
        moodBoardImage {
          url
        }
        moisture
        productName
      }
    }
  `;
  //   console.log(query);
  //   const result = await request(
  //     "https://api-ap-south-1.hygraph.com/v2/clff1o5m61jhz01te56nl9ub4/master",
  //     query,
  //     { id }
  //   );
  // console.log(id);
  //   console.log(result.product);
  //   return result.product;
};

// creating contact
export const createContact = async (contact) => {
  const query = gql`
    mutation createContact($contact: ContactCreateInput!) {
      createContact(data: $contact) {
        name
        mail
        phoneNumber
        helpOptions
      }
    }
  `;
  const result = await request(
    "https://api-ap-south-1.hygraph.com/v2/clff1o5m61jhz01te56nl9ub4/master",
    query,
    { contact }
  );
  return result;
};
