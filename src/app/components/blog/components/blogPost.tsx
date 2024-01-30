import Image, { StaticImageData } from "next/image";
import "../blog.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart, faComments } from "@fortawesome/free-regular-svg-icons";
import { faCalendarDays, faTag } from "@fortawesome/free-solid-svg-icons";
type PostPropsType = {
  id: number;
  title: string;
  content: string;
  tags: string[];
  img: StaticImageData;
  likes: number;
  commentsCount: number;
  creator: string;
  icon: StaticImageData;
  date: string;
  sales: number;
};
function BlogPost({
  postData,
  slide,
}: {
  postData: PostPropsType;
  slide: number;
}) {
  return (
    <section className="w-[470px] h-[562px] bg-gray-700 post flex max-w-max flex-col items-center justify-between blogPost">
      <div className="cursor-pointer w-full h-[250px] relative postImg before:absolute before:content-[''] before:z-20 before:w-full before:h-full before:bg-[#696bff] before:bg-opacity-20 before:top-0 before:left-0">
        <Image
          src={postData.img}
          alt="blog post image"
          className="relative z-0 object-cover w-full h-full grayscale-[0.8]  transition duration-300"
        />
      </div>
      <section className="px-6">
        <section className="flex flex-row justify-between items-center pr-4">
          <div className="border-[#575aff] border-2 text-[#575aff] px-2 font-[600] text-md cursor-pointer hover:text-white hover:border-white transition-colors duration-300">
            {postData.tags[0]}
          </div>
          <div className="flex flex-row space-x-4">
            <div className="flex flex-col items-center justify-center relative cursor-pointer text-[#575aff] hover:text-extraPurple transition-colors duration-300">
              <FontAwesomeIcon icon={faHeart} size="sm" />
              <span className="absolute top-0 counters">{postData.likes}</span>
            </div>
            <div className="flex items-center justify-center relative cursor-pointer text-[#575aff] hover:text-extraPurple transition-colors duration-300">
              <FontAwesomeIcon icon={faComments} size="sm" />
              <span className="absolute top-0 counters">
                {postData.commentsCount}
              </span>
            </div>
          </div>
        </section>
        <h1 className="font-bold text-2xl pt-4 pb-2 blogTitle w-[95%] cursor-pointertransition-colors duration-300">
          {postData.title.substring(0, 24).toUpperCase()}...
        </h1>
        <h3 className="max-w-[90%] text-md text-gray-400 blogContent leading-7 transition-colors duration-300">
          {postData.content.substring(0, 155)}...
        </h3>
      </section>
      <section className="relative flex flex-row items-center justify-center space-x-6 text-gray-400 w-full py-6 before:content-[''] before:absolute before:top-0 before:w-full before:h-px before:opacity-30 before:bg-gray-400">
        <Image
          src={postData.icon}
          alt="creator profile icon"
          className="rounded-[50%] w-10 h-10"
        />
        <h1 className="opacity-80">BY {postData.creator}</h1>
        <div className="flex flex-row items-center space-x-2 opacity-80">
          <FontAwesomeIcon icon={faCalendarDays} />
          <h1>{postData.date.toUpperCase()}</h1>
        </div>
        <div className="flex flex-row items-center space-x-2 opacity-80">
          <h1>{postData.sales}</h1>
          <FontAwesomeIcon icon={faTag} />
        </div>
      </section>
    </section>
  );
}

export default BlogPost;
