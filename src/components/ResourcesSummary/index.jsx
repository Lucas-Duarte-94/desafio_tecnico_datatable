import { useEffect, useState } from "react";
import { useData } from "../../contexts/data";
import './styles.css'

export function ResourcesSummary() {
    const { data } = useData();
    const [totalSelected, setTotalSelected] = useState({});

    useEffect(() => {
        let serverNum = 0;
        let totMem = 0;
        let totCPU = 0;
        let totDisk = 0;
        data.forEach(element => {
            if(element.selected) {
                serverNum += 1;
                totMem += element.memoryProvisioned;
                totCPU += element.cpuProvisioned;
                totDisk += element.totalDiskGB;
            }
        })

        let selected = {
            selectedServers: serverNum,
            totalMemory: totMem,
            totalCPU: totCPU,
            totalDiskGB: totDisk
        }

        setTotalSelected(selected)

    }, [data])

    return (
        <div className="summary_container">
            <div className="title">
                <h1>Sumário dos recursos dos servidores</h1>
            </div>

        
            <table className="summary_table">
                <tbody>
                    <tr>
                        <th className="summary_head">Servidores Selecionados</th>
                        <td className="summary_info">
                            {totalSelected.selectedServers === 1 
                                ? 
                                    `${totalSelected.selectedServers} servidor selecionado` 
                                : 
                                    `${totalSelected.selectedServers} servidores selecionados`}
                        </td>
                    </tr>
                    <tr>
                        <th className="summary_head">Total de Memória</th>
                        <td className="summary_info">{totalSelected.totalMemory} GB</td>
                    </tr>
                    <tr>
                        <th className="summary_head">Total de CPUs</th>
                        <td className="summary_info">{totalSelected.totalCPU} vCPUs</td>
                    </tr>
                    <tr>
                        <th className="summary_head">Total de Discos</th>
                        <td className="summary_info">{totalSelected.totalDiskGB} GB</td>
                    </tr>
                </tbody>
            </table>
            
        </div>
    )
}