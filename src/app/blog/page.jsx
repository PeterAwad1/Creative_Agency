import PostCard from "../postcard/PostCard";

const PostCards = [
  {
    image: "/img1.jpg",
    title: "Blog",
    des: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Similique, at dolore? Tenetur, ut dicta ad nesciunt natus qui iusto quos aperiam! Tempora iste aperiam culpa numquam nesciunt, obcaecati qui inventore.",
    date: "May 04 2024",
  },
  {
    image: "/img2.jpg",
    title: "Study",
    des: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Similique, at dolore? Tenetur, ut dicta ad nesciunt natus qui iusto quos aperiam! Tempora iste aperiam culpa numquam nesciunt, obcaecati qui inventore.",
    date: "May 05 2024",
  },
  {
    image: "/img3.jpg",
    title: "Social Media",
    des: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Similique, at dolore? Tenetur, ut dicta ad nesciunt natus qui iusto quos aperiam! Tempora iste aperiam culpa numquam nesciunt, obcaecati qui inventore.",
    date: "May 06 2024",
  },
  {
    image: "/img4.jpg",
    title: "Freelancer",
    des: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Similique, at dolore? Tenetur, ut dicta ad nesciunt natus qui iusto quos aperiam! Tempora iste aperiam culpa numquam nesciunt, obcaecati qui inventore.",
    date: "May 07 2024",
  },
];

function BlogPage() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
      {PostCards.map((post, index) => (
        <PostCard
          key={index}
          image={post.image}
          title={post.title}
          des={post.des}
          date={post.date}
        />
      ))}
    </div>
  );
}

export default BlogPage;
