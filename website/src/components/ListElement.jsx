

export default function ListElement(props) {

    const {veriTuru, veriIcerigi} = props;

    return (

        <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">

            <th scope="row" class="py-4 px-6 text-xl font-medium text-gray-900 whitespace-nowrap dark:text-white">
                {veriTuru}
            </th>
            <td class="py-4 text-xl px-6">
                {veriIcerigi}
            </td>
            <td class="py-4 px-6 text-right">
             
                        <input id="checkbox-all" type="checkbox" class="w-4 h-4 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"/>
                        <label for="checkbox-all" class="sr-only">checkbox</label>
                    
                
            </td>
        </tr>
    )
}