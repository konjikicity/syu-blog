type Props = {
  children?: React.ReactNode;
};

const PostContainer = ({ children }: Props) => {
  return <div className="max-w-6xl mx-auto px-4 md:px-8">{children}</div>;
};

export default PostContainer;
