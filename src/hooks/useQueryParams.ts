import {useEffect} from "react";
import {useRouter} from "next/router";


export const useQueryParams = () => {
    //const router = useRouter()

    /*useEffect(() =>{
        if(router.isReady){
            if(router.query?.tab && typeof router?.query?.tab === 'string' && tabs.includes(router.query?.tab)) {
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
    }, [activeTab])*/

    return null;
}
