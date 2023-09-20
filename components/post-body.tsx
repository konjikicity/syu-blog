type Props = {
  content: string;
};

const PostBody = ({ content }: Props) => {
  return (
    <div className="mx-auto znc text-[#DDE6ED] ">
      <div dangerouslySetInnerHTML={{ __html: content }} />
    </div>
  );
};

export default PostBody;
