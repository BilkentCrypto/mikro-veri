
import { Input } from "@material-tailwind/react";

export default function ListElement(props) {

    const {veriTuru, veriIcerigi} = props;

    return (

        <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">

            <th scope="row" class="py-4 px-6 text-xl font-medium text-gray-900 whitespace-nowrap dark:text-white">
                {veriTuru}
            </th>
            <Input placeholder= {veriIcerigi} class="py-4 font-bold bg-transparent text-xl px-6">
               
            </Input>
            
        </tr>
    )
}