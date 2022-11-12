

export default function ListElement(props) {

    const {veriTuru, veriIcerigi} = props;

    return (

        <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
            <th scope="row" class="py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                {veriTuru}
            </th>
            <td class="py-4 px-6">
                {veriIcerigi}
            </td>
            <td class="py-4 px-6">
                Laptop
            </td>
            <td class="py-4 px-6">
                $2999
            </td>
            <td class="py-4 px-6 text-right">
                <a href="#" class="font-medium text-blue-600 dark:text-blue-500 hover:underline">Edit</a>
            </td>
        </tr>
    )
}