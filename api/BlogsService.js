import axios from "axios";

class BlogsService {
  api;
  constructor() {
    this.api = axios.create({
      baseURL: `https://pianoback.fly.dev/api/blog`,
    });
  }

  getAllBlogsCards() {
    return this.api.get("?lang=eng");
  }
  getAllBlogsArticles(readMoreLinkEng) {
    return this.api.get(`${readMoreLinkEng}?lang=eng`);
  }
}

const blogsService = new BlogsService();

export default blogsService;
