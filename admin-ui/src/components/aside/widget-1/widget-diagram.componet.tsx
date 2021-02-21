import React from "react"
import { PieChart } from 'react-minimal-pie-chart';

export const DiagramWidget = ({data}:{data:any}) =>{
    return(
        <div className="widget-diagram">
            {
                data.map((item:any)=>{
                    return(
                        <PieChart
                            key={item.componet}
                            data={item.data}
                            {...item.dataProps}
                        />
                    )
                })
            }
            
            {/* <div style={{width: 400,height: 400}}>
                <PieChart
                    data={dataMock}
                    //label={({ dataEntry }) => Math.round(dataEntry.percentage) + '%'}
                    labelStyle={defaultLabelStyle}
                />
            </div>

            <div style={{width: 80,height: 80}}>
                <PieChart
                        data={[{ title: "text",value: 1, key: 1, color: '#E38627' }]}
                        reveal={89}
                        lineWidth={60}
                        animate
                />
            </div> */}
        </div>
    )
}