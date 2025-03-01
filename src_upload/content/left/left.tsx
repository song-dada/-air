import Info from './info/info';
import LegendRow from './legend/legendRow';
import Etc from './etc/etc';
import Weekgraph from './weekgraph/weekgraph';

// dageom
function Left( props: any ) {return(
        <>
            <div className="leftArea">
                <div className="circlegraph">
                    <Info getInfo={props.getData} getRow={props.getOneRow} />
                    <LegendRow/>
                </div>
                <Etc onStation={props.onStation }
                    getOneRow={props.getOneRow} 
                    getYesterDayRow={props.getYesterDay}
                    getPrevWeekRow={ props.getPrevWeekRow }  
                    getPrevMonthRow={ props.getPrevMonthRow }/>
                <div className="weekgraph">
                    <h3>주간 미세먼지 데이터</h3>
                    <Weekgraph getPrevWeekDatas={ props.getPrevWeekDatas }/>
                </div>
            </div>
        </>
    )
}

export default Left;