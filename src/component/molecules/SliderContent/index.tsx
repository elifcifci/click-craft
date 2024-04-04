const SliderContent = ({
  comment,
  fullname,
  jobTitle,
}: {
  comment: string;
  fullname: string;
  jobTitle: string;
}) => {
  return (
    <li className="flex flex-col justify-center min-h-[30vh] gap-[10px] w-[80%] text-black-default">
      <p>{comment}</p>
      <div className="flex flex-col text-right font-extralight">
        <span>{fullname}</span>
        <span>{jobTitle}</span>
      </div>
    </li>
  );
};

export default SliderContent;
