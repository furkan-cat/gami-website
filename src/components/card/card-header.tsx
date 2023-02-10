type Props = {
  src: string;
  alt: string;
};

export default function CardHeader(props: Props) {
  const { src, alt } = props;
  return (
    <div className="flex justify-center my-auto">
      <img src={src} alt={alt} />
    </div>
  );
}
