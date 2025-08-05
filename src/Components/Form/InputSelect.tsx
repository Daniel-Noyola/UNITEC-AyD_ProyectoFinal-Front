import type { FC, SelectHTMLAttributes } from "react";
import type ISelectInput from "../../types/Form/ISelectInput";

type InputSelectProps = ISelectInput & SelectHTMLAttributes<HTMLSelectElement>;

const InputSelect: FC<InputSelectProps> = ({ label, placeholder, name, id, register, required, ...rest }) => {
    return (
        <div className="space-y-2">
            <label htmlFor={id || name}>{label}</label>
            <select
                className="w-full px-3 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-colors"
                defaultValue={""}
                id={id || name}
                required={required}
                {...(register ? register : {})}
                {...rest}
            >
                <option disabled value="">{placeholder}</option>
                <option value="1">Asalto</option>
                <option value="2">Tráfico de Drogas</option>
                <option value="3">Infraestructura Dañada</option>
                <option value="4">Iluminación Deficiente</option>
                <option value="5">Robo</option>
                <option value="6">Actividad Sospechosa</option>
                <option value="7">Vandalismo</option>
                <option value="8">Otro</option>
            </select>
        </div>
    );
};

export default InputSelect;
