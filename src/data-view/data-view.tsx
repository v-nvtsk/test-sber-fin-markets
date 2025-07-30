import type React from "react"
import type { DataItem, Title } from "../types"
import './data-view.scss'

interface Props{
  data:DataItem[]
  titles:Title[]
}

export const DataView: React.FC<Props> = ({ titles, data }) => {
  return (
    <div className="grid-view">
      <div className="grid-header">
        {titles.map((col) => (
          <div key={col.key} className="grid-cell header">{col.title}</div>
        ))}
      </div>

      {data.map((row) => (
        <div key={row.id} className="grid-row">
          {titles.map((col) => (
            <div key={col.key} className="grid-cell">
              <span className="cell-title">{col.title}</span>
              <span className="cell-value">{row[col.key]}</span>
            </div>
          ))}
        </div>
      ))}
    </div>
  );
};
