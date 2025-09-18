// src/api/index.js
import axios from "axios";

const BASE_URL = "http://localhost:8080/api/v1";
// const BASE_URL = "https://domain.com/api/v1";

const api = axios.create({
  baseURL: BASE_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

// ✅ API endpoints

// Contact Leads API----------------------------------------------------------------------
export const getAllContactLeads = ({ page = 1, limit = 10, search = "" }) =>
  api.get(
    `/contact/contacts?page=${page}&limit=${limit}&search=${encodeURIComponent(
      search
    )}`
  );

// Blogs API-----------------------------------------------------------------------
// api/blogs.js or wherever you're binding APIs
export const addBlog = (formData) =>
  api.post("/blogs/add-blog", formData, {
    headers: {
      "Content-Type": "multipart/form-data",
    },
  });
export const updateBlog = (id, formData) =>
  api.put(`/blogs/edit-blog/${id}`, formData, {
    headers: {
      "Content-Type": "multipart/form-data",
    },
  });
export const getBlogById = (id) => api.get(`/blogs/get-blog/${id}`);
export const getBlogBySlug = (slug) => api.get(`/blogs/get-blog-by-slug/${slug}`);
export const fetchBlogs = ({ page = 1, limit = 10, search = "" }) =>
  api.get(
    `/blogs/get-all-blogs?page=${page}&limit=${limit}&search=${encodeURIComponent(
      search
    )}`
  );
export const getDashboardCounts = () => api.get(`/stats/dashboard`);
export const deleteBlog = (id) => api.delete(`/blogs/delete-blog/${id}`);
//Contact API----------------------------------------------------------------------
export const sendContactLeads = (payload) =>
  api.post("/contact/contact-leads-website", payload);