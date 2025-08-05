import type { FC } from "react"
import type ISelectInput from "../../types/Form/ISelectInput"

const InputSelect: FC<ISelectInput> = ({ name, label, placeholder }) => {
    return (
        <div className="space-y-2">
            <label htmlFor={name}>{ label }</label>
            <select
                className="w-full px-3 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-colors"
                defaultValue={""}
            >
                <option disabled value="">{ placeholder }</option>
                <option value="robo">Robo</option>
                <option value="asalto">Asalto</option>
                <option value="vandalismo">Vandalismo</option>
                <option value="trafico-drogas">Tráfico de Drogas</option>
                <option value="iluminacion">Iluminación Deficiente</option>
                <option value="infraestructura">Infraestructura Dañada</option>
                <option value="actividad-sospechosa">Actividad Sospechosa</option>
                <option value="otro">Otro</option>
            </select>
        </div>
    )
}

export default InputSelect
