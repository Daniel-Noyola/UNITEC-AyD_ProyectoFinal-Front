import type { FC } from "react"
import type { IIncident } from "../../types/Incidents"
import { pinsList } from "../../assets/pins/pinsList"
import { Clock, MapPin } from "lucide-react"
import formatDate from "../../helpers/date"

interface IReportCard {
    incident: IIncident
}

const ReportCard: FC<IReportCard> = ({ incident }) => {
    const { title, category_id, description, created_at, direction } = incident

    return (
        <div className="bg-white rounded-lg shadow-md hover:shadow-lg transition-all duration-200 p-6 cursor-pointer transform hover:scale-[1.02]">
        <div className="flex items-start justify-between mb-4">
            <div className="flex items-center gap-3">
                <img
                    src={pinsList[category_id]}
                    className="w-6 h-7 flex-shrink-0"
                />
                <h4 className="text-lg font-bold">{title}</h4>
                </div>
            </div>

            <div className="flex items-center gap-2 text-sm text-slate-600 mb-3">
                <MapPin className="w-4 h-4" />
                {direction}
            </div>

            <p className="text-slate-700 mb-4 line-clamp-2">{description}</p>

            <div className="flex items-center justify-between">
                <div className="flex items-center gap-2 text-sm text-slate-600">
                <Clock className="w-4 h-4" />
                {formatDate(created_at)}
                </div>
            </div>

            {/* <div className="mt-3 text-xs text-blue-600 font-medium">Haz clic para ver detalles completos →</div> */}
    </div>
    )
}

export default ReportCard
