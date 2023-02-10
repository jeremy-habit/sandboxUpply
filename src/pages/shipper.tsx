import {useQueryParams} from "@/hooks/useQueryParams";

const LOADS_TAB = 'loads' as const;
const ORDERS_TAB = 'orders' as const;
const tabs = [LOADS_TAB, ORDERS_TAB];

type Tab =  typeof tabs[number];

/** todo(@jeremyhabit): mutiple query params */
/** todo(@jeremyhabit): listen for query changing like previous url clicked on browser ? */
export default function Shipper() {

    const {qpValue: qpTab, setQpValue: setActiveQpTab} = useQueryParams<Tab>({qpName: 'tab', qpValues: tabs, qpDefaultValue: LOADS_TAB })

    const handleClick= (tab: Tab) => {
        setActiveQpTab(tab)
    }

    return (<div>
        <button onClick={() => handleClick(LOADS_TAB)}>
            {LOADS_TAB}
        </button>
        <button  onClick={() => handleClick(ORDERS_TAB)}>
            {ORDERS_TAB}
        </button>
        <div>
            activeTab: {qpTab}
        </div>
    </div>);
};
