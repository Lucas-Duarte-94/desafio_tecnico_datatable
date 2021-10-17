import { useState, useContext, createContext, useEffect } from "react";
import api from '../services/api'

export const DataContext = createContext();

export function DataContextProvider({children}) {
    const [data, setData] = useState([]);

    useEffect(() => {
        async function getData () {
            let dados = await api.get('/servers')

            console.log(dados)

            let objectMapped = dados.data.map(obj => {
                return {
                    id: obj.id_vm,
                    selected: false,
                    hostName: obj.hostname,
                    memoryProvisioned: obj.configuracao.memoryProvisioned,
                    cpuProvisioned: obj.configuracao.cpuProvisioned,
                    totalDiskGB: obj.configuracao.totalDiskGB,
                    ip: obj.ip
                }
            })
            setData(objectMapped);

            return dados.data
        }
        getData()

    }, [])

    return (
        <DataContext.Provider value={{data, setData}} >
            {children}
        </DataContext.Provider>
    )
}

export function useData() {
    return useContext(DataContext);
}