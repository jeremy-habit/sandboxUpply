import {useRouter} from "next/router";
import {useEffect, useState} from "react";

const LOADS_TAB = 'loads' as const;
const ORDERS_TAB = 'orders' as const;
const tabs = [LOADS_TAB, ORDERS_TAB];

type Tab =  typeof tabs[number];

export default function Shipper() {

    const [activeTab, setActiveTab] = useState<Tab>()
    const router = useRouter()

    useEffect(() => {
        if(router.isReady){
            if(router.query?.tab && typeof router?.query?.tab === 'string' && tabs.includes(router.query?.tab as Tab)) {
                console.log("query", router.query)
                setActiveTab(router?.query.tab as Tab)
            } else {
                console.log("loads by default")
                setActiveTab(LOADS_TAB)
            }
        }
    }, [router.isReady])

    useEffect(() => {
        if(activeTab) {
            console.log("yes", activeTab)
            router.push(`${router.pathname}/${activeTab}`)
        } else console.log("non", activeTab)
        }, [activeTab])


    const handleClick= (tab: Tab) => {
        //router.push({pathname: router.pathname, query: {tab}})
        //router.push(`${router.pathname}/${tab}`)
        setActiveTab(tab)
    }
    return (<div>
        <button onClick={() => handleClick(LOADS_TAB)}>
            {LOADS_TAB}
        </button>
        <button  onClick={() => handleClick(ORDERS_TAB)}>
            {ORDERS_TAB}
        </button>
        <div>
            activeTab: {activeTab}
        </div>
    </div>);
};
