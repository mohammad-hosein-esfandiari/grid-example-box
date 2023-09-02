
interface InputProps {
    id:string
    type:string
    content:string
}

export const Input:React.FC<InputProps> = ({content,id,type}) => {
  return (
    <div className="flex">
      <input id={content} name={id} type={type} />
      <label className="pl-2" htmlFor={content}>{content}</label>
    </div>
  );
};
