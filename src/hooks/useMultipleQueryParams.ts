import {useEffect, useState} from "react";
import {useRouter} from "next/router";

/** todo(@jeremyhabit): avoid to push url if same queries */
/** todo(@jeremyhabit): listen for query changing like previous url clicked on browser ? */

type UseQueryParamsArgs<T> = {
    qpName: string;
    qpValues: T[];
    qpDefaultValue: T;
}

const objectMap = (obj: any, fn: any) =>
    Object.fromEntries(
        Object.entries(obj).map(
            ([k, v], i) => [k, fn(v, k, i)]
        )
    )

export const useMultipleQueryParams = <T>(qps: UseQueryParamsArgs<T>[], isUserFriendlyUrl : boolean = true) => {
    const router = useRouter()

    /** todo(@jeremyhabit):  type the object according T */
    const [qpsValues, setQpsValues] = useState<{}>()

    useEffect(() =>{
        if(router.isReady){
            let newQpsValues = {};
            console.log("qps here @@", qps)
            qps.map(({qpName, qpValues, qpDefaultValue}) => {
                if(router?.query?.[qpName] && typeof router?.query?.[qpName] === 'string' && qpValues.includes(router?.query?.[qpName] as T)) {
                    console.log("query", router.query)
                    const toto = router.query?.[qpName] as T;
                    newQpsValues = {...newQpsValues, [qpName]: toto }
                } else {
                    console.log("loads by default")
                    console.log("current newQpsValues", newQpsValues)
                    newQpsValues = {...newQpsValues, [qpName] : qpDefaultValue}
                }
                }
            )
            console.log("final newQpsValues", newQpsValues)
            setQpsValues(newQpsValues)


        }
    }, [router.isReady])

    useEffect(() => {
        if(qpsValues) {
            console.log("push url yes", qpsValues)
            let url = router.pathname;
            let as = router.pathname;
            objectMap(qpsValues, (value: any, key: any, i: number) => {
                if(i === 0) {
                    url = `${url}?${key}=${value}`
                } else {
                    url = `${url}&${key}=${value}`
                }
                as = `${as}/${value}`;
            })
            if(isUserFriendlyUrl){
                router.push(url, as)
            }else {
                router.push(url)
            }

        } else console.log("push url non", qpsValues)
    }, [qpsValues])

    return { qpsValues, setQpsValues };
}
