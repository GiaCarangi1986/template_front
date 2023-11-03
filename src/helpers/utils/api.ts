export const responseProcessing = async (
    res: Response,
    serFunc?: (data: any) => any
) => {
    if (!res.ok) {
        return res.text().then(text => {
            throw new Error(text)
        })
    } else {
        
    }

    // let resData: Response = res;
    // try {
    //     resData = await res.json();
    // } finally {
    //     if (!res?.ok) {
    //         const err = res.te;
    //         throw new Error(err, {
    //             cause: {
    //                 status: res.status,
    //                 data: resData
    //             }
    //         });
    //     } else if (serFunc) {
    //         return {
    //             data: serFunc(resData, addedParams, addedParams1),
    //             status: res.status
    //         };
    //     }
    //     return {
    //         data: resData,
    //         status: res.status
    //     };
    // }
};