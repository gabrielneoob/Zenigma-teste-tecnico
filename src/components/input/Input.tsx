type InputProps = {
  value: number;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const Input = ({
  onChange,
  value,
}: InputProps) => <input
  type='number'
  onChange={onChange}
  value={value}
  autoFocus
 />

 export default Input