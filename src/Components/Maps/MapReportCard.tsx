import type { FC } from "react"
import type { IIncident } from "../../types"
import { pinsList } from "../../assets/pins/pinsList"
import { Clock, MapPin, UserSquareIcon } from "lucide-react"
import formatDate from "../../helpers/date"

interface IMapReportCard {
    currentIncident: IIncident
}

const MapReportCard: FC<IMapReportCard> = ({ currentIncident }) => {
    const { title, direction, description, user_id, created_at, category_id } = currentIncident
    return (
        <div className="bg-white rounded-lg shadow-md p-4">
            <h4 className="text-xl font-bold">
                <img 
                    className="inline-block w-[45px] h-[45px] pr-2"
                    src={pinsList[category_id]}
                />
                {title}
            </h4>
            <p className="italic font-light text-sm">
                {<MapPin className="inline-block w-6 h-6 pr-2"/>}
                {direction}
            </p>
            <div className="text-slate-600">
                <div className="mt-3">
                    <p className="text-sm">Descripción del reporte:</p>
                    <p className="mt-1">{description}</p>
                </div>
                <p className="my-2">
                    <UserSquareIcon className="inline-block pr-2"/>
                    Reportado por <span className="text-sm italic font-semibold">{user_id ? 'Usuario' : 'Usuario Anonimo'}</span>
                </p>
                <p>
                    <Clock className="inline-block pr-2"/>
                    {formatDate(created_at)}
                </p>
            </div>
        </div>
    )
}

export default MapReportCard
