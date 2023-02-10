import {useMultipleQueryParams} from "@/hooks/useMultipleQueryParams";

const LOADS_TAB = 'loads' as const;
const ORDERS_TAB = 'orders' as const;
const tabs = [LOADS_TAB, ORDERS_TAB];

type Tab =  typeof tabs[number];


const TRANSPORT_PANEL = 'transport' as const;
const PRICE_PANEL = 'price' as const;
const panels = [TRANSPORT_PANEL, PRICE_PANEL];

type Panel =  typeof panels[number];

export default function Shipper() {
    const {qpsValues, setQpsValues} = useMultipleQueryParams<Tab | Panel>(
        [
        {qpName: 'tab', qpValues: tabs, qpDefaultValue: LOADS_TAB },
        {qpName: 'panel', qpValues: panels, qpDefaultValue: TRANSPORT_PANEL }
    ]
    )

    const handleClick= (qp: {k: 'tab' | 'panel', v:Tab | Panel}) => {
        /** todo(@jeremyhabit): avoid to ...qpsvalues, do it in the hook */
        setQpsValues({ ...qpsValues, [qp.k]: qp.v})
    }


    return (<div>
        <button onClick={() => handleClick({k: 'tab', v:LOADS_TAB})}>
            {LOADS_TAB}
        </button>
        <button  onClick={() => handleClick({k: 'tab', v:ORDERS_TAB})}>
            {ORDERS_TAB}
        </button>
        <button onClick={() => handleClick({k: 'panel', v:TRANSPORT_PANEL})}>
            {TRANSPORT_PANEL}
        </button>
        <button  onClick={() => handleClick({k: 'panel', v:PRICE_PANEL})}>
            {ORDERS_TAB}
        </button>
        <div>
            {/*@ts-ignore*/}
            activeTab: {qpsValues?.tab}
        </div>
        <div>
            {/*@ts-ignore*/}
            active panel = {qpsValues?.panel}
        </div>
    </div>);
};
