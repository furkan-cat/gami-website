type CardBodyProps = {
  title?: string;
  description?: string;
};

export default function CardBody(props: CardBodyProps) {
  const { title, description } = props;
  return (
    <div className="flex flex-col items-center [&>*]:mt-3">
      <div className="text-blue-gray-800 text-2xl font-semibold">{title}</div>
      <div className="text-blue-gray-400 text-base">{description}</div>
      <div className="text-blue-gray-800 text-sm font-medium leading-5">
        visit
      </div>
    </div>
  );
}
