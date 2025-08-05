import type IBaseInput from "./IBaseInput";
import type { UseFormRegisterReturn } from "react-hook-form";

export default interface ISelectInput extends IBaseInput {
    name: string;
    id?: string;
    register?: UseFormRegisterReturn;
    required?: boolean;
}