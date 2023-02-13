const blogs = [
  {
    id: 1,
    title: "Blog Post 1",
    content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    comments: [
      { id: 1, author: "John", text: "Great post!" },
      { id: 2, author: "Jane", text: "Thanks for sharing." },
    ],
  },
  {
    id: 2,
    title: "Blog Post 2",
    content:
      "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium.",
    comments: [
      { id: 3, author: "Bob", text: "Interesting topic." },
      { id: 4, author: "Alice", text: "I learned something new today." },
    ],
  },
  {
    id: 3,
    title: "Blog Post 3",
    content:
      "Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit.",
    comments: [
      { id: 5, author: "Sarah", text: "Great insights!" },
      { id: 6, author: "Tom", text: "Thanks for sharing your thoughts." },
    ],
  },
];

export default blogs;
