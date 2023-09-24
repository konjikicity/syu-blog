type Props = {
  children?: React.ReactNode;
};

const PostContainer = ({ children }: Props) => {
  return <div className="container mx-auto px-4">{children}</div>;
};

export default PostContainer;
