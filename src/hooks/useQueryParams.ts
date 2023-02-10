import {useEffect, useState} from "react";
import {useRouter} from "next/router";


type UseQueryParamsArgs<T> = {
    qpName: string;
    qpValues: T[];
    qpDefaultValue: T;
}

export const useQueryParams = <T>({qpName, qpValues, qpDefaultValue}: UseQueryParamsArgs<T>, isUserFriendlyUrl : boolean = true) => {
    const router = useRouter()

    const [qpValue, setQpValue] = useState<T>()

    useEffect(() =>{
        if(router.isReady){
            if(router?.query?.[qpName] && typeof router?.query?.[qpName] === 'string' && qpValues.includes(router?.query?.[qpName] as T)) {
                console.log("query", router.query)
                setQpValue(router.query?.[qpName] as T)
            } else {
                console.log("loads by default")
                setQpValue(qpDefaultValue)
            }
        }
    }, [router.isReady])

    useEffect(() => {
        if(qpValue) {
            console.log("yes", qpValue)
            if(isUserFriendlyUrl){
                router.push(`${router.pathname}?${qpName}=${qpValue}`, `${router.pathname}/${qpValue}`)
            }else {
                router.push(`${router.pathname}?${qpName}=${qpValue}`)
            }

        } else console.log("non", qpValue)
    }, [qpValue])

    return { qpValue, setQpValue };
}
