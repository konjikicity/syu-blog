type Props = {
  content: string;
};

const PostBody = ({ content }: Props) => {
  return (
    <div className="mx-auto znc text-fg">
      <div className="body" dangerouslySetInnerHTML={{ __html: content }} />
    </div>
  );
};

export default PostBody;
