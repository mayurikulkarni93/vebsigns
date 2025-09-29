// src/api/index.js
import axios from "axios";

// const BASE_URL = "http://localhost:28080/api/v1";
const BASE_URL = "https://vebsigns-api.actors.vebsigns.com/api/v1";

const api = axios.create({
  baseURL: BASE_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

// ✅ API endpoints



// Blogs API-----------------------------------------------------------------------
// api/blogs.js or wherever you're binding APIs

export const getBlogById = (id) => api.get(`/blogs/get-blog/${id}`);
export const getBlogBySlug = (slug) => api.get(`/blogs/get-blog-by-slug/${slug}`);
export const fetchBlogs = ({ page = 1, limit = 10, search = "" }) =>
  api.get(
    `/blogs/get-all-blogs?page=${page}&limit=${limit}&search=${encodeURIComponent(
      search
    )}`
  );
//Contact API----------------------------------------------------------------------
export const sendContactLeads = (payload) =>
  api.post("/contact/contact-leads-website", payload);
export const sendCareersData = (formData) =>
  api.post("/contact/careers", formData, {
    headers: {
      "Content-Type": "multipart/form-data",
    },
  });