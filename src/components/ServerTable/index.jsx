import { useData } from "../../contexts/data";
import './styles.css'

export function ServerTable() {
    const { data, setData } = useData();

    function handleClick(e) {
        let item = data.map(element => {
            if (element.hostName === e) {
                if(element.selected) {
                    element.selected = false
                } else {
                    element.selected = true
                }
            }

            return element
        })

        setData(item)
    }

    return (
        <div className="table_content">
            <div className="title">
                <h1>Tabela de servidores</h1>
            </div>
            <table className="server_table">
                <tbody>
                    <tr>
                        <th className="select_class">Select</th>
                        <th className="other_values">Hostname</th>
                        <th className="other_values">Memória</th>
                        <th className="other_values">vCPU</th>
                        <th className="other_values">Disco</th>
                        <th className="other_values">IP</th>
                    </tr>
                    {data.map(obj => {
                        return (
                            <tr key={obj.id} >
                                <td className="select_class">
                                    <div className={obj.selected ? 'checked' : 'non-checked'} onClick={e => handleClick(obj.hostName)} ></div>
                                </td>
                                <td className="other_values"><span>{obj.hostName}</span></td>
                                <td className="other_values">{obj.memoryProvisioned}</td>
                                <td className="other_values">{obj.cpuProvisioned}</td>
                                <td className="other_values">{obj.totalDiskGB}</td>
                                <td className="other_values">{obj.ip}</td>
                            </tr>
                        )
                    })}

                </tbody>
            </table>
        </div>
    )
}