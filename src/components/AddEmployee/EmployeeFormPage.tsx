import './EmployeeFormPage.css';
import {FC, useRef} from 'react';

const EmployeeFormPage: FC = () => {
  const textInputRef = useRef<HTMLInputElement>(null);

  const todoSubmitHandler = (event: React.FormEvent) => {
    event.preventDefault();
    const enteredText = textInputRef.current!.value;
    console.log(enteredText);
  }

  return (
  <h1>EmployeeForm Page</h1>
  )
}

export default EmployeeFormPage;