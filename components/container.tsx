type Props = {
  children?: React.ReactNode;
};

const Container = ({ children }: Props) => {
  return <div className="container mx-auto px-4 md:px-36">{children}</div>;
};

export default Container;
