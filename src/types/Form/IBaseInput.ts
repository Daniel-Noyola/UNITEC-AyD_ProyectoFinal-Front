import type { FieldError } from "react-hook-form"

export default interface IBaseInput {
    label: string,
    placeholder? : string
    errors: FieldError | undefined
}