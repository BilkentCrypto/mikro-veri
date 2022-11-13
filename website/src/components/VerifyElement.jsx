


export default function VerifyElement(props) {

    const {veriTuru, veriIcerigi, dogruMu} = props;

    return (

        <tr className="bg-white rounded-lg border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">

            <th scope="row" className="py-4 px-6 text-xl font-medium text-gray-900 whitespace-nowrap dark:text-white">
                {veriTuru}
            </th>
            <td className="py-4 text-xl px-6">
                {veriIcerigi}
            </td>
            <td className={dogruMu ? "py-4 px-6 bg-[#3BD952] " : "py-4 px-6 bg-[#FA1001] "}>
             
                    {dogruMu ? "Doğru" : "Yanlış"}
                    
                
            </td>
        </tr>
    )
}