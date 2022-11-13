


export default function VerifyElement(props) {

    const {veriTuru, veriIcerigi, dogruMu} = props;

    return (

        <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">

            <th scope="row" class="py-4 px-6 text-xl font-medium text-gray-900 whitespace-nowrap dark:text-white">
                {veriTuru}
            </th>
            <td class="py-4 text-xl px-6">
                {veriIcerigi}
            </td>
            <td class="py-4 px-6">
             
                    {dogruMu ? "Doğru" : "Yanlış"}
                    
                
            </td>
        </tr>
    )
}