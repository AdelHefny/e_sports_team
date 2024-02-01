import "./blog.css";
import BlogSlider from "./components/blogSlider";
function Blog() {
  return (
    <div>
      <BlogSlider />
      <section className="bg-purple h-[800px] w-full flex items-center justify-center relative">
        <h1 className="text-lg z-30">BLOG</h1>
        <div className="wave"></div>
      </section>
      <div className="entry__media w-96 h-96 ">adel</div>
    </div>
  );
}

export default Blog;
