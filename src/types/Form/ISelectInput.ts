import type IBaseInput from "./IBaseInput";

export default interface ISelectInput extends IBaseInput {
    options: {value: string, text:string}[]
}