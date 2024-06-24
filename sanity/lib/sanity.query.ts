import { groq } from "next-sanity";
import { client } from "./client";

export async function getProductBySlug(slug: string) {
  return client.fetch(
    groq`*[_type == "product" && slug.current == $slug][0]{
            _id,
            title,
            tags,
            slug,
            description,
            images,
            price, 
            category {
              _ref
            }
        }`,
    { slug },
  );
}

export async function getProductSlugByID(id: number) {
  return client.fetch(
    groq`*[_type == "product" && _id == $id][0]{
            _id,
            title,
            tags,
            slug,
            description,
            images,
            price, 
            category {
              _ref
            }
        }`,
    { id },
  );
}

export async function getProductsByCategory(categorySlug: string) {
  return client.fetch(
    groq`*[_type == "product" && category->slug.current == $categorySlug]{
        _id,
        title,
        tags,
        slug,
        description,
        images,
        price, 
        category {
          _ref
        }
    }`,
    { categorySlug },
  );
}

export async function getFeaturedProducts() {
  return client.fetch(
    groq`*[ _type == "product"] {
        _id,
        title,
        tags,
        slug,
        description,
        images,
        price, 
        category {
          _ref
        }
    }`,
  );
}

export async function getCategories() {
  return client.fetch(
    groq`*[_type == "category"]{
        title,
        slug
    }`,
  );
}

export async function getProductsSlug() {
  return client.fetch(
    groq`*[_type == "product"] {
      slug {
        current
      }
    }`,
  );
}
